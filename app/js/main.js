$(function () {

    function popupMenu(selector){
        let menu = $(selector);
        let button = menu.find(".burger-menu");
        let links = menu.find(".menu__link");
        let overlay = menu.find(".popup__overlay");
        let close = menu.find(".popup__close");

        button.on("click", (e) => {
            e.preventDefault()
            toggleMenu()
        })

        links.on("click", () => toggleMenu());
        overlay.on("click", () => toggleMenu());
        close.on("click", () => toggleMenu());

        function toggleMenu(){
            menu.toggleClass("menu__btn-active");
        }
    }
    popupMenu(".menu__btn")



    $(".btn__down").click(function(){
        $("html, body").animate({scrollTop:$(document).height()}, 2000);

        return false;
    });


    $('.advantage-slider').slick({
        // dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        centerMode: true,
        // centerPadding: "120px",
        // variableWidth: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });
    

    $('.gallery__title').slick({
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "120px",
        variableWidth: false,
        autoplay: true,
        fade: true,
        asNavFor: ".gallery__slider",
        arrows: false,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });


    $('.gallery__slider').slick({
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "120px",
        variableWidth: true,
        autoplay: true,
        asNavFor: ".gallery__title",
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
              breakpoint: 700,
              settings: {
                centerPadding: "0px",
                centerMode: true,
                // cssEase: 'linear',
                fade: true,
                slidesToShow: 1,
                variableWidth: false,
              }
            },
        ]
    });



    $(".default__option").click(function () {
        $(this).parent().toggleClass("active");
    });


    $(this).find(".select__ul li").click(function () {
        let option = $(this).html();
        $(this).parents(".form__select").find(".default__option li").html(option);
        $(this).parents(".form__select").removeClass("active");
    });



    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });


    $('.reviews__slider').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
              breakpoint: 1101,
              settings: {
                centerPadding: "0px",
                centerMode: false,
                slidesToShow: 2,
                fade: false,
              }
            },
            {
                breakpoint: 980,
                settings: {
                  centerPadding: "60px",
                  centerMode: true,
                  slidesToShow: 1,
                  fade: false,
                  centerMode: true,
                }
              },
              {
                breakpoint: 700,
                settings: {
                  centerPadding: "40px",
                  centerMode: true,
                  slidesToShow: 1,
                  fade: false
                }
              },
        ]
    });


    $(function(){
        $(".reviews__btn").click(function(){
            $(this).parent().find(".reviews__slider-text").show(); // - 
            // console.log($(this));
            // console.log($(".reviews__slider-text"));
            // console.log($(this).parent().find("reviews__slider-text"));
        });
        $(".reviews__button-close").click(function(){
            $(this).parent(".reviews__slider-text").hide();
        });
    });
    

    new WOW(
        {
          mobile: false
        }
      ).init();
        
})
