$(function(){
//slick js
$('#Banner-part').slick({
speed:1000,
arrows:true,
fade:true,
slidesToShow:1,
infinite:true,
cssEase:'linear',
nextArrow:'<i class="fas fa-arrow-right slick-arrows-right"></i>',
prevArrow:'<i class="fas fa-arrow-left slick-arrows-left"></i>',
dots:true,
dotsClass:'slick-dots'
});
$('.image-slick-adjust').slick({
speed:1000,
arrows:true,
slidesToShow:5,
centerMode: true,
centerPadding: '0px',
nextArrow:'<i class="fas fa-arrow-right slick-arrows-right"></i>',
prevArrow:'<i class="fas fa-arrow-left slick-arrows-left"></i>',
asNavFor: '.slick-team-text',
autoplay:true,
responsive: [
{
breakpoint: 576,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: false,
autoplay:true,
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: false,
autoplay:false,
}
},

]
});
$('.slick-team-text').slick({
speed:1000,
arrows:false,
slidesToShow:1,
asNavFor: '.image-slick-adjust',
});
$('.feedback-slide').slick({
speed:1500,
arrows:false,
slidesToShow:1,
autoplay:true,
slidesToScroll: 1,
});
$('.footer-slick-slider').slick({
speed:1000,
arrows:true,
slidesToShow:3,
autoplay:true,
nextArrow:'<i class="fas fa-long-arrow-alt-right slick-arrows-right extra-long-right"></i>',
prevArrow:'<i class="fas fa-long-arrow-alt-left slick-arrows-left extra-long-left"></i>',
responsive: [
{
breakpoint: 576,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: false,
autoplay:true,
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: false,
autoplay:true,
}
},
]
});
$('.company-img-slider').slick({
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
dots: false,
autoplaySpeed: 3000,
infinite: true,
arrows: false,
responsive: [
{
breakpoint: 576,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: false,
autoplay:true,
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 4,
slidesToScroll: 1,
infinite: false,
autoplay:true,
}
},
]
});
//preloader
$(window).on('load', function(){
$('.preloader').delay(1000).fadeOut(1000);
})
//Nav-fix
var MenuOffset = $('#my-custom-id').offset().top;
$(window).on('scroll', function(){
var Winscroll = $(window).scrollTop();
if(Winscroll > MenuOffset ){
$('#my-custom-id').addClass('menu-fix');
}else{
$('#my-custom-id').removeClass('menu-fix');
}
//bactop btn
if(Winscroll > 300){
$('.backtop-btn') .fadeIn(1000);
}else{
$('.backtop-btn') .fadeOut(1000);
}
});
$('.backtop-btn').on('click', function(){
$('html,body').animate({
scrollTop:0
},1000 );
});
//counter js
$('.counter').counterUp({
delay: 40,
time: 1000
});
//misitup
var mixer = mixitup('.inner-work-control');
//animation scroll
//animation scroll js
$('a[href*="#"]:not([href="#').on('click', function () {
if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
$('html,body').animate({
scrollTop: target.offset().top  -77
}, 1000);
return false;
}
}
});
//Aos Scroll Effect

});