/*Welcome to the script file! Your 1st time here, you should update
  the basic info section to include your name and website/social 
  media link (if desired). Most of the time, you will just come
  here to update the posts array. However, you can also edit or
  add your own scripts to do whatever you like!*/

//TABLE OF CONTENTS
  // 1. Basic Info
  // 2. Posts Array
  // 3. Creating HTML Sections to Be Inserted (Header, Footer, etc)
  // 4. Inserting the Sections Into our Actual HTML Pages

//-----------------------------

//==[ 1. BASIC INFO ]==

let blogName = "CJ's Blog";
let authorName = "CJ";
let authorLink = "https://illuminesce.neocities.org"; // Enter your website, social media, etc. Some way for people to tell you they like your blog! (Leaving it empty is okay too)

//-----------------------------

//==[ 2. POSTS ARRAY ]==

/*Each time you make a new post, add the filepath here at the top of postsArray.
  This will cause all the right links to appear and work.
  NOTE: It's important to follow this exact naming convention, because the scripts
  below are expecting it ( 'posts/YYYY-MM-DD-Title-of-Your-Post.html', ). You can
  alter the scripts if you want to use a different naming convention*/
/*UPDATE: as of version 1.3, you may omit the date if you would like. But if you
  use a date it must still follow that format.*/

/*3LEGGED'S TAGGING SYSTEM:
To make use of tags in your blog posts, add them to the end of the post array - ensuring that you leave a "", between tags and the post link for special character encoding (see examples below). After this point, tags can be in any order, are case-sensitive, and shouldn't contain spaces or special characters.
*/

let postsArray = [
//[ "posts/2020-11-10-Special-Characters-Example.html", encodeURI( 'Spéci@l "Character\'s" Examp|e' ), "tags"]
["posts/2024-11-15-Alethicorp.html", encodeURI( 'Surely, you have thought about this?' ), "interface-drama"],
["posts/2024-11-09-A-Hopeful-Future.html", encodeURI( 'What part does tech play in a hopeful future?' ), "tech-and-web"],
["posts/2024-11-04-Cohost-Summer-Mixtape.html", encodeURI( 'The cohost summer mixtape of 2023' ), "personal"],
["posts/2024-10-31-Two-Halloween-Games.html", encodeURI( 'Trick or Treat: Two free Halloween games!' ), "games"],
["posts/2024-09-19-Goodbye-Cohost.html", encodeURI( 'goodbye, cohost.' ), "personal"],
["posts/2024-08-27-Design-Matters.html", encodeURI( 'Design Matters Tokyo 2024: Sketchnote Edition' ), "design"],
["posts/2024-08-26-Yesterweb-Retrospective.html", encodeURI( 'A long-due retrospective of my time in the Yesterweb' ), "tech-and-web"],
["posts/2024-05-19-Trans-Tourist-Guide-to-Japan.html", encodeURI( 'The Trans Tourist\'s Guide to Japan' ), "lgbtq"],
["posts/2024-05-11-Interface-Drama-Streaming-Vol3.html", encodeURI( 'Abstracting away horror with UNCANNY interface dramas' ), "interface-drama"],
["posts/2024-04-22-Interface-Drama-Streaming-Vol2.html", encodeURI( 'Interface as Longing' ), "interface-drama"],
["posts/2024-04-18-Interface-Drama-Streaming-Vol1.html", encodeURI( 'Exploring Intrigue with Interface Dramas' ), "interface-drama"],
["posts/2024-03-16-Sarau-Tokyo-and-Glass-Art.html", encodeURI( 'My first glass art show at SARAU TOKYO (EN/JP)' ), "glassblowing"],
["posts/2024-03-03-Weekly-Link-Roundup.html", encodeURI( 'Weekly Link Roundup: March 3rd, 2024' ), "links"],
["posts/2024-02-11-404-Community-Days-and-Global-Game-Jam.html", encodeURI( '404 Community Days & Global Game Jam' ), "global-game-jam"],
["posts/2024-02-07-Global-Game-Jam-2024-After-Report.html", encodeURI( 'Global Game Jam 2024: After Report (EN)' ), "global-game-jam", "popular"],
["posts/2024-02-07-GGJ24-Report-JP.html", encodeURI( 'グローバルゲームジャム2024 アフターレポート' ), "global-game-jam"],
["posts/2024-01-21-Interface-Drama-Master-List-Update.html", encodeURI( '[Update] Interface Drama Master List' ), "interface-drama"],
["posts/2024-01-15-The-end-of-IWAKAN-Magazine.html", encodeURI( 'The end of IWAKAN Magazine' ), "lgbtq"],
["posts/2023-10-27-I-have-to-talk-to-you-about-normalfantasies.html", encodeURI( 'I HAVE to talk to you about normal_fantasies.exe' ), "interface-drama", "lgbtq"],
["posts/2023-10-26-New-Interface-Drama-Tachygram.html", encodeURI( 'New Interface Drama: Tachygram' ), "interface-drama"],
["posts/2023-09-30-Visiting-the-First-Boys-Love-Exhibition-in-Japan.html", encodeURI( 'Visiting the first boy\'s love exhibition in Japan: Part Two' ), "fandom", "lgbtq"],
["posts/2023-09-02-Visiting-the-First-Boys-Love-Exhibition-in-Japan.html", encodeURI( 'Visiting the first boy\'s love exhibition in Japan: Part One' ), "fandom", "lgbtq"],
["posts/2023-08-15-Interface-Drama-Master-List.html", encodeURI( 'The Interface Drama Master List: What is it?' ), "interface-drama", "popular"],
["posts/2023-08-02-unexpectedly-hopeful.html", encodeURI( 'Unexpectedly hopeful' ), "personal"],
["posts/2023-07-03-Lets-talk-about-Shadow-Hearts.html", encodeURI( 'Let\'s talk about Shadow Hearts' ), "fandom"], 
["posts/2023-07-01-Finding-a-Home-on-the-Internet.html", encodeURI( 'Finding a Home on the Internet' ), "tech-and-web", "popular"],
["posts/2023-06-10-the-new-normal.html", encodeURI( 'The new normal' ), "personal"],
["posts/2023-03-10-The-internet-is-flat.html", encodeURI( 'The Internet is flat' ), "tech-and-web"],
["posts/2023-01-23-I-left-work-to-take-a-sabbatical.html", encodeURI( 'I left work to take a sabbatical.' ), "personal"],
["posts/2022-11-24-I-Am-Kimura.html", encodeURI( 'I am Kimura' ), "personal"],
["posts/2022-09-14-A-Birthday-Letter-2022.html", encodeURI( 'A Birthday Letter, 2022' ), "personal"],
["posts/2021-09-14-A-Birthday-Letter-2021.html", encodeURI( 'A Birthday Letter, 2021' ), "personal"],
["posts/2020-09-14-A-Birthday-Letter-2020.html", encodeURI( 'A Birthday Letter, 2020' ), "personal"],
["posts/2018-06-25-Inclusion-Is-A-Verb.html", encodeURI( 'Inclusion is a Verb' ), "design", "popular"],
["posts/2014-04-02-An-Open-World-is-Not-A-Feature.html", encodeURI( 'An Open World is Not a Feature.' ), "design"]];

