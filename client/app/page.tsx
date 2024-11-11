'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import ServicesSection from '@/components/ui/service';
import AcknowledgementsSection from '@/components/ui/aknowledgements';
import WelcomeSection from '@/components/ui/welcome';
import Lenis from '@studio-freight/lenis';
import ProjectOverviewSection from '@/components/ui/projectOverview';
import GitHubSectiondiv from '@/components/ui/githubdiv';
const HomePage: React.FC = () => {
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = Cookies.get('email') || null;
    setLoggedInEmail(email);
    setLoading(false);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,    // Duration of smooth scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      wheelMultiplier: 1.2, // Sensitivity to wheel scrolls
      touchMultiplier: 1.5, // Sensitivity to touch scrolls
      infinite: false,
    });

    // Animation loop for smooth scrolling
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  const getInitials = (email: string) => {
    const [firstName, lastName] = email.split('@')[0].split('.');
    return `${firstName[0]}${lastName ? lastName[0] : ''}`.toUpperCase();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-cover bg-center bg-fixed bg-black">
      <WelcomeSection />

      {/* Project Overview Section */}
      <ProjectOverviewSection />

      <ServicesSection />
      <GitHubSectiondiv/>
      <div className="flex justify-center items-center h-auto w-[50vw] bg-transparent">
      <img src="/images/snippet4.png" alt="Transparent PNG" className="object-contain" />
      </div>
      {/* <AcknowledgementsSection /> */}
    </div>
  );
};

export default HomePage;
