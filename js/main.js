$(document).ready(function() {
    $(".nav-link,.dropdown-item").click(function() {
        var t = $(this).attr("href");
        $('.active').removeClass('active');
        $("html, body").animate({
            scrollTop: $(t).offset().top - 50
        }, {
            duration: 1e3,
        });

        $('body').scrollspy({ target: '#navbar-example2',offset: $(t).offset().top });
        $(this).parent().addClass('active');
        return false;
    });

});



//navbar
var distance = $('#site-header').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('#site-header').addClass('fixed-nav')
    }
    if ( $window.scrollTop() <= distance ) {
        $('#site-header').removeClass('fixed-nav')
    }
});


$('body').scrollspy({ target: '#navbar-example2',offset: 0 });


// import Vue from 'vue';
// import Demo from './components/demo.vue';
// import VueCarousel from './components/carousel.vue';

// Vue.component('demo', Demo);
// Vue.component(VueCarousel.name, VueCarousel);

// export default new Vue({
//   el: '#app',
//   render: createElement => createElement(App),
// });


// let colors = [
  //     {color: "rgb(255,0, 0)", name: 'blue'},
  //     {color: "rgb(255,0, 255)", name: 'red'},
  //     {color: "rgb(255,255, 0)", name: 'white'},
  //     {color: "rgb(255, 0, 255)", name: 'green'},
  //     {color: "rgb(0,255, 0)", name: 'yello'},
  //     {color: "rgb(0,0, 255)", name: 'dark'},
  // ];

  // let items = document.querySelectorAll(".portfolio-list .item");

  // for(var i = 0; i > items.length; i++){    
  //     items[i].classList.add(colors[i].name;
  //     );

// }
// particlesJS("particles-js", {
  //   "particles": {
  //     "number": {
  //       "value": 80,
  //       "density": {
  //         "enable": true,
  //         "value_area": 800
  //       }
  //     },
  //      "color": {
  //       "value": ["#9C27B0", "#2196F3", "#4CAF50", "#FFEB3B", "#FF9800", "#E91E63"]

  //     },
  //     "shape": {
  //       "type": "circle",
  //       "stroke": {
  //         "width": 0,
  //         "color": "#000000"
  //       },
  //       "polygon": {
  //         "nb_sides": 15
  //       },
  //       "image": {
  //         "src": "img/github.svg",
  //         "width": 100,
  //         "height": 100
  //       }
  //     },
  //     "opacity": {
  //       "value": 0.87,
  //       "random": false,
  //       "anim": {
  //         "enable": false,
  //         "speed": 1,
  //         "opacity_min": 0.15,
  //         "sync": false
  //       }
  //     },
  //     "size": {
  //       "value": 3,
  //       "random": false,
  //       "anim": {
  //         "enable": true,
  //         "speed": 2,
  //         "size_min": 1.5,
  //         "sync": false
  //       }
  //     },
  //     "line_linked": {
  //       "enable": true,
  //       "distance": 100,
  //       "color": "#e0e0e0",
  //       "opacity": 1,
  //       "width": 1.2
  //     },
  //     "move": {
  //       "enable": true,
  //       "speed": 5,
  //       "direction": "none",
  //       "random": true,
  //       "straight": false,
  //       "out_mode": "out",
  //       "bounce": false,
  //       "attract": {
  //         "enable": false,
  //         "rotateX": 600,
  //         "rotateY": 1200
  //       }
  //     }
  //   },
  //   "interactivity": {
  //     "detect_on": "canvas",
  //     "events": {
  //       "onhover": {
  //         "enable": true,
  //         "mode": "bubble"
  //       },
  //       "onclick": {
  //         "enable": true,
  //         "mode": "push"
  //       },
  //       "resize": true
  //     },
  //     "modes": {
  //       "grab": {
  //         "distance": 100,
  //         "line_linked": {
  //           "opacity": 1
  //         }
  //       },
  //       "bubble": {
  //         "distance": 10,
  //         "size": 5,
  //         "duration": 5,
  //         "opacity": 1,
  //         "speed": 1
  //       },
  //       "repulse": {
  //         "distance": 200,
  //         "duration": 0.4
  //       },
  //       "push": {
  //         "particles_nb": 4
  //       },
  //       "remove": {
  //         "particles_nb": 2
  //       }
  //     }
  //   },
  //   "retina_detect": true
// });

// requestAnimationFrame(update);


