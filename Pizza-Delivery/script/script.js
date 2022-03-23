$('.open-login').click(function(e) {
    e.preventDefault();
    $('.popup-bg-login').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup-login').click(function() {
    $('.popup-bg-login').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-register').click(function(e) {
    e.preventDefault();
    $('.popup-bg-register').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup-register').click(function() {
    $('.popup-bg-register').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.option').click(function(e){
    e.preventDefault();
    $('.option').removeClass('active');
    $(this).addClass('active');
})


