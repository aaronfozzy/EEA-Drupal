jQuery(document).ready(function($){

jQuery(".event-info").click(function(){
  jQuery(this).toggleClass("active");
});


// Accordion
jQuery('#accordion header').click(function() {

  if (jQuery(this).hasClass('open')) {
      jQuery(this).removeClass('open');
      jQuery('#accordion .field__item .node__content').stop(true, false).slideUp(); 
  } else {  
      jQuery('#accordion header').removeClass('open');
      jQuery('#accordion .field__item .node__content').slideUp();
      jQuery(this).addClass('open');
      jQuery(this).next('#accordion .field__item .node__content').slideDown();
  }
});


// Carousel
// if (window.location.pathname != '/forum'){
//     jQuery('.home-exhibitors-carousel .owl-carousel').owlCarousel({
//     center: true,
//     loop: true,
//     dots: false,
//     margin: 50,
//     autoplay: true,
//     autoplaySpeed: 200,
//     smartSpeed: 200,
//     responsive:{
//       0 : {
//         items: 1, 
//         center: true
//       },
//       728 : {
//         items: 3,
//         center: false
//       },
//       1024 : {
//         items: 4,
//         nav: true,
//         margin: 20,
//         center: false
//       }
//     }
//   });
// }

// Home section carousels
jQuery('.home-exhibitors-carousel .owl-carousel').owlCarousel({
  center: true,
  loop: true,
  dots: false,
  margin: 50,
  nav: false,
  autoplay: true,
  autoplaySpeed: 200,
  smartSpeed: 200,
  responsive:{
    0 : {
      items: 1, 
      center: true
    },
    728 : {
      items: 3,
      center: false
    },
    1024 : {
      items: 4,
      nav: true,
      margin: 20,
      center: false
    }
  }
});

jQuery('.additional-carousel-1 .owl-carousel').owlCarousel({
  center: true,
  loop: true,
  dots: false,
  margin: 50,
  nav: false,
  autoplay: true,
  autoplaySpeed: 200,
  smartSpeed: 200,
  responsive:{
    0 : {
      items: 1, 
      center: true
    },
    728 : {
      items: 3,
      center: false
    },
    1024 : {
      items: 4,
      nav: true,
      margin: 20,
      center: false
    }
  }
});

jQuery('.additional-carousel-2 .owl-carousel').owlCarousel({
  center: true,
  loop: true,
  dots: false,
  margin: 50,
  nav: false,
  autoplay: true,
  autoplaySpeed: 200,
  smartSpeed: 200,
  responsive:{
    0 : {
      items: 1, 
      center: true
    },
    728 : {
      items: 3,
      center: false
    },
    1024 : {
      items: 4,
      nav: true,
      margin: 20,
      center: false
    }
  }
});

jQuery('.additional-carousel-3 .owl-carousel').owlCarousel({
  center: true,
  loop: true,
  dots: false,
  margin: 50,
  nav: false,
  autoplay: true,
  autoplaySpeed: 200,
  smartSpeed: 200,
  responsive:{
    0 : {
      items: 1, 
      center: true
    },
    728 : {
      items: 3,
      center: false
    },
    1024 : {
      items: 4,
      nav: true,
      margin: 20,
      center: false
    }
  }
});

jQuery('.view-id-homepage_section_3 .owl-carousel').owlCarousel({
  center: true,
  loop: true,
  dots: false,
  margin: 50,
  nav: false,
  autoplay: true,
  autoplaySpeed: 200,
  smartSpeed: 200,
  responsive:{
    0 : {
      items: 1, 
      center: true
    },
    728 : {
      items: 3,
      center: false
    },
    1024 : {
      items: 4,
      nav: true,
      margin: 20,
      center: false
    }
  }
});

// jQuery('.home-section-3 .owl-carousel').owlCarousel({
//   center: true,
//   loop: true,
//   dots: false,
//   margin: 50,
//   autoplay: true,
//   autoplaySpeed: 200,
//   smartSpeed: 200,
//   responsive:{
//     0 : {
//       items: 1, 
//       center: true
//     },
//     728 : {
//       items: 3,
//       center: false
//     },
//     1024 : {
//       items: 4,
//       nav: true,
//       margin: 20,
//       center: false
//     }
//   }
// });



// Remove anchor tag on FAQ items
jQuery('.node--type-faq-display .field__item header h2 a').removeAttr('href');

jQuery(".mob-init").click(function(){
  jQuery(".region-primary-menu").toggle();  
  jQuery(".featured-top__inner").toggle();
});

jQuery('.private_message_thread_delete_link_wrapper a').addClass("delete-thread");

// Add delete message button into inbox
if (window.location.href.indexOf ("inbox") >= 0){
  jQuery('.private_message_thread_delete_link_wrapper a').appendTo('.block-private-message-actions-block .content');
}

// Add description to title field on digital postcards
if (window.location.href.indexOf ("digital_postcard") >= 0){
  jQuery('<div class="extra-description">Max 50 characters</div>').insertBefore('#edit-title-0-value');
}

// Add forgotten password link to user log-in form
jQuery('<a href="/user/password">Forgot password?</a>').insertAfter('#user-login-form .form-actions input');
});

// Anchor and get query string for FAQ

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var target = getParameterByName('link');
// console.log(target);
jQuery("#" + target + " header").addClass("open");
jQuery("#" + target + " .node__content").show();


// Accordion
jQuery('.user-edit-dropdown').click(function() {
  jQuery(this).toggleClass("active");
  jQuery(this).find('.region-user-header-top').toggle();
});

// focus show

$('.menu-item--expanded span:first-child()').each(function() {               
    $(this).attr('tabindex', '0');
});

jQuery(".menu-item > span" ).focus(function() {
  jQuery(this).parent(".menu-item").addClass("show");
});
jQuery(".clearfix.menu > .menu-item > a" ).focus(function() {
  jQuery(".menu-item").removeClass("show");
});

// New accordion


jQuery(function() {
  jQuery('.js-accordion').accordion({
     headersSelector: '> .js-accordion__header', // relative to panel
     panelsSelector: '> .js-accordion__panel', // relative to wrapper
     buttonsSelector: '> button.js-accordion__header' // relative to wrapper 
  });
});
