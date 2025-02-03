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
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#fcf8f5]">
      <HeroSection />
      <div className="w-full relative container mx-auto min-flex flex-col">
        {/* Section 1 */}
        <section className="flex items-center mt-10 md:mt-20  justify-end bg-[#fcf8f5] p-5 md:p-10">
          <div className={`relative mx-auto md:w-full h-auto rounded-3xl z-10`}>
            <div
              className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between`}
            >
              <motion.div
                className="text-start md:text-center text-gray-800 w-full md:max-w-2xl justify-center lg:text-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-6xl font-medium">
                  Any Project, <br />
                  Big or Small.
                </h2>
                <p className="mt-10 text-start text-lg md:text-justify">
                  Whether you’re envisioning a small makeover or a grand
                  transformation, our expert team specializes in delivering
                  bespoke interior design and construction fitout solutions
                  tailored to your needs.
                </p>
                <p className="mt-5 text-start text-lg md:text-justify">
                  From residential havens to commercial landmarks, we bring your
                  ideas to life with precision, quality, and style. With a keen
                  eye for detail and a commitment to excellence, we ensure every
                  project big or small receives the same level of dedication and
                  professionalism.
                </p>
              </motion.div>

              <motion.div
                className="relative w-full md:max-w-2xl h-auto"
                style={{ aspectRatio: "1" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Modern interior design project showcase"
                  src={Page2}
                  fill
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex items-center justify-center mt-10 md:mt-20  bg-[#fcf8f5] p-5 md:p-10">
          <div className={`relative mx-auto w-full h-auto rounded-3xl z-10`}>
            <div
              className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between`}
            >
              <motion.div
                className="text-start md:text-center text-gray-800 w-full max-w-2xl justify-center lg:text-start"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-6xl font-medium">
                  Crafted Spaces,
                  <br /> Inspired Stories
                </h2>
              </motion.div>

              <motion.div
                className="relative w-full l h-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <motion.div
                    className="col-span-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      alt="Recreational space with vibrant and functional design"
                      src={Craft1}
                      width={500}
                      height={600}
                    />
                    <h2 className="font-serif text-xl text-gray-800 font-semibold mt-5">
                      Recreational
                    </h2>
                    <p className="text-lg text-gray-800 font-medium mt-2">
                      Transform your leisure areas into vibrant, functional, and
                      inspiring spaces.
                    </p>
                  </motion.div>

                  <motion.div
                    className="col-span-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      alt="Elegant and cozy residential interior design"
                      src={Craft2}
                      width={500}
                      height={600}
                    />
                    <h2 className="font-serif text-xl text-gray-800 font-semibold mt-5">
                      Residential
                    </h2>
                    <p className="text-lg text-gray-800 font-medium mt-2">
                      Craft homes that reflect your personality and lifestyle.
                    </p>
                  </motion.div>

                  <motion.div
                    className="col-span-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      alt="Professional and stylish commercial interior fitout"
                      src={Craft3}
                      width={500}
                      height={600}
                    />
                    <h2 className="font-serif text-xl text-gray-800 font-semibold mt-5">
                      Commercial
                    </h2>
                    <p className="text-lg text-gray-800 font-medium mt-2">
                      Enhance your business environment with professional and
                      stylish commercial fitouts.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex items-center justify-center mt-10 md:mt-20 p-5 md:p-10">
          <div className="flex flex-col gap-6 items-center">
            <motion.h2
              className="text-3xl text-gray-800 md:text-6xl font-medium font-serif"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Specialized Expertise
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:mt-20 mt-10 md:grid-cols-3 gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Custom interior design solutions tailored to your needs"
                  src={Service1}
                  width={600}
                  height={600}
                />
                <p className="text-lg text-gray-800 font-medium mt-5">
                  Custom interior design tailored to your aesthetic and
                  functional requirements.
                </p>
              </motion.div>

              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Office and retail space fitout services"
                  src={Service2}
                  width={600}
                  height={600}
                />
                <p className="text-lg text-gray-800 font-medium mt-5">
                  End-to-end fitouts for offices, retail spaces, and hospitality
                  venues.
                </p>
              </motion.div>

              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="Expert commercial fitouts with project management"
                  src={Service3}
                  width={600}
                  height={600}
                />
                <p className="text-lg text-gray-800 font-medium mt-5">
                  Expert project management ensuring timely delivery and budget
                  alignment.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <div
        className="relative bg-cover bg-center mt-10 md:mt-20 min-h-[20vh]"
        style={{ backgroundImage: `url(${Page2.src})` }}
      >
        <section className="flex items-center justify-center p-10 bg-gradient-to-r from-[#00000088] to-[#00000000]">
          <div className="text-center text-white space-y-8 px-6 md:px-12">
            {/* Heading with animation */}
            <motion.h2
              className="text-4xl md:text-6xl font-medium font-serif tracking-tight uppercase shadow-lg mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Get In Touch
            </motion.h2>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:mt-20 mt-10 lg:grid-cols-4 gap-8">
              {/* Card 1 - Address 1 */}
              <motion.div
                className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-center mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-4 mt-5">
                  Address 1
                </h3>
                <p className="font-medium">1 Bahirawakanda Lane, Kandy</p>
              </motion.div>

              {/* Card 2 - Address 2 */}
              <motion.div
                className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-center mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-white mt-5 mb-4">
                  Address 2
                </h3>
                <p className="font-medium">3C Pagoda Road, Nugegoda</p>
              </motion.div>

              {/* Card 3 - Email */}
              <motion.div
                className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-center mx-auto"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <h3 className="text-xl font-semibold text-white mt-5 mb-4">
                  Email
                </h3>
                <a
                  href="mailto:info@realminteriors.lk"
                  className="font-medium hover:text-blue-400 text-white transition-colors"
                >
                  info@realminteriors.lk
                </a>
              </motion.div>

              {/* Card 4 - Phone */}
              <motion.div
                className="relative p-6 bg-white bg-opacity-30 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-center mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-white mt-5 mb-4">
                  Mobile
                </h3>
                <a
                  href="tel:+94766843323"
                  className="font-medium hover:text-blue-400 text-white transition-colors"
                >
                  (+94) 766843323
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
