import React, { useState } from "react";
import Button from "../components/Button";

const ImageModal = ({ image, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Fullscreen image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain" // use object-cover if you want it to crop instead
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 z-50"
      >
        Close
      </button>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ image, title, description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-10 relative z-0">
      <div className="bg-white w-[18rem] h-[28rem] shadow-lg rounded-2xl flex flex-col items-center transition-transform transform :hover:scale-105 duration-300">
        <img
          src={image}
          alt={title}
          className="w-96 h-60 object-cover rounded-t-2xl mt-5 mx-5 mb-4 transition-transform duration-300 hover:scale-102"
        />
        <h3 className="text-lg font-semibold mb-2 text-[#1c427a]">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 px-4 text-center">
          {description}
        </p>

        <Button
          text="View Product"
          bgColor="#e73535"
          hoverBgColor="#e94949"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Image modal */}
      {showModal && (
        <ImageModal
          image={image}
          title={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
