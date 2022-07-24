$(function() {
    $('.book').on('click', function() {
        $('.book').removeClass('active');
        let selector =  $(this).addClass('active');
        console.log(selector);
    })
})