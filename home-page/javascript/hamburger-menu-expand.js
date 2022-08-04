function hamburgerMenuExpand() {
  document
    .querySelectorAll(".side-bar-fixed-menu")[0]
    .classList.toggle("expand");
}

// Trial Mouse Hover
var tooltips = document.querySelectorAll('.tooltip-text');

window.onmousemove = function (e) {
    var x = (e.clientX + 10) + 'px',
        y = (e.clientY + 15) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};