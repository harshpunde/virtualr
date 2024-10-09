


import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">

        
        <span className=" bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          We build your{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Website and Desktop application
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 lg:w-1/3 p-4 animate-fadeIn`}
          >
            <div className="  flex bg-opacity-100 backdrop-blur-md rounded-md p-6 text-md border border-neutral-800 font-thin">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-500 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold">{feature.text}</h5>
                <p className="text-md text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;


// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { features } from "../constants";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 

// const FeatureSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   return (
//     <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
//       <div className="text-center">
//         <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
//           Feature
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
//           Easily build your{" "}
//           <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
//             Website and Desktop application
//           </span>
//         </h2>
//       </div>
//       <Slider {...settings} className="mt-10 lg:mt-20">
//         {features.map((feature, index) => (
//           <div key={index} className="p-4">
//             <div className="flex bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-500 justify-center items-center rounded-full">
//                 {feature.icon}
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl font-semibold">{feature.text}</h5>
//                 <p className="text-md text-neutral-500">{feature.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default FeatureSection;


// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { features } from "../constants";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 

// const FeatureSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
//       <div className="text-center">
//         <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
//           Feature
//         </span>
//         <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
//           Easily build your{" "}
//           <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
//             Website and Desktop application
//           </span>
//         </h2>
//       </div>
//       <Slider {...settings} className="mt-10 lg:mt-20">
//         {features.map((feature, index) => (
//           <div key={index} className="p-4">
//             <div className="flex bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-500 justify-center items-center rounded-full">
//                 {feature.icon}
//               </div>
//               <div className="flex-1">
//                 <h5 className="mt-1 mb-2 text-xl font-semibold">{feature.text}</h5>
//                 <p className="text-md text-neutral-500">{feature.description}</p>
//                 <img src={feature.image} alt={feature.text} className="mt-4 rounded-lg" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default FeatureSection;
