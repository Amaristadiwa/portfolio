import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="bg-pink-50 py-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-4"
    >
      <h2 className="text-pink-600 text-3xl font-bold mb-4 tracking-wide">🌸 About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Hi! I'm <span className="text-pink-500 font-semibold">Tadiwa</span>, an 18-year-old web developer from Zimbabwe 🇿🇼.
        I love bringing beautiful ideas to life on the web using
        <span className="text-pink-400 font-medium"> React</span>, <span className="text-pink-400 font-medium">Tailwind</span>,
        and <span className="text-pink-400 font-medium">Bootstrap</span>.
      </p>
      <p className="text-gray-600">
        When I'm not coding, I'm probably designing, listening to music 🎧, or dreaming up my next creative project. 💡✨
      </p>
    </motion.div>
  </section>
);

export default About;


