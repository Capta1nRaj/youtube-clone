// Navitagion Bar JavaScript
function navigationBarButtonColorChange() {
    // var element1 = document.getElementById("navigation-bar-buttons"); element1
    // .classList     .toggle("dark-mode");

    var element = document.getElementsByClassName("navigation-bar-buttons")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("hamburger-menu")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("youtube-logo-right-side")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("search-bar")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("search-icon")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("voice-search-button")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("voice-search-icon")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("notifications-icon")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("uplaod-icon")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("search-button")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("youtube-apps-icon")[0];
    element
        .classList
        .toggle("change");

    var element = document.getElementsByClassName("dark-mode-button-icon")[0];
    element
        .classList
        .toggle("change");
}

function changeDarkModeButtonImageToLightMode() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("images/navigation-bar-buttons-icons/dark-mode-button.png")) {
        Image_Id.src = "images/navigation-bar-buttons-icons/light-mode-button.png";
    } else {
        Image_Id.src = "images/navigation-bar-buttons-icons/dark-mode-button.png";
    }
}

function changeDarkModeTextToLightMode() {
    var text = document.getElementsByClassName('dark-mode-text')[0];
    if (text.innerHTML.match("Dark Mode")) {
        text.innerHTML = "Light Mode";
    } else {
        text.innerHTML = "Dark Mode";
    }
}