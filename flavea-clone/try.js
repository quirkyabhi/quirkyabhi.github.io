// ---- NAVIGATION MENU ---- //




const menu = document.getElementById('menuNav');
const overlay = document.getElementById('menu-overlay');
const navBtn = document.getElementById('nav');
const main = document.getElementById('menu-overlay');
const cover = document.getElementById('menu-cover');
const menuItem = document.querySelectorAll("#menuNav ol li");
const header = document.querySelector(".header-wrap");
const clsBtn = document.getElementById('navClose');
const address = menu.querySelector('.address');
const innerLinks = menu.querySelectorAll('.inner_link');

navMenu();

function navMenu() {


    for (var i = innerLinks.length - 1; i >= 0; i--) {
        var innerLink = innerLinks[i];
        innerLink.addEventListener('click', function (e) {
            closeMenu();
        });
    };


    navBtn.addEventListener('click', function (e) {
        openMenu();
    });
    clsBtn.addEventListener('click', function (e) {
        closeMenu();
    });


}

function openMenu() {

    var menuFade = document.querySelectorAll(".menu_fade");

    header.classList.add('menu_show')
    menu.classList.add('active');
    TweenMax.to(
        navBtn, .5,
        { opacity: 0, x: 100, ease: Power4.easeIn }
    );

    TweenMax.to(
        menuFade, .5,
        { opacity: 0, y: -20, ease: Power4.easeIn }
    );
    TweenMax.to(
        main, .5,
        { opacity: 1, ease: Power2.easeIn }
    );
    TweenMax.to(
        cover, 1,
        { opacity: 1, ease: Power2.easeIn }
    );
    TweenMax.to(
        menu, .5,
        { opacity: 1, delay: .5, ease: Power2.easeIn }
    );
    TweenMax.fromTo(
        address, 1,
        { opacity: 0, y: 0, yPercent: -40 },
        { opacity: 1, y: 0, yPercent: -50, delay: 1, ease: Power2.easeOut }
    );
    TweenMax.staggerFromTo(menuItem, 2, {
        y: 100,
        opacity: 0
    }, {
        y: "0px",
        opacity: 1,
        ease: Expo.easeOut,
        delay: .5
    }, .1)

}

function closeMenu() {

    var menuFade = document.querySelectorAll(".menu_fade");

    header.classList.remove('menu_show')

    menu.classList.remove('active');
    TweenMax.to(
        navBtn, 1.5,
        { opacity: 1, x: 0, delay: 1, ease: Power4.easeOut }
    );

    TweenMax.to(
        menuFade, 1.5,
        { opacity: 1, y: 0, delay: 1, ease: Power4.easeOut }
    );
    TweenMax.to(
        main, 1.5,
        { opacity: 0, delay: 1, ease: Power2.easeOut }
    );
    TweenMax.to(
        cover, 1.5,
        { opacity: 0, delay: 1, ease: Power2.easeOut }
    );
    TweenMax.to(
        menu, .5,
        { opacity: 0, delay: .5, ease: Power2.easeIn }
    );
    TweenMax.fromTo(
        address, .5,
        { opacity: 1, y: 0, yPercent: -50 },
        { opacity: 0, y: 0, yPercent: -40, ease: Power2.easeIn }
    );
    TweenMax.staggerTo(menuItem, .5, {
        y: 50,
        opacity: 0,
        ease: Power2.easeIn
    }, -.05)

}
// slider carousel
var swiper = new Swiper('.swiper-container', {
    speed: 2000,
    loop: true,
    grab: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.swiper-containerr', {
    slidesPerView: 2,
    parallax: true,
    speed:1000,
    centeredSlides: true,
    spaceBetween: 5,
    grabCursor: true,
    pagination: {
      el: '.swiper-paginationn',
      clickable: true,
    },
  });

//   $('.parallax-window').parallax({
//     naturalWidth: 600,
//     naturalHeight: 400,
//     // speed:.9
//   });
//   jQuery(window).trigger('resize').trigger('scroll');

function prev(){
    var previous = document.querySelectorAll(".swiper-button-prev");
    previous[0].click();
}

function next(){
    var nextone = document.querySelectorAll(".swiper-button-next");
    nextone[0].click();
}




















// var scene = document.getElementById("scene");
// var parallaxInstance = new Parallax(scene);

// var keys = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune"
// ];
// var slider = new Swiper(".swiper-container", {
//   // Optional parameters
//   slidesPerView: "auto",
//   spaceBetween: 150,
//   centeredSlides: true,
//   mousewheel: true,
//   pagination: {
//     el: ".planet-links",
//     clickable: true,
//     renderBullet: function(index, className) {
//       return '<div class="' + className + '">' + keys[index] + "</div>";
//     }
//   }
// });

// slider.on("slideChange", function() {
//   console.log("SLIDE CHANGED");
//   gsap.to(".slide-text span", 0.2, {
//     x: "-100px"
//   });
//   gsap.to(".slide-number span", 0.2, {
//     x: "-100px"
//   });
//   gsap.to(".slide-detail span", 0.5, {
//     x: "-1000px"
//   });
//   gsap.to(".slide-detail-facts div", 0.5, {
//     x: "-1000px"
//   });
//   gsap.to(".swiper-slide-active", 0.5, {
//     scale: 0.85
//   });
//   gsap.to(".swiper-slide .slide-img", 1, {
//     rotation: 20
//   });
// });

// slider.on("slideChangeTransitionEnd", function() {
//   gsap.to(".swiper-slide .slide-img", 1, {
//     rotation: 10
//   });
//   gsap.to(".slide-text span", 0.2, {
//     x: 0,
//     delay: 0.1
//   });
//   gsap.to(".slide-text span", 0, {
//     x: "100px"
//   });

//   gsap.to(".slide-number span", 0.2, {
//     x: 0
//   });
//   gsap.to(".slide-number span", 0, {
//     x: "100px"
//   });

//   gsap.to(".slide-detail span", 0.2, {
//     x: 0
//   });

//   gsap.to(".slide-detail-facts div", 0.5, {
//     x: 0
//   });

//   gsap.to(".swiper-slide-active", 0.5, {
//     scale: 1,
//     ease: Power4.easeOut
//   });

//   gsap.to(".swiper-slide-active .slide-text", 0, {
//     autoAlpha: 1
//   });
//   gsap.to(".swiper-slide-active .slide-number", 0, {
//     autoAlpha: 1
//   });

//   gsap.to(".swiper-slide-next .slide-text", 0, {
//     autoAlpha: 0
//   });
//   gsap.to(".swiper-slide-prev .slide-text", 0, {
//     autoAlpha: 0
//   });

//   gsap.to(".swiper-slide-next .slide-number", 0, {
//     autoAlpha: 0
//   });
//   gsap.to(".swiper-slide-prev .slide-number", 0, {
//     autoAlpha: 0
//   });
// });

// gsap.to(".rockbg1", 2, {
//   y: 12,
//   repeat: -1,
//   yoyo: true,
//   delay: 0
// });

// gsap.to(".swiper-slide-next .slide-text", 0, {
//   autoAlpha: 0
// });
// gsap.to(".swiper-slide-prev .slide-text", 0, {
//   autoAlpha: 0
// });

// gsap.to(".swiper-slide-next .slide-number", 0, {
//   autoAlpha: 0
// });
// gsap.to(".swiper-slide-prev .slide-number", 0, {
//   autoAlpha: 0
// });

// gsap.to(".swiper-slide", 0, {
//   scale: 0.85
// });

// gsap.to(".swiper-slide-active", 0, {
//   scale: 1
// });