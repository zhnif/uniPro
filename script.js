// Toggle class active
const navbarNav =  document.querySelector('.navBar-nav');
//Ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
//toggle class active untuk search form
const searchForm = document.querySelector('.search-from');
const searchBox = document.querySelectorAll('#search-box');

document.querySelector ('#search-buttom').onClick=(e) =>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});