//-----------------------------

//==[ 3. CREATING HTML SECTIONS TO BE INSERTED ]==

let url = window.location.pathname;

//The date format to look for is 4 digits, hyphen, 2 digits, hyphen, 2 digits, hyphen.
const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;

//Check if you are in posts (if so, the links will have to go up a directory)
let relativePath = ".";
if ( url.includes("posts/") ) {
  relativePath = "..";
}
if (url.includes("tags/") ) {
  relativePath = "..";
}

//Write the Header HTML, a series of list items containing links.
let headerHTML = '<ul> <li><a href="' + relativePath + '/index.html">home</a></li>' + '<li><a href="' + relativePath + '/tags/popular.html">popular</a></li>' + '<li><a href="https://illuminesce.net/rss.xml">rss</a></li>' + '<li><a href="' + relativePath + '/archive.html">archive</a></li>' + '<li><a href="https://illuminesce.net/contact.html">contact</a></li>' + '<li>|</li>' + '<li><a href="https://illuminesce.net">illuminesce.net</a></li></ul>' + '<hr>';

//Write the Footer HTML, which has information about the blog.
let footerHTML = "<p><em>This blog is built with <a href='https://zonelets.net/'>zonelets</a>, and hosted by <a href='https://neocities.org/'>neocities.</a></em></p>";

//To do the following stuff, we want to know where we are in the posts array (if we're currently on a post page).
let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf('posts/'));
//Depending on the web server settings (Or something?), the browser url may or may not have ".html" at the end. If not, we must add it back in to match the posts array. (12-19-2022 fix)
if ( ! currentFilename.endsWith(".html") ) {
    currentFilename += ".html";
}
let i;
for (i = 0; i < postsArray.length; i++) {
  if ( postsArray[i][0] === currentFilename ) {
    currentIndex = i;
  }
}

