import React, { useState } from "react";
import Button from "../components/Button";
// import { useNavigate } from "react-router-dom";

// Modal component (inside same file for simplicity)
const ImageModal = ({ image, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[70vh] rounded-md"
        />
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ image, title }) => {
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-10">
      <div className="bg-white w-[18rem] h-[28rem] shadow-lg rounded-2xl flex flex-col items-center transition-transform transform">
        <img
          src={image}
          alt={title}
          className="w-96 h-60 object-cover rounded-t-2xl mt-5 mx-5 mb-10 transition-transform duration-300 hover:scale-102"
        />
        <h3 className="text-lg font-semibold mb-4 text-[#1c427a]">{title}</h3>

        {/* Get it now button */}

        {/* View Product button */}
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
