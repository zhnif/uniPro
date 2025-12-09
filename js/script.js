// Toggle class active for navbar (defensive selectors)
const navbarNav = document.querySelector('.navBar-nav');
const menu = document.querySelector('#menu-btn') || document.querySelector('#menu');

if (menu && navbarNav) {
  menu.addEventListener('click', function (e) {
    e.preventDefault();
    // Toggle sidebar visibility
    navbarNav.classList.toggle('active');
  });
}

// Toggle class active for search form (defensive/fallbacks, fix typos)
const searchForm = document.querySelector('.search-form') || document.querySelector('.search-from');
const searchBox = document.querySelector('#search-box');
const searchIcon = document.querySelector('#search') || document.querySelector('#search-button') || document.querySelector('#search-buttom');

if (searchIcon && searchForm) {
  searchIcon.addEventListener('click', function (e) {
    e.preventDefault();
    searchForm.classList.toggle('active');
    if (searchBox && typeof searchBox.focus === 'function') searchBox.focus();
  });
}

// Klik diluar sidebar untuk menghilangkan nav
document.addEventListener('click', function (e) {
  if (!navbarNav) return;
  // if click is outside both the menu button and the navbar, close the sidebar
  if (menu && !menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Highlight navbar menu on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navBar-nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // offset karena navbar fixed
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Inisialisasi Owl Carousel untuk Team Section
$(document).ready(function(){
    $(".team-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
    });
});