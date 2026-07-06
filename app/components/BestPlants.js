"use client";

import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    image: "/images/plant1.webp",
    title: "Pure Green Plants",
    description: `Fresh plants that brighten your space. Clean air, natural beauty every day. Perfect for homes and offices.

Grown with care for lasting freshness. Bring nature closer to your lifestyle. Discover the joy of fresh greenery every day.`,
  },
  {
    id: 2,
    image: "/images/plant2.webp",
    title: "Indoor Green Collection",
    description: `Healthy indoor plants for every home. Add freshness and style effortlessly. Easy to care for and long-lasting.

Ideal for living rooms and workspaces. Enjoy a greener and healthier environment. Refresh your interiors with timeless natural beauty.`,
  },
  {
    id: 3,
    image: "/images/plant3.webp",
    title: "Elegant Home Plants",
    description: `Premium plants for modern interiors. Create a calm and refreshing atmosphere. A perfect touch of natural elegance.

Designed to complement every décor. Make every corner feel fresh and vibrant. Transform your home into a peaceful green oasis.`,
  },
];

export default function BestPlants() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  return (
    <section id="bestplants"
      className="py-10 md:py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-1.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="relative inline-block px-8 py-4">
            {/* Top Left */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-lime-500 rounded-tl-lg"></span>

            {/* Bottom Right */}
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-lime-500 rounded-br-lg"></span>

            <h2 className="text-white text-2xl md:text-4xl font-bold tracking-wide">
              Our Best Plants
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10">

          <div
            className="flex transition-transform -mt-1 duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {cards.map((item) => (
              <div
                key={item.id}
                className="min-w-full bg-[#252d21] h-[430px]"
              >
                <div className="grid lg:grid-cols-[45%_55%] h-full items-center p-4 lg:p-0">

                  {/* Left Image */}
                  <div className="flex justify-center items-end h-full max-h-[190px] lg:max-h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-auto h-full max-h-[180px] md:max-h-none md:w-[650px] lg:w-[520px] object-contain lg:-mb-5"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="px-2 md:px-6 lg:px-10 lg:-mt-20 max-w-xl flex flex-col h-[210px] lg:h-auto justify-between">

                    <div>
                      <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-1 lg:mb-6">
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-gray-300
                          text-sm sm:text-base lg:text-lg
                          leading-6 sm:leading-7 lg:leading-8
                          mb-3 lg:mb-6
                          whitespace-pre-line
                          max-h-28 sm:max-h-32 lg:max-h-none
                          overflow-y-auto lg:overflow-visible
                          pr-1
                          custom-scrollbar
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-1 lg:mt-10">
                      {/* FIXED: Replaced Link + nested Button with a styled native Anchor element */}
                      <a 
                        href="#plants"
                        className="inline-block text-center border border-gray-500 rounded-md px-5 py-2 lg:px-8 lg:py-3 text-white text-sm hover:bg-lime-500 hover:border-lime-500 transition"
                      >
                        Explore
                      </a>

                      <div className="flex items-center gap-4 lg:gap-6">
                        <button
                          onClick={prevSlide}
                          className="text-gray-400 hover:text-white text-xl lg:text-2xl transition"
                        >
                          ❮
                        </button>

                        <span className="text-gray-300 text-xs lg:text-sm tracking-wider">
                          {String(current + 1).padStart(2, "0")}/
                          {String(cards.length).padStart(2, "0")}
                        </span>

                        <button
                          onClick={nextSlide}
                          className="text-gray-400 hover:text-white text-xl lg:text-2xl transition"
                        >
                          ❯
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}