var Controller = {
    getController: function () {
        if ($('body').attr('data-controller')) {
            eval('Controller.' + $('body').attr('data-controller') + '();');
        }
    },
    global: function () {
        $(window).scroll(function() {
            if(window.scrollY > 0) {
                $('header, .toTop').addClass('sticky');
            } else {
                $('header, .toTop').removeClass('sticky');
            }           
        });  
        $( "[data-anchor]" ).each(function( index ) {
            var anchor = $(this)[0].dataset.anchor;

            $( this ).click(function() {
                $('html, body').animate({
                    scrollTop: $("#"+anchor).offset().top - $('header').outerHeight()
                }, 2000);               
            });  
        });         
    },   
    home: function () {
        $('.webdoor').owlCarousel({
            items:1,
            nav:true,
            dots:true,
            loop:true
        });
        $('.carousel').owlCarousel({
            items:4,
            nav:false,
            dots:false,
            autoplay:true,
            loop:true
        });        
    },   
    plano: function () {
        $( "[name*='aceita']" ).change(function() {
            if($(this).val()) {
                $('.--submit').toggle()
            }
        });        
    },   
    rede: function () {
        
    },   
    bs_care: function () {
        
    }      
};

$(document).ready(function (){
    Controller.getController(); 
    Controller.global();    
});
      
      