import React from "react";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";
import AboutPage from "./AboutPage.jsx";
import { useNavigate } from "react-router-dom";
import { Specialproducts } from "../constant/index.js";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-4xl">
          <h1 className="text-4xl mt-10 md:text-5xl font-bold leading-tight mb-8 opacity-0 animate-fadeInUp">
            Building Dreams with Strength
            <br />
            and Precision
          </h1>
          <p className="text-lg text-gray-300 mb-8 opacity-0 animate-fadeInUp delay-200">
            Empowering builders with high-performance, durable equipment.
            <span className="text-red-500 font-semibold"> Caalami Group</span>,
            we make construction smarter, stronger, and seamless — from vision
            to reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start opacity-0 animate-fadeInUp delay-400">
            <Button
              text="Learn More"
              bgColor="#1c427a"
              onClick={() => navigate("/about")}
            />
            <Button
              text="Get in touch now"
              borderColor="#E73535"
              hoverBgColor="#E73535"
              textColor="#E73535"
              variant="outline"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white text-[#1c427a] py-20 px-6 md:px-20 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-[#e73535] text-center mt-10 uppercase mb-10">
          Who We Are
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="font-semibold col-span-1 lg:col-span-2 text-center sm:text-left">
            <span className="font-light block mb-1">Welcome</span>
            <h2 className="text-2xl font-bold mb-2">Caalami Group</h2>
            <p className="font-light">
              20+ years selling high-quality construction equipment.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <p className="mb-10 leading-[2rem] font-semibold text-justify text-sm sm:text-base">
              Caalami General Trading is a privately owned company established
              in February 1999 in Bakaro Market, Somalia. We specialize in
              providing high-quality building materials, including ceramics,
              cement, lumber, paints, and iron plates. Committed to
              sustainability and affordability, we serve our customers with
              reliable products to support construction and renovation projects.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Button
                text="Learn More"
                bgColor="#E73535"
                hoverBgColor="#e94949"
                onClick={() => navigate("/about")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Special Products Section */}
      <div className="bg-[#1c427a] text-white py-20 px-6 md:px-20 animate-fadeInUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Special Products
          </h2>
          <p className="text-gray-300 mb-12">
            At{" "}
            <span className="font-semibold text-[#E73535]">
              Caalami General Trading
            </span>
            , we offer premium construction materials tailored to your needs.
          </p>
          <div className="grid mb-10 gap-8 md:grid-cols-3">
            {Specialproducts.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl text-[#1c427a] mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
          <Button
            text="More Products"
            bgColor="#E73535"
            hoverBgColor="#e94949"
            onClick={() => navigate("/product")}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
