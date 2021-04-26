jQuery(document).ready(function($) {
    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.services__item').eq(i).toggleClass('services__item_active');
                $('.services__up').eq(i).toggleClass('services__up_active');
                $('.services__down').eq(i).toggleClass('services__down_active');
            });
        });
    };
    toggleSlide('.services__up');

    $('.feedback__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-down" aria-hidden="true"></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-up" aria-hidden="true"></i></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // verticalSwiping: false,
                // vertical: false,

              }
            },
            {
              breakpoint: 650,
              settings: {
                arrows:false,

              }
            }
          ]
    });
    
    $('.team__slider').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        arrows:false,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        infinite: true,
        responsive: [
            {
              breakpoint: 651,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // verticalSwiping: false,
                // vertical: false,
                // centerPadding: '20px',
              }
            }
          ]
    });
    
    // $('.team__slide-photo').on('click',function(e){
    //     e.preventDefault();
        
        
    //     $(this).slick('slickNext');
    // });

    $(".team__slider .team__slide").on("click", function() {
      const index = $(this).attr("data-slick-index");
      $(".team__slider").slick("slickGoTo", index);
    });

    
    $('.header__burger',).on('click', function(e) {
        e.preventDefault();
        $('.header__toggle').toggleClass('header__toggle_active');
        $('.body').toggleClass('body_overflow');
    });

    new WOW().init();

    $(window).scroll(function() {
      if ( $(this).scrollTop() > 800) {
          $('.chevron').fadeIn();
      } else {
          $('.chevron').fadeOut();
      }
    });

    // $("a[href^='#']").click(function(){
    //   const _href = $(this).attr("href");
    //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //   return false;
    // });

    $('.chevron').on( 'click', function(){ 
      let el = $(this);
      let dest = el.attr('href'); 
      if(dest !== undefined && dest !== '') { 
          $('html').animate({ 
            scrollTop: $(dest).offset().top 
          }, 500 
          );
      }
      return false;
  });

})