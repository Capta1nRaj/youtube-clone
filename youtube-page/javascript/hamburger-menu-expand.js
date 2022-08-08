// Hamburger Menu Expand
function hamburgerMenuExpand() {
  // Expand Side Bar Menu
  document.querySelectorAll(".side-bar-menu")[0].classList.toggle("expand");

  // Change Margin Of Video Section
  change_Margin_Of_Videos_Section_When_Clicked_On_Hamburger_Menu();

  // Change Margin Of Video Upload Section
  change_Margin_Of_Video_Upload_Section();
}

// Side Bar Dark Mode, Function Executed In dark-mode.js
function sideBarIconsAndText() {
  // Background Color Change
  document.getElementsByClassName("side-bar-menu")[0].classList.toggle("dark-mode");

  // Icons Lenth Count
  const sideBarIconsCount = document.getElementsByClassName("side-bar-icons").length;

  // Text Length Count
  const sideBarTextCount = document.getElementsByClassName("side-bar-text").length;

  // Icons Color Change
  for (var i = 0; i < sideBarIconsCount; i++) {
    document.getElementsByClassName("side-bar-icons")[i].classList.toggle("dark-mode");
  }

  // Text Color Change
  for (var i = 0; i < sideBarTextCount; i++) {
    document.getElementsByClassName("side-bar-text")[i].classList.toggle("dark-mode");
  }
}
