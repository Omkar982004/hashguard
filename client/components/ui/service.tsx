import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

type Service = {
  step: string;
  name: string;
  imageUrl: string;
  description: string;
  pageLink: string;
};

const services: Service[] = [
  {
    step: "01",
    name: "Generate Masked Aadhaar",
    imageUrl: "/images/service1.png",
    description:
      "Generate a masked version of your Aadhaar for enhanced privacy. Masked Aadhaar hides sensitive details, allowing secure sharing.",
    pageLink: "/learn_masked_aadhaar",
  },
  {
    step: "02",
    name: "Authenticate VID",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Authenticate your Virtual ID (VID) quickly and securely. Our VID authentication process ensures safe and reliable identity verification.",
    pageLink: "/learn_auth_vid",
  },
  {
    step: "03",
    name: "Other Services",
    imageUrl:
      "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    description: "Coming soon...",
    pageLink: "https://github.com/Omkar982004/hashguard",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <motion.div
      key={service.name}
      ref={ref}
      className="group h-96 w-96 [perspective:1000px]"
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100,
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        delay: index * 0.3,
      }}
    >
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl backface-hidden">
          {service.imageUrl && (
            <Image
              className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
              src={service.imageUrl}
              alt={service.name}
              width={320}
              height={320}
            />
          )}
          <p className="md:my-6 text-2xl text-center">{service.name}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] backface-hidden">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
            <p className="text-lg text-center mb-4">{service.description}</p>
            <Link href={service.pageLink}>
              <div className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <span>Read More</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(0, 30 - scrollY / 80);
  const opacity = Math.max(0.3, 1 - scrollY / 400);

  return (
    <section className="py-16 mx-auto sm:py-20 mt-32 mb-32">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          {/* Services Heading with Scroll Animations */}
          <motion.h2
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-5.5xl text-center mb-4"
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            Services
          </motion.h2>

          {/* Service Cards */}
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
