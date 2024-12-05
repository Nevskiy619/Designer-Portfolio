const header = document.querySelector('.header');
const burger = header.querySelector('.burger-menu');

burger.addEventListener('click', function () {
  header.classList.toggle('header--mobile');
});
