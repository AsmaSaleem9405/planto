"use client";

import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    image: "/plant1.png",
    title: "We Have Small And Best O2 Plants Collection",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/plant2.png",
    title: "Fresh Green Indoor Plants",
    description:
      "Beautiful indoor plants that purify air and improve your home decoration.",
  },
  {
    id: 3,
    image: "/plant3.png",
    title: "Premium Decorative Plants",
    description:
      "Bring nature into your home with our premium decorative indoor plants.",
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
    <section
      className="relative overflow-hidden bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#0f1d12]/90"></div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex justify-center mb-14">
          <h2 className="relative text-white text-4xl font-bold">
            Our Best O2

            <span className="absolute -left-5 top-2 w-5 h-5 border-l-2 border-t-2 border-lime-500"></span>

            <span className="absolute -right-5 bottom-2 w-5 h-5 border-r-2 border-b-2 border-lime-500"></span>

          </h2>
        </div>

        {/* Slider */}

        <div className="relative overflow-hidden rounded-[35px] border border-white/20">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {cards.map((item) => (
              <div
                key={item.id}
                className="min-w-full bg-white/5 backdrop-blur-sm"
              >
                <div className="grid lg:grid-cols-2 gap-10 items-center px-10 py-12">

                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-[320px] md:w-[380px] object-contain"
                    />
                  </div>

                  <div>

                    <h3 className="text-white text-3xl font-bold leading-snug mb-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-8 mb-5">
                      {item.description}
                    </p>

                    <p className="text-gray-400 leading-8 mb-8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut enim ad minim veniam.
                    </p>

                    <button className="border border-gray-400 text-white px-8 py-3 rounded-lg hover:bg-lime-500 hover:border-lime-500 transition">
                      Explore
                    </button>

                    <div className="flex items-center justify-between mt-10">

                      <div className="text-white">
                        {String(current + 1).padStart(2, "0")}/
                        {String(cards.length).padStart(2, "0")}
                      </div>

                      <div className="flex gap-4">

                        <button
                          onClick={prevSlide}
                          className="text-white text-2xl"
                        >
                          ❮
                        </button>

                        <button
                          onClick={nextSlide}
                          className="text-white text-2xl"
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

        <div className="flex justify-center mt-10 gap-3">

          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "bg-white w-8"
                  : "bg-gray-500 w-2"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}