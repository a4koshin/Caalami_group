import React from "react";
import Heading from "../components/Heading";
import { ourMission, ourVision } from "../constant/index";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import { MdTrackChanges } from "react-icons/md";
import { FaEye, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

const AboutPage = () => {
  return (
    <>
      <motion.div {...fadeInUp}>
        <Heading text="About us" />
      </motion.div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-20">
        {/* Mission Section */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 mt-10"
        >
          <div className="space-y-8 text-left">
            {ourMission.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center space-x-3 mb-2">
                  <MdTrackChanges className="text-[#e73535] w-6 h-6" />
                  <h2 className="text-2xl font-bold text-[#1c427a]">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.img
              {...fadeInUp}
              src={about3}
              alt="Mission"
              className="w-full max-w-md md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="flex justify-center order-2 md:order-1">
            <motion.img
              {...fadeInUp}
              src={about2}
              alt="Vision"
              className="w-full max-w-lg h-auto rounded-lg shadow-lg"
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
                <p className="text-gray-700 leading-relaxed text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16"
        >
          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-3 mb-2">
              <FaHandsHelping className="text-[#e73535] w-6 h-6" />
              <h2 className="text-2xl font-bold text-[#1c427a]">Our Values</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Integrity — We operate with honesty and fairness. Quality — We
              never compromise on excellence. Sustainability — We promote
              responsible development. Customer Focus — Your success is our
              priority. Growth — We evolve with every project we serve
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              We care deeply about our people, our customers, and our country.
              Our team is dedicated to upholding the highest standards while
              building a brighter future for Somalia—one project at a time.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.img
              {...fadeInUp}
              src={about1}
              alt="Values"
              className="w-full max-w-md md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
