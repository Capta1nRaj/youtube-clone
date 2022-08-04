function switchBetweenLightModeAndDarkMode() {
    navigationBarBackgroundColorChange();
    navigationBarLeftSideIcons();
    navigationBarMiddleSideIcons();
    navigationBarRightSideIcons();
}

// Navigation Bar Navigation Bar Background Color Change
function navigationBarBackgroundColorChange() {
    document
        .getElementsByClassName("navigation-bar")[0]
        .classList
        .toggle("dark-mode");
}

// Left Side Icons
function navigationBarLeftSideIcons() {
    document
        .getElementsByClassName("hamburger-menu-icon")[0]
        .classList
        .toggle("dark-mode");

    document
        .getElementsByClassName("youtube-right-side-logo")[0]
        .classList
        .toggle("dark-mode");
}

// Middle Side Icons
function navigationBarMiddleSideIcons() {
    document
        .getElementsByClassName("search-input-container")[0]
        .classList
        .toggle("dark-mode");

    document
        .getElementsByClassName("search-icon-button")[0]
        .classList
        .toggle("dark-mode");

    document
        .getElementsByClassName("voice-search-icon-button")[0]
        .classList
        .toggle("dark-mode");
}

// Right Side Icons
function navigationBarRightSideIcons() {
    var rightSideIconsCount = document
        .getElementsByClassName("right-side-icon")
        .length;

    for (let i = 0; i < rightSideIconsCount - 1; i++) {
        document
            .getElementsByClassName("right-side-icon")[i]
            .classList
            .toggle("dark-mode");
    }
}