import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img src="https://www.nextskills360.in/wp-content/uploads/2020/09/cropped-Ns-logo-white-back.png" alt="logo" className="w-auto mb-6" />
          <p className="mb-4">
          Enable your students to take baby steps in learning to program WITHOUT conventional Computers!
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.facebook.com/NextSkills360/"> <img
                src="/Icon/facebook.svg"
                alt="facebook"
                className="h-6 w-6"
              /> </a>
           </div>

            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <a href="https://x.com/nextskills360"><img src="/Icon/twitter.svg" alt="facebook" className="h-6 w-6" /></a>
            </div>

            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/nextskills360/"><img
                src="/Icon/instagram.svg"
                alt="facebook"
                className="h-6 w-6"
              /></a>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Website</p>
        </div>

      </div>
    </div>
  );
};



export default Footer;
