$(document).ready(function(){

    $('.owl-video').owlCarousel({
        loop:true,
        nav:true,
        navText : '',
        mouseDrag:true,
        dots:false,
        onInitialized: function() {
            var prev = document.querySelector('#prev');
            var next = document.querySelector('#next');
            var owlNext = this.$element[0].querySelector('.owl-next');
            prev.addEventListener('click', function () {
                owlNext.click();
            });

            var owlPrev = this.$element[0].querySelector('.owl-prev');
            next.addEventListener('click', function () {
                owlPrev.click();
            });
        },
        items: 1
    });
});

$(document).ready(function(){
    $('.slider-obj').owlCarousel({
        loop:true,
        nav:false,
        animateOut: 'fadeOut',
        autoplay:true,
        mouseDrag:true,
        dots:false,
        items: 1
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:100,
        autoWidth:true,
        nav:true,
        navText : '',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $(function () {
        $.scrollUp({
            scrollText: '',
        });
    });


    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});

