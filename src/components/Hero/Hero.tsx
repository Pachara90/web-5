"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="min-h-[600px] bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center   gap-12">
            {/* text section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-6 "
            >
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  color: isDark ? "#fff" : "#1f2937",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="text-5xl  text-center md:text-start text-gray-700 dark:text-white md:text-5xl font-bold mb-6 "
              >
                Discover the Magic of{" "}
                <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                  Dark Mode
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  color: isDark ? "#d1d5db" : "#4b5563",
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="text-gray-600 text-lg text-center md:text-lg font-bold dark:text-gray-300"
              >
                Experience seamless transitions between light and dark modes,
                enhancing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="flex justify-center md:justify-start  w-full   gap-x-10"
              >
                <motion.button
                  animate={{
                    y: [0, 20, 0],
                    scale: isDark ? 1.1 : 1.2,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold"
                >
                  Get Started
                </motion.button>

                <motion.button
                  animate={{
                    y: [0, 20, 0],
                    scale: isDark ? 1.1 : 1.2,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-teal-500 text-teal-500 dark:text-teal-300 px-8 py-4 rounded-lg text-lg font-semibold"
                >
                  Learn more
                </motion.button>
              </motion.div>
            </motion.div>

            {/* graphic section */}
            <div className="lg:w-1/2 relative  ">
              <motion.div
                animate={{
                  background: isDark
                    ? "linear-gradient(45deg, #1f2937, #111827)"
                    : "linear-gradient(45deg, #f3f4f6, #e5e7eb)",
                }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-96 rounded-xl "
              >
                {/* float card section */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    x: "-50%",
                    y: "-50%",
                    rotate: isDark ? 2 : -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  className="bg-white absolute  w-64 h-64 top-1/2 left-1/2 transform
                     -translate-x-1/2  -translate-y-1/2 dark:bg-gray-800 rounded-2xl shadow-xl p-6"
                >
                  <div className="w-full h-32 bg-teal-100 dark:bg-teal-900 rounded-lg mb-4" />

                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/2" />
                  </div>

                  {/* Floating Particles  */}
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      scale: isDark ? 0.8 : 1.2,
                    }}
                    transition={{
                      repeat: Infinity,
                      ease: "easeInOut",
                      duration: 3,
                    }}
                    className="absolute w-8 h-8 bottom-10 -left-2  bg-teal-400 rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      scale: isDark ? 1.2 : 0.8,
                    }}
                    transition={{
                      repeat: Infinity,
                      ease: "easeInOut",
                      duration: 4,
                    }}
                    className="absolute w-8 h-8 top-10 right-3 bg-purple-400 rounded-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
