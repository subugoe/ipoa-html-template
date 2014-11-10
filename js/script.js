$(document).ready(function () {

  // footerHide
  footerHideHeight = $('.footer-hide__content').height();
  $('.footer-hide').css(
    {'height': footerHideHeight + 'px'}
  );

  // nav
  nav = $('.js-nav');
  navToggleButton = $('.js-nav-toggle-button');
  navToggleButtonIcon = $('.js-menu-button-icon');
  $(navToggleButton).click(function() {
    if (navToggleButton.hasClass('js-active')) {
      $(navToggleButton).removeClass('js-active');
      $(navToggleButtonIcon).removeClass('fa-times');
      $(navToggleButtonIcon).addClass('fa-bars');
      $(nav).slideUp();
    } else {
      $(navToggleButton).addClass('js-active');
      $(navToggleButtonIcon).removeClass('fa-bars');
      $(navToggleButtonIcon).addClass('fa-times');
      $(nav).slideDown();
    }
  });

  // js-responsive-claim-text-size
  $('.js-responsive-claim-text-size').fitText(
    2, { maxFontSize: '40px'}
  );

});
