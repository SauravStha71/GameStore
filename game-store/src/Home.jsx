import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// Featured games images (new)
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

/**
 * MEDIA RENDERER
 * - Displays <video> for .mp4/.webm files, otherwise <img>.
 * - Keeps the element filling the container and preserves aspect with object-fit.
 */
function MediaRenderer({ src, alt, fill = "cover" }) {
  const isVideo = /\.(mp4|webm)$/i.test(src);
  const fitClass = fill === "cover" ? "object-cover" : "object-contain";

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full ${fitClass}`}
        aria-label={alt}
      />
    );
  }

  // For GIF, WebP, PNG, JPG, etc.
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full ${fitClass}`}
      draggable={false}
    />
  );
}

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
  const slideTimerRef = useRef(null);
  const sliderRef = useRef(null);

  // ---------- Auto-play logic (pause on hover) ----------
  const startAutoPlay = (interval = 4000) => {
    stopAutoPlay();
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % featuredGames.length);
    }, interval);
  };
  const stopAutoPlay = () => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay(5000);
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When user manually navigates, reset autoplay timer
  const goTo = (index) => {
    setCurrentSlide(index % featuredGames.length);
    startAutoPlay(5000);
  };
  const next = () => goTo(currentSlide + 1);
  const prev = () => goTo((currentSlide - 1 + featuredGames.length) % featuredGames.length);

  // ---------- Carousel transform style ----------
  const sliderStyle = {
    width: `${featuredGames.length * 100}%`,
    transform: `translateX(-${(currentSlide * 100) / featuredGames.length}%)`,
  };

  // ---------- Accessibility: keyboard controls ----------
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 bg-gray-800 shadow-md relative z-20">
        <h1 className="text-xl md:text-2xl font-bold">GG Store</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Store</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">
            <FaShoppingCart /> Cart
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-30`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">GG Store</h2>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Store</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">
            <FaShoppingCart /> Cart
          </a>
        </nav>
      </div>

      {/* ---------- FEATURED CAROUSEL (flex slider) ---------- */}
      <section
        className="relative overflow-hidden"
        style={{ height: "min(46vh, 520px)" }} // responsive height
        onMouseEnter={() => stopAutoPlay()}
        onMouseLeave={() => startAutoPlay(5000)}
      >
        {/* Sliding track */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={sliderStyle}
        >
          {featuredGames.map((g) => (
            <div
              key={g.id}
              className="min-w-full flex-shrink-0 relative"
              aria-hidden={false}
            >
              {/* Media fills the slide */}
              <div className="w-full h-full bg-black">
                <MediaRenderer src={g.img} alt={g.name} fill="cover" />
              </div>

              {/* Overlay — pointer-events-none to avoid blocking arrow clicks; inner content is clickable */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 pointer-events-none">
                <div className="text-center pointer-events-auto">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">{g.name}</h2>
                  <p className="text-sm md:text-lg lg:text-xl mb-3">{g.price}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left / Right arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800/80 p-2 rounded-full z-40"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800/80 p-2 rounded-full z-40"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {featuredGames.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition ${
                i === currentSlide ? "bg-blue-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------- POPULAR GAMES GRID ---------- */}
      <section className="px-4 md:px-8 lg:px-12 py-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Popular Games</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {popularGames.map((game) => (
            <div
              key={game.id}
              className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-[1.02] transition"
            >
              {/* image container: fixed height but using object-contain so whole cover visible */}
              <div className="w-full h-44 md:h-52 flex items-center justify-center bg-gray-800">
                <img
                  src={game.img}
                  alt={game.name}
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </div>

              <div className="p-3 md:p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm md:text-base font-semibold">{game.name}</h4>
                  <span className="text-blue-400 text-sm md:text-base font-bold">{game.price}</span>
                </div>

                <button className="mt-1 w-full bg-blue-600 hover:bg-blue-700 py-1.5 rounded text-sm md:text-base font-semibold transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 md:p-6 mt-8 text-center text-sm md:text-base">
        <p>&copy; 2025 GG Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
