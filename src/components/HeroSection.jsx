// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col items-center mt-6 lg:mt-20">
//       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
//         KKR COMPANY 
//         <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
//           {" "}
//           AVAILABLE FOR U
//         </span>
//       </h1>
//       <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
//       Welcome to my corner of the web! I'm a passionate MERN developer dedicated to creating dynamic and responsive web applications. Let’s bring your ideas to life with cutting-edge technology and innovative design!
//       </p>
//       <div className="flex justify-center my-10">
//         <a
//           href="#"
//           className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
//         >
//           Get Connected
//         </a>
//         <a href="#" className="py-3 px-4 mx-3 rounded-md border">
//           Documentation
//         </a>
//       </div>
//       <div className="flex mt-10 justify-center">
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video2} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-2">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        H.K DEVELOPMENTS 
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}AVAILABLE FOR YOU
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Welcome to our corner of the web! We are passionate MERN developers dedicated to creating dynamic and responsive web applications. Together, let’s bring your ideas to life with cutting-edge technology and innovative design!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Connected
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border border-green-700">
          Documentation
        </a>
      </div>
      <div className="flex mt-6 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

