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