const hamburgerButtonElement = document.querySelector('.js-hamburger-button');
const menuPanelElement = document.querySelector('.js-menu-panel');

let isMenuVisible = false;

function toggleMenuVisibility() {
  if (isMenuVisible) {
    isMenuVisible = false;
    makeMenuInvisible();
  } else {
    isMenuVisible = true;
    makeMenuVisible();
  }
  updateHamburgerMenuButtonImage();
}

function makeMenuVisible() {
  menuPanelElement.classList.add('active');
}

function makeMenuInvisible() {
  menuPanelElement.classList.remove('active');
}

function updateHamburgerMenuButtonImage() {
  if (isMenuVisible) {
    hamburgerButtonElement.innerHTML = '<img src="assets/images/icon-close.svg" alt="">'
  } else {
    hamburgerButtonElement.innerHTML = '<img src="assets/images/icon-menu.svg" alt="">'
  }
}

hamburgerButtonElement.addEventListener('click', () => {
 toggleMenuVisibility();
});