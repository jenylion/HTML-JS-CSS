$(document).ready(function () {
    $('.collapse > h2 > span').click(function (e) { 
        e.preventDefault();
        $('.collapse > div').slideUp(1000)
        // $(this).parent().next().slideToggle();

        
         // change switch + / -
         let currentText = $(this).text()
         $('.collapse > h2 > span').text("+")

        // currentText=="-" ? $(this).text("+").parent().next().slideUp() : $(this).text("-").parent().next().slideDown()
        // $(this).text()=="-" ? $(this).parent().next().slideDown() : $(this).parent().next().slideUp()

        // or using  chain methods on jquery
        currentText=="-" ? $(this).text("+").parent().next().slideUp() : $(this).text("-").parent().next().slideDown()

        // using normal if statemenet
         // if ( currentText=="-" ) {
         //     $(this).text("+").parent().next().slideUp()
         // } else {
         //     $(this).text("-").parent().next().slideDown()
         // }
    });
});