document.addEventListener("DOMContentLoaded", function () {

  	const MENU_BUTTON = document.quesySelector('.js-nav-toggle-button');
	const MENU_LIST = document.querySelector('.js-menu-options-toggle');

  	MENU_BUTTON.addEventListener('click', () => {
      	MENU_LIST.classList.toggle('hidden-section');
    });
});
