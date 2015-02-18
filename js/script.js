jQuery(document).ready(function () {

  windowWidth = $(window).width();

  /**
   * TODO : add documentation
   */
  function scrollToAnchor(aid) {
    var aTag = jQuery("a[name='"+ aid +"']");
    jQuery('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  /**
   * TODO : add documentation
   */
  jsHeadLanguageIndicator = jQuery('.js-head-language-indicator');
  jsHeadLanguageIndicator.click(function() {
    jQuery('.js-head-language-links').show();
    var headHeight = jQuery('.head__links').height();
    jQuery('.head').css({'padding-top': headHeight});
    jsHeadLanguageIndicator.hide();
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
   * hide all submenulists
   * for no-js fallback cases they are open by default, so we have to explicitly
   * close them
   */
  jQuery('.alt-menu .menu__list--indented').hide();

  /**
   * find all ULs with active link and parents (in that menu__column) and open them
   */
  jQuery('.alt-menu .menu__list--indented .menu__link--active').parentsUntil('.menu__column').show();

  /**
   *
   */
  jQuery('.alt-menu').find('.menu__link--has-children').click(function(event) {

    // open link if child ULs are open already
    if (jQuery(this).hasClass('menu__link--open')) {

      // we could to fancy stuff if a link is clicked to follow the href

    // open UL
    } else {

      // prevent following the link, because we want to open the UL
      event.preventDefault();

      // add CSS class "menu__link--open" to clicked link
      jQuery(this).addClass('menu__link--open');

      // open child
      jQuery(this).next('.menu__list--indented').show();

    }

  });


  jQuery('.on-demand__content').hide();
  jQuery('.on-demand__link').click(function(event){
    jQuery('.on-demand__link').hide();
    jQuery('.on-demand__content').show();
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
        jQuery('.footer-hide').show();



      /*
       * what to do when menu button gets clicked and menu is not yet visible
       */
      } else {

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
        jQuery('.footer-hide').hide();

        jQuery('.alt-menu a:first').focus();

      }

    });
  };

  $(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta) {
        return;
      }
      // downscroll code
      if (st > lastScrollTop){
        console.log('scroll down');
        jQuery('.js-head-language-links').hide();
        jQuery('.js-head-language-indicator').show();
        jQuery('.head-nav').addClass('head-nav--narrow');
        jQuery('.head').removeAttr('style');
      }
      // upscroll code
      // else {
      //   console.log('scroll up');
      //   console.log($('.head')[0].scrollHeight);
      //   console.log($(this).scrollTop());
      // }
      if ($(this).scrollTop() < 10) {
        jQuery('.head-nav').removeClass('head-nav--narrow');
      }
      lastScrollTop = st;
    });
  });


  /**
   * quick and dirty carousel for logos
   */
  var arr = jQuery('#logocarousel').find('li');
  jQuery(arr).hide();
  jQuery(arr[0]).show();
  (function recurse(counter) {
    var item = arr[counter];
    delete arr[counter];
    arr.push(item);
    setTimeout(function() {
        jQuery('#logocarousel').find('li').hide();
        recurse(counter + 1);
        jQuery(item).show();
    }, 2500);
  })(0);

  /**
   * TODO : add documentation
   *
   * footerHide
   */
  footerHideHeight = jQuery('.footer-hide__content').height();
  jQuery('.footer-hide').css({ 'height': footerHideHeight + 'px' });

});