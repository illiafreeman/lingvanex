/*tabs*/
    let ths = $('.tab');
    ths.find('.tab__item').not(':first').hide();
    ths.find('.tab__btn').click(function () {
        ths.find('.tab__btn').removeClass('act').eq($(this).index()).addClass('act');
        ths.find('.tab__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('act');
/*end tabs*/

/*header*/
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function(event){
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            $('header').removeClass('vis').addClass('unvis');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('unvis').addClass('vis');
            }
        }
        lastScrollTop = st;
    }
/*end header*/

/*animation*/
    if ($(window).width() >= 1025) {
        new WOW().init();
    }
/*end animation*/






