// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true, // show arrows by default (desktop)
//     responsive: [
//       {
//         breakpoint: 768, // mobile devices
//         settings: {
//           arrows: false, // hide arrows on mobile
//         },
//       },
//     ],
//   };

//   const slidesData = [
//     { image: '/images/Sli1der.jpg', caption: 'Find your dream home' },
//     { image: '/images/Sli2der.jpg', caption: 'Best properties in every city' },
//     { image: '/images/Sli3der.jpg', caption: 'Affordable prices and loans' },
//     { image: '/images/Sli4der.jpg', caption: 'Affordable prices and loans' },
//   ];

//   return (
//     <div style={{ maxWidth: '1200px', margin: '20px auto' }}>
//       <Slider {...settings}>
//         {slidesData.map((slide, i) => (
//           <div key={i} style={{ position: 'relative' }}>
//             <img
//               src={slide.image}
//               alt={`Slide ${i + 1}`}
//               style={{ width: '100%', borderRadius: '8px' }}
//             />
//             <h2
//               style={{
//                 position: 'absolute',
//                 bottom: '20px',
//                 left: '30px',
//                 color: 'white',
//                 textShadow: '2px 2px 6px rgba(0,0,0,0.75)',
//               }}
//             >
//               {slide.caption}
//             </h2>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Banner;
