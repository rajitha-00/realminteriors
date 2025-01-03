import React from "react";

const HeroSection = () => {
  const leftImages = [
    {
      src: "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-vase_23-2151003160.jpg",
      alt: "Interior Design 1",
    },
    {
      src: "https://img.freepik.com/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363282.jpg",
      alt: "Interior Design 2",
    },
    {
      src: "https://img.freepik.com/free-photo/ancient-pottery-vessel-with-retro-design_23-2151538283.jpg",
      alt: "Interior Design 3",
    },
  ];

  const rightImages = [
    {
      src: "https://img.freepik.com/free-photo/view-modern-entryway-with-interior-designed-furniture_23-2150791080.jpg",
      alt: "Interior Design 4",
    },
    {
      src: "https://img.freepik.com/free-photo/view-nordic-minimalism-japanese-wabi-sabi-interior-design-blend_23-2151160179.jpg",
      alt: "Interior Design 5",
    },
    {
      src: "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118956.jpg",
      alt: "Interior Design 6",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148403815.jpg?t=st=1735922497~exp=1735926097~hmac=76bf8c9a5f92a912700b3de8ac13350e8c032329494ab5d0c0cc7009b8b92db4&w=1380)`,
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100
       via-gray-200 to-transparent opacity-80"></div>

      {/* Container */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center py-16 lg:py-24">
        {/* Left Images */}
        <div className="lg:w-1/4 grid grid-cols-1 gap-4">
          {leftImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* Hero Section Text */}
        <div className="lg:w-1/2 text-center px-6 lg:px-12">
          <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            REALMINTERIORS
          </h1>
          <h2 className="text-4xl mt-5 lg:text-5xl font-bold text-gray-700 leading-tight">
            Transform Your Living Space
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Realminterior creates stunning interiors that harmonize elegance and
            functionality. Let us craft your dream space with perfection.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-700 hover:text-white transition transform hover:scale-105">
              Explore More
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/4 grid grid-cols-1 gap-4">
          {rightImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
