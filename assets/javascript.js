import $ from "jquery";

function load_magnificPopup() {
    $('.simple-ajax-popup-align-top').magnificPopup({
      type: 'ajax',
      alignTop: true,
      overflowY: 'scroll'
    });
    $('.simple-ajax-popup').magnificPopup({
      type: 'ajax'
    });
    // zoom gallery
    $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return item.el.attr('title');
          //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        // don't foget to change the duration also in CSS
        opener: function (element) {
          return element.find('img');
        }
      }
    });
    // popup youtube, video, gmaps
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    // Initialize popup as usual
    $('.image-popup').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom',
      // this class is for CSS animation below
  
      zoom: {
        enabled: true,
        // By default it's false, so don't forget to enable it
  
        duration: 300,
        // duration of the effect, in milliseconds
        easing: 'ease-in-out',
        // CSS transition easing function
  
        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
    });
    $('.image-popup-fit-width').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      image: {
        verticalFit: false
      }
    });
    $('.image-popup-no-margins').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      // class to remove default margin from left and right side
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });
    $('.image-popup-gallery').magnificPopup({
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return item.el.attr('title');
          //return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      zoom: {
        enabled: true,
        duration: 500 // don't foget to change the duration also in CSS
      },
      gallery: {
        enabled: true
      }
    });
    $('.images-group').each(function () {
      // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a',
        // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });
    $('.images-popup').magnificPopup({
      delegate: 'a',
      // child items selector, by clicking on it popup will open
      type: 'image'
      // other options
    });
  }
  /* --------------------------------------------------
   * plugin | enquire.js
   * --------------------------------------------------*/
  function init_resize() {
    enquire.register("screen and (min-width: 993px)", {
      match: function () {
        mobile_menu_show = 1;
      },
      unmatch: function () {
        mobile_menu_show = 0;
        $("#menu-btn").show();
      }
    });
    enquire.register("screen and (max-width: 993px)", {
      match: function () {
        $('header').addClass("header-mobile");
        var body = $('body');
        if (body.hasClass('side-content')) {
          body.removeClass('side-layout');
        }
      },
      unmatch: function () {
        $('header').removeClass("header-mobile");
        $('header').css("height", $tmp_h);
        var body = $('body');
        if (body.hasClass('side-content')) {
          body.addClass('side-layout');
        }
      }
    });
    init();
    init_de();
    video_autosize();
    var header = $('header');
    header.removeClass('smaller');
    header.removeClass('logo-smaller');
    header.removeClass('clone');
    var mx = window.matchMedia("(max-width: 992px)");
    var osw = $('.owl-slide-wrapper');
    if (mx.matches) {
      osw.find("img").css("height", $(window).innerHeight());
      osw.find("img").css("width", "auto");
      if ($op_header_autoshow === 1) {
        header.removeClass('autoshow');
      }
    } else {
      osw.find("img").css("width", "100%");
      osw.find("img").css("height", "auto");
      if ($op_header_autoshow === 1) {
        header.addClass('autoshow');
      }
    }
  }
  ;
  
  /* --------------------------------------------------
   * plugin | owl carousel
   * --------------------------------------------------*/
  function load_owl() {
    $("#items-carousel").owlCarousel({
      center: false,
      items: 4,
      rewind: true,
      margin: 25,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      dots: false,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#carousel__testimonial").owlCarousel({
      center: false,
      loop: true,
      items: 1,
      singleItem: true,
      rewind: true,
      margin: 25,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      dots: false
    });
    $("#collection-carousel").owlCarousel({
      center: false,
      items: 4,
      loop: true,
      margin: 25,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      dots: false,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#items-carousel-big").owlCarousel({
      center: false,
      animateOut: 'fadeOut',
      animateIn: 'flipInY',
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      dots: false
    });
    $("#before-after-carousel-big").owlCarousel({
      center: false,
      animateOut: 'fadeOut',
      animateIn: 'flipInY',
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      mouseDrag: false,
      touchDrag: false,
      dots: true
    });
    $("#items-carousel-5-cols").owlCarousel({
      center: false,
      items: 5,
      rewind: true,
      margin: 25,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      dots: false,
      responsive: {
        1000: {
          items: 5
        },
        800: {
          items: 3
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#collection-carousel-5-cols").owlCarousel({
      center: false,
      items: 5,
      loop: true,
      margin: 25,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      dots: false,
      responsive: {
        1000: {
          items: 5
        },
        800: {
          items: 3
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#item-carousel-big").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      responsive: {
        1000: {
          items: 3
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#item-carousel-big-type-3").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      responsive: {
        1000: {
          items: 2
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#item-carousel-big-type-2").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 25,
      nav: false,
      dots: false,
      responsive: {
        1000: {
          items: 1
        },
        600: {
          items: 1
        },
        0: {
          items: 1
        }
      }
    });
    $("#item-carousel-big-type-4").owlCarousel({
      center: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 2
        },
        0: {
          items: 2
        }
      }
    });
    var owl = $('#item-carousel-big,#item-carousel-big-type-4');
    owl.owlCarousel();
    $('.d-carousel .d-arrow-right').on("click", function () {
      owl.trigger('next.owl.carousel');
    });
    $('.d-carousel .d-arrow-left').on("click", function () {
      owl.trigger('prev.owl.carousel');
    });
    var owl_2 = $('#item-carousel-big-type-2');
    owl_2.owlCarousel();
    $('.d-carousel .d-arrow-right').on("click", function () {
      owl_2.trigger('next.owl.carousel');
    });
    $('.d-carousel .d-arrow-left').on("click", function () {
      owl_2.trigger('prev.owl.carousel');
    });
    var owl_3 = $('#item-carousel-big-type-3');
    owl_3.owlCarousel();
    $('.d-carousel .d-arrow-right').on("click", function () {
      owl_3.trigger('next.owl.carousel');
    });
    $('.d-carousel .d-arrow-left').on("click", function () {
      owl_3.trigger('prev.owl.carousel');
    });
    $("#event-carousel").owlCarousel({
      center: false,
      items: 3,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      responsive: {
        1000: {
          items: 3
        },
        600: {
          items: 3
        },
        0: {
          items: 1
        }
      }
    });
    $("#crypto-carousel").owlCarousel({
      center: false,
      items: 4,
      loop: true,
      margin: 25,
      nav: false,
      dots: false,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 3
        },
        0: {
          items: 1
        }
      }
    });
    $("#ss-carousel").owlCarousel({
      center: true,
      items: 4,
      loop: true,
      margin: 60,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 3
        },
        0: {
          items: 2
        }
      }
    });
    $(".rtl #testimonial-carousel").owlCarousel({
      center: false,
      loop: true,
      margin: 25,
      rtl: true,
      responsive: {
        1000: {
          items: 3
        },
        600: {
          items: 1
        },
        0: {
          items: 1
        }
      }
    });
    $("#testimonial-carousel").owlCarousel({
      center: false,
      loop: true,
      margin: 25,
      responsive: {
        1000: {
          items: 3
        },
        600: {
          items: 1
        },
        0: {
          items: 1
        }
      }
    });
    $("#blog-carousel").owlCarousel({
      center: false,
      items: 3,
      loop: true,
      margin: 25,
      responsive: {
        1000: {
          items: 3
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#carousel-blog").owlCarousel({
      center: false,
      items: 5,
      loop: false,
      margin: 25,
      responsive: {
        1000: {
          items: 3
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
    $("#owl-logo").owlCarousel({
      center: false,
      items: 6,
      loop: true,
      dots: false,
      margin: 25,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        1000: {
          items: 6
        },
        600: {
          items: 4
        },
        0: {
          items: 2
        }
      }
    });
    $(".project-carousel-4-nav").owlCarousel({
      center: true,
      items: 4,
      loop: true,
      margin: 15,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 3
        },
        0: {
          items: 1
        }
      }
    });
    $("#owl-features").owlCarousel({
      center: true,
      items: 4,
      loop: true,
      dots: true,
      margin: 25,
      autoplay: false,
      autoplayTimeout: 0,
      responsive: {
        1000: {
          items: 4
        },
        600: {
          items: 2
        },
        0: {
          items: 1
        }
      }
    });
  
    // Custom Navigation owlCarousel
    $(".next").on("click", function () {
      $(this).parent().parent().find('.blog-slide').trigger('owl.next');
    });
    $(".prev").on("click", function () {
      $(this).parent().parent().find('.blog-slide').trigger('owl.prev');
    });
    $('.owl-custom-nav').each(function () {
      var owl = $('.owl-custom-nav').next();
      var ow = parseInt(owl.css("height"), 10);
      $(this).css("margin-top", ow / 2 - 25);
      owl.owlCarousel();
      // Custom Navigation Events
      $(".btn-next").on("click", function () {
        owl.trigger('owl.next');
      });
      $(".btn-prev").on("click", function () {
        owl.trigger('owl.prev');
      });
    });
  
    // custom navigation for slider
    var ows = $('#custom-owl-slider');
    var arr = $('.owl-slider-nav');
    var doc_height = $(window).innerHeight();
    arr.css("top", doc_height / 2 - 25);
    ows.owlCarousel();
    // Custom Navigation Events
    arr.find(".next").on("click", function () {
      ows.trigger('owl.next');
    });
    arr.find(".prev").on("click", function () {
      ows.trigger('owl.prev');
    });
    $(".owl-slide-wrapper").on("mouseenter", function () {
      arr.find(".next").css("right", "40px");
      arr.find(".prev").css("left", "40px");
    }).on("mouseleave", function () {
      arr.find(".next").css("right", "-50px");
      arr.find(".prev").css("left", "-50px");
    });
  }
  /* --------------------------------------------------
    * plugin | isotope
    * --------------------------------------------------*/
  function filter_gallery() {
    var $container = $('#gallery');
    $container.isotope({
      itemSelector: '.item',
      filter: '*'
    });
    $('#filters a').on("click", function () {
      var $this = $(this);
      if ($this.hasClass('selected')) {
        return false;
      }
      var $optionSet = $this.parents();
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector
      });
      return false;
    });
  }
  function masonry() {
    var $container = $('.row-masonry');
    $container.isotope({
      itemSelector: '.item'
    });
    $('#filters a').on("click", function () {
      var $this = $(this);
      if ($this.hasClass('selected')) {
        return false;
      }
      var $optionSet = $this.parents();
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector
      });
      return false;
    });
  }
  /* --------------------------------------------------
   * plugin | fitvids
   * --------------------------------------------------*/
  /*!
   * FitVids 1.0
   *
   * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
   * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
   * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
   *
   * Date: Thu Sept 01 18:00:00 2011 -0500
   */
  !function (a) {
    a.fn.fitVids = function (b) {
      var c = {
          customSelector: null
        },
        d = document.createElement("div"),
        e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
      return d.className = "fit-vids-style", d.innerHTML = "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function () {
        var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
        c.customSelector && b.push(c.customSelector);
        var d = a(this).find(b.join(","));
        d.each(function () {
          var b = a(this);
          if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
            var c = "object" === this.tagName.toLowerCase() || b.attr("height") ? b.attr("height") : b.height(),
              d = b.attr("width") ? b.attr("width") : b.width(),
              e = c / d;
            if (!b.attr("id")) {
              var f = "fitvid" + Math.floor(999999 * Math.random());
              b.attr("id", f);
            }
            b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width");
          }
        });
      });
    };
  }($);
  /* --------------------------------------------------
   * back to top
   * --------------------------------------------------*/
  var scrollTrigger = 500; // px
  var t = 0;
  function backToTop() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      $('#back-to-top').addClass('show');
      $('#back-to-top').removeClass('hide');
      t = 1;
    }
    if (scrollTop < scrollTrigger && t === 1) {
      $('#back-to-top').addClass('hide');
    }
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').stop(true).animate({
        scrollTop: 0
      }, 700);
    });
  }
  ;
  /* --------------------------------------------------
   * plugin | scroll to
   * --------------------------------------------------*/
  /*!
   * $.scrollto.js 0.0.1 - https://github.com/yckart/$.scrollto.js
   * Scroll smooth to any element in your DOM.
   *
   * Copyright (c) 2012 Yannick Albert (http://yckart.com)
   * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
   * 2013/02/17
   **/
  $.scrollTo = $.fn.scrollTo = function (x, y, options) {
    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
    options = $.extend({}, {
      gap: {
        x: 0,
        y: 0
      },
      animation: {
        easing: 'easeInOutExpo',
        duration: 600,
        complete: $.noop,
        step: $.noop
      }
    }, options);
    return this.each(function () {
      if (!$('body').hasClass('side-layout')) {
        var h = 69;
      } else {
        var h = 0;
      }
      var elem = $(this);
      elem.stop().animate({
        scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
        scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y - h // *edited
      }, options.animation);
    });
  };
  /* --------------------------------------------------
   * counting number
   * --------------------------------------------------*/
  function de_counter() {
    $('.timer').each(function () {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + $(window).height() && v_count === '0') {
        $(function ($) {
          // start all the timers
          $('.timer').each(count);
          function count(options) {
            v_count = '1';
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
          }
        });
      }
    });
  }
  /* --------------------------------------------------
   * progress bar
   * --------------------------------------------------*/
  
  function text_rotate() {
    var quotes = $(".text-rotate-wrap .text-item");
    var quoteIndex = -1;
    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length).fadeIn(1).delay(1500).fadeOut(1, showNextQuote);
    }
    showNextQuote();
  }
  ;
  /* --------------------------------------------------
   * custom background
   * --------------------------------------------------*/
  function custom_bg() {
    $("body,div,section,span").css('background-color', function () {
      return $(this).data('bgcolor');
    });
    $("body,div,section").css('background', function () {
      return $(this).data('bgimage');
    });
    $(".rtl div,.rtl section").css('background', function () {
      return $(this).data('bgimage_rtl');
    });
    $("body,div,section").css('background-size', function () {
      return 'cover';
    });
  }
  /* --------------------------------------------------
   * custom elements
   * --------------------------------------------------*/
  function custom_elements() {
    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    $('.de_tab').find('.de_tab_content > div').hide();
    $('.de_tab').find('.de_tab_content > div:first').show();
    $('li').find('.v-border').fadeTo(150, 0);
    $('li.active').find('.v-border').fadeTo(150, 1);
    $('.de_nav li').on("click", function () {
      $(this).parent().find('li').removeClass("active");
      $(this).addClass("active");
      $(this).parent().parent().find('.v-border').fadeTo(150, 0);
      $(this).parent().parent().find('.de_tab_content > div').hide();
      var indexer = $(this).index(); //gets the current index of (this) which is #nav li
      $(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
      $(this).find('.v-border').fadeTo(150, 1);
    });
    // request quote function
    var rq_step = 1;
    $('#request_form .btn-right').on("click", function () {
      var rq_name = $('#rq_name').val();
      var rq_email = $('#rq_email').val();
      var rq_phone = $('#rq_phone').val();
      if (rq_step === 1) {
        if (rq_name.length === 0) {
          $('#rq_name').addClass("error_input");
        } else {
          $('#rq_name').removeClass("error_input");
        }
        if (rq_email.length === 0) {
          $('#rq_email').addClass("error_input");
        } else {
          $('#rq_email').removeClass("error_input");
        }
        if (rq_phone.length === 0) {
          $('#rq_phone').addClass("error_input");
        } else {
          $('#rq_phone').removeClass("error_input");
        }
      }
      if (rq_name.length != 0 && rq_email.length != 0 && rq_phone.length != 0) {
        $("#rq_step_1").hide();
        $("#rq_step_2").fadeIn();
      }
    });
    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    $('.de_review').find('.de_tab_content > div').hide();
    $('.de_review').find('.de_tab_content > div:first').show();
    //$('.de_review').find('.de_nav li').fadeTo(150,.5);
    $('.de_review').find('.de_nav li:first').fadeTo(150, 1);
    $('.de_nav li').on("click", function () {
      $(this).parent().find('li').removeClass("active");
      //$(this).parent().find('li').fadeTo(150,.5);
      $(this).addClass("active");
      $(this).fadeTo(150, 1);
      $(this).parent().parent().find('.de_tab_content > div').hide();
      var indexer = $(this).index(); //gets the current index of (this) which is #nav li
      $(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').show(); //uses whatever index the link has to open the corresponding box 
    });
    // --------------------------------------------------
    // toggle
    // --------------------------------------------------
    $(".toggle-list h2").addClass("acc_active");
    $(".toggle-list h2").toggle(function () {
      $(this).addClass("acc_noactive");
      $(this).next(".ac-content").slideToggle(200);
    }, function () {
      $(this).removeClass("acc_noactive").addClass("acc_active");
      $(this).next(".ac-content").slideToggle(200);
    });
    // --------------------------------------------------
    // toggle
    // --------------------------------------------------
    $(".expand-custom .toggle").on("click", function () {
      $(this).stop().toggleClass("clicked");
      $(this).stop().parent().parent().parent().find(".details").slideToggle(500);
    });
  }
  /* --------------------------------------------------
   * video autosize
   * --------------------------------------------------*/
  function video_autosize() {
    $('.de-video-container').each(function () {
      var height_1 = $(this).css("height");
      var height_2 = $(this).find(".de-video-content").css("height");
      var newheight = (height_1.substring(0, height_1.length - 2) - height_2.substring(0, height_2.length - 2)) / 2;
      $(this).find('.de-video-overlay').css("height", height_1);
      $(this).find(".de-video-content").animate({
        'margin-top': newheight
      }, 'fast');
    });
  }
  /* --------------------------------------------------
   * center x and y
   * --------------------------------------------------*/
  function center_xy() {
    $('.center-xy').each(function () {
      $(this).parent().find("img").on('load', function () {
        var w = parseInt($(this).parent().find(".center-xy").css("width"), 10);
        var h = parseInt($(this).parent().find(".center-xy").css("height"), 10);
        var pic_w = $(this).css("width");
        var pic_h = $(this).css("height");
        var tp = $(this).parent();
        tp.find(".center-xy").css("left", parseInt(pic_w, 10) / 2 - w / 2);
        tp.find(".center-xy").css("top", parseInt(pic_h, 10) / 2 - h / 2);
        tp.find(".bg-overlay").css("width", pic_w);
        tp.find(".bg-overlay").css("height", pic_h);
      }).each(function () {
        if (this.complete) $(this).load();
      });
    });
  }
  /* --------------------------------------------------
   * add arrow for mobile menu
   * --------------------------------------------------*/
  function menu_arrow() {
    // mainmenu create span
    $('#mainmenu li a').each(function () {
      if ($(this).next("ul").length > 0) {
        $("<span></span>").insertAfter($(this));
      }
    });
    // mainmenu arrow click
    $("#mainmenu > li > span").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $(this).addClass("active");
          $(this).parent().find("ul:first").css("height", "auto");
          var curHeight = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0");
          $(this).parent().find("ul:first").animate({
            'height': curHeight
          }, 300, 'easeOutQuint');
          $('header').css("height", $('#mainmenu')[0].scrollHeight + curHeight + parseInt($tmp_h, 10) * 2);
          break;
        case 2:
          var curHeight = $(this).parent().find("ul:first").height();
          $(this).removeClass("active");
          $(this).parent().find("ul:first").animate({
            'height': "0"
          }, 300, 'easeOutQuint');
          $('header').css("height", $('#mainmenu')[0].scrollHeight - curHeight + parseInt($tmp_h, 10) * 2);
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
    $("#mainmenu > li > ul > li > span").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $(this).addClass("active");
          $(this).parent().find("ul:first").css("height", "auto");
          $(this).parent().parent().parent().find("ul:first").css("height", "auto");
          var curHeight = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0");
          $(this).parent().find("ul:first").animate({
            'height': curHeight
          }, 400, 'easeInOutQuint');
          break;
        case 2:
          $(this).removeClass("active");
          $(this).parent().find("ul:first").animate({
            'height': "0"
          }, 400, 'easeInOutQuint');
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
    $('#doc-filter li').on("click", function () {
      var $this = $(this);
      var $pic = $(this).find('img').attr('src');
      if ($this.hasClass('selected')) {
        return false;
      }
      $('#doc_active img').show();
      $('#doc_active img').attr('src', $pic);
      var $optionSet = $this.parents();
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');
      var selector = '.' + $(this).attr('data-filter');
      $('.d__sch').addClass('deactive');
      $(selector).removeClass('deactive');
      return false;
    });
    $('#doc-filter li.all').on("click", function () {
      $('#doc_active img').hide();
      $('.d__sch').removeClass('deactive');
    });
    $(".play-pause").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      var track = $(this).parent().parent().find('.track');
      var circle = $(this).parent().parent().parent().find('.circle-ripple');
      switch (iteration) {
        case 1:
          track[0].play();
          $(this).addClass('pause');
          $(this).removeClass('play');
          circle.fadeIn();
          break;
        case 2:
          track[0].pause();
          $(this).addClass('play');
          $(this).removeClass('pause');
          circle.fadeOut();
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
    $("#de-click-menu-profile").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $('#de-submenu-profile').show();
          $('#de-submenu-profile').addClass('open');
          $('#de-submenu-notification').removeClass('open');
          $('#de-submenu-notification').hide();
          $('#de-click-menu-notification').data('iteration', 1);
          break;
        case 2:
          $('#de-submenu-profile').removeClass('open');
          $('#de-submenu-profile').hide();
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
    $("#de-click-menu-notification").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $('#de-submenu-notification').show();
          $('#de-submenu-notification').addClass('open');
          $('#de-submenu-profile').removeClass('open');
          $('#de-submenu-profile').hide();
          $('#de-click-menu-profile').data('iteration', 1);
          break;
        case 2:
          $('#de-submenu-notification').removeClass('open');
          $('#de-submenu-notification').hide();
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
  }
  /* --------------------------------------------------
   * show gallery item sequence
   * --------------------------------------------------*/
  function sequence() {
    var sq = $(".sequence > .item > div");
    var count = sq.length;
    sq.addClass("fadeInUp");
    for (var i = 0; i <= count; i++) {
      var sqx = $(".sequence > .item:eq(" + i + ")");
      sqx.attr('data-wow-delay', i / 5 + 's');
    }
  }
  /* --------------------------------------------------
   * show gallery item sequence
   * --------------------------------------------------*/
  function sequence_a() {
    var sq = $(".sequence > .item > a");
    var count = sq.length;
    sq.addClass("fadeInUp");
    for (var i = 0; i <= count; i++) {
      var sqx = $(".sequence > .item:eq(" + i + ")");
      sqx.attr('data-wow-delay', i / 5 + 's');
    }
  }
  /* --------------------------------------------------
   * custom scroll
   * --------------------------------------------------*/
  $.fn.moveIt = function () {
    $(this).each(function () {
      instances.push(new moveItItem($(this)));
    });
  };
  function moveItItemNow() {
    var scrollTop = $window.scrollTop();
    instances.forEach(function (inst) {
      inst.update(scrollTop);
    });
  }
  function moveItItem(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'), 10);
  }
  ;
  moveItItem.prototype.update = function (scrollTop) {
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + pos + 'px)');
  };
  $(function () {
    $('[data-scroll-speed]').moveIt();
  });
  /* --------------------------------------------------
   * multiple function
   * --------------------------------------------------*/
  function init() {
    var sh = $('#de-sidebar').css("height");
    var dh = $(window).innerHeight();
    var h = parseInt(sh) - parseInt(dh, 10);
    function scrolling() {
      var mq = window.matchMedia("(min-width: 993px)");
      var ms = window.matchMedia("(min-width: 768px)");
      if (mq.matches) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 0,
          header = $("header");
        if (distanceY > shrinkOn) {
          header.addClass("smaller");
        } else {
          if (header.hasClass('smaller')) {
            header.removeClass('smaller');
          }
        }
      }
      if (mq.matches) {
        if ($("header").hasClass("side-header")) {
          if ($(document).scrollTop() >= h) {
            $('#de-sidebar').css("position", "fixed");
            if (parseInt(sh, 10) > parseInt(dh, 10)) {
              $('#de-sidebar').css("top", -h);
            }
            $('#main').addClass("col-md-offset-3");
            $('h1#logo img').css("padding-left", "7px");
            $('header .h-content').css("padding-left", "7px");
            $('#mainmenu li').css("width", "103%");
          } else {
            $('#de-sidebar').css("position", "relative");
            if (parseInt(sh, 10) > parseInt(dh, 10)) {
              $('#de-sidebar').css("top", 0);
            }
            $('#main').removeClass("col-md-offset-3");
            $('h1#logo img').css("padding-left", "0px");
            $('header .h-content').css("padding-left", "0px");
            $('#mainmenu li').css("width", "100%");
          }
        }
      }
    }
    scrolling();
    $(".activity-filter > li").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $('.activity-list > li').hide();
          if ($(this).hasClass("filter_by_followings")) {
            $('li.act_follow').show();
          } else if ($(this).hasClass("filter_by_sales")) {
            $('li.act_sale').show();
          } else if ($(this).hasClass("filter_by_offers")) {
            $('li.act_offer').show();
          } else if ($(this).hasClass("filter_by_likes")) {
            $('li.act_like').show();
          }
          ;
          $('.activity-filter > li').removeClass('active');
          $(this).addClass('active');
          break;
        case 2:
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
    $(".filter__r").on("click", function () {
      $('.activity-filter > li').removeClass('active');
      $('.activity-list > li').show();
    });
    $(".btn-close").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $('#popup-box').addClass('popup-hide');
          $('#popup-box').removeClass('popup-show');
          break;
        case 2:
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
    $("#sw-1").on("click", function () {
      if ($(this).is(":checked")) {
        $('.opt-1').css('display', 'none');
        $('.opt-2').css('display', 'inline-block');
      } else {
        $('.opt-2').css('display', 'none');
        $('.opt-1').css('display', 'inline-block');
      }
    });
  }
  // init_de begin //
  function init_de() {
    $('.de-team-list').each(function () {
      $(this).find("img").on('load', function () {
        var w = $(this).css("width");
        var h = $(this).css("height");
        var tpp = $(this).parent().parent();
        tpp.find(".team-pic").css("height", h);
        tpp.find(".team-desc").css("width", w);
        tpp.find(".team-desc").css("height", h);
        tpp.find(".team-desc").css("top", h);
      }).each(function () {
        if (this.complete) $(this).load();
      });
    });
    $(".de-team-list").on("mouseenter", function () {
      var h;
      h = $(this).find("img").css("height");
      $(this).find(".team-desc").stop(true).animate({
        'top': "0px"
      }, 350, 'easeOutQuad');
      $(this).find("img").stop(true).animate({
        'margin-top': "-100px"
      }, 400, 'easeOutQuad');
    }).on("mouseleave", function () {
      var h;
      h = $(this).find("img").css("height");
      $(this).find(".team-desc").stop(true).animate({
        'top': h
      }, 350, 'easeOutQuad');
      $(this).find("img").stop(true).animate({
        'margin-top': "0px"
      }, 400, 'easeOutQuad');
    });
    // portfolio
    $('.item .picframe').each(function () {
      var img = $(this).find("img");
      img.css("width", "100%");
      img.css("height", "auto");
      img.on('load', function () {
        var w = $(this).css("width");
        var h = $(this).css("height");
        //nh = (h.substring(0, h.length - 2)/2)-48;
        $(this).parent().css("height", h);
      }).each(function () {
        if (this.complete) $(this).load();
      });
    });
    // --------------------------------------------------
    // portfolio hover
    // --------------------------------------------------
    $('.overlay').fadeTo(1, 0);
    // gallery hover
    $(".item .picframe").on("mouseenter", function () {
      var ov = $(this).parent().find(".overlay");
      ov.width($(this).find("img").css("width"));
      ov.height($(this).find("img").css("height"));
      ov.stop(true).fadeTo(200, 1);
      var picheight = $(this).find("img").css("height");
      var newheight;
      newheight = picheight.substring(0, picheight.length - 2) / 2 - 10;
      //alert(newheight);
      //$(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight},200,'easeOutCubic');
      $(this).parent().find(".pf_text").css('margin-top', newheight);
      $(this).parent().find(".pf_text").stop(true).animate({
        'opacity': '1'
      }, 1000, 'easeOutCubic');
      var w = $(this).find("img").css("width");
      var h = $(this).find("img").css("height");
      var w = parseInt(w, 10);
      var h = parseInt(h, 10);
      var $scale = 1;
      //alert(w);
      $(this).find("img").stop(true).animate({
        width: w * $scale,
        height: h * $scale,
        'margin-left': -w * ($scale - 1) / 2,
        'margin-top': -h * ($scale - 1) / 2
      }, 400, 'easeOutCubic');
    }).on("mouseleave", function () {
      var newheight;
      var picheight = $(this).find("img").css("height");
      newheight = picheight.substring(0, picheight.length - 2) / 2 - 10;
      //$(this).parent().find(".pf_text").stop(true).animate({'margin-top': newheight - 30},200,'easeOutCubic');
      $(this).parent().find(".pf_text").stop(true).animate({
        'opacity': '0'
      }, 400, 'easeOutCubic');
      $(this).parent().find(".overlay").stop(true).fadeTo(200, 0);
      $(this).find("img").stop(true).animate({
        width: '100%',
        height: '100%',
        'margin-left': 0,
        'margin-top': 0
      }, 400, 'easeOutQuad');
    });
    $('.overlay').fadeTo(1, 0);
    var preloader_pos = parseInt($(window).innerHeight() / 2, 10) - 30;
    $(".preloader1").css("top", preloader_pos);
    $('.grid.border').css('padding-top', grid_size);
    $('.grid.border').css('padding-left', grid_size);
    $("#selector .opt").on("click", function () {
      $("#selector .opt").removeClass("active");
      var color = $(this).data('color');
      $("#colors").attr("href", 'css/colors/' + color + '.css');
      $(this).addClass("active");
      $.cookie("c_scheme", color, {
        expires: 1000
      });
    });
  
    // rtl begin //
    if (rtl_mode === "on") {
      $("body").addClass('rtl');
      $("#bootstrap").attr("href", 'css/bootstrap.rtl.min.css');
      $("#bootstrap-grid").attr("href", 'css/bootstrap-grid.rtl.min.css');
      $("#bootstrap-reboot").attr("href", 'css/bootstrap-reboot.rtl.min.css');
      $("#mdb").attr("href", 'css/mdb.rtl.min.css');
      $('html').attr("dir", "rtl");
    }
    ;
    // rtl end // 
  }
  // de_init end //
  
  function f_rtl() {
    $("#selector #demo-rtl").on("click", function () {
      var iteration = $(this).data('iteration') || 1;
      switch (iteration) {
        case 1:
          $("body").addClass('rtl');
          $("#bootstrap").attr("href", 'css/bootstrap.rtl.min.css');
          $("#bootstrap-grid").attr("href", 'css/bootstrap-grid.rtl.min.css');
          $("#bootstrap-reboot").attr("href", 'css/bootstrap-reboot.rtl.min.css');
          $("#mdb").attr("href", 'css/mdb.rtl.min.css');
          $('html').attr("dir", "rtl");
          $(this).find(".sc-val").text('Click to Disable');
          $(".rtl div,.rtl section").css('background', function () {
            return $(this).data('bgimage_rtl');
          });
          $("body,div,section").css('background-size', function () {
            return 'cover';
          });
          break;
        case 2:
          $("body").removeClass('rtl');
          $("#bootstrap").attr("href", 'css/bootstrap.min.css');
          $("#bootstrap-grid").attr("href", 'css/bootstrap-grid.min.css');
          $("#bootstrap-reboot").attr("href", 'css/bootstrap-reboot.min.css');
          $("#mdb").attr("href", 'css/mdb.min.css');
          $('html').attr("dir", "ltr");
          $(this).find(".sc-val").text('Click to Enable');
          $("body,div,section").css('background', function () {
            return $(this).data('bgimage');
          });
          $("body,div,section").css('background-size', function () {
            return 'cover';
          });
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data('iteration', iteration);
    });
  }
  function grid_gallery() {
    $('.grid-item').each(function () {
      var this_col = Number($(this).parent().attr('data-col'));
      var this_gridspace = Number($(this).parent().attr('data-gridspace'));
      var this_ratio = eval($(this).parent().attr('data-ratio'));
      $(this).parent().css('padding-left', this_gridspace);
      var w = ($(document).width() - (this_gridspace * this_col + 1)) / this_col - this_gridspace / this_col;
      var gi = $(this);
      var h = w * this_ratio;
      gi.css('width', w);
      gi.css('height', h);
      gi.find(".pf_title").css('margin-top', h / 2 - 10);
      gi.css('margin-right', this_gridspace);
      gi.css('margin-bottom', this_gridspace);
      $(this).parent().css('padding-top', this_gridspace);
      if (gi.hasClass('large')) {
        $(this).css('width', w * 2 + this_gridspace);
        $(this).css('height', h * 2 + this_gridspace);
      }
      if (gi.hasClass('large-width')) {
        $(this).css('width', w * 2 + this_gridspace);
        $(this).css('height', h);
      }
      if (gi.hasClass('large-height')) {
        $(this).css('height', h * 2 + this_gridspace);
        gi.find(".pf_title").css('margin-top', h - 20);
      }
    });
  }
  
  /* --------------------------------------------------
   * center-y
   * --------------------------------------------------*/
  function centerY() {
    $('.full-height').each(function () {
      var dh = $(window).innerHeight();
      $(this).css("min-height", dh);
    });
  }
  
  /* --------------------------------------------------
   * progress bar
   * --------------------------------------------------*/
  function de_progress() {
    $('.de-progress').each(function () {
      var pos_y = $(this).offset().top;
      var value = $(this).find(".progress-bar").attr('data-value');
      var topOfWindow = $(window).scrollTop();
      if (pos_y < topOfWindow + 550) {
        $(this).find(".progress-bar").css({
          'width': value
        }, "slow");
      }
      $(this).find('.value').text($(this).find('.progress-bar').attr('data-value'));
    });
    $('.d-skill').each(function () {
      var pos_y = $(this).offset().top;
      var value = $(this).attr('data-value');
      var topOfWindow = $(window).scrollTop();
      $(this).find(".d-fill-line").attr('data-value', value);
      if (pos_y < topOfWindow + 550) {
        $(this).find(".d-fill-line").css({
          'width': value
        }, "slow");
      }
      $(this).find('.value').text($(this).find('.progress-bar').attr('data-value'));
    });
  }
  function de_countdown() {
    $('.de_countdown').each(function () {
      var y = $(this).data('year');
      var m = $(this).data('month');
      var d = $(this).data('day');
      var h = $(this).data('hour');
      $(this).countdown({
        until: new Date(y, m - 1, d, h)
      });
    });
  }
  
  // --------------------------------------------------
  // preloader
  // --------------------------------------------------
  
  function copyText(element) {
    var $copyText = $(element).text();
    var button = $('#btn_copy');
    navigator.clipboard.writeText($copyText).then(function () {
      var originalText = button.text();
      button.html('Copied!');
      button.addClass('clicked');
      setTimeout(function () {
        button.html(originalText);
        button.removeClass('clicked');
      }, 750);
    }, function () {
      button.html('Error');
    });
  }
  
  // --------------------------------------------------
  // custom dropdown
  // --------------------------------------------------   
  function dropdown(e) {
    var obj = $(e + '.dropdown');
    var btn = obj.find('.btn-selector');
    var dd = obj.find('ul');
    var opt = dd.find('li');
    obj.on("mouseenter", function () {
      dd.show();
      $(this).css("z-index", 1000);
    }).on("mouseleave", function () {
      dd.hide();
      $(this).css("z-index", "auto");
    });
    opt.on("click", function () {
      dd.hide();
      var txt = $(this).text();
      opt.removeClass("active");
      $(this).addClass("active");
      btn.text(txt);
    });
  }
  
  // --------------------------------------------------
  // image preview
  // --------------------------------------------------   
  function image_preview() {
    var pw = parseInt($('.image-autosize').parent().css('width'), 10);
    $('.image-autosize').css('max-width', pw);
  }
  
  /* --------------------------------------------------
   * document ready
   * --------------------------------------------------*/
  $(document).ready(function () {
    'use strict';
  
    // set color begin
    var c_scheme = $.cookie('c_scheme');
    if (c_scheme != undefined) {
      $("#colors").attr("href", 'css/colors/' + c_scheme + '.css');
      $(this).addClass("active");
      var lst = c_scheme.charAt(c_scheme.length - 1);
      $(".tc" + lst).addClass("active");
      // set color end
    }
    f_rtl();
    load_magnificPopup();
    center_xy();
    init_de();
    grid_gallery();
    init_resize();
    de_progress();
    de_countdown();
    dropdown('#item_category');
    image_preview();
    $(".jarallax").jarallax();
    $(function () {
      $('.lazy').lazy();
    });
  
    // --------------------------------------------------
    // custom positiion
    // --------------------------------------------------
    var $doc_height = $(window).innerHeight();
    $('#homepage #content.content-overlay').css("margin-top", $doc_height);
    $('.full-height .de-video-container').css("min-height", $doc_height);
    if ($('header').hasClass("autoshow")) {
      $op_header_autoshow = 1;
    }
    $('#mainmenu > li:has(ul)').addClass('menu-item-has-children');
  
    // set today date to datepicker
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    $('#date').val(today);
    centerY();
    $('#mainmenu li:has(ul)').addClass('has-child');
  
    // bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  
    // skill bar
    $('.d-skill').each(function () {
      var value = $(this).attr('data-value');
      $(this).find(".d-fill-line").attr('data-value', value);
      $(this).find(".d-fill-line").css({
        'width': value
      }, "slow");
      $(this).find('.value').text($(this).find('.progress-bar').attr('data-value'));
    });
  
    // circle bar
  
    function animateElements() {
      $('.de-progressbar').each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.de-circle-bar').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.de-circle-bar').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 14,
            fill: {
              color: '#1B58B8'
            }
          }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
      });
    }
  
    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  
    // --------------------------------------------------
    // blog list hover
    // --------------------------------------------------
    $(".blog-list").on("mouseenter", function () {
      var v_height = $(this).find(".blog-slide").css("height");
      var v_width = $(this).find(".blog-slide").css("width");
      var newheight = v_height.substring(0, v_height.length - 2) / 2 - 40;
      var owa = $(this).find(".owl-arrow");
      owa.css("margin-top", newheight);
      owa.css("width", v_width);
      owa.fadeTo(150, 1);
      //alert(v_height);
    }).on("mouseleave", function () {
      $(this).find(".owl-arrow").fadeTo(150, 0);
    });
    //  logo carousel hover
    $("#logo-carousel img").on("mouseenter", function () {
      $(this).fadeTo(150, .5);
    }).on("mouseleave", function () {
      $(this).fadeTo(150, 1);
    });
    if ($('#back-to-top').length) {
      backToTop();
    }
    $(".nav-exit").on("click", function () {
      $.magnificPopup.close();
    });
    // carousel hover
    $(".d-carousel").on("mouseenter", function () {
      $('.d-arrow-left').fadeTo(50, 1);
      $('.d-arrow-right').fadeTo(50, 1);
    }).on("mouseleave", function () {
      $('.d-arrow-left').fadeTo(50, 0);
      $('.d-arrow-right').fadeTo(50, 0);
    });
    // --------------------------------------------------
    // navigation for mobile
    // --------------------------------------------------
    $('#menu-btn').on("click", function () {
      $('#de-submenu-profile').removeClass('open');
      $('#de-submenu-profile').hide();
      $('#de-click-menu-profile').data('iteration', 1);
      $('#de-submenu-notification').removeClass('open');
      $('#de-submenu-notification').hide();
      $('#de-click-menu-notification').data('iteration', 1);
      var h = $('header')[0].scrollHeight;
      if (mobile_menu_show === 0) {
        $('header.header-mobile').stop(true).animate({
          'height': h
        }, 200, 'easeOutCubic');
        mobile_menu_show = 1;
      } else {
        $('header.header-mobile').stop(true).animate({
          'height': $tmp_h
        }, 200, 'easeOutCubic');
        mobile_menu_show = 0;
      }
    });
    $('#de-menu-reveal').on("click", function () {
      if (menu_v2_show == 0) {
        $(this).addClass('menu-open');
        $('#de-menu-container').addClass('menu-open');
        $('html,body').addClass("no-scroll");
        menu_v2_show = 1;
      } else {
        $(this).removeClass('menu-open');
        $('#de-menu-container').removeClass('menu-open');
        $('html,body').removeClass("no-scroll");
        menu_v2_show = 0;
      }
    });
    $('#mainmenu-v2 a').on("click", function () {
      $('#de-menu-reveal').removeClass('menu-open');
      $('#de-menu-container').removeClass('menu-open');
      $('html,body').removeClass("no-scroll");
      menu_v2_show = 0;
    });
    $("a.btn").on("click", function (evn) {
      if (this.href.indexOf('#') != -1) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
      }
    });
    $('.de-gallery .item .icon-info').on("click", function () {
      $('.page-overlay').show();
      url = $(this).attr("data-value");
      $("#loader-area .project-load").load(url, function () {
        $("#loader-area").slideDown(500, function () {
          $('.page-overlay').hide();
          $('html, body').animate({
            scrollTop: $('#loader-area').offset().top - 70
          }, 500, 'easeOutCubic');
          //
          $(".image-slider").owlCarousel({
            items: 1,
            singleItem: true,
            navigation: false,
            pagination: true,
            autoPlay: false
          });
          $(".container").fitVids();
          $('#btn-close-x').on("click", function () {
            $("#loader-area").slideUp(500, function () {
              $('html, body').animate({
                scrollTop: $('#section-portfolio').offset().top - 70
              }, 500, 'easeOutCirc');
            });
            return false;
          });
        });
      });
    });
    $('.de-gallery .item').on("click", function () {
      $('#navigation').show();
    });
    // btn arrow up
    $(".arrow-up").on("click", function () {
      $(".coming-soon .coming-soon-content").fadeOut("medium", function () {
        $("#hide-content").fadeIn(600, function () {
          $('.arrow-up').animate({
            'bottom': '-40px'
          }, "slow");
          $('.arrow-down').animate({
            'top': '0'
          }, "slow");
        });
      });
    });
    // btn arrow down
    $(".arrow-down").on("click", function () {
      $("#hide-content").fadeOut("slow", function () {
        $(".coming-soon .coming-soon-content").fadeIn(800, function () {
          $('.arrow-up').animate({
            'bottom': '0px'
          }, "slow");
          $('.arrow-down').animate({
            'top': '-40'
          }, "slow");
        });
      });
    });
  
    // portfolio click
  
    $('.de_modal').click(function () {
      //$('#preloader').show();
      $('html,body').addClass("no-scroll");
      var url = $(this).attr("data-url");
      $("#de_modal .d-modal-loader").load(url, function () {
        $("#de_modal").fadeIn(300, function () {
          $('#preloader').hide();
          $('.d-modal-loader').fadeIn(300);
          filter_gallery();
        });
      });
    });
  
    // button-close
  
    $('.button-close').click(function () {
      $('#de_modal').fadeOut(300);
      $('.d-modal-loader').fadeIn(300);
      $('html,body').removeClass("no-scroll");
    });
  
    // cirlce bar
  
    function animateElements() {
      $('.progressbar').each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            size: 200,
            value: percent / 100,
            thickness: 6,
            lineCap: 'round',
            fill: {
              color: $(":root").css("--primary-color")
            },
            emptyFill: bg_circle_color
          }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
      });
    }
  
    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  
    // --------------------------------------------------
    // looping background
    // --------------------------------------------------
    $(function () {
      var x = 0;
      setInterval(function () {
        x -= 1;
        $('.bg-loop').css('background-position', x + 'px 0');
      }, 50);
    });
  
    /* --------------------------------------------------
     after window load
     * --------------------------------------------------*/
  
    setTimeout(function () {
      $("#cookieConsent").fadeIn(400);
    }, 2000);
    $("#closeCookieConsent, .cookieConsentOK").on("click", function () {
      $("#cookieConsent").fadeOut(400);
    });
    $(".switch-with-title .checkbox").change(function () {
      if (this.checked) {
        $(this).parent().parent().find('.hide-content').show();
      } else {
        $(this).parent().parent().find('.hide-content').hide();
      }
    });
    video_autosize();
    masonry();
    custom_bg();
    menu_arrow();
    load_owl();
    filter_gallery();
    custom_elements();
    init();
  
    // one page navigation
    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $(".scroll-to").on("click", function (evn) {
      if (this.href.indexOf('#') != -1) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
      }
    });
    sequence();
    sequence_a();
    $('.accordion-section-title').on("click", function (e) {
      var currentAttrvalue = $(this).data('tab');
      if ($(e.target).is('.active')) {
        $(this).removeClass('active');
        $('.accordion-section-content:visible').slideUp(300);
      } else {
        $('.accordion-section-title').removeClass('active').filter(this).addClass('active');
        $('.accordion-section-content').slideUp(300).filter(currentAttrvalue).slideDown(300);
      }
    });
    $.each($('textarea[data-autoresize]'), function () {
      var offset = this.offsetHeight - this.clientHeight;
      var resizeTextarea = function (el) {
        $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
      };
      $(this).on('keyup input', function () {
        resizeTextarea(this);
      }).removeAttr('data-autoresize');
    });
  
    /* --------------------------------------------------
     * window | on resize
     * --------------------------------------------------*/
    $(window).resize(function () {
      init_resize();
      centerY();
      grid_gallery();
      image_preview();
      setTimeout(function () {
        filter_gallery();
      }, 1000);
    });
  
    /* --------------------------------------------------
     * window | on scroll
     * --------------------------------------------------*/
    $(window).on("scroll", function () {
      /* functions */
      header_sticky();
      de_counter();
      de_progress();
      init();
      backToTop();
      moveItItemNow();
  
      /* fade base scroll position */
      var target = $('.fadeScroll');
      var targetHeight = target.outerHeight();
      var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
      if (scrollPercent >= 0) {
        target.css('opacity', scrollPercent);
      } else {
        target.css('opacity', 0);
      }
  
      /* go to anchor */
      $('.onepage #mainmenu li a').each(function () {
        var cur = $(this);
        if (this.href.indexOf('#') != -1) {
          var href = $(this).attr('href');
          if ($(window).scrollTop() > $(href).offset().top - 140) {
            clearTimeout($.data(this, "scrollCheck"));
            $.data(this, "scrollCheck", setTimeout(function () {
              $('#mainmenu li a').removeClass('active');
              cur.addClass('active');
            }, 250));
          }
        }
      });
    });
  });
  $(window).on('load', function () {
    $('#preloader').delay(200).fadeOut(300);
    $('#content').stop(true).delay(200).animate({
      'margin-top': "0px"
    }, 500, 'easeOutQuad');
    load_owl();
    filter_gallery();
    window.dispatchEvent(new Event('resize'));
    $('.grid').isotope({
      itemSelector: '.grid-item'
    });
    grid_gallery();
    image_preview();
    init();
    new WOW().init();
  });