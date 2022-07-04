

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".mySwiper3", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".mySwiper4", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

$(function(){
    $('.tab_btn_area > ul > li').click(function(){
        $('.tab_btn_area > ul > li').removeClass('on')
        $(this).addClass('on')

        let nth = $(this).index()
        $('.tab_content_area ul').removeClass('on')
        $('.tab_content_area ul').eq(nth).addClass('on')
    })
    $('.link_list > li').click(function(){
        let a = $(this).index()
        $('.link_list > li').removeClass('on')
        $('.link_list > li').eq(a).toggleClass('on')
    })
})