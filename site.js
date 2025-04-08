// about button
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

window.addEventListener("load", function() {
  const overlay = document.getElementById("logo-overlay");
  setTimeout(() => {
    overlay.style.opacity = 0;
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000); // wait for fade-out transition
  }, 1000); // show for 2 seconds
});

window.addEventListener('DOMContentLoaded', () => {
  const hasVisited = sessionStorage.getItem('visited');
  const isFromExternal = !document.referrer || !document.referrer.includes(window.location.hostname);

  if (!hasVisited && isFromExternal) {
    const overlay = document.createElement('div');
    overlay.id = 'logo-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backgroundColor = 'white';
    overlay.style.zIndex = 10000;
    overlay.style.opacity = 1;
    overlay.style.transition = 'opacity 1s ease';
    overlay.innerHTML = `
      <img src="assets/logo1.png" alt="Logo" style="max-width: 110vw; max-height: 110vh;" />
    `;
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }, 2000);

    sessionStorage.setItem('visited', 'true');
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

