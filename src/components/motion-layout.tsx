"use client";
import { motion } from "framer-motion";

export default function MotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 50, opacity: 0 },
  };
  const variants2 = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
