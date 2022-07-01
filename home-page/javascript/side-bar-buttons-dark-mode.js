// Side Button JavaScript
function sideBarButtonColorChange() {
    var element1 = document.getElementsByClassName("side-bar-buttons")[0];

    element1
        .classList
        .toggle("dark-mode");
}

function sideBarButtonImageColorChange() {
    var dark_mode = document
        .getElementsByClassName("side-bar-button-dark-mode")
        .length;

    for (var i = 0; i < dark_mode; i++) {
        var element1 = document.getElementsByClassName("side-bar-button-dark-mode")[i];
        element1
            .classList
            .toggle("change");
    }
}
