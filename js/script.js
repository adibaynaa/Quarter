$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $('.upper-arrow').fadeIn()
    } else {
        $('.upper-arrow').fadeOut()
    }
})


$('.upper-arrow').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1000)
})