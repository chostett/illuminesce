// Navigation HTML. Can be changed and will reflect on all pages.
let headerHTML = `<div class='container'>
      <h1><a href='index.html'>illuminesce.</a></h1>
      <ul>
        <li><a href='blog/index.html'>blog</a></li>
        <li><a href='work.html'>work</a></li>
        <li><a href='talks.html'>talks</a></li>
        <li><a href='contact.html'>contact</a>&nbsp;|&nbsp;</li>
        <li><a href='index_jp.html'>日本語</a></li>
      </ul>
    </div>`;

// Tag filtering function. Takes a selected tag and shows all blog posts with that tag (done as div classes)
window.onload = () => {
  const tags = document.querySelectorAll('#tags > button');
  const posts = document.querySelectorAll('.cat-block > div');
  const displayAll = document.getElementById('all');

  if (displayAll) {
    displayAll.addEventListener('click', event => {
      for (let i = 0; i < posts.length; i++) {
        posts[i].style.display = "block";
      }
    })
  }

  for (let i = 0; i < tags.length; i++) {
    // when a tag button is clicked...
    tags[i].addEventListener('click', event => {
      // identify which classes belong to button
      const buttonTag = tags[i].getAttribute('class');
      // loop through post tags
      for (let i = 0; i < posts.length; i++) {
        // get post tags
        // if the "all" button is clicked, display everything
        if (posts[i].classList.contains(buttonTag)) {
          // display posts
          posts[i].style.display = "block"

        }
        // if the post tag does not match the button tag...
        else {
          // hide the other posts
          posts[i].style.display = "none"
        }
      }

    })
  }

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
}
