$(document).ready(function() {
  // Initialisation du carousel
  $('.carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false
          }
      }]
  });

  // Animation smooth scroll pour la navigation
  $('nav a').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 800);
  });

  // Animation des barres de progression des compétences
  function animateSkills() {
      $('.progress').each(function() {
          $(this).animate({
              width: $(this).css('width')
          }, 1000);
      });
  }

  // Déclencher l'animation des compétences au scroll
  let skillsAnimated = false;
  $(window).scroll(function() {
      const skillsSection = $('#competences');
      if (!skillsAnimated && $(window).scrollTop() + $(window).height() > skillsSection.offset().top) {
          animateSkills();
          skillsAnimated = true;
      }
  });

  // Gestion du formulaire de contact
  $('.contact-form').submit(function(e) {
      e.preventDefault();
      // Ici, vous pouvez ajouter le code pour traiter l'envoi du formulaire
      alert('Message envoyé !');
      this.reset();
  });
});