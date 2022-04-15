$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/img/left.png" alt="slide"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/img/right.png" alt="slide"></button>'
    });

    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
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
});
