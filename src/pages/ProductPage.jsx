import React, { useState } from "react";
import Heading from "../components/Heading";
import { products } from "../constant/index";
import ProductCard from "../components/ProductCard.jsx";
import Button from "../components/Button"; // adjust path as needed
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Structural");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const currentProducts = products[selectedCategory];

  return (
    <>
      <motion.div {...fadeInUp}>
        <Heading text="our products" />
      </motion.div>

      <div className="p-6">
        {/* Top Buttons */}
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap justify-center items-center gap-3 mb-6"
        >
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
        </motion.div>

        {/* Product Cards */}
        <div className="flex justify-center items-center mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
            {currentProducts.map((product, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard image={product.img} title={product.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
