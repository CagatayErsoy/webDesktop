import React from 'react';
import { motion } from 'framer-motion';

const Ball: React.FC<{ rotate: number, delay: number }> = ({ rotate, delay }) => (
    <motion.div
      className="absolute bg-red-500 rounded-full w-8 h-8"
      style={{
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        rotate: 0
      }}
      animate={{
        rotate: 360
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "linear",
        delay
      }}
    />
  );
export default Ball