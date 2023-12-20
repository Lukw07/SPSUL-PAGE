(function($) {
    $('.js-nav-menu-toggle').on('click', function() {
      $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
    });
    
    $('html').on('click', function(e) {
      if(!$(e.target).closest('.js-nav-menu').length &&
        ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
          $('.js-nav-menu').removeClass('navigation-menu--open');
      }
    });
  })(jQuery);
  let count = 0;
    const gap = 45;
    const flipElement = document.getElementById("flip");
    setInterval(function() {
      if (count == flipElement.children.length-1) count = 0;
      else count++;
      size = 0;
      for (let i = 0; i < count; i++) {
        size += flipElement.children[i].offsetHeight+gap;
      }
      flipElement.children[0].style.marginTop = `${-size}px`;
    }, 5000);