var slider_manager = function(){
    let total_width = $(this).width()-27;
    let max_val = $(this).attr('max');
    let min_val = $(this).attr('min');
    let pos_x = total_width / (max_val - min_val) * (parseInt($(this).val()) - min_val);
    $(this).prev().css('left', pos_x)
                  .text($(this).val());
}
$(document).ready(() => {slider_manager.call($('#nb_errors_c').find('input'));
                         slider_manager.call($('#nb_words_c').find('input'))});
$('#nb_errors_c').find('input').on('input', slider_manager);
$('#nb_words_c').find('input').on('input', slider_manager);
