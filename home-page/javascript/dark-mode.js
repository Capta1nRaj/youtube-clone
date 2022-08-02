function switchBetweenLightModeAndDarkMode() {
    navigationBarFixedMenu();
    sideBarFixedMenu();
}

// Navigation Bar Dark Mode
function navigationBarFixedMenu() {
    // Navigation Bar
    document
        .getElementsByClassName("navigation-bar-fixed-menu")[0]
        .classList
        .toggle("dark-mode");

    // Hamburger Button
    document
        .getElementsByClassName("hamburger-menu")[0]
        .classList
        .toggle("dark-mode");

    // YouTube Logo
    document
        .getElementsByClassName("youtube-right-side-logo")[0]
        .classList
        .toggle("dark-mode");

    // Middle Section
    document
        .getElementsByClassName("middle-side-naviagtion-bar-menu")[0]
        .classList
        .toggle("dark-mode");

    // Search Logo
    document
        .getElementsByClassName("search-icon")[0]
        .classList
        .toggle("set-position");

    // Right Section
    var rightSectionLength = document
        .getElementsByClassName(
            "navigation-bar-right-side-icons"
        )
        .length;

    for (let i = 0; i < rightSectionLength - 1; i++) {
        document.getElementsByClassName("navigation-bar-right-side-icons")
        [i]
            .classList
            .toggle("dark-mode");
    }
}

// Side Bar Dark Mode
function sideBarFixedMenu() {
    // Side Bar Background
    document
        .querySelector(".side-bar-fixed-menu")
        .classList
        .toggle("dark-mode");

    // Side Bar Icons And Text
    var sideBarIconsLength = document
        .querySelectorAll(
            ".side-bar-fixed-menu .sidebar-icons .sidebar-icons-images"
        )
        .length;

    for (let i = 0; i < sideBarIconsLength; i++) {
        document.querySelectorAll(
            ".side-bar-fixed-menu .sidebar-icons .sidebar-icons-images"
        )
        [i]
            .classList
            .toggle("dark-mode");

        document.querySelectorAll(
            ".side-bar-fixed-menu .sidebar-icons .sidebar-icons-text"
        )
        [i]
            .classList
            .toggle("dark-mode");
    }
}
