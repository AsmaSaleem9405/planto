"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const plants = [
    {
      image: "/images/plant1.png",
      title: "Calathea Plant",
    },
    {
      image: "/images/plant2.png",
      title: "Monstera Deliciosa",
    },
    {
      image: "/images/plant3.png",
      title: "Snake Plant",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextPlant = () => {
    setCurrent((prev) => (prev + 1) % plants.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPlant();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 xl:pt-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-12 items-center">
          {/* Left Side */}

          <div className="text-white">
            <p className="uppercase tracking-[6px] text-green-300 mb-4">
              Indoor Collection
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Breathe Natureal
            </h1>

            <p className="mt-6 text-gray-200 text-base md:text-lg max-w-xl leading-8">
              Transform your living space with premium indoor plants that
              combine natural beauty with effortless care. Our carefully
              selected collection brings freshness, elegance, and a calming
              atmosphere to every room.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full font-semibold">
                Explore Plants
              </button>
<button
  onClick={() => window.open("//videos/plant.mp4", "_blank")}
  className="flex items-center gap-3 border border-white px-6 py-4 rounded-full hover:bg-white hover:text-black transition"
>
  <FaPlay />
  Watch Video
</button>
            </div>

            {/* Review Card */}

            <div className="mt-12 lg:mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-4 max-w-sm border border-white/20">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/customer 1.jpg"
                  alt="Customer"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex flex-col justify-center">
                  <div className="flex items-center text-yellow-400 mb-1">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>

                  <p className="text-white text-sm font-medium">
                    Alena Patel
                  </p>

                  <p className="text-gray-300 text-xs">
                    Amazing service! Highly recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="relative flex justify-center lg:justify-end mt-20 lg:mt-0">
            {/* Floating Card */}

            <div className="relative lg:absolute lg:-bottom-24 xl:-bottom-32 right-0 lg:right-4 w-full max-w-[340px] lg:max-w-[350px] h-auto min-h-[350px] pt-20 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl overflow-visible">
              {/* Floating Plant Image */}

             <div className="absolute -top-20 -translate-x-1/16 ">

                <Image

                  src={plants[current].image}

                  alt={plants[current].title}

                  width={459}

                  height={459}

                  className="drop-shadow-2xl object-contain"

                />

              </div>

              <p className="text-gray-300 pt-24 text-xs">
                Trendy House Plant
              </p>

              <div className="flex justify-between items-center mt-2 gap-4">
                <h3 className="text-white text-lg lg:text-xl font-bold">
                  {plants[current].title}
                </h3>

                <button
                  onClick={nextPlant}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center flex-shrink-0"
                >
                  <FaChevronRight className="text-white text-sm" />
                </button>
              </div>

              <p className="text-gray-200 text-sm mt-3 leading-6">
                {plants[current].desc}
              </p>

              <div className="flex flex-wrap  gap-4 mt-5">
                <span className="text-green-300 text-2xl font-bold">
                  {plants[current].price}
                </span>

                <div className="flex justify-left">
                  <button className="px-8 py-2.5 border -ml-4 border-white rounded-xl text-white text-lg font-medium bg-transparent hover:bg-green-600 hover:border-green-600 transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Bottom Dots */}

              <div className="flex justify-center gap-2 mt-6">
                {plants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`transition-all duration-300 rounded-full ${
                      current === index
                        ? "w-8 h-2 bg-white"
                        : "w-2 h-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}