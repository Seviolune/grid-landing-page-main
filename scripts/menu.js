const hamburgerButtonElement = document.querySelector('.js-hamburger-button');
const menuPanelElement = document.querySelector('.js-menu-panel');
const menuPanelHTML = `
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Our Work</a></li>
    <li><a href="#">Partners</a></li>
    <li><a href="#">Annual Report</a></li>
    <li><a href="#">Donate</a></li>
  </ul>
 `;


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
  menuPanelElement.innerHTML = menuPanelHTML;
  menuPanelElement.classList.add('active');
}

function makeMenuInvisible() {
  menuPanelElement.innerHTML = '';
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



toggleMenuVisibility();