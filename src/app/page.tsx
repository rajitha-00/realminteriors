"use client";

import { HeroSection } from "@/components";
import Image from "next/image";
import Page2 from "@/assets/RealmPage2.png";
import Craft1 from "@/assets/crafted1.png";
import Craft2 from "@/assets/crafted2.png";
import Craft3 from "@/assets/crafted3.png";
import Service1 from "@/assets/Service1.png";
import Service2 from "@/assets/Service2.png";
import Service3 from "@/assets/Service3.png";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <div className="w-full relative container mx-auto min-flex flex-col">
        {/* Section 1 */}
        <section className="flex items-center justify-end bg-gray-50 p-5 md:p-10">
          <div className={`relative mx-auto md:w-full h-auto rounded-3xl z-10`}>
            <div
              className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between`}
            >
              <div className="text-start md:text-center text-gray-600 w-full md:max-w-2xl justify-center lg:text-start">
                <h2 className="text-3xl md:text-6xl font-semibold ">
                  Any Project, <br />
                  Big or Small.{" "}
                </h2>
                <p className="mt-10 text-start text-lg md:text-justify ">
                  Whether you’re envisioning a small makeover or a grand
                  transformation, our expert team specializes in delivering
                  bespoke interior design and construction fitout solutions
                  tailored to your needs.{" "}
                </p>
                <p className="mt-5 text-start text-lg md:text-justify ">
                  From residential havens to commercial landmarks, we bring your
                  ideas to life with precision, quality, and style. With a keen
                  eye for detail and a commitment to excellence, we ensure every
                  project big or small receives the same level of dedication and
                  professionalism.
                </p>
              </div>
              <div
                className="relative w-full md:max-w-2xl h-auto"
                style={{ aspectRatio: "1" }}
              >
                <Image alt="Project Image" src={Page2} fill />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center bg-gray-50 p-5 md:p-10">
          <div className={`relative mx-auto w-full h-auto rounded-3xl z-10`}>
            <div
              className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between`}
            >
              <div className="text-start md:text-center text-gray-600 w-full max-w-2xl justify-center lg:text-start">
                <h2 className="text-3xl md:text-6xl font-semibold ">
                  Crafted Spaces,
                  <br /> Inspired Stories
                </h2>
              </div>
              <div
                className="relative w-full l h-auto"
                style={{ aspectRatio: "16 / 10" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="col-span-1">
                    <Image
                      alt="Recreational"
                      src={Craft1} // Image from the public folder
                      width={400}
                      height={600}
                    />
                    <h2 className="text-xl text-gray-800 font-medium mt-5">
                      Recreational
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                      Transform your leisure areas into vibrant, functional, and
                      inspiring spaces.{" "}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="Residential"
                      src={Craft2} // Image from the public folder
                      width={400}
                      height={600}
                    />
                    <h2 className="text-xl text-gray-800 font-medium mt-5">
                      Residential
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                      Craft homes that reflect your personality and lifestyle.
                    </p>
                  </div>
                  <div className="col-span-1">
                    <Image
                      alt="Commercial"
                      src={Craft3} // Image from the public folder
                      width={400}
                      height={600}
                    />
                    <h2 className="text-xl text-gray-800 font-medium mt-5">
                      Commercial
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                      Enhance your business environment with professional and
                      stylish commercial fitouts.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex items-center justify-center p-5 md:p-10">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl text-gray-600 md:text-6xl font-semibold ">
              Specialized Expertise{" "}
            </h2>
            <div className="grid grid-cols-1 md:mt-20 mt-10 md:grid-cols-3 gap-5">
              <div className="col-span-1">
                <Image
                  alt="Recreational"
                  src={Service1} // Image from the public folder
                  width={600}
                  height={600}
                />
                <h2 className="text-xl text-gray-800 font-medium mt-5">
                  Recreational
                </h2>
                <p className="text-lg text-gray-600 font-medium mt-2">
                  Transform your leisure areas into vibrant, functional, and
                  inspiring spaces.{" "}
                </p>
              </div>
              <div className="col-span-1">
                <Image
                  alt="Residential"
                  src={Service2} // Image from the public folder
                  width={600}
                  height={600}
                />
                <h2 className="text-xl text-gray-800 font-medium mt-5">
                  Residential
                </h2>
                <p className="text-lg text-gray-600 font-medium mt-2">
                  Craft homes that reflect your personality and lifestyle.
                </p>
              </div>
              <div className="col-span-1">
                <Image
                  alt="Commercial"
                  src={Service3} // Image from the public folder
                  width={600}
                  height={600}
                />
                <h2 className="text-xl text-gray-800 font-medium mt-5">
                  Commercial
                </h2>
                <p className="text-lg text-gray-600 font-medium mt-2">
                  Enhance your business environment with professional and
                  stylish commercial fitouts.{" "}
                </p>
              </div>
            </div>{" "}
          </div>
        </section>

        {/* Section 4 */}
      </div>
      <div
        className="relative bg-cover bg-center min-h-[20vh]"
        style={{
          backgroundImage: `url(${Page2.src})`,
        }}
      >
        <section className="flex items-center justify-center p-10 bg-gradient-to-r from-[#00000088] to-[#00000000]">
          <div className="text-center text-white space-y-8 px-6 md:px-12">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight uppercase shadow-lg mb-12">
              Get In Touch
            </h2>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:mt-20 mt-10 lg:grid-cols-4 gap-8">
              {/* Card 1 - Address 1 */}
              <div className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
                <div className="absolute top-4 left-4 text-4xl text-white">
                  📍
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Address 1
                </h3>
                <p className="font-medium">1 Bahirawakanda Lane, Kandy</p>
              </div>

              {/* Card 2 - Address 2 */}
              <div className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
                <div className="absolute top-4 left-4 text-4xl text-white">
                  📍
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Address 2
                </h3>
                <p className="font-medium">3C Pagoda Road, Nugegoda</p>
              </div>

              {/* Card 3 - Email */}
              <div className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
                <div className="absolute top-4 left-4 text-4xl text-white">
                  📧
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email</h3>
                <a
                  href="mailto:info@realminteriors.lk"
                  className="font-medium text-blue-400 hover:text-white transition-colors"
                >
                  info@realminteriors.lk
                </a>
              </div>

              {/* Card 4 - Phone */}
              <div className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
                <div className="absolute top-4 left-4 text-4xl text-white">
                  📞
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Mobile
                </h3>
                <a
                  href="tel:+94766843323"
                  className="font-medium text-blue-400 hover:text-white transition-colors"
                >
                  (+94) 766843323
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
