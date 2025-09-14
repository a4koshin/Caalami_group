import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="bg-[#1C427A] w-full h-12 text-white uppercase font-semibold text-center p-3">
      {text}
    </div>
  );
};

export default Heading;
