$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 900,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/img/left.png" alt="slide"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/img/right.png" alt="slide"></button>',
        dots: true   
    });

    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this).addClass('catalog_tab_active')
          .siblings()
          .removeClass('catalog_tab_active')
          .closest('div.container')
          .find('div.catalog_content')
          .removeClass('catalog_content_active')
          .eq($(this).index())
          .addClass('catalog_content_active');
      });

    $('.catalog_item_link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
            $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active');
        })
    });

    $('.catalog_item_back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
            $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active');
        })
    })
// Modal

    $('[data-modal=consultation]').on('click', function(event) {
        event.stopPropagation();
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function(event) {
            event.stopPropagation();
            $('#order .modal_descr').text($('.catalog_item_subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

// Validate form
  
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "????????????????????, ?????????????? ???????? ??????",
                    minlength: jQuery.validator.format("?????????????? {0} ??????????????!")
                  },
                phone: "???????????????????? ?????????????? ???????? ?????????? ????????????????",
                email: {
                  required: "????????????????????, ?????????????? ???????? ??????????",
                  email: "?????????????????????? ???????????? ?????????? ??????????"
                }
              }
         });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

});


$(document).on('click', function(event) {
    if (!$(event.target).closest('.modal').length && !$(event.target).is('modal')) {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
});