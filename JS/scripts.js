var navbar = document.getElementById('nav-bar');
var isScrolling;
var isHoveringNavbar = false;

// Function to toggle navbar visibility and slide animations
function toggleNavbar() {
  var scrollPosition = window.scrollY;

  // If scrolled down past 200 pixels and not hovering over navbar, show navbar and add slide-in animation
  if (scrollPosition >= 350 && !isHoveringNavbar) {
    navbar.classList.remove("d-none");
    navbar.classList.add("slide-in");
    navbar.classList.remove("slide-out"); // Remove slide-out class if present
    resetTimer();
  } else {
    // If scrolled up or hovering over navbar, hide navbar and add slide-out animation
    navbar.classList.remove("slide-in");
    navbar.classList.add("slide-out");
  }
}

// Function to reset the timer
function resetTimer() {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(function() {
    // If no scrolling activity for 5 seconds and not hovering over navbar, slide out the navbar
    if (!isHoveringNavbar) {
      navbar.classList.remove("slide-in");
      navbar.classList.add("slide-out");
    }
  }, 5000); // 5 seconds
}

// Call toggleNavbar function when the page is loaded
window.onload = function() {
  toggleNavbar();
};

// Call toggleNavbar function when the user scrolls
window.onscroll = function() {
  toggleNavbar();
};

// Call resetTimer function when the user scrolls
window.addEventListener('scroll', function() {
  resetTimer();
});

// Event listeners for mouseenter and mouseleave events on the navbar
navbar.addEventListener('mouseenter', function() {
  isHoveringNavbar = true;
});

navbar.addEventListener('mouseleave', function() {
  isHoveringNavbar = false;
});

// Event listeners for mouseenter and mouseleave events on the navbarNav element
var navbarNav = document.getElementById('navbarNav');

navbarNav.addEventListener('mouseenter', function(event) {
  if (event.target === navbarNav) {
    isHoveringNavbar = true;
  }
});

navbarNav.addEventListener('mouseleave', function(event) {
  if (event.target === navbarNav) {
    isHoveringNavbar = false;
  }
});
