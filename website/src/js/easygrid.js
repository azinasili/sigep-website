(function($) {

  $.fn.easyNav = function() {

    // variables for navigation
    var win = $(window).width();
    var nav = $('.main-nav');
    var navLink = $('.main-nav a');

    // toggle drop down function
    function toggleDropDown() {
      nav.slideUp(250);
    }

    function checkWidth() {
      if (win > 580 || nav.is(':hidden')) {
        nav.removeAttr('style');
        navLink.off('click', toggleDropDown);
      }
    }

    // checks window width on load
    checkWidth();

    // opens and closes mobile drop down
    $('.mobile-icon').on('click', function() {
      $(this).next().slideToggle(250);
      navLink.on('click', toggleDropDown);
      return false;
    });

    // resize listener to show desktop nav
    $(window).resize(checkWidth);

  };

}(jQuery));