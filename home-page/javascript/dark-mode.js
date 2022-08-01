function switchBetweenLightModeAndDarkMode() {
    navigationBarFixedMenu();
}

// Navigation Bar Dark Mode

function navigationBarFixedMenu() {
    // Background
    document
        .getElementsByClassName("navigation-bar-fixed-menu")[0]
        .classList
        .toggle("dark-mode");

    // Hamburger Icon
    document
        .getElementsByClassName("hamburger-menu")[0]
        .classList
        .toggle("dark-mode");

    // Middle Side Search Bar With Icons
    var searchBar = document
        .getElementsByClassName(
            "middle-side-naviagtion-bar-menu"
        )
        .length;

    for (let i = 0; i < searchBar; i++) {
        document
            .getElementsByClassName("middle-side-naviagtion-bar-menu")[i]
            .classList
            .toggle("dark-mode");
    }

    document
        .getElementsByClassName("search-icon")[0]
        .classList
        .toggle("align-at-right-place");
    // Right Side Icons
    var rightSideIcon = document
        .getElementsByClassName(
            "navigation-bar-right-side-icons"
        )
        .length;
    for (let i = 0; i < rightSideIcon - 1; i++) {
        document.getElementsByClassName("navigation-bar-right-side-icons")
        [i]
            .classList
            .toggle("dark-mode");
    }
}
