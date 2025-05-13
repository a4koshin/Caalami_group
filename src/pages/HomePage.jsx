import React, { useEffect } from "react";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { Specialproducts } from "../constant/index.js";
import { features } from "../constant/index.js";
// import logo from "../assets/logo.png";
import ProductCard from "../components/ProductCard.jsx";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const img = new Image();
    img.src = "/background.webp";
  }, []);

  return (
    <>
      <Helmet>
        <title>Caalami Group | Home</title>
        <meta
          name="description"
          content="Power your projects with Caalami Group’s reliable construction equipment."
        />
        <meta
          name="keywords"
          content="construction equipment, heavy machinery, sustainable building, Caalami Group, building tools"
        />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Caalami Group | Home" />
        <meta
          property="og:description"
          content="Discover reliable construction solutions with Caalami Group."
        />
        <meta property="og:image" content="https://caalamigroup.com/logo.png" />
        <meta property="og:url" content="https://caalamigroup.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Caalami Group | Home" />
        <meta
          name="twitter:description"
          content="Top-quality construction equipment at your fingertips."
        />
        <meta
          name="twitter:image"
          content="https://caalamigroup.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <div className="h-screen bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat relative">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-20 text-white">
          <div className="flex flex-col items-center text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 opacity-0 animate-fadeInUp">
              Building Dreams with Strength
              <br />
              and Precision
            </h1>
            <p className="text-lg text-gray-300 mb-8 opacity-0 animate-fadeInUp delay-200">
              Empowering builders with high-performance, durable equipment.
              <span className="text-red-500 font-semibold"> Caalami Group</span>
              , we make construction smarter, stronger, and seamless — from
              vision to reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fadeInUp delay-400">
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
        <div className="bg-white w-44 h-auto text-black">
          {" "}
          we offer premium construction materials tailored to your needs.
        </div>
      </div>

      {/* Who We Are Section */}

      <div className="bg-[#1c427a] text-white py-12 px-6 md:px-40 animate-fadeInUp">
        <div className="mt-[-130px] py-10 bg-white rounded-2xl shadow-lg">
          <div className="max-w-4xl mx-auto px-2 grid md:grid-cols-2 gap-10 text-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index}>
                  <div className="w-16 h-16 mx-auto bg-[#e73535] text-white rounded-full flex items-center justify-center shadow-md">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#e73535] text-center mt-10">
          Who We Are
        </h2>

        {/* the Layout */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start py-8">
          {/* paragraph */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full px-4">
            <p className="mb-6 leading-8 text-justify text-[0.95rem] sm:text-base md:leading-10">
              Caalami General Trading is a privately owned company established
              in February 1999 in Bakaro Market, Somalia. We specialize in
              providing high-quality building materials, including ceramics,
              cement, lumber, paints, and iron plates. With over two decades of
              industry experience, we are committed to sustainability,
              affordability, and exceptional customer service. Our goal is to
              support construction and renovation projects with reliable
              products that meet both local and international standards. At
              Caalami Group, we take pride in being a trusted partner in
              building a stronger future for our communities.
            </p>

            <div>
              <Button
                text="Learn More"
                bgColor="#E73535"
                hoverBgColor="#e94949"
                onClick={() => navigate("/about")}
                ariaLabel="Learn more about Caalami Group"
              />
            </div>
          </div>
          {/* video */}
          <div className="flex items-center justify-center md:mt-[-100px]">
            <video
              src="/tilesvid.mp4"
              className="w-full max-w-[600px] h-auto rounded-xl mx-auto"
              autoPlay
              loop
              muted
              playsInline
              role="presentation"
              aria-label="Caalami Group Intro Video"
            />
          </div>
        </div>
      </div>

      {/* Special Products Section */}
      <div className="bg-white text-black py-20 px-6 md:px-20 animate-fadeInUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#e73535] mb-6">
            Special Products
          </h2>
          <div className="grid items-center justify-center mb-10 gap-8 md:grid-cols-3">
            {Specialproducts.map((product, index) => (
              <div
                key={index}
                className="animate-fadeInUp :hover:scale-105 transition-transform duration-300"
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

export default HomePage;
