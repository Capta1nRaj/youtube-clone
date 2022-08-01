function switchBetweenLightModeAndDarkMode() {
    navigationBarFixedMenu();
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

    for (i = 0; i < rightSectionLength - 1; i++) {
        document
            .getElementsByClassName("navigation-bar-right-side-icons")[i]
            .classList
            .toggle("dark-mode");
    }
}