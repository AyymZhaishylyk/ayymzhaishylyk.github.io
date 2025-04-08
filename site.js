// about button
function callAbout() {
  const about = document.getElementById("about");
  if (about.style.display === "block") {
    about.style.display = "none";
  } else {
    about.style.display = "block";
  }
}



window.addEventListener('DOMContentLoaded', () => {
  const navType = performance.getEntriesByType("navigation")[0].type;
  const isReload = navType === "reload";
  const referrer = document.referrer;
  const isInternal = referrer.includes(window.location.hostname);

  // Show logo ONLY if user is visiting for the first time or refreshing
  if (!isInternal || isReload) {
    const overlay = document.createElement('div');
    overlay.id = 'logo-overlay';

    const logo = document.createElement('img');
    logo.src = 'assets/faded2.png'; // <-- change this to your actual logo path
    logo.alt = 'Logo';

    overlay.appendChild(logo);
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.opacity = '0';

      // Remove it from DOM after fade
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }, 2000);
  }
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

