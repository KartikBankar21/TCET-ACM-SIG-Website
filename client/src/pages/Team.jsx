import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Faculty from "../components/Faculty";

// Lazy load Core and Jcore components
const Core = lazy(() => import("../components/Core"));

// Animation Variants
const fadeDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <>
      {/* Hero Image and Text */}
      <div className="relative z-0" id="meetteam">
        <img
          src="https://res.cloudinary.com/ds8oawwu2/image/upload/v1725605100/WhatsApp_Image_2024-09-05_at_07.50.06_ugokm4.jpg"
          alt="Descriptive Alt Text"
          className="w-screen h-screen object-cover"
          id="meetteam"
        />
        <motion.div
          className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-8 md:left-16 right-4 sm:right-8 md:right-16 bg-black/5 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[40px] flex justify-center flex-col items-start p-6 sm:p-8 md:p-10"
          initial="hidden"
          animate="visible"
          variants={fadeDownVariants}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter pb-2 sm:pb-4"
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Our Team
          </motion.h1>
          <motion.h1
            className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter"
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            The Hard-workers behind the Scene
          </motion.h1>
        </motion.div>
      </div>

      {/* Team Components */}
      <Faculty />

      {/* Lazy load Core and Jcore components */}
      <Suspense fallback={<div>Loading Core Team...</div>}>
        <Core />
      </Suspense>
    </>
  );
};

export default Team;
