function updateSliderArrowsStatus(
    cardsContainer,
    containerWidth,
    cardCount,
    cardWidth
) {
    if (
        $(cardsContainer).scrollLeft() + containerWidth <
        cardCount * cardWidth + 15
    ) {
        $("#slide-right-container").addClass("active");
    } else {
        $("#slide-right-container").removeClass("active");
    }
    if ($(cardsContainer).scrollLeft() > 0) {
        $("#slide-left-container").addClass("active");
    } else {
        $("#slide-left-container").removeClass("active");
    }
}

$(function() {
    // Scroll products' slider left/right
    let div = $("#cards-container");
    let cardCount = $(div)
        .find(".cards")
        .children(".card").length;
    let speed = 1000;
    let containerWidth = $(".container").width();
    let cardWidth = 400;

    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

    //Remove scrollbars
    $("#slide-right-container").click(function(e) {
        if ($(div).scrollLeft() + 300 < cardCount * cardWidth) {
            $(div).animate({
                scrollLeft: $(div).scrollLeft() + cardWidth
            }, {
                duration: speed,
                complete: function() {
                    setTimeout(
                        updateSliderArrowsStatus(
                            div,
                            containerWidth,
                            cardCount,
                            cardWidth
                        ),
                        1005
                    );
                }
            });
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
    $("#slide-left-container").click(function(e) {
        if ($(div).scrollLeft() + containerWidth > containerWidth) {
            $(div).animate({
                scrollLeft: "-=" + cardWidth
            }, {
                duration: speed,
                complete: function() {
                    setTimeout(
                        updateSliderArrowsStatus(
                            div,
                            containerWidth,
                            cardCount,
                            cardWidth
                        ),
                        1005
                    );
                }
            });
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });

    // If resize action ocurred then update the container width value
    $(window).resize(function() {
        try {
            containerWidth = $("#cards-container").width();
            updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
        } catch (error) {
            console.log(
                `Error occured while trying to get updated slider container width: 
              ${error}`
            );
        }
    });
});
const photoBank = {
    0: 'https://cyboardschool.com/images/newbanner0.jpg',
    1: 'https://cyboardschool.com/images/newbanner1.jpg',
    2: 'https://cyboardschool.com/images/banner2.jpg',
    3: 'https://cyboardschool.com/images/banner3.jpg'
}

let idx = 0;

function switchPic(id, n) {
    idx += n;
    if (idx > 3) {
        idx = 0;
    }
    if (idx < 0) {
        idx = 3;
    }
    var newImg = document.getElementById(id).setAttribute('src', photoBank[idx]);
    return newImg;
}



$(document).ready(function() {
    $('.carousel').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });
});




jQuery(document).ready(function($) {

    var options = {
        $FillMode: 2, //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
        $AutoPlay: 1, //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
        $Idle: 4000, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: 1, //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
        $SlideEasing: $Jease$.$OutQuint, //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
        $SlideDuration: 800, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20, //[Optional] Minimum drag offset to trigger slide, default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 0, //[Optional] Space between each slide in pixels, default value is 0
        $UISearchMode: 1, //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1, //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

        $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
            $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
            $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
            $SpacingX: 8, //[Optional] Horizontal space between each item in pixel, default value is 0
            $Orientation: 1 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
        },

        $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2 //[Optional] Steps to go for each navigation request, default value is 1
        }
    };

    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});