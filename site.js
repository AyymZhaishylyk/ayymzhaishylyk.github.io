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

window.addEventListener('DOMContentLoaded', () => {
  const navType = performance.getEntriesByType("navigation")[0].type;
  const isReload = navType === "reload";
  const referrer = document.referrer;
  const isInternal = referrer.includes(window.location.hostname);

  if (!isInternal || isReload) {
    const overlay = document.createElement('div');
    overlay.id = 'logo-overlay';

    const logo = document.createElement('img');
    logo.src = 'assets/faded2.png';
    logo.alt = 'Logo';

    overlay.appendChild(logo);
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
      }, 1000);
    }, 1000);
  }
});

// Randomizer
var images = $('.content');
console.log(images.length);
for(var i = 0; i < images.length; i++) {
    var target = Math.floor(Math.random() * images.length - 1) + 1;
    var target2 = Math.floor(Math.random() * images.length - 1) + 1;
    images.eq(target).before(images.eq(target2));
}

// Create the tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

// Global mousemove listener to handle tooltip visibility and positioning
document.addEventListener('mousemove', (e) => {
    // Find the .content element under the cursor
    const content = e.target.closest('.content');
    
    // If no .content element is under the cursor, hide the tooltip
    if (!content) {
        tooltip.style.display = 'none';
        return;
    }

    // Get the link and media elements
    const link = content.querySelector('a');
    const media = content.querySelector('img') || content.querySelector('video');
    
    // If no link, title, or media, hide the tooltip
    if (!link || !link.dataset.title || !media) {
        tooltip.style.display = 'none';
        return;
    }

    // Get the bounding rectangle of the media element
    const rect = media.getBoundingClientRect();

    // Check if the cursor is within the media bounds
    const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

    // If the cursor is outside the bounds, hide the tooltip
    if (!isInside) {
        tooltip.style.display = 'none';
        return;
    }

    // Handle line breaks and tight line-height for specific titles
    let tooltipTitle = link.dataset.title;
    const needsTightLineHeight = 
        link.dataset.title === "HOW TO PULL A RABBIT OUT OF A HAT" || 
        link.dataset.title === "MARC BIJL THE WORKS 1984-2084";

    if (link.dataset.title === "HOW TO PULL A RABBIT OUT OF A HAT") {
        tooltipTitle = "HOW TO PULL<br>A RABBIT<br>OUT OF A HAT";
    } else if (link.dataset.title === "MARC BIJL THE WORKS 1984-2084") {
        tooltipTitle = "MARC BIJL<br>THE WORKS 1984-2084";
    }

    // Wrap the title in a span with tight line-height if needed
    let titleContent = needsTightLineHeight 
        ? `<span class="tooltip-tight-title">${tooltipTitle}</span>` 
        : tooltipTitle;

    // Get the caption, if it exists
    const caption = link.dataset.caption || '';

    // Construct the tooltip content with title and caption
    let tooltipContent = titleContent;
    if (caption) {
        tooltipContent += `<br><span class="tooltip-caption">${caption}</span>`;
    }

    // Apply white color to both title and caption for specific titles
    const needsWhiteColor = 
        link.dataset.title === "REF:EM2447229" || 
        link.dataset.title === "MARC BIJL THE WORKS 1984-2084";
    
    tooltipContent = needsWhiteColor 
        ? `<span class="tooltip-white-title">${tooltipContent}</span>` 
        : tooltipContent;

    // Set the tooltip content
    tooltip.innerHTML = tooltipContent;

    tooltip.style.display = 'block';

    // Recalculate dimensions after setting content
    const tooltipWidth = tooltip.offsetWidth || 100;
    const tooltipHeight = tooltip.offsetHeight || 20;

    let tooltipX = e.clientX + 5;
    let tooltipY = e.clientY + 5;

    if (tooltipX + tooltipWidth > rect.right) {
        tooltipX = rect.right - tooltipWidth;
    }
    if (tooltipX < rect.left) {
        tooltipX = rect.left;
    }

    if (tooltipY + tooltipHeight > rect.bottom) {
        tooltipY = rect.bottom - tooltipHeight;
    }
    if (tooltipY < rect.top) {
        tooltipY = rect.top;
    }

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
});
