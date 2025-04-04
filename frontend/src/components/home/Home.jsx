// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import getScrollAnimation from "../../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
// import uspimage from "../../assets/usp2.jpg";

// const Home = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
//       <ScrollAnimationWrapper>
//         <motion.div
//           className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 mb-24"
//           variants={scrollAnimation}
//         >
//           <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
//             <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
//               Welcome to <strong>NextSkills360</strong>: Empowering Visionaries to Code!
//             </h1>
//             <p className="text-black-500 mt-4 mb-6">
//               At NextSkills360, we believe in inclusivity and innovation. Through our unique programs, we enable people to learn coding both with and without computers, ensuring accessibility for all. Whether you're starting your coding journey or looking to advance your skills, our tailored courses and supportive community are here to guide you. Join us in breaking barriers and transforming lives through technology. Explore our inclusive coding education today at NextSkills360.
//             </p>
//           </div>
//           {/* <div className="flex w-full">
//             <motion.div className="h-full w-full" variants={scrollAnimation}>
//               <img
//                 src="https://www.nextskills360.in/wp-content/uploads/2022/03/Website-images-Private-school.png"
//                 alt="Website"
//                 className="h-full w-full"
//               />
//             </motion.div>
//           </div> */}
//         </motion.div>
//         {/* USP Section */}
//         <div className="py-8">
//           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black-600">
//             USPs
//           </h1>
//           <img src={uspimage} alt="Unique Selling Propositions" />
//         </div>
//       </ScrollAnimationWrapper>
//     </div>
//   );
// };

// export default Home;

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import uspimage from "../../assets/usp2.jpg";

const Home = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl px-8 xl:px-16 mx-auto" id="about" style={{ marginTop: '0', paddingTop: '0' }}>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 mb-24"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Welcome to <strong>NextSkills360</strong>: Empowering Visionaries to Code!
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              At NextSkills360, we believe in inclusivity and innovation. Through our unique programs, we enable people to learn coding both with and without computers, ensuring accessibility for all. Whether you're starting your coding journey or looking to advance your skills, our tailored courses and supportive community are here to guide you. Join us in breaking barriers and transforming lives through technology. Explore our inclusive coding education today at NextSkills360.
            </p>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img
                src="https://www.nextskills360.in/wp-content/uploads/2022/03/Website-images-Private-school.png"
                alt="Website"
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </motion.div>
        {/* USP Section */}
        <div className="py-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black-600">
            USPs
          </h1>
          <img src={uspimage} alt="Unique Selling Propositions" />
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Home;

