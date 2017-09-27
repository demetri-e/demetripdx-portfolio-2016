// Additional Projects dropdown panel
$(document).ready(function(){
    $('.open').click(function(){
        var link = $(this);
        $('.showpanel').slideToggle('slow', function() {
            if ($(this).is(":visible")) {
                 $('#text-change').text('show less projects');                
            } else {
                 $('#text-change').text('show more projects');                
            }        
        });
            
    });
});

//flip projects arrow icon
$(document).ready(function() {
$( ".projects-page-button" ).click( function() {
    $("#arrow1").toggleClass('flip');
});
});


//flip nav menu icon
//$(document).ready(function() {
//$( "#small-nav-cb" ).click( function() {
   // $(".cb-image").toggleClass('flip');
//});
//});
