window.onload = () => {
  for (let i = 0; i < tags.length; i++) {
              // when a tag button is clicked...
              tags[i].addEventListener('click', event => {
                  // identify which classes belong to button
                  const buttonTag = tags[i].getAttribute('class');
                  // loop through post tags
                  for (let i = 0; i < posts.length; i++) {
                      // get post tags
                      const postTag = tags[i].getAttribute('class');
                      // if the "all" button is clicked, display everything
                      if (postTag === buttonTag) {
                          // display posts
                          posts[i].style.display = "block"

                      }
                      // if the post tag does not match the button tag...
                      else if (postTag != buttonTag) {
                          // hide the other posts
                          posts[i].style.display = "none"
                      }

                  }
}