//Convert the post url to readable post name. E.g. changes "2020-10-10-My-First-Post.html" to "My First Post"
//Or pass along the "special characters" version of the title if one exists
function formatPostTitle(i) {
  // Check if there is an alternate post title
  if ( postsArray[i].length > 1 ) {
    //Remember how we had to use encodeURI for special characters up above? Now we use decodeURI to get them back.
    return decodeURI(postsArray[i][1]);
  } else { 
  //If there is no alternate post title, check if the post uses the date format or not, and return the proper title
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  return postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      return postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
}

//Get the current post title and date (if we are on a post page)
let currentPostTitle = "";
let niceDate = "";
let postTagsHTML = "<em><strong>Tagged as </em></strong>";
if ( currentIndex > -1 ) {
  currentPostTitle = formatPostTitle( currentIndex );
  //Generate the "nice to read" version of date
  if (  postDateFormat.test ( postsArray[currentIndex][0].slice( 6,17 ) ) ) {
    let monthSlice = postsArray[currentIndex][0].slice( 11,13 );
    let month = "";
    if ( monthSlice === "01") { month = "Jan";}
    else if ( monthSlice === "02") { month = "Feb";}
    else if ( monthSlice === "03") { month = "Mar";}
    else if ( monthSlice === "04") { month = "Apr";}
    else if ( monthSlice === "05") { month = "May";}
    else if ( monthSlice === "06") { month = "Jun";}
    else if ( monthSlice === "07") { month = "Jul";}
    else if ( monthSlice === "08") { month = "Aug";}
    else if ( monthSlice === "09") { month = "Sep";}
    else if ( monthSlice === "10") { month = "Oct";}
    else if ( monthSlice === "11") { month = "Nov";}
    else if ( monthSlice === "12") { month = "Dec";}
	niceDate = postsArray[currentIndex][0].slice( 14,16 ) + " " + month + ", " + postsArray[currentIndex][0].slice( 6,10 );
  }

  //create html list of post tags
	console.log("About to create tag list");
	for (i=2;i<postsArray[currentIndex].length;i++) {
	  console.log(postsArray[currentIndex][i]);
		postTagsHTML += '<a href="' + relativePath + '/tags/' + postsArray[currentIndex][i] + '.html"><em><strong>' + postsArray[currentIndex][i] + '</em></strong></a>, ';
	}
	//cut final comma off list
	postTagsHTML = postTagsHTML.slice(0,-2);
}

//formatPostLink generates the Post List HTML, which will be shown on the "Archive" page.
//It is also used on the index page, "Recents," and pulled from taggedPostArray.

function formatPostLink(post) {
  let postTitle_i = "";
  if ( post.length > 1 ) {
    postTitle_i = decodeURI(post[1]);
  } else {
	if (  postDateFormat.test ( post[0].slice( 6,17 ) ) ) {
	  postTitle_i = post[0].slice(17,-5).replace(/-/g," ");
    } else {
      postTitle_i = post[0].slice(6,-5).replace(/-/g," ");
    }
  }
  if (  postDateFormat.test ( post[0].slice( 6,17 ) ) ) {
    return '<li><a href="' + relativePath + '/'+ post[0] +'">' + post[0].slice(6,16) + " \u00BB " + postTitle_i + '</a></li>';
  } else {
    return '<li><a href="' + relativePath + '/'+ post[0] +'">' + postTitle_i + '</a></li>';
  }
}

// for each of the new posts in the postsArray make a new link and add it to the HTML.
let postListHTML = "<ul>";
postsArray.forEach(function(post){
  postListHTML += formatPostLink(post);
});
postListHTML += "</ul>";

//Generate the Recent Post List HTML, which can be shown on the home page (or wherever you want!)
let recentPostsCutoff = 5; //Hey YOU! Change this number to set how many recent posts to show before cutting it off with a "more posts" link.
let recentPostListHTML = "<h3>Recent Posts</h3><hr><ul>";
let numberOfRecentPosts = Math.min( recentPostsCutoff, postsArray.length );
for ( let i = 0; i < numberOfRecentPosts; i++ ) {
  recentPostListHTML += formatPostLink(postsArray[i]);
}
/*If you've written more posts than can fit in the Recent Posts List,
  then we'll add a link to the archive so readers can find the rest of
  your wonderful posts and be filled with knowledge.*/
if ( postsArray.length > recentPostsCutoff ) {
  recentPostListHTML += '<li class="moreposts"><a href=' + relativePath + '/archive.html>\u00BB more posts</a></li></ul>';
} else {
  recentPostListHTML += "</ul>";
}

//Generate the Next and Previous Post Links HTML
let nextprevHTML = "";
let nextlink = "";
let prevlink = "";

/*If you're on the newest blog post, there's no point to
 a "Next Post" link, right? And vice versa with the oldest 
 post! That's what the following code handles.*/
if ( postsArray.length < 2 ) {
  nextprevHTML = '<a href="' + relativePath + '/index.html">home</a>';
} else if ( currentIndex === 0 ) {
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/index.html">home</a> | <a href="'+ relativePath + '/' + prevlink +'">previous post \u00BB</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  nextprevHTML = '<a href="' + relativePath + '/' + nextlink +'">\u00AB next post</a> | <a href="' + relativePath + '/index.html">home</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/'+ nextlink +'">\u00AB next post</a> | <a href="' + relativePath + '/index.html">home</a> | <a href="' + relativePath + '/'+ prevlink +'">previous post \u00BB</a>';
}

//new function to generate a list of posts with a specific tag (visible on a "tagged" page, for instance, "glassblowing")
let taggedPostArray = [];
let tag = "";
function getTaggedPosts (pageTitle) {
  tag = pageTitle.toLowerCase();
	for (let i = 0; i < postsArray.length; i++) {
		for (let x = 2; x < postsArray[i].length; x++) {
			if (postsArray[i][x] == tag) {
				taggedPostArray.push(postsArray[i]);
			}
		}
  }
	let taggedPostListHTML = '<ul class="no-bullets">';
	for ( let i = 0; i < taggedPostArray.length; i++ ) {
  		taggedPostListHTML += formatPostLink(taggedPostArray[i]);
	}
	taggedPostListHTML += '</ul>';
	return taggedPostListHTML;
}

//new function to get list of all used tags. We sort the tags in alphabetical order with the toSorted function.
function getTagList () {
	let tagArray = [];
	for (i=0; i < postsArray.length; i++) {
		for (x=2; x < postsArray[i].length; x++) {
		  	if (tagArray.length == 0) {
		    	tagArray.push(postsArray[i][x]);
		  	}
			else if (tagArray.includes(postsArray[i][x]) == false) {
				tagArray.push(postsArray[i][x]);
			}
		}
	}
	return tagArray.toSorted();
}

//new function to turn tag array into list of links
function formatTagList (tagArray) {
	let tagListHTML = '<h3>Tags</h3><hr><ul>';
	for (i=0;i<tagArray.length;i++) {
  		tagListHTML += '<li><a href="'+ relativePath +'/tags/' + tagArray[i] + '.html">' + tagArray[i] + '</a></li>';
	}
	tagListHTML += "</ul>";
	return tagListHTML;
}

//-----------------------------

//==[ 4. INSERTING THE SECTIONS INTO OUR ACTUAL HTML PAGES ]==

/*Here we check if each relevant div exists. If so, we inject the correct HTML!
  NOTE: All of these sections are optional to use on any given page. For example, if there's 
  one particular blog post where we don't want the footer to appear, 
  we simply don't put a <div id="footer"> on that page.*/

if (document.getElementById("nextprev")) {
  document.getElementById("nextprev").innerHTML = nextprevHTML;
}
if (document.getElementById("postlistdiv")) {
  document.getElementById("postlistdiv").innerHTML = postListHTML;
}
if (document.getElementById("recentpostlistdiv")) {
  document.getElementById("recentpostlistdiv").innerHTML = recentPostListHTML;
}
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = headerHTML;
}
if (document.getElementById("blogTitleH1")) {
  document.getElementById("blogTitleH1").innerHTML = blogTitle;
}
if (document.getElementById("postTitleH1")) {
  document.getElementById("postTitleH1").innerHTML = currentPostTitle;
}
if (document.getElementById("postDate")) {
  document.getElementById("postDate").innerHTML = niceDate;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

//the below three items are additional for the tagging system:
//generates a list of all posts tagged with the page title - ideal for use on individual tag pages like https://3legged.neocities.org/journal/tags/coding
//HTML to put on your page: <div id="taggedPosts"></div>
if (document.getElementById("taggedPosts")) {
  document.getElementById("taggedPosts").innerHTML = getTaggedPosts(document.title);
}
//generates a linked list of all tags used across your blogposts, useful for sidebars or archive pages.
//YOU WILL NEED TO manually create a page for each tag in order for these links to work!
//HTML to put on your page: <div id="tagList"></div>
if (document.getElementById("tagList")) {
  document.getElementById("tagList").innerHTML = formatTagList(getTagList());
}
//generates a list of all tags attached to a particular post - this only works on post pages, but works great at the top or bottom of a post.
//HTML to put on your page: <div id="postTags"></div>
if (document.getElementById("postTags")) {
  document.getElementById("postTags").innerHTML = postTagsHTML;
}

//Dynamically set the HTML <title> tag from the postTitle variable we created earlier
//The <title> tag content is what shows up on browser tabs
if (document.title === "Blog Post") {
  document.title = currentPostTitle;
}