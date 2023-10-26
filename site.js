// CV Buttons
function callBio() {
  var x = document.getElementById("bio");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("bioPush");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var z = document.getElementById("bioPushCV");
  if (z.style.display === "none" && x.style.display === "block") 
  {
    z.style.display = "block";
  } 
  else 
  {
    z.style.display = "none";
  }
}
function callCV() {
  var y = document.getElementById("cv");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var x = document.getElementById("cvPush");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var z = document.getElementById("bioPushCV2");
  var bio = document.getElementById("bio");
  if (z.style.display === "none" && bio.style.display === "block") 
  {
    z.style.display = "block";
  } 
  else 
  {
    z.style.display = "none";
  }
}
//Randomizer
var images = $('.content');
console.log(images.length);
for(var i = 0; i < images.length; i++)
{
    var target = Math.floor(Math.random() * images.length -1) + 1;
    var target2 = Math.floor(Math.random() * images.length -1) +1;
    images.eq(target).before(images.eq(target2));
}

