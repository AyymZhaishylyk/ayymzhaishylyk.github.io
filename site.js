// About Buttons
function callAbout() {
  const about = document.getElementById("about");
  if (about.style.display === "block") {
    about.style.display = "none";
  } else {
    about.style.display = "block";
  }
}

document.getElementById("about-image").addEventListener("click", function() {
  document.getElementById("about").style.display = "none";
});


//Randomizer
var images = $('.content');
console.log(images.length);
for(var i = 0; i < images.length; i++)
{
    var target = Math.floor(Math.random() * images.length -1) + 1;
    var target2 = Math.floor(Math.random() * images.length -1) +1;
    images.eq(target).before(images.eq(target2));
}

