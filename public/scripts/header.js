// Navigation HTML. Can be changed and will reflect on all pages.
let headerHTML = `<div class='container'>
      <h1><a href='index.html'>illuminesce.net</a></h1>
      <ul>
        <li><a href='blog/index.html'>blog</a></li>
        <li><a href='resources.html'>resources</a></li>
        <li><a href='talks.html'>talks</a></li>
        <li><a href='links.html'>links</a></li>
        <li><a href='rss.xml'>rss</a></li>
        <li><a href='contact.html'>contact</a></li>
      </ul>
    </div>`;

let header = document.getElementById("header");

// Checks to see if #header is present.
if (header) {
  // Inject navigation links into header.
  header.innerHTML = headerHTML;
  // Takes our pathname, gets the last part of the pathname (url) and applies .selected class
  let url = window.location.pathname.split('/');
  let selectedLink = header.querySelector(`a[href$="${url[url.length - 1]}"]`);
  selectedLink.classList.add('selected');
}
