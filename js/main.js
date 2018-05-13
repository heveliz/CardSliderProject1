$(document).ready(function(){
    
    var itemL = $('.cards_container .item').length ;
    var current = 1;
    
    //SET TOTAL AMOUNT
    $('.total_slides').text(itemL);
    
        
    $('.cardSlider .btn_prev').on('click', function(){
        if(current > 1 ){
            current = current -  1;
            showSlide(current);
        }else{
            current =itemL;
            showSlide(current);
        }
    })
    
    $('.cardSlider .btn_next').on('click', function(){
       if(current < itemL){
           current = current + 1;
           showSlide(current);
       }else {
           current = 1;
           showSlide(current);
       }
    })
    
    function showSlide(){
        $('.cards_container .item').removeClass('active');
        $('div[data-id="' + current + '"]').addClass('active'); 
        $('.current_slide').text(current);
    };
    
});