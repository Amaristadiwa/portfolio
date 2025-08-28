import React from 'react';

const Home = () => {
  return (
    <div className="bg-pink-50 font-sans text-center text-gray-800">
      {/* Hero / Welcome Section */}
      <section className="py-10 px-4 flex flex-col items-center bg-white shadow-md">
        <img
          src="src/assets/images/WhatsApp Image 2025-04-02 at 13.46.14.jpeg"
          alt="Tadiwa"
          className="w-60 h-80 object-cover rounded-lg mb-6 border-4 border-pink-300"
        />
        <h2 className="text-4xl font-bold text-pink-600 mb-2">Hey pretty you 👑</h2>
        <h3 className="text-xl font-semibold text-pink-500 mb-4">A Fairytale of Elegance and Charm</h3>
        <p className="max-w-2xl mx-auto text-base leading-relaxed mb-4">
          Welcome to my world of creative web development! I design and build beautiful, interactive websites using React, Tailwind, and Bootstrap — with a sprinkle of charm and a lot of pink!
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition">Explore Projects</button>
      </section>

      {/* Promo Banner */}
      <div className="bg-pink-200 py-3 text-lg font-medium mt-4">
        💖 Use Code <span className="font-bold">"Magic25"</span> & get <span className="underline">25% off</span> your custom site!
      </div>

      {/* Category Cards */}
      <section className="py-10">
        <h3 className="text-2xl text-pink-600 font-bold mb-6">Our Collection</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 max-w-4xl mx-auto">
          {["New Arrivals", "On Sale", "Best Sellers", "All Items"].map((item, i) => (
            <div key={i} className="border-2 border-pink-300 rounded-lg py-6 px-4 bg-white hover:shadow-lg transition">
              <p className="text-pink-600 font-bold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Block */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 px-6 bg-white border-t border-pink-300">
        <img src="/src/assets/pretty-layout.jpg" alt="Notebook" className="w-64 rounded-lg shadow" />
        <div className="max-w-md text-left">
          <h3 className="text-xl text-pink-600 font-bold mb-2">Hey <span className="italic">Welcome</span> 💕</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-3">
            I'm so happy you're here! I'm a creative developer focused on helping girls, teens, and brands bring their ideas to life with stylish, interactive websites. Let's create magic together!
          </p>
          <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600">Start Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
