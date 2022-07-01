$(document).ready(function () {
    // Toggle Menu Left To Right Script
    $('.menu-btn').click(function () {
        $('.navigation-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    $('.roadmap').click(function () {
        $('.pc-tablet-image').toggleClass("active");
    })
    $('.roadmap').click(function () {
        $('.mobile-image').toggleClass("active");
    })
    $('.pc-tablet-image-close-button').click(function () {
        $('.pc-tablet-image').toggleClass("active");
    })
    $('.mobile-image-close-button').click(function () {
        $('.mobile-image').toggleClass("active");
    })
})