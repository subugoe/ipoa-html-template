jQuery(document).ready(function () {

  windowWidth = $(window).width();

  /**
   * TODO : add documentation
   */
  function scrollToAnchor(aid){
    var aTag = jQuery("a[name='"+ aid +"']");
    jQuery('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  /**
   * TODO : add documentation
   *
   * footerHide
   */
  footerHideHeight = jQuery('.footer-hide__content').height();
  jQuery('.footer-hide').css({ 'height': footerHideHeight + 'px' });

  /**
   * TODO : add documentation
   */
  jsHeadLanguageIndicator = jQuery('.js-head-language-indicator');
  jsHeadLanguageIndicator.click(function() {
    jsHeadLanguageIndicator.hide();
    jQuery('.js-head-language-links').show();
    jQuery('.head').css({'padding-top': '94px'});
    headHeight = jQuery('.js-head').height();
    jQuery('.headroom__helper').css({"padding-top": headHeight + "px"});
  });

  /**
   * TODO : add documentation
   */
  menu = jQuery('.js-menu');
  menuToggleButton = jQuery('.js-menu-toggle-button');
  menuToggleButtonIcon = jQuery('.js-menu-button-icon');
  jQuery(menuToggleButton).click(function(event) {
    if (menuToggleButton.hasClass('js-active')) {
      jQuery('html,body').animate({'scrollTop' : 0},500);
      jQuery(menuToggleButton).removeClass('js-active');
      jQuery(menu).slideUp();
    } else {
      jQuery('html,body').animate({'scrollTop' : 0},500);
      jQuery(menuToggleButton).addClass('js-active');
      jQuery(menu).slideDown();
    }
    event.preventDefault();
  });


  /**
   *
   */
  altMenu = jQuery('.alt-menu');
  altMenuToggleButton = jQuery('.js-alt-menu-toggle-button');

  /*
   * full viewport overlay when <768px width
   */
  if (windowWidth <= 767) {

    // $('.alt-menu').css({'display': 'none'})
    jQuery(altMenu).css({'display': 'none'})

    // when menu button receives click the menu will overlay everything an show
    // an scrollable menu. Exit the menu by clicking a menu item.
    jQuery(altMenuToggleButton).click(function() {

      jQuery(altMenu).css({'display': 'block'});

      jQuery('.head-nav').hide();

      jQuery('.footer-hide__helper').css({
        'margin-left': '100%',
        'position': 'fixed'
      });
      jQuery('.footer-hide').css({
        'margin-left': '100%',
        'position': 'fixed'
      });

    });

  /*
   * off canvas when >=768px
   */
  } else {

    // put the menu off canvas to the left
    jQuery('.alt-menu').addClass('alt-menu--off-canvas');

    // removes the no js option of columns side by side
    jQuery('.menu__column').removeClass('ic-tablet-one-half');
    jQuery('.menu__column').removeClass('ic-notebook-and-up-one-quarter');

    jQuery('.menu__column').css({'padding-right': '24px',});

    jQuery(altMenuToggleButton).click(function() {

      /*
       *  what to do when menu button gets clicked and menu is already visible
       */
      if (altMenuToggleButton.hasClass('js-alt-menu-toggle-button--active')) {

        // remove the '--active' modifier from the menu button
        altMenuToggleButton.removeClass('js-alt-menu-toggle-button--active');

        // move the menu off canvas
        jQuery('.alt-menu').css({
          'transform': 'translateX(-100%)',
          '-webkit-transform': 'translateX(-100%)',
          '-ms-transform': 'translateX(-100%)',
          'transition': '0.25s ease-in-out',
        });

        // restablish content stuff to be used as normal again
        jQuery('.footer-hide__helper').removeClass('footer-hide__helper--shifted');



      /*
       * what to do when menu button gets clicked and menu is not yet visible
       */
      } else {

        // $('.overlay').css({
        //   'background-color': 'grey',
        //   'position': 'absolute',
        //   'bottom': 0,
        //   'height': '100%',
        //   'width': '100%',
        //   'z-index': '999',
        //   'opacity': '.5'
        // });

        // add '--active' modifier to the menu button
        altMenuToggleButton.addClass('js-alt-menu-toggle-button--active');

        // move the menu from off canvas into viewport
        jQuery('.alt-menu').css({
          'transform': 'translateX(0%)',
          '-webkit-transform': 'translateX(0%)',
          '-ms-transform': 'translateX(0%)',
          'transition': '0.25s ease-in-out',
        });




        // make the menu content fill the whole left side (top to bottom) and
        // let its content scroll
        jQuery('.alt-menu__content').css({
          'overflow': 'scroll',
          'height': '100%'
        });

        // move the regular content to the right (partly off canvas) and
        // prevent scrolling
        jQuery('.footer-hide__helper').addClass('footer-hide__helper--shifted');

      }

    });
  };

  /*
   *
   */
  (function($, window, document, undefined) {
    'use strict';

    var elSelector = '.head-nav',
        elClassHidden = 'head-nav--hidden',
        elClassNarrow = 'head-nav--narrow',
        elNarrowOffset = 50,
        throttleTimeout = 250,
        $element = $(elSelector);

    if(!$element.length) return true;

    var $window = $(window),
        wHeight = 0,
        wScrollCurrent = 0,
        wScrollBefore = 0,
        wScrollDiff = 0,
        $document = $(document),
        dHeight = 0,

      throttle = function( delay, fn ) {
        var last, deferTimer;
        return function() {
          var context = this, args = arguments, now = +new Date;
          if(last && now < last + delay) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
          } else {
            last = now;
            fn.apply(context, args);
          }
        };
      };

    $window.on('scroll', throttle( throttleTimeout, function() {
      jQuery('.js-head-language-links').hide();
      jQuery('.head').css({'padding-top': '54px'});
      jQuery('.js-head-language-indicator').show();
      dHeight = $document.height();
      wHeight = $window.height();
      wScrollCurrent = $window.scrollTop();
      wScrollDiff = wScrollBefore - wScrollCurrent;

      // toggles "narrow" classname
      $element.toggleClass(elClassNarrow, wScrollCurrent > elNarrowOffset);

      // scrolled to the very top; element sticks to the top
      if(wScrollCurrent <= 0) {
        $element.removeClass(elClassHidden);
      // scrolled up; element slides in
      } else if(wScrollDiff > 0 && $element.hasClass(elClassHidden)) {
        $element.removeClass(elClassHidden);
      // scrolled down
      } else if(wScrollDiff < 0) {
        // scrolled to the very bottom; element slides in
        if(wScrollCurrent + wHeight >= dHeight && $element.hasClass(elClassHidden)) {
          $element.removeClass( elClassHidden );
        // scrolled down; element slides out
        } else {
          $element.addClass(elClassHidden);
        }
      }

      wScrollBefore = wScrollCurrent;
    }));

  })( jQuery, window, document );

});
