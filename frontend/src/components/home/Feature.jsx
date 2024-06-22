import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
          <div className="py-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black-600">
            About Us
          </h1>
          
        </div>
            <img
              src="https://www.nextskills360.in/wp-content/uploads/2020/09/NextSkills360_FounderCEO.jpg"
              alt="Website"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
 
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Suraj V Meiyur (Founder - CEO)
          </h3>
          <p className="my-2 text-black-500">
            
          An MIT SOLVE Fellow, Suraj Meiyur has over two decades of experience in IT and K-12 Education. While working with IT corporates like Infosys, Wipro, Satyam and Pitney Bowes, Suraj managed diverse and important IT delivery portfolios for customers like Glaxo SmithKline, Coca Cola, Novartis and other Fortune 500 companies.More recently, he co-authored 17 Life Skills books for K-12 students and has invented a tool to teach coding without computers to underserved students, a patent for which has been granted in India!Suraj is an avid technology enthusiast, a social entrepreneur and bats for #EquitableClassrooms.
          </p>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
              src="https://www.nextskills360.in/wp-content/uploads/elementor/thumbs/Sowjanya-maam-photo-1-peqdkvxydrdswuoiu4kxkwcofo05bhdcit0uoukb6o.jpg"
              alt="Website"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
 
        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Sowjanya Suraj (Co-Founder - CMO)
          </h3>
          <p className="my-2 text-black-500">
          An MIT SOLVE team member, Sowjanya is a mentor, coach and consultant (learning & development) who values dedication, service and excellence.With over 15 years of experience in Corporate, K-12 Education and Social Sector across geographies, and a strong background in Organization Development, Change Management, and Learning & Development, Sowjanya works with students and teachers to help improve their skills and confidence levels so that they can be successful in their endeavours.‘Excellence is a journey, not just a destination’. This perspective inspired her to mentor and inspire hundreds of college-going students as Life Skills Coaches at the grass root level. Her passions include gardening, reading books, listening to music and cooking with her family.
          </p>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;

