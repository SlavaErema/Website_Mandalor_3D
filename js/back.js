document.addEventListener("click", function(event) {
	// Получите элемент бургер-меню и переключатель меню
	const menu = document.querySelector(".menu__box");
	const toggle = document.getElementById("menu__toggle");

	// Проверьте, открыто ли меню (например, проверьте наличие атрибута "checked" у переключателя меню)
	const isMenuOpen = toggle.checked;

	// Если меню открыто и клик не произошел по элементу меню или переключателю меню, сверните его
	if (isMenuOpen && !event.target.closest(".menu__box") && event.target !== toggle) {
	  toggle.checked = false;
	  menu.classList.remove("active");
	}
  });
