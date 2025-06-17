"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard ({ handleShuffle, testimonial, position, id, author, image }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        if ('clientX' in e) {
          dragRef.current = e.clientX;
        } else if ('touches' in e && e.touches.length > 0) {
          dragRef.current = e.touches[0].clientX;
        }
      }}
      onDragEnd={(e) => {
        let endX = 0;
        if ('clientX' in e) {
          endX = e.clientX;
        } else if ('changedTouches' in e && e.changedTouches.length > 0) {
          endX = e.changedTouches[0].clientX;
        }
        if (dragRef.current - endX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[360px] w-[280px] select-none place-content-center space-y-4 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-4 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={image}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-24 w-24 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-base italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-xs font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
}; 