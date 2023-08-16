// Navigation HTML. Can be changed and will reflect on all pages.
let headerHTML = `<div class='container'>
      <h1><a href='../index.html'>illuminesce.</a></h1>
      <ul>
        <li><a href='../blog/index.html'>blog</a></li>
        <li><a href='../games.html'>games</a></li>
        <li class="selected"><a href='../talks.html'>talks</a></li>
        <li><a href='../contact.html'>contact</a></li>
        <li><a href='../rss.xml'>rss</a>&nbsp;|&nbsp;</li>
        <li><a href='../index_jp.html'>日本語</a></li>
      </ul>
    </div>`;

let header = document.getElementById("header");

// Checks to see if #header is present.
if (header) {
  // Inject navigation links into header.
  header.innerHTML = headerHTML;
}
