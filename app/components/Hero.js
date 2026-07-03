"use client";
import { FiShoppingBag } from "react-icons/fi";


import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/bg-plant.png')",
  }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 xl:pt-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-12 items-center">
          {/* Left Side */}
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }} // Changed from animate to whileInView
  viewport={{ once: false, amount: 0.2 }} // Added amount so it triggers reliably
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-white"
>
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
                onClick={() => window.open("https://youtu.be/1zu7xjYD9sg?si=NFuc5v2H0SDBp8Yx", "_blank")}
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
          </motion.div>

          {/* Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end mt-20 lg:mt-0"
          >
            {/* Floating Card */}
            <div className="relative lg:absolute lg:-bottom-24 xl:-bottom-32 right-0 lg:right-4 w-full max-w-[340px] lg:max-w-[350px] h-auto min-h-[350px] pt-20 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl overflow-visible">
              
              {/* Floating Plant Image */}
              <div className="absolute -top-20 -translate-x-1/16 ">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={plants[current].image}
                    alt={plants[current].title}
                    width={459}
                    height={459}
                    className="drop-shadow-2xl object-contain"
                  />
                </motion.div>
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

              <div className="flex flex-wrap gap-4 mt-5">
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
          </motion.div>
        </div>
      </div>


      <section className="relative z-20 -mt-10 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
      
              <h2 className="text-center text-white text-3xl lg:text-4xl mt-20 lg:mt-29 font-bold mb-14">
                Our Trendy Plants
              </h2>
      
              {/* First Card */}
              
             {/* First Card */}
             
      <div className="relative rounded-[50px] lg:rounded-[110px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden lg:overflow-visible mb-8">
      
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[320px]">
      
          {/* Plant */}
          {/* Animated from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="relative z-0 flex justify-center items-center h-[250px] lg:h-auto"
          >
            <Image
              src="/images/plant4.png"
              alt="Plant"
              width={400}
              height={400}
              className="w-[220px] sm:w-[260px] lg:w-auto lg:absolute lg:left-6 lg:-top-24 pointer-events-none"
            />
          </motion.div>
      
          {/* Content */}
          {/* Content Wrapper Animated */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex flex-col justify-center mt-4 text-white px-6 pb-8 lg:pr-10 lg:px-0"
          >
      
            <h3 className="text-[22px] font-medium">
              Peace Lily
            </h3>
      
            <p className="text-[11px] text-gray-300 mt-2 leading-5 max-w-[260px]">
              The Peace Lily is a beautiful indoor plant known for its glossy green leaves and elegant white flowers. It adds a fresh, modern look to homes and offices while helping improve indoor air quality. It's an excellent choice for beginners because it requires minimal care.
            </p>
      
            <h4 className="text-[30px] font-semibold mt-4">
              Rs. 599/-
            </h4>
      
            <div className="flex items-center gap-3 mt-4">
      
              <button className="h-[38px] px-6 rounded-md border border-white text-sm hover:bg-green-600 transition-all duration-300">
                Explore
              </button>
      
              <button className="h-[38px] w-[38px] flex items-center justify-center rounded-md border border-white hover:bg-green-600 transition-all duration-300">
                <FiShoppingBag size={15} />
              </button>
      
            </div>
      
          </motion.div>
      
        </div>
      
      </div>
      
              {/* Second Card */}
              <div className="relative rounded-[50px] lg:rounded-[110px] border mt-12 lg:mt-18 border-white/10 bg-white/5 backdrop-blur-md overflow-hidden lg:overflow-visible">
      
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[320px]">
      
                  {/* Plant (Mobile Top) */}
                  {/* Animated from Right for mobile view consistency */}
                  <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="relative flex justify-center items-center h-[250px] lg:hidden"
                  >
                    <Image
                      src="/images/plant6.png"
                      alt="Plant"
                      width={600}
                      height={460}
                      className="w-[240px]"
                    />
                  </motion.div>
      
                  {/* Content */}
                  {/* Content Wrapper Animated */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col justify-center mt-4 text-white px-6 pb-8 lg:pl-40 lg:px-0"
                  >
      
                    <h3 className="text-[22px] font-medium">
                      Zebra Haworthia
                    </h3>
      
                    <p className="text-[11px] text-gray-300 mt-2 leading-5 max-w-[260px]">
                      Zebra Haworthia is a compact succulent with striking dark green leaves covered in white zebra-like stripes. Its unique appearance and drought tolerance make it a perfect desk, shelf, or windowsill plant for beginners and busy plant lovers.
                    </p>
      
                    <h4 className="text-[30px] font-semibold mt-4">
                      Rs. 579/-
                    </h4>
      
                    <div className="flex items-center gap-3 mt-4">
      
                      <button className="h-[38px] px-6 rounded-md border border-white text-sm hover:bg-green-600 transition-all duration-300">
                        Explore
                      </button>
      
                      <button className="h-[38px] w-[38px] flex items-center justify-center rounded-md border border-white hover:bg-green-600 transition-all duration-300">
                        <FiShoppingBag size={15} />
                      </button>
      
                    </div>
      
                  </motion.div>
      
                  {/* Desktop Plant */}
                  {/* Animated from Right */}
                  <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="relative hidden lg:flex items-center justify-center"
                  >
                    <Image
                      src="/images/plant6.png"
                      alt="Plant"
                      width={600}
                      height={460}
                      className="absolute left-6 -top-36"
                    />
                  </motion.div>
      
                </div>
      
              </div>
      
            </div>
          </section>
    </section>
  );
}