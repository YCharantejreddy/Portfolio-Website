// // function toggleMenu() {
// //   const menu = document.querySelector(".menu-links");
// //   const icon = document.querySelector(".hamburger-icon");
// //   menu.classList.toggle("open");
// //   icon.classList.toggle("open");
// // }
// // Toggle hamburger menu
// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
// function toggleMenu() {
//   const hamburgerNav = document.getElementById('hamburger-nav');
//   hamburgerNav.classList.toggle('active');
// }

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute('href'));

//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth'
//       });
//     }
//   });
// });
// Select the logo element
const logo = document.querySelector('.logo');

// Store the initial position of the page
let lastScrollTop = 0;

// Function to handle scroll event
window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Hide the logo if scrolling down and show if scrolling up
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    logo.style.display = 'none';
  } else {
    // Scrolling up
    logo.style.display = 'block';
  }

  // Update last scroll position
  lastScrollTop = scrollTop;
});

// Toggle hamburger menu
function toggleMenu() {
  const hamburgerNav = document.getElementById('hamburger-nav');
  hamburgerNav.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
