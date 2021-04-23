///if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  ///horizontal showcase

if (window.innerWidth > 900) { // code for large screens
  $('.showcase').on('mousewheel DOMMouseScroll', function(event){

         var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

         $(this).scrollLeft( $(this).scrollLeft() - ( delta * 120 ) );
         //event.preventDefault();

     });
   }

   if (window.innerWidth > 1800) { // code for large screens
     $('.showcase').on('mousewheel DOMMouseScroll', function(event){

       event.preventDefault();

     });
   }

///}
  ///smooth scroll

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//caret & nav appear
  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 600) {
          $('nav').fadeIn();
      } else {
          $('nav').fadeOut();
      }

      var y = $(this).scrollTop();
      if (y > 60) {
          $('.caret').fadeTo( "slow", 0 );
      }
  });

  $('.caret').delay(1500).fadeTo( "slow", 1);


//nav scroll down hide
/*
window.onscroll = function(e) {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('nav');

    scrollY <= this.lastScroll
      ? header.style.top = '0'
      : header.style.top = '-50';

    this.lastScroll = scrollY ;
}
*/
