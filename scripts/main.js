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
}
