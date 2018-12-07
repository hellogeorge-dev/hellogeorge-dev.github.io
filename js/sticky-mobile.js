$(document).ready(function(){

    $(window).scroll(function() {

        var  mobileHeight, banHeight, prHeight, banprHeight,  startingPosition, endingPosition, mobilePosition1, mobilePosition2, 
        mobilePosition3,  offsetBottom, containerOffset, height,  windowHeight;

        
        mobileHeight = $('#mobile').height() / 2;
        banHeight = $('.banner').outerHeight();
        prHeight = $('.promise').outerHeight();
        banprHeight = banHeight + prHeight;
        startingPosition = banprHeight + 350;
        endingPosition = banprHeight + 2450;
        mobilePosition1 = $('#mobile-section1').offset().top;
        mobilePosition2 = $('#mobile-section2').offset().top;
        mobilePosition3 = $('#mobile-section3').offset().top;
        offsetBottom = $('.mobile-end p').offset().top;
        containerOffset = $('.mobile-container').offset().top;

        height = $(window).scrollTop();
        windowHeight = $(window).height() / 2;
        

        if (height > startingPosition - windowHeight && height < endingPosition - windowHeight) {
            $('#mobile').removeClass();
            $('#mobile').addClass('position-fixed');
        } else if (height < startingPosition) {
            $('#mobile').removeClass();
            $('#mobile').addClass('position-absolute');
            $('#mobile').css('top', (mobileHeight / 2 * -1));
        } else if (height > endingPosition - windowHeight) {
            $('#mobile').removeClass();
            $('#mobile').addClass('position-absolute');
            $('#mobile').css('top', offsetBottom - containerOffset - mobileHeight);
        } else if (height < endingPosition - windowHeight && height > startingPosition - windowHeight) {
            $('#mobile').removeClass();
             $('#mobile').addClass('position-fixed');
     }

        $('#mobile.position-fixed').css('top', '');
        

        if (height > startingPosition - windowHeight && height < mobilePosition1 - windowHeight) {
            $('.video-container').attr('style', 'transform: translateY(0%)');
            $('video')[0].play(); 
        }  else if (height > mobilePosition1 - windowHeight && height < mobilePosition2 - windowHeight) {
            $('.video-container').attr('style', 'transform: translateY(-347px)');
            $('video')[1].play();
        }  else if (height > mobilePosition2 - windowHeight && height < mobilePosition3 - windowHeight) {
            $('.video-container').attr('style', 'transform: translateY(-694px)');
            $('video')[2].play();
        } else if (height > mobilePosition3 - windowHeight) {
            $('.video-container').attr('style', 'transform: translateY(-1041px)');
            $('video')[3].play();
            
        }
    });


});
