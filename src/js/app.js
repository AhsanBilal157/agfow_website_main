$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.nav-otr').addClass('top-header-fixed');
    }
    else{
        $('.nav-otr').removeClass('top-header-fixed');
    }
})   
  