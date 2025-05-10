import React from "react";
import Heading from "../components/Heading";
import { ourMission, ourVision } from "../constant/index";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import { MdTrackChanges } from "react-icons/md";
import { FaEye, FaHandsHelping } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div className="animate-fadeInUp delay-100">
        <Heading text="About us" />
      </div>

      <div className="animate-fadeInUp delay-100 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-20">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 mt-10 animate-fadeInUp delay-100">
          <div className="space-y-8 text-left">
            {ourMission.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center space-x-3 mb-2">
                  <MdTrackChanges className="text-[#e73535] w-6 h-6" />
                  <h2 className="text-2xl font-bold text-[#1c427a]">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-8 text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img
              src={about3}
              alt="Mission"
              className="w-full max-w-md md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg animate-fadeInUp delay-200"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeInUp delay-200">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={about2}
              alt="Vision"
              className="w-full max-w-lg h-auto rounded-lg shadow-lg animate-fadeInUp delay-300"
            />
          </div>
          <div className="space-y-8 text-left order-1 md:order-2">
            {ourVision.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center space-x-3 mb-2">
                  <FaEye className="text-[#e73535] w-6 h-6" />
                  <h2 className="text-2xl font-bold text-[#1c427a]">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-8 text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16 animate-fadeInUp delay-300">
          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-3 mb-2">
              <FaHandsHelping className="text-[#e73535] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#1c427a]">Our Values</h2>
            </div>
            <p className="text-gray-700 leading-8 text-justify">
              Integrity — We operate with honesty and fairness. Quality — We
              never compromise on excellence. Sustainability — We promote
              responsible development. Customer Focus — Your success is our
              priority. Growth — We evolve with every project we serve
            </p>
            <p className="text-gray-700 leading-8 text-justify">
              We care deeply about our people, our customers, and our country.
              Our team is dedicated to upholding the highest standards while
              building a brighter future for Somalia—one project at a time.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={about1}
              alt="Values"
              className="w-full max-w-md md:max-w-sm lg:max-w-xl h-auto rounded-lg shadow-lg animate-fadeInUp delay-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
