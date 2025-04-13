/**
 * @file Template for the drafts page.
 */

/**
 * Frontmatter and markup
 * @see {@link https://www.11ty.dev/docs/data-frontmatter/ 11ty docs}
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method 11ty docs}
 */
export const data = {
	title: "Drafts",
	layout: "layouts/home.njk",
	tags: "page",
	eleventyExcludeFromCollections: true
};
export const render = function (data) {
	let posts = data.collections.drafts;
	return `
		<h2>Drafts</h2>
		<ul>
		${posts
			.map((post) => `<li><a href="${post.url}">${post.data.title}</a></li>`)
			.join("")}
		</ul>`;
}