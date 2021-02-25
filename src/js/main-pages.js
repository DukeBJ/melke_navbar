
/* top-button */

        var burger = $('.top-button, .menu-button');

        burger.each(function(index){
            var $this = $(this);

            $this.on('click', function(e){
                e.preventDefault();
                $(this).toggleClass('active-' + (index+1));
            })
        });

/* menu */

        $(function() {
            $('.top-button, .menu-button').click(function(){
                $('#menu').fadeToggle(300);
            });
        });

/* menu box - hover */

        $(function() {
            $('span.nav, .nav-box-w.systems').mouseenter(function () {
                $('.nav-box-w.systems').stop().fadeIn(300);
            });

            $('span.nav, .nav-box-w.systems').mouseleave(function () {
                $('.nav-box-w.systems').stop().fadeOut(300);
            });
        });

        $(function() {
            $('a.about-item, .nav-box-w.about').mouseenter(function () {
                $('.nav-box-w.about').stop().fadeIn(300);
            });

            $('a.about-item, .nav-box-w.about').mouseleave(function () {
                $('.nav-box-w.about').stop().fadeOut(300);
            });
        });

        $(function() {
            $('.nav-box').mouseenter(function () {
                $(this).find('.nav-box-list').stop().fadeIn(300);
            });

            $('.nav-box').mouseleave(function () {
                $(this).find('.nav-box-list').stop().fadeOut(300);
            });
        });

        $('.menu-right h3').on('click', function() {
            if (!$(this).hasClass('open')) { // если класса нет

                $('.menu-right h3').removeClass('open');
                $('.menu-right h3').children('.cl').removeClass('cl-open');
                $('.menu-right p').slideUp(300);

                $(this).addClass('open'); // добавляем класс
                $(this).children('.cl').addClass('cl-open');
                $(this).next('p').slideDown(300);

            } else { // если есть

                $('.menu-right h3').removeClass('open');
                $('.menu-right h3').children('.cl').removeClass('cl-open');
                $('.menu-right p').slideUp(300);

                $(this).removeClass('open'); // убираем класс
                $(this).children('.cl').removeClass('cl-open');
                $(this).next('p').slideUp(300);
            }
        });


/* play pause video */

$( document ).ready(function() {
    var video = $('#video');
    var WindowWidth = $(window).width();
    if (WindowWidth < 1200) {
        video.append("<source src='/video/mobile.mp4' type='video/mp4' >");
    } else {
        video.append("<source src='/video/bg.mp4' type='video/mp4' >");
    }

    var v = document.getElementById('video');
    if (v) {
        var vv = document.getElementById('play-button');
        v.pause()
        v.firstChild.nodeValue = "Play";

        vv.addEventListener('click', function (e) {
            if (!v.paused) {
                console.log("pause playback");
                v.pause();
                v.firstChild.nodeValue = 'Pause';

                $('#play-button').removeClass('play').addClass('pause');
                $('#video-w').css({ opacity: "0" });

                $("#home h1").fadeIn(500);
                $(".mute").fadeOut(100);

            } else {
                console.log("start playback")
                v.play();
                v.firstChild.nodeValue = 'Play';

                $('#play-button').removeClass('pause').addClass('play');
                $('#video-w').css({ opacity: "1" });

                $("#home h1").fadeOut(100);
                $(".mute").fadeIn(500);

            }
        });
    }

    $(".mute").click(function() {
        $(this).toggleClass("muted");
        if($(this).hasClass("muted")) {
            v.muted = true;
        } else {
            v.muted = false;
        }
        
    })

});

/* setInterval animate */

$(function () {
    setInterval(function () {
        $('.scroll-button').animate({ opacity: '0.25', y: '-20px' }, 700);
        $('.scroll-button').animate({ opacity: '1', y: '0' }, 700);
    });
});

/* scroll-button */

$(function () {
    $('.scroll-button').click(function () {
        $("html, body").stop().animate({
            scrollTop: $($('#tabs-w')).offset().top - 0
        }, {
            duration: 700
        });
        return false;
    });
});

/* tabs */

