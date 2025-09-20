import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// Featured games images (new versions)
import cyberpunk1 from "./assets/cyberpunk1.webp";
import fc26 from "./assets/fc26.webp";
import valorant1 from "./assets/valorant1.webp";

// Popular games images (original)
import cyberpunk from "./assets/cyberpunk.webp";
import rocketleague from "./assets/rocketleague.webp";
import valorant from "./assets/valorant.webp";
import sekiro from "./assets/sekiro.webp";
import sifu from "./assets/sifu.webp";
import skate from "./assets/skate.webp";
import cs2 from "./assets/cs2.webp";

const featuredGames = [
  { id: 1, name: "Cyberpunk 2077", img: cyberpunk1, price: "$59.99" },
  { id: 2, name: "EA SPORTS FC 26", img: fc26, price: "$69.99" },
  { id: 3, name: "Valorant", img: valorant1, price: "Free" },
];

const popularGames = [
  { id: 1, name: "Cyberpunk 2077", price: "$59.99", img: cyberpunk },
  { id: 2, name: "Rocket League", price: "Free", img: rocketleague },
  { id: 3, name: "Valorant", price: "Free", img: valorant },
  { id: 4, name: "Sekiro: Shadows Die Twice", price: "$59.99", img: sekiro },
  { id: 5, name: "Sifu", price: "$39.99", img: sifu },
  { id: 6, name: "EA SPORTS FC 26", price: "$69.99", img: fc26 },
  { id: 7, name: "Skate", price: "Free", img: skate },
  { id: 8, name: "Counter-Strike 2", price: "Free", img: cs2 },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % featuredGames.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + featuredGames.length) % featuredGames.length);

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval.current);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">

      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 bg-gray-800 shadow-md relative">
        <h1 className="text-xl md:text-2xl font-bold">GG Store</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">Store</a>
          <a href="#" className="hover:text-blue-500 transition">About</a>
          <a href="#" className="hover:text-blue-500 transition flex items-center gap-1">
            <FaShoppingCart /> Cart
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-xl" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">GG Store</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">Store</a>
          <a href="#" className="hover:text-blue-500 transition">About</a>
          <a href="#" className="hover:text-blue-500 transition flex items-center gap-1">
            <FaShoppingCart /> Cart
          </a>
        </nav>
      </div>

      {/* Featured Games Carousel */}
      <section className="relative overflow-hidden h-[400px] md:h-[500px]">
        {featuredGames.map((game, index) => (
          <div
            key={game.id}
            className={`absolute inset-0 transition-transform duration-700 transform ${
              index === currentSlide ? "translate-x-0 z-10 opacity-100" : "translate-x-full z-0 opacity-0"
            }`}
          >
            <img src={game.img} alt={game.name} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{game.name}</h2>
              <p className="text-xl">{game.price}</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold transition mt-4">
                Explore
              </button>
            </div>
          </div>
        ))}

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
        >
          &#10095;
        </button>
      </section>

      {/* Popular Games Section */}
      <section className="p-6 md:p-12">
        <h3 className="text-3xl font-bold mb-6 text-center">Popular Games</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularGames.map(game => (
            <div key={game.id} className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition">
              <div className="w-full h-48 md:h-56 flex items-center justify-center bg-gray-800">
                <img src={game.img} alt={game.name} className="max-h-full max-w-full object-contain"/>
              </div>
              <div className="p-4 flex flex-col justify-between h-28 md:h-32">
                <h4 className="text-xl font-semibold">{game.name}</h4>
                <p className="text-blue-500 font-bold">{game.price}</p>
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 mt-12 text-center">
        <p>&copy; 2025 GG Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
