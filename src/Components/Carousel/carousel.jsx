import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

const images = [
  { src: slide1, caption: "Welcome to My Portfolio" },
  { src: slide2, caption: "I'm a Web Developer" },
  { src: slide3, caption: "I Build Responsive Interfaces" },
  { src: slide4, caption: "Using React, Tailwind, Bootstrap" },
  { src: slide5, caption: "Let’s Work Together!" }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={images[index].src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{images[index].caption}</h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Carousel;