$(function () {
    $('.tab-1, .tab-2, .tab-3, .tab-4, .tab-5').click(function () {
        $(this).parent().children().removeClass('tab-active');
        $(this).addClass('tab-active');
    });
});

$(function () {
    $('#play-button').click(function () {
        $(this).toggleClass('play');
        $(this).toggleClass('pause');
    });
});
/* Swiper slider */

        if ($(window).width() < 1020) {
            $(function() {
                var swiper = new Swiper('#lamination .swiper-container', {
                    breakpoints: {
                        1020: {
                            pagination: {
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                            },
                            speed: 700,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            loop:true,
                            autoHeight: true,
                            centeredSlides:true,
                            slidesPerView: 10,
                            slidesPerGroup:10,
                            spaceBetween: 10
                        },
                        720: {
                            pagination: {
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                            },
                            speed: 700,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            loop:true,
                            autoHeight: true,
                            centeredSlides:true,
                            slidesPerView: 5,
                            slidesPerGroup:5,
                            spaceBetween: 10
                        }
                    }
                });
            });
            // Тут код для больших разрешений
        } else {
            // Тут код для маленьких экранов
        }

/* lamination color */

        $(function() {
            $('#lamination .color').click(function(){
                $('.color').removeClass('color-active');
                $('.window-img').children('img').removeClass('window-img-active');
                $('#lamination h4').children('.color-name').removeClass('color-name-active');
            });
        });

        $(function() {
            $('#lamination .color-1').click(function(){
                $(this).addClass('color-active');
                $('.window-img-1').addClass('window-img-active');
                $('#lamination h4').children('.color-name-1').addClass('color-name-active');
            });
        });

        $(function() {$('#lamination .color-2').click(function(){$(this).addClass('color-active');$('.window-img-2').addClass('window-img-active');$('#lamination h4').children('.color-name-2').addClass('color-name-active');});});
        $(function() {$('#lamination .color-3').click(function(){$(this).addClass('color-active');$('.window-img-3').addClass('window-img-active');$('#lamination h4').children('.color-name-3').addClass('color-name-active');});});
        $(function() {$('#lamination .color-4').click(function(){$(this).addClass('color-active');$('.window-img-4').addClass('window-img-active');$('#lamination h4').children('.color-name-4').addClass('color-name-active');});});
        $(function() {$('#lamination .color-5').click(function(){$(this).addClass('color-active');$('.window-img-5').addClass('window-img-active');$('#lamination h4').children('.color-name-5').addClass('color-name-active');});});
        $(function() {$('#lamination .color-6').click(function(){$(this).addClass('color-active');$('.window-img-6').addClass('window-img-active');$('#lamination h4').children('.color-name-6').addClass('color-name-active');});});
        $(function() {$('#lamination .color-7').click(function(){$(this).addClass('color-active');$('.window-img-7').addClass('window-img-active');$('#lamination h4').children('.color-name-7').addClass('color-name-active');});});
        $(function() {$('#lamination .color-8').click(function(){$(this).addClass('color-active');$('.window-img-8').addClass('window-img-active');$('#lamination h4').children('.color-name-8').addClass('color-name-active');});});
        $(function() {$('#lamination .color-9').click(function(){$(this).addClass('color-active');$('.window-img-9').addClass('window-img-active');$('#lamination h4').children('.color-name-9').addClass('color-name-active');});});
        $(function() {$('#lamination .color-10').click(function(){$(this).addClass('color-active');$('.window-img-10').addClass('window-img-active');$('#lamination h4').children('.color-name-10').addClass('color-name-active');});});

        $(function() {$('#lamination .color-11').click(function(){$(this).addClass('color-active');$('.window-img-11').addClass('window-img-active');$('#lamination h4').children('.color-name-11').addClass('color-name-active');});});
        $(function() {$('#lamination .color-12').click(function(){$(this).addClass('color-active');$('.window-img-12').addClass('window-img-active');$('#lamination h4').children('.color-name-12').addClass('color-name-active');});});
        $(function() {$('#lamination .color-13').click(function(){$(this).addClass('color-active');$('.window-img-13').addClass('window-img-active');$('#lamination h4').children('.color-name-13').addClass('color-name-active');});});
        $(function() {$('#lamination .color-14').click(function(){$(this).addClass('color-active');$('.window-img-14').addClass('window-img-active');$('#lamination h4').children('.color-name-14').addClass('color-name-active');});});
        $(function() {$('#lamination .color-15').click(function(){$(this).addClass('color-active');$('.window-img-15').addClass('window-img-active');$('#lamination h4').children('.color-name-15').addClass('color-name-active');});});
        $(function() {$('#lamination .color-16').click(function(){$(this).addClass('color-active');$('.window-img-16').addClass('window-img-active');$('#lamination h4').children('.color-name-16').addClass('color-name-active');});});
        $(function() {$('#lamination .color-17').click(function(){$(this).addClass('color-active');$('.window-img-17').addClass('window-img-active');$('#lamination h4').children('.color-name-17').addClass('color-name-active');});});
        $(function() {$('#lamination .color-18').click(function(){$(this).addClass('color-active');$('.window-img-18').addClass('window-img-active');$('#lamination h4').children('.color-name-18').addClass('color-name-active');});});
        $(function() {$('#lamination .color-19').click(function(){$(this).addClass('color-active');$('.window-img-19').addClass('window-img-active');$('#lamination h4').children('.color-name-19').addClass('color-name-active');});});
        $(function() {$('#lamination .color-20').click(function(){$(this).addClass('color-active');$('.window-img-20').addClass('window-img-active');$('#lamination h4').children('.color-name-20').addClass('color-name-active');});});

        $(function() {$('#lamination .color-21').click(function(){$(this).addClass('color-active');$('.window-img-21').addClass('window-img-active');$('#lamination h4').children('.color-name-21').addClass('color-name-active');});});
        $(function() {$('#lamination .color-22').click(function(){$(this).addClass('color-active');$('.window-img-22').addClass('window-img-active');$('#lamination h4').children('.color-name-22').addClass('color-name-active');});});
        $(function() {$('#lamination .color-23').click(function(){$(this).addClass('color-active');$('.window-img-23').addClass('window-img-active');$('#lamination h4').children('.color-name-23').addClass('color-name-active');});});
        $(function() {$('#lamination .color-24').click(function(){$(this).addClass('color-active');$('.window-img-24').addClass('window-img-active');$('#lamination h4').children('.color-name-24').addClass('color-name-active');});});
        $(function() {$('#lamination .color-25').click(function(){$(this).addClass('color-active');$('.window-img-25').addClass('window-img-active');$('#lamination h4').children('.color-name-25').addClass('color-name-active');});});
        $(function() {$('#lamination .color-26').click(function(){$(this).addClass('color-active');$('.window-img-26').addClass('window-img-active');$('#lamination h4').children('.color-name-26').addClass('color-name-active');});});
        $(function() {$('#lamination .color-27').click(function(){$(this).addClass('color-active');$('.window-img-27').addClass('window-img-active');$('#lamination h4').children('.color-name-27').addClass('color-name-active');});});
        $(function() {$('#lamination .color-28').click(function(){$(this).addClass('color-active');$('.window-img-28').addClass('window-img-active');$('#lamination h4').children('.color-name-28').addClass('color-name-active');});});
        $(function() {$('#lamination .color-29').click(function(){$(this).addClass('color-active');$('.window-img-29').addClass('window-img-active');$('#lamination h4').children('.color-name-29').addClass('color-name-active');});});
        $(function() {$('#lamination .color-30').click(function(){$(this).addClass('color-active');$('.window-img-30').addClass('window-img-active');$('#lamination h4').children('.color-name-30').addClass('color-name-active');});});

        $(function() {$('#lamination .color-31').click(function(){$(this).addClass('color-active');$('.window-img-31').addClass('window-img-active');$('#lamination h4').children('.color-name-31').addClass('color-name-active');});});
        $(function() {$('#lamination .color-32').click(function(){$(this).addClass('color-active');$('.window-img-32').addClass('window-img-active');$('#lamination h4').children('.color-name-32').addClass('color-name-active');});});
        $(function() {$('#lamination .color-33').click(function(){$(this).addClass('color-active');$('.window-img-33').addClass('window-img-active');$('#lamination h4').children('.color-name-33').addClass('color-name-active');});});
        $(function() {$('#lamination .color-34').click(function(){$(this).addClass('color-active');$('.window-img-34').addClass('window-img-active');$('#lamination h4').children('.color-name-34').addClass('color-name-active');});});
        $(function() {$('#lamination .color-35').click(function(){$(this).addClass('color-active');$('.window-img-35').addClass('window-img-active');$('#lamination h4').children('.color-name-35').addClass('color-name-active');});});
        $(function() {$('#lamination .color-36').click(function(){$(this).addClass('color-active');$('.window-img-36').addClass('window-img-active');$('#lamination h4').children('.color-name-36').addClass('color-name-active');});});
        $(function() {$('#lamination .color-37').click(function(){$(this).addClass('color-active');$('.window-img-37').addClass('window-img-active');$('#lamination h4').children('.color-name-37').addClass('color-name-active');});});
        $(function() {$('#lamination .color-38').click(function(){$(this).addClass('color-active');$('.window-img-38').addClass('window-img-active');$('#lamination h4').children('.color-name-38').addClass('color-name-active');});});
        $(function() {$('#lamination .color-39').click(function(){$(this).addClass('color-active');$('.window-img-39').addClass('window-img-active');$('#lamination h4').children('.color-name-39').addClass('color-name-active');});});
        $(function() {$('#lamination .color-40').click(function(){$(this).addClass('color-active');$('.window-img-40').addClass('window-img-active');$('#lamination h4').children('.color-name-40').addClass('color-name-active');});});

        $(function() {$('#lamination .color-41').click(function(){$(this).addClass('color-active');$('.window-img-41').addClass('window-img-active');$('#lamination h4').children('.color-name-41').addClass('color-name-active');});});
        $(function() {$('#lamination .color-42').click(function(){$(this).addClass('color-active');$('.window-img-42').addClass('window-img-active');$('#lamination h4').children('.color-name-42').addClass('color-name-active');});});
        $(function() {$('#lamination .color-43').click(function(){$(this).addClass('color-active');$('.window-img-43').addClass('window-img-active');$('#lamination h4').children('.color-name-43').addClass('color-name-active');});});
        $(function() {$('#lamination .color-44').click(function(){$(this).addClass('color-active');$('.window-img-44').addClass('window-img-active');$('#lamination h4').children('.color-name-44').addClass('color-name-active');});});
        $(function() {$('#lamination .color-45').click(function(){$(this).addClass('color-active');$('.window-img-45').addClass('window-img-active');$('#lamination h4').children('.color-name-45').addClass('color-name-active');});});
        $(function() {$('#lamination .color-46').click(function(){$(this).addClass('color-active');$('.window-img-46').addClass('window-img-active');$('#lamination h4').children('.color-name-46').addClass('color-name-active');});});
        $(function() {$('#lamination .color-47').click(function(){$(this).addClass('color-active');$('.window-img-47').addClass('window-img-active');$('#lamination h4').children('.color-name-47').addClass('color-name-active');});});
        $(function() {$('#lamination .color-48').click(function(){$(this).addClass('color-active');$('.window-img-48').addClass('window-img-active');$('#lamination h4').children('.color-name-48').addClass('color-name-active');});});
        $(function() {$('#lamination .color-49').click(function(){$(this).addClass('color-active');$('.window-img-49').addClass('window-img-active');$('#lamination h4').children('.color-name-49').addClass('color-name-active');});});
        $(function() {$('#lamination .color-50').click(function(){$(this).addClass('color-active');$('.window-img-50').addClass('window-img-active');$('#lamination h4').children('.color-name-50').addClass('color-name-active');});});

/* form validate */

        $(function() {
            $('#form').validate(
                {
                    rules: {
                        "name": {
                            required: true,
                            maxlength: 40
                        },
                        "email": {
                            required: true,
                            email: true,
                            maxlength: 100
                        }
                    },
                    messages: {
                        "name": {
                            required: ""
                        },
                        "email": {
                            required: "",
                            email: ""
                        }
                    }
                });
        });

/* end */