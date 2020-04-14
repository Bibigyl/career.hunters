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


  // services cards
  new Waypoint({
    element: document.getElementById('work'),
    offset: 700,
    handler: function(direction) {

      const $workCards = $('#work .work__item');

      for (let i = 0; i < $workCards.length; i++ ) {
        setTimeout(() => {
          $workCards.eq(i).addClass('animated fadeInUp');
        }, 200*i)
      }
    
    }
  });

  // review cards
  new Waypoint({
    element: document.getElementById('reviews'),
    offset: 700,
    handler: function(direction) {

      const $revCards = $('#reviews .rev');

      for (let i = 0; i < $revCards.length; i++ ) {
        setTimeout(() => {
          $revCards.eq(i).addClass('animated zoomIn opa1');
        }, 300*i)
      }
    
    }
  });


});







