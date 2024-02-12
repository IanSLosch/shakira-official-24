// import "owl.carousel"
// import moment from 'moment'
// import "magnific-popup"
// import "./instagram"


jQuery(document).ready(function ($) {
  // //instagram
  // $("#instagram-feed").juicer()

  // // Mobile Navigation
  // $(".mobile-menu-icon").on('click', function (e) {
  //   e.preventDefault();
  //   $("#navbar").toggleClass("active");
  // });

  // // Music Carousel
  // $('#music-carousel').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   dots: false,
  //   margin: 55,
  //   items: 1,
  //   startPosition: 1,
  //   center: true,
  //   navText: [
  //     '<div class="owl-custom-nav-prev"><i class="fal fa-chevron-left"></i></div>',
  //     '<div class="owl-custom-nav-next"><i class="fal fa-chevron-right"></i></div>'
  //   ]
  // })

  // // Video Carousel
  // $('#videos-carousel').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   dots: false,
  //   items: 1,
  //   startPosition: 1,
  //   center: true,
  //   // responsive: {
  //   //   0: {
  //   //     margin: 20
  //   //   },
  //   //   700: {
  //   //     margin: 80
  //   //   }
  //   // },
  //   navText: [
  //     '<div class="owl-custom-nav-prev"><i class="fal fa-chevron-left"></i></div>',
  //     '<div class="owl-custom-nav-next"><i class="fal fa-chevron-right"></i></div>'
  //   ]
  // })

  // // Tourdate Import
  // $.ajax({
  //   url: 'https://rest.bandsintown.com/artists/id_6748623/events?app_id=45PRESS_doja',
  //   // url: 'https://rest.bandsintown.com/artists/id_473523/events?app_id=45PRESS_bia',
  //   method: 'GET',
  //   dataType: 'json',
  //   error: () => {
  //     alert('Error fetching events!');
  //   }, 
  //   success: data => {
  //     const events = $('#tour-dates');
  //     let html = '';
  //     let n = 0
  //     if (data.length) {
  //       for (let event of data) {
  //         n++
  //         html += '<div class="event-group">';
  //         html += '<div class="event-date">' + moment(event.datetime).format('MMM DD').toUpperCase() + '</div>';
  //         html += '<div class="event-venue">' + event.venue.name.toUpperCase() + '</div>';
  //         html += '<div class="event-location">' + event.venue.location.toUpperCase() + '</div>';
  //         html += '<div class="event-links">';
  //         for (let offer of event.offers) {
  //           html += '<a href="' + offer.url + '" target="_blank" class="link">' + offer.type.toUpperCase() + '</a>';
  //         }
  //         html += '</div>';
  //         html += '</div>';
  //       }
  //       events.html(html);
  //     } else {
  //       events.html('<span class="no-events">Check back soon for new shows!</span>');
  //     }
  //     if (n<9) { 
  //       $("#toggle-dates").hide(); 
  //     }
  //   }
  // });

  // // Scroll
  // $('.scroll').on('click', function (e) {
  //   e.preventDefault();

  //   const href = $(this).attr('href');
  //   const targetOffset = $(href).offset().top;
  //   const animationDuration = 500;

  //   $(".navbar").toggleClass("active");
  //   $('html, body').animate({
  //     scrollTop: targetOffset
  //   },
  //     animationDuration
  //   )
  // });

  // // Youtube embed extract
  // $('.video-switch a').on('click', function (e) {
  //   e.preventDefault();
  //   $('.feature-video').attr('src', "https://www.youtube.com/embed/" + $(this).attr('data-videoid'));
  //   $('.feature-title').html($(this).attr('data-title'));
  // })
  
  // // Dates Toggle
  // // $('#tour-dates div:lt(9)').show()

  // $('#toggle-dates').on('click', function (e) {
  //   e.preventDefault();
  //   $('#tour-dates').toggleClass('show-first-nine')
  //   if ($('#tour-dates').hasClass('show-first-nine')) {
  //     $('#toggle-dates').text('VIEW ALL DATES')
  //   } else {
  //     $('#toggle-dates').text('SHOW LESS');
  //   }
  // })

  // $('#toggle-bio').on('click', function (e) {
  //   e.preventDefault();
  //   $('#bio').toggleClass('show-less')
  //   if ($('#bio').hasClass('show-less')) {
  //     $('#toggle-bio').text('READ MORE')
  //   } else {
  //     $('#toggle-bio').text('SHOW LESS');
  //   }
  // })

  // hide 'show more dates' button
  // if ($("#tour-dates").children().length < 9) {
  //   $("#toggle-dates").hide();
  // }

   // Modal
  //  $('.mfp-inline').magnificPopup({
  //   fixedContentPos: true
  // })
  // $('.custom-close').on('click', function () {
  //   $.magnificPopup.close();
  // })

  // pop-up
  // $.magnificPopup.open({
  //   items: {
  //     src: '#nl-popup'
  //   },
  //   type: 'inline',
  //   fixedContentPos: true
  // })

});