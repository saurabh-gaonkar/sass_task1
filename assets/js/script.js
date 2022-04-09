$(document).ready(function(){
    $(".mobile-header__menu").click(function(){
        $(".header__top").slideToggle();
        $(".header__bottom").slideToggle();
    });

    $(".eligibility").click(function(){
        $(".eligibility ~ button").toggle();
    })
});



















