$(function () {

    $('.product-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-btn slick-prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"></button>',
    });

});