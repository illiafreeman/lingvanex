/*mobile menu*/
$('.header__menu-btn').click(function () {
    $('.header__nav-wrap').toggleClass('vis');
    $('body').toggleClass('oh open-menu');
    $('.hamburger').toggleClass('open');
});
/*end mobile menu*/

/*animation*/
    new WOW().init();
/*end animation*/

/*currency toggle*/
$('[data-cur="cur"]').click(function () {
    $('[data-cur="cur"]').toggleClass('dol rub');
    $('[data-cur="cur"]').each(function (index, value){
        $(this).hasClass('dol') ? ($(this).html('$')) : ($(this).html('₽'));
    });
    $('[data-cost="cost"]').each(function (index, value){
        $(this).toggleClass('dol rub');
        let cost = $(this).html();
        if($(this).hasClass('dol')){
            $(this).html(Math.round(cost/90));
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }else{
            $(this).html(Math.round(cost*90));
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });
});
/*end currency toggle*/

/*period toggle*/
$('[data-per="per"]').click(function () {
    $('[data-per="per"]').toggleClass('mon day');
    $('[data-per="per"]').each(function (index, value){
        $(this).hasClass('mon') ? ($(this).html('month')) : ($(this).html('day'));
    });
    $('[data-cost="cost"]').each(function (index, value){
        $(this).toggleClass('mon day');
        let cost = $(this).html();
        if($(this).hasClass('mon')){
            $(this).html(Math.round(cost/30));
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }else{
            $(this).html(Math.round(cost*30));
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });
});

/*end period toggle*/







