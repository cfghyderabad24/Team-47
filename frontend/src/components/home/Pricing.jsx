// import React, { useMemo } from "react";
// import { motion, px } from "framer-motion";
// import getScrollAnimation from "../../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

// const Pricing = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);



//   return (
//     <div
//       className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
//       id="pricing"
//     >
      
//       <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
//         <div className="flex flex-col w-full">
//           <ScrollAnimationWrapper>
//             <motion.h3
//               variants={scrollAnimation}
//               className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
//             >
//               Contact Us
//               <img src="https://www.nextskills360.in/wp-content/uploads/2020/10/Contact-us-2048x778.jpg" alt="" />
              
//             </motion.h3> 
//             <motion.p
//               variants={scrollAnimation}
//               className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
//             >
              
//             </motion.p>
//           </ScrollAnimationWrapper>
          
//         </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default Pricing;


// const ButtonOutline = ({ children }) => {
//   return (
//     <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
//       {" "}
//       {children}
//     </button>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import getScrollAnimation from '../../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

const Pricing = () => {
  const scrollAnimation = getScrollAnimation(); // Assuming getScrollAnimation returns correct framer-motion variants

  const navigateTo = (url) => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Contact Us
              <img src="https://www.nextskills360.in/wp-content/uploads/2020/10/Contact-us-2048x778.jpg" alt="" />
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            ></motion.p>

            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              {/* LinkedIn */}
              <FaLinkedin className="cursor-pointer" size={30} onClick={() => navigateTo('https://www.linkedin.com/company/nextskills360/')} />

              {/* Instagram */}
              <FaInstagram className="cursor-pointer" size={30} onClick={() => navigateTo('https://www.instagram.com/nextskills360/')} />

              {/* Facebook */}
              <FaFacebook className="cursor-pointer" size={30} onClick={() => navigateTo('https://www.facebook.com/NextSkills360/')} />

              {/* Twitter */}
              <FaTwitter className="cursor-pointer" size={30} onClick={() => navigateTo('https://x.com/nextskills360')} />

              {/* Gmail */}
              <FaEnvelope className="cursor-pointer" size={30} onClick={() => navigateTo('mailto:support@nextskills360.in')}
               />
               <br />
              
            </div>
            <p>call us: +91 7989237476</p>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
