function switchBetweenLightModeAndDarkMode() {
  // Navigation Bar Color And Text Change
  navigationBarBackgroundColorChange();
  navigationBarLeftSideIcons();
  navigationBarMiddleSideIcons();
  navigationBarRightSideIcons();
  // Dark Mode Icon Change
  change_Dark_Mode_Button_Image_And_Text_To_Light_Mode();
  // Side Bar Color And Text Change
  sideBarIconsAndText();
  // Video Section Background And Text Color Change
  backgroundAndTextColorChange();
  // Change Text Color In Upload Page When Dark Mode Turned On
  textColorChange();
}

// Navigation Bar Navigation Bar Background Color Change
function navigationBarBackgroundColorChange() {
  document.getElementsByClassName("navigation-bar")[0].classList.toggle("dark-mode");
}

// Left Side Icons
function navigationBarLeftSideIcons() {
  document.getElementsByClassName("hamburger-menu-icon")[0].classList.toggle("dark-mode");

  document.getElementsByClassName("youtube-right-side-logo")[0].classList.toggle("dark-mode");
}

// Middle Side Icons
function navigationBarMiddleSideIcons() {
  document.getElementsByClassName("search-input-container")[0].classList.toggle("dark-mode");

  document.getElementsByClassName("search-icon-button")[0].classList.toggle("dark-mode");

  document.getElementsByClassName("voice-search-icon-button")[0].classList.toggle("dark-mode");
}

// Right Side Icons
function navigationBarRightSideIcons() {
  const rightSideIconsCount = document.getElementsByClassName("right-side-icon").length;

  for (let i = 0; i < rightSideIconsCount - 1; i++) {
    document.getElementsByClassName("right-side-icon")[i].classList.toggle("dark-mode");
  }
}

function change_Dark_Mode_Button_Image_And_Text_To_Light_Mode() {
  // Change Image
  const Image_Id = document.getElementsByClassName("dark-mode-icon")[0];
  if (Image_Id.src.match("../images/navigation-bar-icons/dark-mode-button.png")) {
    Image_Id.src = "../images/navigation-bar-icons/light-mode-button.png";
  } else {
    Image_Id.src = "../images/navigation-bar-icons/dark-mode-button.png";
  }

  // Change Text
  const innerText = document.getElementsByClassName("dark-mode-tooltip-text")[0];
  if (innerText.innerHTML.match("Dark Mode")) {
    innerText.innerHTML = "Light Mode";
  } else {
    innerText.innerHTML = "Dark Mode";
  }
}
