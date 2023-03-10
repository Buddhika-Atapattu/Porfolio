$(document).ready(function () {
    // console.log("Time until DOMready: ", Date.now() - timerStart);

    // scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    $("#arrow_to_up").on("click", function () {
        $(window).scrollTop(0);
    });

    $(".web-development-swiper").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });

    $(".uiux-swiper").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });


    // navigation scroll function

    var preScroll = $(document).scrollTop();

    var navHeight = $('#mainNav').outerHeight();

    $(window).scroll(function () {
        var scrolled = $(document).scrollTop();

        if ((scrolled <= navHeight)) {
            $("#mainNav").removeClass("nav-scroll-down");
            $("#mainNav").removeClass("nav-scroll-up");
        }
        else {

            if (preScroll < scrolled) {
                $("#mainNav").addClass("nav-scroll-down");
                $("#mainNav").removeClass("nav-scroll-up");
            }
            else {
                $("#mainNav").removeClass("nav-scroll-down");
                $("#mainNav").addClass("nav-scroll-up");
            }
        }

        preScroll = $(document).scrollTop();

        $("#toggle").on("click", function () {
            if ($("#navbarSupportedContent").is(":visible")) {
                $("body").css({ "position": "relative", "overflow": "hidden" });
                $("#navbarSupportedContent").addClass("opacity-none");
            }
            else {
                $("body").css({ "position": "relative", "overflow": "auto" });
                $("#navbarSupportedContent").removeClass("opacity-none");
            }
        })
    });
    // end



    // toggle menu
    $("#toggle").on("click", function () {
        $("#navbarSupportedContent").toggle();
        $("#navbarSupportedContent").addClass("transition");

        if ($("#navbarSupportedContent").is(":visible")) {
            $("#toggleTick").css({ "margin-left": "2rem", "margin-right": "0rem" });
            $("html").css({ "overflow-x": "hidden", "overflow-y": "hidden" });
            $("body").css({ "overflow-x": "hidden", "overflow-y": "hidden" });
            $("#mainNav").removeClass("nav-scroll-down");
            $("#mainNav").removeClass("nav-scroll-up");
            $("#toggle").addClass("fixed-position-right");
            $("#toggle").addClass("margin-toggle");
            $("#navBrand").addClass("fixed-position-left");
            $("#navBrand").addClass("margin-toggle");
            $("#navBrand").addClass("p-0");

        }
        if ($("#navbarSupportedContent").is(":hidden")) {
            $("#toggleTick").css({ "margin-left": "0rem", "margin-right": "2rem" });
            $("html").css({ "overflow-x": "hidden", "overflow-y": "auto" });
            $("body").css({ "overflow-x": "hidden", "overflow-y": "auto" });
            $("#mainNav").addClass("nav-scroll-down");
            $("#mainNav").addClass("nav-scroll-up");
            $("#toggle").removeClass("fixed-position-right");
            $("#toggle").removeClass("margin-toggle");
            $("#navBrand").removeClass("fixed-position-left");
            $("#navBrand").removeClass("margin-toggle");
            $("#navBrand").removeClass("p-0");
        }
    });


    // hide menu when click nav item
    $(".nav-item").on("click", function () {
        $("#navbarSupportedContent").hide();
        $("html").css({ "overflow-x": "hidden", "overflow-y": "auto" });
        $("body").css({ "overflow-x": "hidden", "overflow-y": "auto" });
        $("#toggleTick").css({ "margin-left": "0rem", "margin-right": "2rem" });
        $("body").css({ "overflow-x": "hidden", "overflow-y": "auto" });
        $("#mainNav").addClass("nav-scroll-down");
        $("#mainNav").addClass("nav-scroll-up");
        $("#toggle").removeClass("fixed-position-right");
        $("#toggle").removeClass("margin-toggle");
        $("#navBrand").removeClass("fixed-position-left");
        $("#navBrand").removeClass("margin-toggle");
        $("#navBrand").removeClass("p-0");
    });



    $(window).scroll(function () {



        let per_height = 0;

        let home_height = $("#home").height() - 100;

        let whoAmI_height = $("#whoAmI").height();

        let skill = $("#skills").height();

        let wd_height = $("#wd").height();

        let wde_height = $("#wde").height();

        let gd_height = $("#gd").height();

        let gde_height = $("#graphic").height();

        let uiux_height = $("#uiux").height();

        let scroll = $(document).scrollTop();

        let doc_height = $(document).height();


        // console.log(uiux_height);

        if (scroll < 50) {
            $("#arrow_to_up").removeClass("arrow-down");
        }
        if (scroll > 50) {
            $("#arrow_to_up").addClass("arrow-down");
        }


        if (scroll < 300) {
            $("#homeText").addClass("animate__animated animate__fadeInLeft");
            $("#homeBtn").addClass("animate__animated animate__fadeInRight");
            // $("#home").addClass("home");

            $("#whoAmIMainText").removeClass("animate__animated animate__fadeInLeft");
            $(".little-tigger").removeClass("animate__animated animate__fadeInLeft");
            $(".who-text").removeClass("animate__animated animate__fadeInRight");
        }
        if (scroll > home_height) {
            $("#homeText").removeClass("animate__animated animate__fadeInLeft");
            $("#homeBtn").removeClass("animate__animated animate__fadeInRight");
            // $("#home").removeClass("home");

            $("#whoAmIMainText").addClass("animate__animated animate__fadeInLeft");
            $(".little-tigger").addClass("animate__animated animate__fadeInLeft");
            $(".who-text").addClass("animate__animated animate__fadeInRight");

            $("#skillTitle").removeClass("animate__animated animate__fadeInLeft");
            $(".skill-image").removeClass("animate__animated animate__fadeInLeft");
            $("#skillGraph").removeClass("animate__animated animate__fadeInRight");
        }
        if (scroll > (home_height + whoAmI_height)) {
            $("#whoAmIMainText").removeClass("animate__animated animate__fadeInLeft");
            $(".little-tigger").removeClass("animate__animated animate__fadeInLeft");
            $(".who-text").removeClass("animate__animated animate__fadeInRight");

            $("#skillTitle").addClass("animate__animated animate__fadeInLeft");
            $(".skill-image").addClass("animate__animated animate__fadeInLeft");
            $("#skillGraph").addClass("animate__animated animate__fadeInRight");

            $("#wdTitle").removeClass("animate__animated animate__fadeInLeft");
            $("#webDevelopment").removeClass("animate__animated animate__fadeInLeft");
            $(".web-development-text").removeClass("animate__animated animate__fadeInRight");
        }
        if (scroll > (home_height + whoAmI_height + skill)) {
            $("#skillTitle").removeClass("animate__animated animate__fadeInLeft");
            $(".skill-image").removeClass("animate__animated animate__fadeInLeft");
            $("#skillGraph").removeClass("animate__animated animate__fadeInRight");

            $("#wdTitle").addClass("animate__animated animate__fadeInLeft");
            $("#webDevelopment").addClass("animate__animated animate__fadeInLeft");
            $(".web-development-text").addClass("animate__animated animate__fadeInRight");

            $(".web-development-swiper").removeClass("animate__animated animate__zoomIn");
        }
        if (scroll > (home_height + whoAmI_height + skill + wd_height)) {
            $("#wdTitle").removeClass("animate__animated animate__fadeInLeft");
            $("#webDevelopment").removeClass("animate__animated animate__fadeInLeft");
            $(".web-development-text").removeClass("animate__animated animate__fadeInRight");

            $(".web-development-swiper").addClass("animate__animated animate__zoomIn");
            $(".web-development-swiper").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });

            $("#gdTitle").removeClass("animate__animated animate__fadeInLeft");
            $("#graphicDesign").removeClass("animate__animated animate__fadeInLeft");
            $(".gd-text").removeClass("animate__animated animate__fadeInRight");
        }
        if (scroll > (home_height + whoAmI_height + skill + wd_height + wde_height)) {
            $(".web-development-swiper").removeClass("animate__animated animate__zoomIn");

            $("#gdTitle").addClass("animate__animated animate__fadeInLeft");
            $("#graphicDesign").addClass("animate__animated animate__fadeInLeft");
            $(".gd-text").addClass("animate__animated animate__fadeInRight");

            $("#graphicSwiper").removeClass("animate__animated animate__zoomIn");
        }
        if (scroll > (home_height + whoAmI_height + skill + wd_height + wde_height + gd_height)) {
            $("#gdTitle").removeClass("animate__animated animate__fadeInLeft");
            $("#graphicDesign").removeClass("animate__animated animate__fadeInLeft");
            $(".gd-text").removeClass("animate__animated animate__fadeInRight");

            $("#graphicSwiper").addClass("animate__animated animate__zoomIn");
            $(".web-development-swiper").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });

            $("#uiuxTitle").removeClass("animate__animated animate__fadeInLeft");
            $("#uiuxDesign").removeClass("animate__animated animate__fadeInLeft");
            $(".uiux-text").removeClass("animate__animated animate__fadeInRight");
        }
        if (scroll > (home_height + whoAmI_height + skill + wd_height + wde_height + gd_height + gde_height)) {
            $("#graphicSwiper").removeClass("animate__animated animate__zoomIn");

            $("#uiuxTitle").addClass("animate__animated animate__fadeInLeft");
            $("#uiuxDesign").addClass("animate__animated animate__fadeInLeft");
            $(".uiux-text").addClass("animate__animated animate__fadeInRight");

            $(".uiux-swiper").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });

            $("#videoTitle").removeClass("animate__animated animate__zoomInDown");
            $("#video_01").removeClass("animate__animated animate__fadeInLeft");
            $("#video_02").removeClass("animate__animated animate__fadeInRight");
        }
        if (scroll > (home_height + whoAmI_height + skill + wd_height + wde_height + gd_height + gde_height + uiux_height + 100)) {
            $("#uiuxTitle").removeClass("animate__animated animate__fadeInLeft");
            $("#uiuxDesign").removeClass("animate__animated animate__fadeInLeft");
            $(".uiux-text").removeClass("animate__animated animate__fadeInRight");

            $("#videoTitle").addClass("animate__animated animate__zoomInDown");
            $("#video_01").addClass("animate__animated animate__fadeInLeft");
            $("#video_02").addClass("animate__animated animate__fadeInRight");

        }
    });




});

