// Tag filtering function. Takes a selected tag and shows all blog posts with that tag (done as div classes)
window.onload = () => {
  const tags = document.querySelectorAll('#tags > button');
  const posts = document.querySelectorAll('.cat-block > div');
  const alpha = document.querySelectorAll('.alpha');
  const displayAll = document.getElementById('all');

  if (displayAll) {
    displayAll.addEventListener('click', event => {
      for (let i = 0; i < posts.length; i++) {
        posts[i].style.display = "block";
      }
      alpha.forEach(letter => {
        letter.style.display = "block";
      })
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

      // show/hide alphabetical categories
      // for each H2 tag with a letter [A,B,C,...]
      alpha.forEach(letter => {
        // Check the posts that follow this heading
        // to see if any are still visible
        let hasPosts = false;
        let post = letter.nextElementSibling;
        while (post != null && post.tagName != "H2") {
          // if we find a visible post, stop
          if(post.style.display == "block") {
            hasPosts = true;
            break;
          }
          // try the next post in the list
          post = post.nextElementSibling;
        }
        if (hasPosts) {
          letter.style.display = "block";
        }
        else {
          letter.style.display = "none";
        }
      })
    })
  }
}
