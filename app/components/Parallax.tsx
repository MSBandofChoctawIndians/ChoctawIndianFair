"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Parallax() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
        className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
        style={{ y: "-50%" }} // initial position
        animate={{ y: "50%" }} // final position
        transition={{
          ease: "linear",
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }} // animation properties
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </motion.div>
    </main>
  );
}
