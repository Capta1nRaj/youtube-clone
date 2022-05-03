function my_channel_icon_dropdown() {
    document
        .getElementsByClassName("dropdown-content")[0]
        .classList
        .toggle("show");
}

function my_channel_icon_dropdown_dark_mode() {
    var element = document.getElementsByClassName("dropdown-content")[0];
    element
        .classList
        .toggle("change");

    var dark_mode = document
        .getElementsByClassName("dropdown-image-dark-mode")
        .length;

    for (var i = 0; i < dark_mode; i++) {
        var element1 = document.getElementsByClassName("dropdown-image-dark-mode")[i];
        element1
            .classList
            .toggle("change");
    }

    var dark_mode_background_color = document
        .getElementsByClassName(
            "your-channel"
        )
        .length;

    for (var i = 0; i < dark_mode_background_color; i++) {
        var element1 = document.getElementsByClassName("your-channel")[i];
        element1
            .classList
            .toggle("change");
    }
}