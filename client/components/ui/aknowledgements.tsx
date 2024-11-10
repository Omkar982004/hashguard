import React, { useEffect, useState, useRef } from "react";
import "@/styles/styles.css";

// Grouped acknowledgements with LinkedIn links
const acknowledgements = [
  {
    title: "Team Members",
    items: [
      { name: "Omkar Lakhute", link: "https://www.linkedin.com/in/omkar-lakhute" },
      { name: "Rudra Pandya", link: "https://www.linkedin.com/in/rudra-pandya" },
      { name: "Arya Sali", link: "https://www.linkedin.com/in/arya-sali" },
      { name: "Shreyas Kadge", link: "https://www.linkedin.com/in/shreyas-kadge" },
    ],
  },
  {
    title: "Mentors",
    items: [
      { name: "Dr. Rajendra Hegadi", link: "https://www.linkedin.com/in/dr-rajendra-hegadi" },
    ],
  },
  {
    title: "Thank You Users",
    items: [
      "Thanks to all the users who supported us and provided feedback!",
    ],
  },
  {
    title: "Hashguard",
    items: [
      "Project managed and developed by the team Hashguard!",
    ],
  },
];

const AcknowledgementsSection = () => {
  const [scrolling, setScrolling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrolling(true); // Start the animation when the section comes into view
        } else {
          setScrolling(false); // Stop the animation when the section goes out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 mt-8"
    >
      {/* Heading */}
      <h2 className="text-8xl font-bold text-gray-300 mb-8">Credits</h2>

      {/* Scrollable Movie Credits */}
      <div className="relative w-full max-w-lg h-96 overflow-hidden bg-black bg-opacity-70 rounded-xl shadow-xl">
        <div
          className={`absolute inset-0 flex flex-col justify-center gap-12 text-center ${
            scrolling ? "animate-scroll" : "opacity-0" // Only apply scroll animation if scrolling is true
          }`}
        >
          {acknowledgements.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {/* Section Title */}
              <h3
                className={`text-3xl font-bold opacity-0 animate-fadeIn ${scrolling ? "opacity-100" : ""}`}
                style={{
                  animationDelay: `${sectionIndex * 0.5}s`, // Delay based on index for staggered fade-in effect
                }}
              >
                {section.title}
              </h3>
              {/* Section Items */}
              <div className="space-y-2">
                {section.items.map((item, index) => {
                  // Check if item is a string or an object
                  if (typeof item === "string") {
                    return (
                      <p
                        key={index}
                        className={`text-xl opacity-0 animate-fadeIn ${scrolling ? "opacity-100" : ""}`}
                        style={{
                          animationDelay: `${(sectionIndex + index + 1) * 0.5}s`,
                        }}
                      >
                        {item}
                      </p>
                    );
                  }

                  // If item is an object with 'name' and 'link'
                  return (
                    <p
                      key={index}
                      className={`text-xl opacity-0 animate-fadeIn cursor-pointer hover:text-blue-400 ${scrolling ? "opacity-100" : ""}`}
                      style={{
                        animationDelay: `${(sectionIndex + index + 1) * 0.5}s`,
                      }}
                      onClick={() => window.open(item.link, "_blank")} // Open link on click
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcknowledgementsSection;
