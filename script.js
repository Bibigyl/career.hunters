$('document').ready(function () {
    // header
    document.onscroll = function () {
        let menu = document.querySelector('.header');

        if (window.scrollY > 150 && !menu.classList.contains('header_slim')) {
            menu.classList.add('header_slim');
        }

        if (window.scrollY <= 150 && menu.classList.contains('header_slim')) {
            menu.classList.remove('header_slim');
        }
    };


    // button order
    $('.button_order').on('click', () => {
        $('a[href="#order"]').trigger('click');
    })


    // scroll
    jQuery(window).scroll(function () {

        if (window.screen.availWidth < 988) return;

        var $sections = $('section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    $('nav, .header__logo, .footer__logo ').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 83;
        $('body,html').animate({ scrollTop: top }, 600);
    });

    $()


    // services cards
    new Waypoint({
        element: document.getElementById('work'),
        offset: 500,
        handler: function (direction) {
            const $workCards = $('#work .work__item');

            for (let i = 0; i < $workCards.length; i++) {
                setTimeout(() => {
                    $workCards.eq(i).addClass('animated zoomIn visible');
                }, 200 * i);
            }
        },
    });


    // review cards
    new Waypoint({
        element: document.getElementById('reviews'),
        offset: 700,
        handler: function (direction) {
            const $revCards = $('#reviews .rev');

            for (let i = 0; i < $revCards.length; i++) {
                setTimeout(() => {
                    $revCards.eq(i).addClass('animated zoomIn visible');
                }, 300 * i);
            }
        },
    });

    // individual
    new Waypoint({
        element: document.getElementById('ind'),
        offset: 600,
        handler: function (direction) {
            $('#ind .ind__img').addClass('animated fadeInLeft fast visible');
        },
    });

    new Waypoint({
        element: document.getElementById('ind'),
        offset: 600,
        handler: function (direction) {
            $('#ind .ind__content').addClass('animated fadeInRight fast visible');
        },
    });

    // Us
    new Waypoint({
        element: document.getElementById('us'),
        offset: 600,
        handler: function (direction) {
            $('#us .us__img').addClass('animated fadeInRight fast visible');
        },
    });

    new Waypoint({
        element: document.getElementById('us'),
        offset: 600,
        handler: function (direction) {
            $('#us .us__content').addClass('animated fadeInLeft fast visible');
        },
    });

    // copyright
    document.getElementById("yearNow").innerHTML = new Date().getFullYear();


    // burger
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('#menu').toggleClass('menu_open');
    });

    $('.header__nav-link').on('click', () => {
        if ( $('#menu').hasClass('menu_open') ) {
            setTimeout( () => {
                $('#hamburger-1').trigger('click');
            }, 300);
        }
    }); 


	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
