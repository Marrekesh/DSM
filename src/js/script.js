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

    

})