"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Image from "next/image";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

import galleryImage0 from "@/images/images.jpg";
import galleryImage1 from "@/images/images (1).jpg";
import galleryImage2 from "@/images/images (2).jpg";
import galleryImage3 from "@/images/images (3).jpg";
import galleryImage4 from "@/images/images (4).jpg";
import galleryImage5 from "@/images/images (5).jpg";
import galleryImage6 from "@/images/images (6).jpg";
import galleryImage7 from "@/images/images (7).jpg";
import galleryImage8 from "@/images/images (8).jpg";
import galleryImage9 from "@/images/images (9).jpg";
import galleryImage10 from "@/images/images (10).jpg";
import galleryImage11 from "@/images/images (11).jpg";
import galleryImage12 from "@/images/images (12).jpg";
import galleryImage13 from "@/images/images (13).jpg";
import galleryImage14 from "@/images/images (14).jpg";
import galleryImage15 from "@/images/images (15).jpg";
import galleryImage16 from "@/images/images (16).jpg";
import galleryImage17 from "@/images/images (17).jpg";

const floatingImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
];

const galleryImages = [
  galleryImage0,
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
  galleryImage10,
  galleryImage11,
  galleryImage12,
  galleryImage13,
  galleryImage14,
  galleryImage15,
  galleryImage16,
  galleryImage17,
];

const ParallaxFloatingGallery = () => {
  const [scope, animate] = useAnimate();
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, [animate]);

  return (
    <div
      className="relative flex w-full min-h-[700px] flex-col items-center justify-center bg-black py-20 overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-20 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 0.6 }}
      >
        <p className="text-5xl md:text-7xl text-white font-calendas italic">
          Workshops
        </p>
        <div className="flex items-center gap-3">
          <button
            className="text-xs hover:scale-110 transition-transform bg-white/10 text-white rounded-full py-2 px-6"
            onClick={() => setShowGallery(true)}
          >
            Gallery
          </button>
        </div>
      </motion.div>

      <Floating
        sensitivity={-1}
        className={`overflow-hidden z-10 ${
          showGallery ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[0].src}
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[1].src}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[2].src}
            className="w-32 h-44 md:w-44 md:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[3].src}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[4].src}
            className="w-32 h-32 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[5].src}
            className="w-32 h-32 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[6].src}
            className="w-44 md:w-60 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={floatingImages[7].src}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>

      {showGallery && (
        <motion.div
          className="relative z-30 mt-16 w-full max-w-6xl px-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ParallaxFloatingGallery;
