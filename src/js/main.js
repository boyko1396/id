const container = document.querySelector('.js-header__menu-toggle');

container.onclick = function(){
  document.body.classList.toggle('is-menu-open');
}