$(function () {

    $('.product-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-btn slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.29289" y1="26.7929" x2="15.0429" y2="13.0429" stroke="#E9920F" stroke-width="2"/><line y1="-1" x2="19.4454" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2 0)" stroke="#E9920F" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slick-btn slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="19.4454" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14 27.5)" stroke="#E9920F" stroke-width="2"/><line x1="14.7071" y1="0.707107" x2="0.957106" y2="14.4571" stroke="#E9920F" stroke-width="2"/></svg></button>',
        centerMode: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });

});