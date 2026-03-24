"use client"

import { motion } from "framer-motion";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <>
      <nav 
      className="bg-white py-4 w-full p-2 dark:bg-dark ">
        <motion.div 
         initial={{ opacity: 0 , y: -100}}
         animate={{ opacity: 1 , y: 0}}
         transition={{
           type: "spring",
           stiffness: 100,
           damping: 20
         }}
        className="max-w-5xl mx-auto flex  items-center justify-between px-6">
          <div>
            <h1 className="text-gray-900 dark:text-white text-sm flex-1 uppercase font-bold">
              Dark <span className="text-teal-400">mode</span>
            </h1>
          </div>

          <div className="hidden md:flex w-1/2 justify-between gap-6 dark:text-gray-300 items-center text-black">
            <div>Home</div>
            <div>About</div>
            <div>Pricing</div>
            <div>Contact</div>
            <div>Shop</div>
          </div>

          <motion.div 
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.95
          }}
          className="flex items-center justify-end">
            <ThemeToggle />
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
};
export default Navbar;
