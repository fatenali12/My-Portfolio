$(function() {

    // Preloader Spin

    setTimeout(function() {
        $('.preloaderspin').fadeToggle();
    }, 2000);

    // Change logo Color on Click Menu Button

    $('.navbar-toggler').on('click', function() {
        $('.port-logo').toggleClass('blueColor');

    });

    // Dark Mood

    $('.switch').on('click', function() {

        $('body').toggleClass('dark-mood');
        $('.navbar').toggleClass('dark-mood');
        $('.landing').toggleClass('dark-mood');
        $('.footer').toggleClass('dark-mood');

        var theme;

        if ($('body').hasClass('dark-mood') && $('.navbar').hasClass('dark-mood') &&
            $('.landing').hasClass('dark-mood') && $('.footer').hasClass('dark-mood')) {

            theme = 'DARK';
        } else {

            theme = 'LIGHT';
        }

        // Save To Local Storage
        localStorage.setItem('PageTheme', JSON.stringify(theme));

    });
    let getTheme = JSON.parse(localStorage.getItem('PageTheme'));


    if (getTheme === 'DARK') {

        $('body').addClass('dark-mood');
        $('.navbar').addClass('dark-mood');
        $('.landing').addClass('dark-mood');
        $('.footer').addClass('dark-mood');


    }



    // Landing Animate


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.animated')[0].classList.add('fadeInLeft');
                $('.animated')[1].classList.add('fadeInRight');
            } else {
                $('.animated')[0].classList.remove('fadeInLeft');
                $('.animated')[1].classList.remove('fadeInRight');
            }
        })
    });

    observer.observe($('.landing')[0]);

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             document.querySelectorAll('.animated')[0].classList.add('fadeInLeft');
    //             document.querySelectorAll('.animated')[1].classList.add('fadeInRight');
    //         }
    //     })
    // })

    // observer.observe(document.querySelector('.landing'));
    // threshold:1


    // About Animate

    const aboutobserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.animate1')[0].classList.add('show');
                $('.animate1')[1].classList.add('show');
                $('.animate1')[2].classList.add('show');
            } else {
                $('.animate1')[0].classList.remove('show');
                $('.animate1')[1].classList.remove('show');
                $('.animate1')[2].classList.remove('show');
            }
        })

    });

    aboutobserver.observe($('.about-me')[0]);


    // Skill Animate

    const skillobserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.skill-animate')[0].classList.add('show-skills');

            } else {
                $('.skill-animate')[0].classList.remove('show-skills');

            }
        })

    });

    skillobserver.observe($('.skills')[0]);


    // Portfolio Animate

    const portfolioobserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.portfo-animate')[0].classList.add('portfo-fadeInUp');
                $('.portfo-animate')[1].classList.add('portfo-fadeInUp');
                $('.portfo-animate')[2].classList.add('portfo-fadeInUp');
                $('.portfo-animate')[3].classList.add('portfo-fadeInUp');
                $('.portfo-animate')[4].classList.add('portfo-fadeInUp');

            } else {
                $('.portfo-animate')[0].classList.remove('portfo-fadeInUp');
                $('.portfo-animate')[1].classList.remove('portfo-fadeInUp');
                $('.portfo-animate')[2].classList.remove('portfo-fadeInUp');
                $('.portfo-animate')[3].classList.remove('portfo-fadeInUp');
                $('.portfo-animate')[4].classList.remove('portfo-fadeInUp');

            }
        })

    });

    portfolioobserver.observe($('.my-works')[0]);


    // Contact Me Animate

    const contactObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.cont-animate')[0].classList.add('fadeInLeft');
                $('.cont-animate')[1].classList.add('fadeInUp');
                $('.cont-animate')[2].classList.add('fadeInUp');
                $('.cont-animate')[3].classList.add('fadeInRight');
                $('.cont-animate')[4].classList.add('fadeInUp');

            }

        })
    });

    contactObserver.observe($('.contact-me')[0]);

    // Animated Progress

    $('.skill-progress span').each(function() {
        $(this).animate({
            width: $(this).attr('data-progress')
        }, 2000)

    });





    // Up Button

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('.up-btn').fadeIn();
        } else {
            $('.up-btn').fadeOut();
        }
    });

    $('.up-btn').click(function() {
        $(window).scrollTop({
            top: 0,
            behavior: 'smooth'
        });
    });


    // let span = document.querySelector('.up-btn');
    // window.onscroll = function() {
    //     console.log(this.screenY);
    //     if (this.screenY >= 1000) {
    //         span.classlist.add('show');
    //     }
    // };



    // Owl Carousel

    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            animateIn: true,
            loop: true,
            nav: true,
            dots: true,
            items: 3,
            margin: 30,
            autoplay: true,
            smartSpeed: 700,
            autoplayHoverPause: true,
            autoplayTimeout: 6000,

            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    margin: 50
                },
                992: {
                    items: 3,
                    margin: 100
                }
            }
        });
    }

    // $('.owl-carousel').owlCarousel({

    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 2000,
    //     // margin: 5,
    //     nav: true,
    //     // center: true,

    //     rtl: false,
    //     autoWidth: true,

    //     dots: true,
    //     autoplayHoverPause: true,

    //     responsive: {
    //         0: {
    //             items: 1,

    //         },
    //         568: {
    //             items: 2,

    //         },
    //         768: {
    //             items: 3,
    //         },
    //         1000: {
    //             items: 3,

    //         }
    //     }
    // });



    // TypeWritter
    var typed = new Typed('.auto-type', {
        strings: ['a Full Stack Developer ..'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });



});