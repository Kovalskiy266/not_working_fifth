$(document).ready(function(){
       
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
    
    $('.slider').slick({
        arrows: false,
        dots: true, 
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });

    // $('.pricing_slider').slick({
    //     arrows:false,
    //     infinite: false, 
    //     slidesToShow: 4,
        // responsive:[
        //     {
        //         breakpoint: 1200, 
                
        //         settings: {
        //             slidesToShow: 3, 
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true,
        //             // CenterMode: true,
        //             // centerPadding: '10px',
        //         }
        //     }, 
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2, 
        //             slidesToScroll: 1,
        //             infinite: true
        //         }
        //     },

        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1, 
        //             slidesToScroll: 1,
        //             infinite: true
        //         }
        //     }
        // ]

    // });
});

