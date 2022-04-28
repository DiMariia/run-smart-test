let isOpened = false;

$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/img/left.png" alt="slide"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/img/right.png" alt="slide"></button>'
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

    $('[data-modal=consultation]').on('click', function() {
        isOpened = false;
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            isOpened = false;
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
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
              }
         });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

});


$(document).on('click', function(event) {
    if (!$(event.target).closest('.modal').length && !$(event.target).is('modal') && isOpened) {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
    //This is done to prevent the first click
    // When we click on the button to open the form
    // We don't wnat to close it immidiatelly
    // This variable controlls this
    // TODO: Refactor this please
    isOpened = true;
});