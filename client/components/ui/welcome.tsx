// src/components/WelcomeSection.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Typed from 'typed.js';
import '@/styles/styles.css';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

const WelcomeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Configuration for Typed.js
  const options = {
    strings: ['Your identity, our responsibility.'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 5000,
    loop: true,
    showCursor: false, // Disable the cursor
  };

  useEffect(() => {
    // Get the logged-in email from cookies
    const email = Cookies.get('email') || null;
    setLoggedInEmail(email);
    setLoading(false);

    // Initialize Typed.js
    const typed = new Typed('.motto', options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const getInitials = (email: string) => {
    const [firstName, lastName] = email.split('@')[0].split('.');
    return `${firstName[0]}${lastName ? lastName[0] : ''}`.toUpperCase();
  };

  // Apply parallax effect on the Y-axis
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div
      ref={containerRef}
      className="mt-5 mb-32 relative w-[95%] rounded-lg flex items-center justify-center h-[80vh] overflow-hidden bg-black text-white pt-8 "
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      {/* Text Content */}
      <div className="mb-64 w-3/4 h-auto flex flex-col items-center justify-center bg-transparent rounded-lg shadow-lg">
        <div className="relative w-full items-center mt-32 mb-4">
        <Image
      src="/brand/logotext.png"  // Replace with your image path
      alt="HashGuard Logo"
      width={800}  // Set the width of the image
      height={100}  // Set the height of the image
      className="relative z-10 mx-auto"  // You can add styling as needed
    />
        </div>

        <p className="motto text-2xl text-white mb-4 text-center h-auto line-height-8 z-10 min-h-[2rem]"></p>
        <p className="text-lg text-gray-white mb-4 text-center z-10">
          Empowering you to manage your Aadhaar and VID securely and privately.
        </p>
        {loading ? (
          <p className="text-lg text-gray-300 z-10">Loading...</p>
        ) : loggedInEmail ? (
          <div className="flex items-center mt-4 z-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl uppercase -mr-3 relative z-10">
              {getInitials(loggedInEmail)}
            </div>
            <div className="bg-gray-700 py-2 pl-6 pr-4 rounded-lg flex items-center z-10">
              <p className="text-green-400 z-10">Signed in as: {loggedInEmail}</p>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4 mt-4 z-10">
            <Link href="/login">
              <div className="z-10 bg-transparent border text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition duration-300">
                Login
              </div>
            </Link>
            <Link href="/signup">
              <div className="z-10 bg-transparent border text-white font-bold px-6 py-3 rounded-lg shadow-md hover:text-black hover:bg-white transition duration-300">
                Signup
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Background Image with Parallax Motion */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full rounded-lg">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image src="/images/image.png" alt="Parallax Background" fill style={{ objectFit: 'cover' }} />
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
    </div>
  );
};

export default WelcomeSection;
