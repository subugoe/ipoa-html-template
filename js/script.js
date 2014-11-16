$(document).ready(function () {

  /**
   * footerHide
   */
  footerHideHeight = $('.footer-hide__content').height();
  $('.footer-hide').css({ 'height': footerHideHeight + 'px' });

  /**
   *
   */
  jsHeadLanguageIndicator = $('.js-head-language-indicator');
  jsHeadLanguageIndicator.click(function() {
    jsHeadLanguageIndicator.hide();
    $('.js-head-language-links').show();
  });

  /**
   *
   */
  menu = $('.js-menu');
  menuToggleButton = $('.js-menu-toggle-button');
  menuToggleButtonIcon = $('.js-menu-button-icon');
  $(menuToggleButton).click(function() {
    event.preventDefault();
    if (menuToggleButton.hasClass('js-active')) {
      $(menuToggleButton).removeClass('js-active');
      $(menuToggleButtonIcon).removeClass('fa-times');
      $(menuToggleButtonIcon).addClass('fa-bars');
      $(menu).slideUp();
    } else {
      $(menuToggleButton).addClass('js-active');
      $(menuToggleButtonIcon).removeClass('fa-bars');
      $(menuToggleButtonIcon).addClass('fa-times');
      $(menu).slideDown();
    }
  });

  /**
   * JS to make the font-size of the claim shown in the header larger
   */
  $('.js-responsive-claim-text-size').fitText( 2, { maxFontSize: '40px'} );

});
