// components/ProjectOverviewSection.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectOverviewSection: React.FC = () => {
  return (
    <motion.div
      className="w-full p-6 bg-transparent rounded-lg shadow-lg mb-64 flex items-center justify-between h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Text and Title on Left */}
      <div className="w-full md:w-1/2 px-6 flex justify-center items-center flex-col">
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-center text-3D52A0 transition-colors duration-300"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }} // Exit animation: Slide out to the right and fade out
          transition={{ duration: 1 }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl">
            HashGuard's
          </span>
          <span className="block text-3D52A0 mt-2">Project आधार</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }} // Exit animation: Move up and fade out
          transition={{ duration: 1 }}
        >
          Our product provides a secure identity management system based on
          the Aadhaar number, leveraging a Virtual ID (VID) for
          authentication.
        </motion.p>
        <motion.p
          className="text-center text-gray-300 mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }} // Exit animation: Move up and fade out
          transition={{ duration: 1 }}
        >
          A masked Aadhaar card is a version of the Aadhaar card where the
          first eight digits of the Aadhaar number are hidden and a VID is
          provided instead. Only the last four digits are visible, ensuring a
          layer of privacy and security.
        </motion.p>

        {/* Button with animation */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }} // Exit animation: Move up and fade out
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link href="/about">
            <button className="bg-3D52A0 text-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 border">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Image on Right */}
      <motion.div
        className="w-full md:w-1/2 p-6 rounded-lg"
        initial={{ x: '30%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: '-30%', opacity: 0 }} // Exit animation: Slide out to the left and fade out
        transition={{ duration: 1 }}
      >
        <img
          src="/images/ProjectAdhaarLOGO.png" // Replace with your actual image path
          alt="HashGuard Logo"
          className="w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverviewSection;
