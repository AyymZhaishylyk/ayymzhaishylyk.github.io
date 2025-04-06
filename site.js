// About Buttons
function callAbout() {
  $('#about').slideToggle('slow');
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

