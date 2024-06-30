$(document).ready(function(){
    var mixer = mixitup('.container');
    // sticky nav
    $('.section_one').waypoint(function (direction) { /* START of Waypoint function*/
        if (direction == "down") {                      /* check direction */
            $('nav').addClass('sticky_nav');             /* if down add fixed-nav class */
          
        } else {
            $('nav').removeClass('sticky_nav'); 
                   /* if up clear fixed-nav class */
        }
    
    
});


  
// active Link
$('nav ul li a').click(function () {
    //removing the previous selected menu state
    $('nav ul li a').removeClass('active');
    //adding the state for this parent menu
    $(this).addClass('active');

});
$('nav .logo').click(function () {
    //removing the previous selected menu state
    $('nav ul li a').removeClass('active');
    //adding the state for this parent menu
    $('nav ul li:first-child a').addClass('active');

});
$(function() {
    $('nav ul li a').filter(function() {
      return this.href === location.href
    }).addClass('active');
  })
// changing active nav
$('.main_menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	
	easing: 'swing',
});

});
// mobile_menu
function openNav(){


    document.getElementById("mobile_nav").style.width = "100%";
}
function closeNav(){
    document.getElementById("mobile_nav").style.width = "0%";
}
