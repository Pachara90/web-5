"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiMongodb,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiPrisma,
  SiNuxtdotjs,
} from "react-icons/si";

const Footer = () => {
  const techStack = [
    {
      icon: (
        <SiNextdotjs className="!text-black dark:!text-white hover:scale-110 transition-transform" />
      ),
      name: "Next.js",
      color: "text-gray-700 dark:text-gray-300",
      bgColor: "bg-black dark:bg-white",
    },
    {
      icon: (
        <SiTailwindcss className="text-sky-500 hover:scale-110 transition-transform" />
      ),
      name: "Tailwind",
      color: "text-sky-500",
      bgColor: "bg-sky-500",
    },
    {
      icon: (
        <SiNestjs className="text-red-500 hover:scale-110 transition-transform" />
      ),
      name: "NestJS",
      color: "text-red-500",
      bgColor: "bg-red-500",
    },
    {
      icon: (
        <SiMongodb className="text-green-500 hover:scale-110 transition-transform" />
      ),
      name: "MongoDB",
      color: "text-green-500",
      bgColor: "bg-green-500",
    },
    {
      icon: (
        <SiVuedotjs className="text-emerald-500 hover:scale-110 transition-transform" />
      ),
      name: "Vue",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500",
    },
    {
      icon: (
        <SiNuxtdotjs className="text-lime-500 hover:scale-110 transition-transform" />
      ),
      name: "Nuxt",
      color: "text-lime-500",
      bgColor: "bg-lime-500",
    },
    {
      icon: (
        <SiAngular className="text-red-600 hover:scale-110 transition-transform" />
      ),
      name: "Angular",
      color: "text-red-600",
      bgColor: "bg-red-600",
    },
    {
      icon: (
        <SiSvelte className="text-orange-500 hover:scale-110 transition-transform" />
      ),
      name: "Svelte",
      color: "text-orange-500",
      bgColor: "bg-orange-500",
    },
    {
      icon: (
        <SiPrisma className="text-blue-600 hover:scale-110 transition-transform" />
      ),
      name: "Prisma",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
    },
  ];

  const experiences = [
    { tech: "Next.js", level: "95%", years: "3 Years" },
    { tech: "Vue", level: "90%", years: "4 Years" },
    { tech: "Angular", level: "85%", years: "2 Years" },
    { tech: "Svelte", level: "80%", years: "1 Year" },
  ];

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900/90 dark:to-gray-800"
      >
        <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          {/* section tech */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="mb-16"
          >
            {/* text zone */}
            <h3 className="text-2xl font-bold text-center dark:text-white text-gray-900 mb-8">
              Tech Experience
            </h3>

            {/* grid zone */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp, index) => {
                const tech = techStack.find((t) => t.name === exp.tech);
              
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      delay: index * 0.2
                    }}
                    className="bg-white/50 p-6 rounded-xl dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                    key={index}
                  >
                    {/* BOx1 */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`text-3xl ${tech?.color}`}>
                        {tech?.icon}
                      </div>

                      <div className="text-xl text-black dark:text-white  font-semibold ">
                        {exp.tech}
                      </div>
                    </div>

                    {/* Box2 */}
                    <div className="space-y-2">
                      {/* box2.1 */}
                      <div className="flex justify-between text-sm">
                        <span className="text-black dark:text-white">
                          Proficiency
                        </span>
                        <span className={`font-medium ${tech?.color}`}>
                          {exp.level}
                        </span>
                      </div>

                      {/* box2.2 */}
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <motion.div
                        initial={{ width: 0}}
                        animate={{ width: exp.level}}
                        transition={{ duration: 1, delay: 0.3}}
                          className={`h-full rounded-full ${tech?.bgColor} bg-opacity-75`}
                        />
                      </div>

                      {/* box2.3 */}
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        {exp.years} Experience
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* icon zone */}
          <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="my-12 overflow-hidden">
            <div className="flex justify-center gap-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div 
                animate={{ x: ["0%", "100%"]}}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 10
                }}
                className="flex items-center gap-2 text-4xl" key={index}>
                  <span className={tech.color}>{tech.icon}</span>
                  <span className={`text-sm font-medium ${tech.color}`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};
export default Footer;
