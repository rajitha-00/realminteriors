import HeroBG from "@/assets/RealmHeroBG.png"; // Import the image using the correct path

export const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[50vh] md:min-h-[100vh]  flex flex-1"
      style={{
        backgroundImage: `url(${HeroBG.src})`,
      }}
    >
      {/* Container */}
      <div className="relative container mx-auto flex justify-items-end flex-col lg:flex-row items-center py-16 lg:py-24">
        {/* Hero Section Text */}
        <div className="text-start  px-6 lg:px-12">
          <h1 className=" text-4xl md:text-7xl font-semibold bg-clip-text text-white">
            Transforming Spaces,
            <br /> Defining Luxury{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};
