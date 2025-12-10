// Toggle class active for navbar (defensive selectors)
const navbarNav = document.querySelector('.navBar-nav');
const menuBtn = document.querySelector('#menu');

if (menuBtn && navbarNav) {
  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    navbarNav.classList.toggle('active');
  });
}

// Toggle search input pada desktop
const searchInputDesktop = document.querySelector('.search-input-desktop');
const searchIcon = document.querySelector('#search');
const navbarIcons = document.querySelector('.navbar-Icons');

if (searchIcon && searchInputDesktop && navbarIcons) {
  searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    navbarIcons.classList.toggle('search-active');
    searchInputDesktop.focus();
  });
}

// Tutup sidebar dan search saat klik diluar
document.addEventListener('click', function (e) {
  // Tutup sidebar jika klik diluar
  if (navbarNav && menuBtn) {
    if (!menuBtn.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  }
  
  // Tutup search jika klik diluar
  if (navbarIcons && searchIcon && !navbarIcons.contains(e.target)) {
    navbarIcons.classList.remove('search-active');
  }
});

// Highlight navbar menu on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navBar-nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
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