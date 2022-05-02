// Side Button JavaScript
function sideBarButtonColorChange() {
    var element1 = document.getElementsByClassName("side-bar-buttons")[0];

    element1
        .classList
        .toggle("dark-mode");
}

function sideBarButtonImageColorChange() {
    /* In filter change */
    // var element1 = document.getElementById("sidebar-button-image-1");
    // element1.style.filter = "invert(100%)"; var element2 =
    // document.getElementById("sidebar-button-image-2"); element2.style.filter =
    // "invert(100%)"; var element3 =
    // document.getElementById("sidebar-button-image-3"); element3.style.filter =
    // "invert(100%)"; var element4 =
    // document.getElementById("sidebar-button-image-4"); element4.style.filter =
    // "invert(100%)"; var element5 =
    // document.getElementById("sidebar-button-image-5"); element5.style.filter =
    // "invert(100%)"; var element6 =
    // document.getElementById("sidebar-button-image-6"); element6.style.filter =
    // "invert(100%)";

    /* By Id */
    // var element1 = document.getElementById("sidebar-button-image-1"); element1
    // .classList     .toggle("change"); var element2 =
    // document.getElementById("sidebar-button-image-2"); element2     .classList
    // .toggle("change"); var element3 =
    // document.getElementById("sidebar-button-image-3"); element3     .classList
    // .toggle("change"); var element4 =
    // document.getElementById("sidebar-button-image-4"); element4     .classList
    // .toggle("change"); var element5 =
    // document.getElementById("sidebar-button-image-5"); element5     .classList
    // .toggle("change"); var element6 =
    // document.getElementById("sidebar-button-image-6"); element6     .classList
    // .toggle("change");

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
