$(document).ready(function () {
    

    $('nav>div>div').click(function (e) { 
        e.preventDefault();
        $('nav>ul').slideToggle();
        
    });
    $(window).resize(function () { 
        if($('nav').width() >=500){
            $('nav>ul').fadeIn();
        } else {
            $('nav>ul').fadeOut();
        }
    });
});