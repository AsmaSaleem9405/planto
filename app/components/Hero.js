"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const plants = [
    {
      image: "/images/plant1.png",
      title: "Monstera Deliciosa",
      desc: "An iconic tropical plant with stunning split leaves that instantly adds elegance and freshness to modern interiors.",
      price: "$39",
    },
    {
      image: "/images/plant2.png",
      title: "Calathea Plant",
      desc: "Beautiful decorative foliage with unique leaf patterns that brighten every room.",
      price: "$45",
    },
    {
      image: "/images/plant3.png",
      title: "Snake Plant",
      desc: "A low-maintenance indoor plant that purifies the air and looks amazing.",
      price: "$29",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextPlant = () => {
    setCurrent((prev) => (prev + 1) % plants.length);
  };

  return (
    <section>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div className="text-white">

            <p className="uppercase tracking-[6px] text-green-300 mb-4">
              Indoor Collection
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
              Breathe Natureal
            </h1>

            <p className="mt-6 text-gray-200 text-lg max-w-xl leading-8">
              Transform your living space with premium indoor plants that
              combine natural beauty with effortless care. Our carefully
              selected collection brings freshness, elegance, and a calming
              atmosphere to every room.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full font-semibold">
                Explore Plants
              </button>

              <button className="flex items-center gap-3 border border-white px-6 py-4 rounded-full hover:bg-white hover:text-black transition">
                <FaPlay />
                Watch Video
              </button>

            </div>

            {/* Review Card */}

            <div className="mt-19 bg-white/10 backdrop-blur-md rounded-2xl p-4 max-w-sm border border-white/20">
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

          <div className="relative flex justify-center">

            {/* Floating Card */}

            <div className="absolute -bottom-50 right-0 lg:right-4 w-72 pt-20 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl overflow-visible">

              {/* Floating Plant Image */}

              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Image
                  src={plants[current].image}
                  alt={plants[current].title}
                  width={220}
                  height={220}
                  className="drop-shadow-2xl object-contain"
                />
              </div>

              <p className="text-gray-300 text-xs">
                Trendy House Plant
              </p>

              <div className="flex justify-between items-center mt-2">

                <h3 className="text-white text-xl font-bold">
                  {plants[current].title}
                </h3>

                <button
                  onClick={nextPlant}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
                >
                  <FaChevronRight className="text-white text-sm" />
                </button>

              </div>

              <p className="text-gray-200 text-sm mt-3 leading-6">
                {plants[current].desc}
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-green-300 text-2xl font-bold">
                  {plants[current].price}
                </span>

                <button className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-full text-white">
                  Buy Now
                </button>

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