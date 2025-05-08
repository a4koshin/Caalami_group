import React, { useState } from "react";
import Heading from "../components/Heading";
import { products } from "../constant/index";
import ProductCard from "../components/ProductCard.jsx";
import Button from "../components/Button"; // adjust path as needed

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Structural");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const currentProducts = products[selectedCategory];

  return (
    <>
      <div className="animate-fadeInUp delay-100">
        <Heading text="our products" />
      </div>

      <div className="p-6 animate-fadeInUp delay-100">
        {/* Top Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-6 animate-fadeInUp">
          <Button
            text="Structural"
            onClick={() => handleClick("Structural")}
            variant={selectedCategory === "Structural" ? "filled" : "outline"}
            bgColor="#e73535"
            hoverBgColor="#e94949"
            textColor={selectedCategory === "Structural" ? "white" : "#e73535"}
            className="text-sm px-3 py-1 rounded-md min-w-[120px]"
          />
          <Button
            text="Non-Structural"
            onClick={() => handleClick("Non-Structural")}
            variant={
              selectedCategory === "Non-Structural" ? "filled" : "outline"
            }
            bgColor="#e73535"
            hoverBgColor="#e94949"
            textColor={
              selectedCategory === "Non-Structural" ? "white" : "#e73535"
            }
            className="text-sm px-3 py-1 rounded-md min-w-[120px]"
          />
        </div>

        {/* Product Cards */}
        <div className="flex justify-center items-center mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProductCard
                  image={product.img}
                  title={product.alt}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
