function bodyBackgroundColorChange() {
    var element = document.getElementById("body");
    element
        .classList
        .toggle("change");
}

function bodyTextColorChange() {

    var videos = document
        .getElementsByClassName("video-title")
        .length;

    for (var i = 0; i < videos; i++) {
        var element = document.getElementsByClassName("video-title")[i];
        element
            .classList
            .toggle("change");
    }

    // var element = document.getElementsByClassName("video-title")[0]; element
    // .classList     .toggle("change");
}