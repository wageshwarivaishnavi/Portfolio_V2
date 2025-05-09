import React from "react";
import AboutImg from "../../assets/AboutImg.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      className="text-white overflow-hidden   md:flex-row items-center md:justify-between bg-black shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center  justify-around">
          <img className="md:h-80" src={AboutImg} alt="About image" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold loading-normal">
                  Frontend Developer
                </h1>
                <br />
                <p className="text-m md:text-md leading-tight">
                  Developed cutting-edge UI components, leading to a 25%
                  increase in user satisfaction scores and a 30% reduction in
                  customer support inquiries.
                </p>
                <br />
                <p>
                  Spearheaded troubleshooting efforts, identifying and fixing
                  over 1,000 bugs and technical issues, ensuring optimal
                  functionality throughout the production lifecycle
                </p>
                <br />
                <p className="text-m  md:text-md leading-tight">
                  Regularly updated websites to enhance functionality and user
                  experience
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
