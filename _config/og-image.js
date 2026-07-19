import { promises as fsp } from "node:fs";
import fs from "node:fs";
import path from "node:path";
import Image from "@11ty/eleventy-img";
import satori from "satori";
import { html as satoriHtml } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

// ---------------------------------------------------------------------------
// Auto-generated blog post `og:image` + description previews.
//
// For every blog post (layouts/post.njk) this:
//   1. Looks for the first <img> in the post content and uses an optimized,
//      full-size rendition of it as the `og:image`.
//   2. If the post has no images at all, renders a 1200x630 card with the
//      site avatar (the green dino) and the post title, and uses that instead.
//   3. If a post has no manual `description` front matter, auto-generates a
//      short text preview from the post content to use as the meta/og/twitter
//      description.
//
// Results are stored in `postMetaStore`, keyed by `page.url`, and read back
// out in _includes/layouts/base.njk via the `postMetaFor` filter. This works
// because layouts/post.njk (which has access to the raw, un-transformed post
// content) always renders *before* layouts/base.njk in Eleventy's layout
// chain, so the store is populated in time for base.njk's <head> to use it.
// ---------------------------------------------------------------------------

const SITE_URL = "https://illuminesce.net";
const AVATAR_PATH = path.join(process.cwd(), "public/images/dino_150x150.png");
const FONT_DIR = path.join(process.cwd(), "_includes/font-file/montserrat");

const postMetaStore = new Map();

let avatarDataUriCache;
function getAvatarDataUri() {
	if (!avatarDataUriCache) {
		const buffer = fs.readFileSync(AVATAR_PATH);
		avatarDataUriCache = `data:image/png;base64,${buffer.toString("base64")}`;
	}
	return avatarDataUriCache;
}

let fontsCache;
function getFonts() {
	if (!fontsCache) {
		fontsCache = [
			{
				name: "Montserrat",
				data: fs.readFileSync(path.join(FONT_DIR, "montserrat-latin-400-normal.woff")),
				weight: 400,
				style: "normal",
			},
			{
				name: "Montserrat",
				data: fs.readFileSync(path.join(FONT_DIR, "montserrat-latin-700-normal.woff")),
				weight: 700,
				style: "normal",
			},
		];
	}
	return fontsCache;
}

function escapeHtml(str) {
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

function stripHtmlToText(html) {
	return html
		.replace(/<[^>]*>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/\s+/g, " ")
		.trim();
}

function makeExcerpt(html, maxLength = 155) {
	const text = stripHtmlToText(html);
	if (!text) return "";
	if (text.length <= maxLength) return text;

	const truncated = text.slice(0, maxLength);
	const lastSpace = truncated.lastIndexOf(" ");
	const cut = lastSpace > 40 ? truncated.slice(0, lastSpace) : truncated;
	return `${cut.trim()}…`;
}

function absoluteUrl(urlPath) {
	return new URL(urlPath, SITE_URL).toString();
}

async function generateFallbackImage(title) {
	const markup = satoriHtml(`
		<div style="width:1200px;height:630px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Montserrat;background:linear-gradient(145deg, rgba(180,208,186,1), rgba(190,205,145,1));padding:80px;">
			<img src="${getAvatarDataUri()}" width="180" height="180" style="border-radius:9999px;margin-bottom:48px;" />
			<div style="display:flex;color:rgba(60,95,68,1);font-size:64px;font-weight:700;text-align:center;line-height:1.3;max-width:1000px;">${escapeHtml(title)}</div>
			<div style="display:flex;margin-top:48px;font-size:30px;font-weight:400;color:rgba(84,130,95,1);">illuminesce.net</div>
		</div>
	`);

	const svg = await satori(markup, {
		width: 1200,
		height: 630,
		fonts: getFonts(),
	});

	const pngBuffer = new Resvg(svg, { font: { loadSystemFonts: false } }).render().asPng();
	return sharp(pngBuffer).png().toBuffer();
}

export default function (eleventyConfig) {
	let outputDirRoot = "_site";

	eleventyConfig.on("eleventy.directories", (dirs) => {
		outputDirRoot = dirs.output || "_site";
	});

	eleventyConfig.addAsyncShortcode(
		"computePostMeta",
		async function (content, title, description) {
			const page = this.page;
			if (!page || !page.url) {
				return "";
			}

			const excerpt = description && description.trim() ? "" : makeExcerpt(content);

			const imgMatch = content.match(/<img[^>]*\ssrc=["']([^"']+)["']/i);
			let imageUrl, imageWidth, imageHeight;

			try {
				if (imgMatch && imgMatch[1].startsWith("data:")) {
					// Skip inline data-uri images, nothing useful to link to.
				} else if (imgMatch && /^https?:\/\//i.test(imgMatch[1])) {
					// Already an absolute/remote URL, use as-is.
					imageUrl = imgMatch[1];
				} else if (imgMatch) {
					const inputDir = path.dirname(page.inputPath);
					const absoluteSrcPath = path.join(inputDir, imgMatch[1]);

					const stats = await Image(absoluteSrcPath, {
						formats: ["jpeg"],
						widths: ["auto"],
						outputDir: path.join(outputDirRoot, page.url),
						urlPath: page.url,
						filenameFormat: (id, src, width, format) => `og-image.${format}`,
					});

					const jpeg = stats.jpeg && stats.jpeg[0];
					if (jpeg) {
						imageUrl = absoluteUrl(jpeg.url);
						imageWidth = jpeg.width;
						imageHeight = jpeg.height;
					}
				}
			} catch (e) {
				eleventyConfig.logger.warn(`[og-image] Couldn't process content image for ${page.url}: ${e.message}`);
			}

			if (!imageUrl) {
				try {
					const buffer = await generateFallbackImage(title || page.fileSlug || "illuminesce.net");
					const outputDir = path.join(outputDirRoot, page.url);
					await fsp.mkdir(outputDir, { recursive: true });
					await fsp.writeFile(path.join(outputDir, "og-image.png"), buffer);

					imageUrl = absoluteUrl(path.posix.join(page.url, "og-image.png"));
					imageWidth = 1200;
					imageHeight = 630;
				} catch (e) {
					eleventyConfig.logger.warn(`[og-image] Couldn't generate fallback image for ${page.url}: ${e.message}`);
				}
			}

			postMetaStore.set(page.url, { imageUrl, imageWidth, imageHeight, excerpt });

			return "";
		},
	);

	// Used in _includes/layouts/base.njk to read back what computePostMeta
	// (called earlier, from layouts/post.njk) figured out for this page.
	eleventyConfig.addFilter("postMetaFor", (url) => postMetaStore.get(url) || {});
}
