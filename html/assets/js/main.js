(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {


        // on scroll Navbar Fixed and back to top show
        $(window).on('scroll', function() {
            if($(window).width() > 600){
                if ($(window).scrollTop() > 600) {
                    $('#header').addClass('navbar-fixed-top');
                    $('#back-to-top').addClass('reveal');
                } else {
                    $('#header').removeClass('navbar-fixed-top');
                    $('#back-to-top').removeClass('reveal');
                }
            }
        });


        var urlparam = window.location.pathname.split('/');
        var menuselctor = window.location.pathname;
          if(urlparam[urlparam.length-1].length > 0)
              menuselctor = urlparam[urlparam.length-1];
          else 
              menuselctor = urlparam[urlparam.length-2];

             // alert(menuselctor);
            $('.navbar-default .nav li').find('a[href="'+menuselctor+'"]').closest('li.has-children').addClass('active');
            $('.navbar-default .nav .drop-down > li, .navbar-default .nav > li, .navbar-default .nav .megadrop .dropdown ul li').find('a[href="'+menuselctor+'"]').closest('li').addClass('active');




        // Start Back to Top
        $('#back-to-top').on('click', function() {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });


        // revolution slider start
        $("#rev_slider_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            spinner: "spinner4",
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'metis',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels: [1240, 1024, 767, 480],
            gridwidth: [1170, 1170, 767, 480],
            gridheight: [700, 700, 600, 600],
            lazyType: "none",
            shadow: 0,
            shuffle: "off",
            autoHeight: "off",
        });
        // revolution slider end


        //Owl Carousel-- Team Member
        $(".owl-scroll").owlCarousel({
            pagination: true,
            navigation: false,
            items : 3,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- blog
        $(".home_blog").owlCarousel({
            pagination: true,
            navigation: false,
            items : 4,
            itemsDesktop : [1000,4],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Product Detail
        $(".related-product").owlCarousel({
            pagination: true,
            navigation: false,
            items : 4,
            itemsDesktop : [1000,4],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Product Detail
        $(".special-product").owlCarousel({
            pagination: false,
            navigation: true,
            items : 3,
            itemsDesktop : [1000,2],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Product Detail
        $(".featured-product").owlCarousel({
            pagination: false,
            navigation: true,
            items : 3,
            itemsDesktop : [1000,2],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });        


        //Owl Carousel-- Testimonial
        $(".testimonial-carousel").owlCarousel({
            pagination: false,
            navigation: false,
            items : 1,
            itemsDesktop : [1000,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Testimonial Three Items
        $(".testimonial-carousel-three").owlCarousel({
            pagination: false,
            navigation: false,
            items : 3,
            itemsDesktop : [1000,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            margin: 10,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Blog Widget
        $(".widget-carousel").owlCarousel({
            pagination: false,
            navigation: false,
            items : 1,
            itemsDesktop : [1000,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        // Start Animated Number
        $('.animated-counter, .animated-counter-2').appear(function() {
            $('.animated-number').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });


        //Progress Bar
        $('.progress-bar').each(function(){
            var width = $(this).data('percentage');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function () {
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });

        // Start Easy Pie Chart
        $('.progress-chart-circle').appear(function() {
            $('.chart').easyPieChart({
                animate: 2000,
                barColor: '#b1b1b1',
                trackColor: '#575757',
                scaleColor: '',
                lineCap: 'round',
                lineWidth: 10,
                size: 130
            });
        });

        //Tooltip
        $('[data-toggle="tooltip"]').tooltip()

        //video background
        try {
            jQuery(".player").mb_YTPlayer();
        } catch (err) {}


        //Start Modal Popup
        $('.launch-modal').on('click', function(e){
            e.preventDefault();
            $( '#' + $(this).data('modal-id') ).modal();
        });


        //CountDown
        $(".countdown").countdown({
            date: "07 Aug 2050 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        //Video
        $(document).ready(function(){
        // Target your .container, .wrapper, .post, etc.
        $(".video-container").fitVids();
      });



        // Styles Switcher
            $('.open-switcher').click(function(){
                if($(this).hasClass('show-switcher')) {
                    $('.switcher').css({'left': 0});
                    $('.open-switcher').removeClass('show-switcher');
                    $('.open-switcher').addClass('hide-switcher');
                }else if(jQuery(this).hasClass('hide-switcher')) {
                    $('.switcher').css({'left': '-225px'});
                    $('.open-switcher').removeClass('hide-switcher');
                    $('.open-switcher').addClass('show-switcher');
                }
            });
        
        
        
        //Layout Switcher
        $(".layout-style").change(function(){
            if( $(this).val() == 1){
                $("#container").removeClass("boxed-page"),
                $(window).resize();
            } else{
                $("#container").addClass("boxed-page"),
                $(window).resize();
            }
        });
        
        //Background Switcher
        $('.switcher .bg-list li a').click(function() {
            var current = $('.switcher select[id=layout-style]').find('option:selected').val();
            if(current == '2') {
                var bg = $(this).css("backgroundImage");
                $("body").css("backgroundImage",bg);
            } else {
                alert('Please select the boxed layout from select box');
            }
        });


        //Date Picker
            $('.datepicker').datepicker({
                format: 'mm/dd/yyyy',
                startDate: '-3d'
            })


        // Search Form
        $('#top-search .header-search-form').click( function(){
        if ( $('#top-search').hasClass('form-show') ) {
            $('#top-search').removeClass('form-show');
        } else {
            $('#top-search').removeClass('form-show');
            $('#top-search').addClass('form-show');
        }
        });

        $(".write-review").click(function() {
            $('html, body').animate({
                scrollTop: $(".chead-tabs-top").offset().top - 200
                }, 2000);
        });         

        jQuery('.theme-1').on('click', function(){
            window.open('index.html', '_parent');
        });
        jQuery('.theme-2').on('click', function(){
            window.open('home-construction.html', '_parent');
        });
        jQuery('.theme-3').on('click', function(){
            window.open('home-medical.html', '_parent');  
        });
        jQuery('.theme-4').on('click', function(){
            window.open('home-interior.html', '_parent');
        });
        jQuery('.theme-5').on('click', function(){
            window.open('home-travel.html', '_parent');
        });
        jQuery('.theme-6').on('click', function(){
            window.open('home-shop.html', '_parent');
        });
        jQuery('.theme-7').on('click', function(){
            window.open('onepage.html', '_parent');
        });        

       if($(window).width() <= 767 ){

        $( ".collapse-xs" ).click(function() {
          
            $( "ul.category" ).slideToggle(700);

              if ( $('.collapse-xs').hasClass('active') ) {
              $('.collapse-xs.active').removeClass('active');
            } else {
              $('.collapse-xs.active').removeClass('active');
              $('.collapse-xs').addClass('active');  
          } 
            
        }); 

       }        
       
        if (windowsize <= 991) {
            jQuery(".navbar .search-cart-header").appendTo(".navbar-header");

            jQuery('.top-cart .shopping-cart').click( function(){
            if ( jQuery('.top-cart .cart-content').hasClass('cart-show') ) {
                jQuery('.top-cart .cart-content').removeClass('cart-show');
            } else {
                jQuery('.top-cart .cart-content').removeClass('cart-show');
                jQuery('.top-cart .cart-content').addClass('cart-show');
            }
            });            
        }
        else {
            jQuery(".navbar .search-cart-header").insertAfter(".navbar-header");
        }



    });

     var windowsize = jQuery(window).width();
    jQuery(window).resize(function() {
      windowsize = jQuery(window).width();
      if (windowsize <= 991) {
        jQuery(".navbar .search-cart-header").appendTo(".navbar-header");

            jQuery('.top-cart .shopping-cart').click( function(){
            if ( jQuery('.top-cart .cart-content').hasClass('cart-show') ) {
                jQuery('.top-cart .cart-content').removeClass('cart-show');
            } else {
                jQuery('.top-cart .cart-content').removeClass('cart-show');
                jQuery('.top-cart .cart-content').addClass('cart-show');
            }
            });         
      }
      else {
        jQuery(".navbar .search-cart-header").insertAfter(".navbar-header");
      }  

      

    });

    if (windowsize >= 768) {
        jQuery( window ).on('load', function() {
         var maxHeight = Math.max.apply(null, jQuery(".product-grid .product-info").map(function ()
        {
            return jQuery(this).height() + 25;
        }).get());
        jQuery('.product-grid .product-info').css('height',maxHeight);

        jQuery('.product-grid .product-info').css('height', maxHeight+'px');

        });
    }

    $(window).on('load', function(){
        
       jQuery('.loader').fadeOut();

            //Portfolio Start
            var $container = $('.portfolio-box');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.filter a').on('click', function() {
                $('.filter .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.portfolio-box').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            //Portfolio End       
    });

    //dom ready end


})(jQuery);