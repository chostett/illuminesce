// Navigation HTML. Can be changed and will reflect on all pages.
let footerHTML = `<div class='col'>
      <h3>socials.</h3>
      <p><a href="https://www.twitter.com/chostett/" target="_blank">design twitter</a></p>
      <p><a href="https://www.twitter.com/its_illuminesce/" target="_blank">games twitter</a></p>
      <p><a href="https://instagram.com/illuminesce" target="_blank">instagram</a></p>
      <p><a href="https://illuminesce.cohost.org/" target="_blank">cohost</a></p>
      <p><a href="https://www.tumblr.com/illuminesce" target="_blank">tumblr</a></p>
    </div>
    <div class='col'>
      <h3>see my work.</h3>
      <p><a href="https://illuminesce.itch.io/" target="_blank">itch.io</a></p>
      <p><a href="https://medium.com/@chostett" target="_blank">medium</a></p>
      <p><a href="https://www.linkedin.com/in/chostett" target="_blank">linkedin</a></p>
    </div>`;

let footer = document.getElementById("footer");

// Checks to see if #footer is present.
if (footer) {
  // Inject navigation links into footer.
  footer.innerHTML = footerHTML;
}
