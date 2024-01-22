"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 max-w-7xl">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
        <div className="hidden lg:block lg:ml-6">
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Link 1
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Link 2
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.1 }}
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          {/* More links... */}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
