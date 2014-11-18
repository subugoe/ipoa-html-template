/**
 * TODO : add documentation
 */
$(document).ready(function () {

  /**
   * TODO : add documentation
   */
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  /**
   * TODO : add documentation
   * 
   * footerHide
   */
  footerHideHeight = $('.footer-hide__content').height();
  $('.footer-hide').css({ 'height': footerHideHeight + 'px' });

  /**
   * TODO : add documentation
   */
  jsHeadLanguageIndicator = $('.js-head-language-indicator');
  jsHeadLanguageIndicator.click(function() {
    jsHeadLanguageIndicator.hide();
    $('.js-head-language-links').show();
    headHeight = $('.js-head').height();
    $('.headroom__helper').css({"padding-top": headHeight + "px"});
  });

  /**
   * TODO : add documentation
   */
  menu = $('.js-menu');
  menuToggleButton = $('.js-menu-toggle-button');
  menuToggleButtonIcon = $('.js-menu-button-icon');
  $(menuToggleButton).click(function() {
    event.preventDefault();
    if (menuToggleButton.hasClass('js-active')) {
      $('html,body').animate({'scrollTop' : 0},500);
      $(menuToggleButton).removeClass('js-active');
      $(menuToggleButtonIcon).removeClass('fa-times');
      $(menuToggleButtonIcon).addClass('fa-bars');
      $(menu).slideUp();
    } else {
      $('html,body').animate({'scrollTop' : 0},500);
      $(menuToggleButton).addClass('js-active');
      $(menuToggleButtonIcon).removeClass('fa-bars');
      $(menuToggleButtonIcon).addClass('fa-times');
      $(menu).slideDown();
    }
  });

  /**
   * TODO : add documentation
   * JS to make the font-size of the claim shown in the header larger
   */
  headHeight = $('.js-head').height();
  $('.headroom__helper').css({"padding-top": headHeight + "px"});
  $('.js-head').headroom({
    offset : headHeight,
    classes : {
      initial : "js-head",
      pinned : "js-head--pinned",
      unpinned : "js-head--unpinned",
      top : "js-head--top",
      notTop : "js-head--not-top"
    }
  });

  /**
   * TODO : add documentation
   * JS to make the font-size of the claim shown in the header larger
   */
  $('.js-responsive-claim-text-size').fitText( 2, { maxFontSize: '40px'} );

});
