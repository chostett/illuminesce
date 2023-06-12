// Navigation HTML. Can be changed and will reflect on all pages.
let headerHTML = `<div class='container'>
      <h1><a href='index_jp.html'>illuminesce.</a></h1>
      <ul>
        <li><a href='blog/index.html'>blog</a></li>
        <li><a href='contact_jp.html'>contact</a>&nbsp;|&nbsp;</li>
        <li><a href='index.html'>EN</a></li>
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
