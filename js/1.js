$(document).ready(function () {
    $(window).scroll(function () {

        if ($(window).scrollTop() > 1) {
            $('.menu').addClass('nav-bg ');
            // $('.menu__logo').addClass('logo-small');
            // $('.menu__menu .nav-link').addClass('spacing-link');
        } else {
            $('.menu').removeClass('nav-bg ');
            // $('.menu__logo').remov  eClass('logo-small ');
            // $('.menu__menu .nav-link').removeClass('spacing-link');
        }
    });
});