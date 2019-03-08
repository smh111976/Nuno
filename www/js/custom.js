/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function () { //when document(DOM) loads completely. 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
  $(document).click(function (e) {
    let clickover = $(e.target);
    let _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});


/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function () { //document is loaded
  $('a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }

  });
});

/*========== BOUNCING DOWN ARROW ==========*/
//down arrow at top
$(document).ready(function () {

});

/*========== MEET THE TEAM ==========*/
//theCarousel
$(document).ready(function () { //when document is ready

});

/*========== SKILLS COUNTER ==========*/

$(document).ready(function () { //when document is ready

});

/*========== CLIENTS CAROUSEL ==========*/

$(document).ready(function () { //when document is ready

});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function () { //when document is ready

});