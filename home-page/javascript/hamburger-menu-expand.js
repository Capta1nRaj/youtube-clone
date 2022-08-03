function hamburgerMenuExpand() {
    document
        .querySelectorAll(".side-bar-fixed-menu")[0]
        .classList
        .toggle("expand");
}

// Trial Mouse Hover
var tooltipSpan = document.getElementsByClassName('youtube-home-tooltip-text')[0];
window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.left = (x + 10) + 'px';
    tooltipSpan.style.top = (y + 15) + 'px';
};