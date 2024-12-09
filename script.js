
jQuery(function () {

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#upButton').css('right', '30px');
            } else {
                $('#upButton').removeAttr('style');
            }
        });
    });

    $(function () {
        var upButton = document.getElementById("upButton")
        $(upButton).on('click', function(event) {
  
            $("html, body").animate({scrollTop : 0}, 800);
    
        });
    });
});

