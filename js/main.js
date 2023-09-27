
// $('.plan-carousel-two').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:true,
//     center:true,
//     dots:false,
//     navText:["<img src='/img/arrow/left.svg'>" , "<img src='/img/arrow/arrow_right.svg'>"],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// });

// $('.plan-carousel-one').owlCarousel({
//     loop:true,
//     margin:50,
//     nav:false,
//     dots:false,
//     stagePadding: 50,
//     center:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// });

// // logo area active

// $('.logo-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     },
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true
// });
// const counterElements = [
//     document.getElementById('counter1'),
//     document.getElementById('counter2'),
//     document.getElementById('counter3'),
//     document.getElementById('counter4')
//   ];
//   const fixedNumbers = [100, 500, 350, 150];
//   const counters = [0, 0, 0, 0];

//   function incrementCounter(index) {
//     counters[index]++;
//     counterElements[index].textContent = counters[index];

//     if (counters[index] === fixedNumbers[index]) {
//       clearInterval(intervalIds[index]);
//     }
//   }

//   const intervalIds = [
//     setInterval(() => incrementCounter(0), 10),
//     setInterval(() => incrementCounter(1), 20),
//     setInterval(() => incrementCounter(2), 30),
//     setInterval(() => incrementCounter(3), 40)
//   ];


// magnific popup
$('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});


