// src/components/WelcomeSection.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import '@/styles/styles.css';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const WelcomeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Apply parallax effect on the Y-axis
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div
      ref={containerRef}
      className="mt-5 mb-32 relative w-[95%] rounded-lg flex items-center justify-center h-[100vh] overflow-hidden bg-black text-white pt-8 "
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      {/* Text Content */}
      <div className="w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center py-15 mb-8">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-6">
          Explore Our Code on GitHub
        </h2>
        
        {/* GitHub Link */}
        <div className="flex justify-center items-center space-x-4 text-blue-600">
          <a
            href="https://github.com/Omkar982004/hashguard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-4xl font-semibold hover:text-blue-400"
          >
            <FaGithub className="w-12 h-12 mr-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>

      {/* Background Image with Parallax Motion */}
      <div className="fixed top-[-10vh]  h-[120vh] w-full rounded-lg">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image src="/images/image2.webp" alt="Parallax Background" fill style={{ objectFit: 'cover' }} />
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
      </div>
    </div>
  );
};

export default WelcomeSection;
