// import { CheckCircle2 } from "lucide-react";
// import codeImg from "../assets/code.jpg";
// import { checklistItems } from "../constants";

// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Accelerate your{" "}
//         <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//           coding workflow.
//         </span>
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={codeImg} alt="Coding" />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Workflow;
// import { CheckCircle2 } from "lucide-react";
// import codeImg from "../assets/code.jpg";
// import { checklistItems } from "../constants";

// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Accelerate your{" "}
//         <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
//           coding workflow.
//         </span>
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={codeImg} alt="Coding" />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;


import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      {/* Heading with slide-down animation */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide animate-fadeInDown">
        Ensuring your{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          Online Presence.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        {/* Left section with image, fade-in and slight zoom */}
        <div className="p-2 w-full lg:w-1/2 animate-fadeInLeft">
          <img
            src={codeImg}
            alt="Coding"
            className="transform transition duration-700 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right section with checklist items, appearing with fade-in */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex mb-12 animate-fadeInRight"
              style={{ animationDelay: `${index * 0.2}s` }} // Delayed animation for each checklist item
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
