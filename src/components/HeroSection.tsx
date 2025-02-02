"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import HeroBG from "@/assets/RealmHeroBG.png";
import Logo from "@/assets/Logo.png";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-1 min-h-[50vh] md:min-h-[100vh]">
      {/* Background Image */}
      <Image
        src={HeroBG}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute z-0"
      />

      {/* Container */}
      <div className="relative z-10 container mx-auto flex flex-col sm:flex-row items-center">
        {/* Logo */}
        <motion.div
          className="relative py-20 md:py-0 md:absolute md:left-0 md:top-5 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/">
            <Image
              alt="realminteriors_logo"
              src={Logo}
              width={150}
              height={150}
              priority
            />
          </Link>
        </motion.div>

        <motion.div
          className="md:absolute md:right-0 md:top-5  flex space-x-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {[
            { href: "https://www.facebook.com/profile.php?id=100070106976366" },
            {
              href: "https://www.instagram.com/realm.interiors.sl?igsh=MWhhdmJnazBhb295MQ==",
            },
            {
              href: "https://www.linkedin.com/company/realm-interiors-pvt-ltd/",
            },
          ].map((item) => (
            <SocialIcon
              key={item.href}
              url={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            />
          ))}
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="text-center md:text-start py-24 md:py-44 lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-white">
            Transforming Spaces,
            <br /> Defining Luxury
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
