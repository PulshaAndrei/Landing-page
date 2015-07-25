var slideWidth=300;
var sliderTimer;
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,3000);
    $('.next_slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
    });
    $('.prev_slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size()) currentSlide=0;   
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},1000).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0) currentSlide=$('.slidewrapper').children().size()-1; 
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},1000).data('current',currentSlide);
}