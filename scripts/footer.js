// Navigation HTML. Can be changed and will reflect on all pages.
let footerHTML = `<div class='col'>
      <h3>socials.</h3>
      <p><a href="https://gamedev.lgbt/@illuminesce" target="_blank">mastodon</a></p>
      <p><a href="https://buttondown.com/studioterranova" target="_blank">newsletter</p>
      <p><a href="https://illuminesce.net/rss.xml">rss feed</a></p>
      <p><a href="https://illuminesce.itch.io/" target="_blank">itch.io</a></p>
    </div>
    <div class='col'>
      <h3>see my work.</h3>
      <p><a href="https://illuminesce.notion.site/Portfolio-CJ-Hostetter-57b382dd79894960ac6beb5d92318d35" target="_blank">portfolio</a></p>
      <p><a href="https://www.linkedin.com/in/chostett" target="_blank">linkedin</a></p>
      <p><a href="https://glassart.neocities.org" target="_blank">glassblowing</a></p>
      <p><a href="interface-drama.html">interface drama master list</a></p>
    </div>
    <div class='col'>
      <h3>link to me.</h3>
      <p><img src="https://illuminesce.neocities.org/images/links/illuminesce_88x31.gif" alt="A 88x31 banner to link to my site. Text says, illuminesce. Includes a jumping dinosaur."></p>
    <div class='col'>
      <h3>like my work?</h3>
      <p><a href='https://ko-fi.com/N4N81K65A' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></p>
    </div>`;

let footer = document.getElementById("footer");

// Checks to see if #footer is present.
if (footer) {
  // Inject navigation links into footer.
  footer.innerHTML = footerHTML;
}
