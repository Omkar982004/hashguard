'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectOverviewSection: React.FC = () => {
  return (
    <motion.div
      className="w-full p-6 mt-16 bg-transparent rounded-lg shadow-lg mb-64 flex flex-col md:flex-row items-center justify-between h-auto md:h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Left Content (Title + Description) */}
      <div className="w-full md:w-1/2 px-6 flex flex-col items-center md:items-start md:justify-center text-center md:text-left">
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-3D52A0 transition-colors duration-300"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="block">HashGuard's</span>
          <span className="block text-3D52A0 mt-2">Project आधार</span>
        </motion.h2>

        {/* Image in Mobile */}
        <motion.div
          className="w-full md:hidden flex justify-center mt-4"
          initial={{ x: '30%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, backgroundColor: 'white'}}
          exit={{ x: '-30%', opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/ProjectAdhaarLOGO.webp" // Replace with your actual image path
            alt="HashGuard Logo"
            className="w-full max-w-xs"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          className="mt-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">
            Our product provides a secure identity management system based on
            the Aadhaar number, leveraging a Virtual ID (VID) for authentication.
          </p>
          <p className="text-gray-300 mb-4">
            A masked Aadhaar card is a version of the Aadhaar card where the
            first eight digits of the Aadhaar number are hidden and a VID is
            provided instead. Only the last four digits are visible, ensuring a
            layer of privacy and security.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start mt-4">
            <Link href="https://github.com/Omkar982004/hashguard">
              <button className="bg-3D52A0 text-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300 border">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Image in Desktop */}
      <motion.div
        className="hidden md:flex w-full md:w-1/2 p-6 rounded-lg justify-center"
        initial={{ x: '30%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 , backgroundColor: 'white'}}
        exit={{ x: '-30%', opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/ProjectAdhaarLOGO.webp" // Replace with your actual image path
          alt="HashGuard Logo"
          className="w-full max-w-xs md:max-w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverviewSection;
