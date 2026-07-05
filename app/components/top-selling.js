"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { useSearchParams } from "next/navigation"; // Added to read Navbar clicks

import Navbar from "@/app/components/Navbar";
// Plant Data Array for PAGE 1 (IDs 1-6)
const plantsDataPage1 = [
  {
    id: 1,
    name: "Hosta Plant",
    scientificName: "Chinese Evergreen",
    description:
      "A beautiful leafy indoor plant with soft green striped leaves that adds freshness and elegance to any space. Easy to care for and perfect for home décor.",
    price: "Rs. 459/-",
    image: "/images/plant1.webp",
  },
  {
    id: 2,
    name: "Haworthia Succulent",
    scientificName: "Spathiphyllum",
    description:
      "A compact succulent with textured pointed leaves, ideal for desks and modern interiors. Requires very little maintenance and watering.",
    price: "Rs. 659/-",
    image: "/images/plant2.webp",
  },
  {
    id: 3,
    name: "Blue Torch Cactus",
    scientificName: "Pilosocereus azureus",
    description:
      "A stylish drought-resistant cactus with a unique blue-green appearance. Perfect for minimal and modern decorative setups.",
    price: "Rs. 959/-",
    image: "/images/plant3.webp",
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    scientificName: "Swiss Cheese Plant",
    description:
      "A trendy tropical plant known for its large split leaves and aesthetic look. Great for indoor decoration and air purification.",
    price: "Rs. 759/-",
    image: "/images/plant4.webp",
  },
  {
    id: 5,
    name: "Bird of Paradise",
    scientificName: "Strelitzia",
    description:
      "A bold tropical plant with long glossy leaves that creates a luxurious and vibrant atmosphere indoors.",
    price: "Rs. 859/-",
    image: "/images/plant5.webp",
  },
  {
    id: 6,
    name: "Zebra Haworthia",
    scientificName: "Hawardiopsis attenuata",
    description:
      "A small striped succulent with an attractive modern look. Beginner-friendly and ideal for compact indoor spaces.",
    price: "Rs. 859/-",
    image: "/images/plant6.webp",
  },
];

// Plant Data Array for PAGE 2 (IDs 7-12)
const plantsDataPage2 = [
  {
    id: 7,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description:
      "An incredibly resilient plant with striking upright leaves, perfect for beginners.",
    price: "Rs. 499/-",
    image: "/images/snake.webp",
  },
  {
    id: 8,
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    description:
      "Features waxy, deep green leaves that reflect light and brighten up dull corners.",
    price: "Rs. 650/-",
    image: "/images/zz.webp",
  },
  {
    id: 9,
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    description:
      "A popular statement plant with large, heavily veined leaves growing on sleek stems.",
    price: "Rs. 599/-",
    image: "/images/fiddle.webp",
  },
  {
    id: 10,
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    description:
      "A fast-growing, cascading vine featuring heart-shaped, gold-variegated green foliage.",
    price: "Rs. 899/-",
    image: "/images/Pothos.webp",
  },
  {
    id: 11,
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    description:
      "Graceful, arching narrow leaves with white stripes that easily sprouts small plantlets.",
    price: "Rs. 749/-",
    image: "/images/Spider.webp",
  },
  {
    id: 12,
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    description:
      "A lush, sword-shaped frond arrangement that thrives beautifully in humid conditions.",
    price: "Rs. 949/-",
    image: "/images/Boston.webp",
  },
];

// Reusable Plant Card Component
const PlantCard = ({ plant, isPriority }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative h-[430px] w-full bg-gradient-to-b from-[#162218] to-[#0e1610] border-2 border-emerald-500/30 backdrop-blur-md rounded-[2.5rem] p-6 pt-0 flex flex-col justify-between group shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/20 transition-all duration-300"></div>

      {/* Image Container */}
      <div className="relative w-full h-52 -mt-12 mb-4 flex justify-center items-end drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] z-10">
        <Image
          src={plant.image}
          alt={`Healthy indoor ${plant.name}`}
          width={320}
          height={320}
          className="object-contain max-h-[110%] transition-transform duration-300 group-hover:scale-105"
          priority={isPriority}
          loading={isPriority ? undefined : "lazy"}
        />
      </div>

      {/* Details Container */}
      <div className="flex flex-col flex-grow text-left px-2 relative z-10 overflow-hidden">
        <motion.h3
          variants={textVariants}
          className="text-xl font-semibold text-zinc-100 tracking-wide group-hover:text-emerald-300 transition-colors duration-200 truncate"
        >
          {plant.name}
        </motion.h3>

        <motion.p
          variants={textVariants}
          className="text-xs text-emerald-400/80 font-medium italic mb-2"
        >
          {plant.scientificName}
        </motion.p>

        <motion.p
          variants={textVariants}
          className="text-sm text-zinc-400 line-clamp-3 mb-4 leading-relaxed"
        >
          {plant.description}
        </motion.p>
      </div>

      {/* Pricing / CTA Row */}
      <motion.div
        variants={textVariants}
        className="flex justify-between items-center px-2 pb-2 mt-auto relative z-10"
      >
        <span className="text-lg font-bold text-emerald-400 tracking-wide">
          {plant.price}
        </span>
        <button
          aria-label={`Add ${plant.name} to cart`}
          className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#121c14] text-zinc-300 hover:bg-emerald-500 hover:text-neutral-900 hover:border-emerald-400 transition-all duration-200 shadow-md transform active:scale-95"
        >
          <div className="flex">
            <FiShoppingBag size={24} />
          </div>
        </button>
      </motion.div>
    </motion.article>
  );
};

// Main Page Component
export default function TopSelling2() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentPlants = currentPage === 1 ? plantsDataPage1 : plantsDataPage2;

  // Read URL params passed from the Navbar selection click
  const searchParams = useSearchParams();
  const selectedPlantId = searchParams.get("id");

  // Automatically update page view and layout when a navbar item is clicked
  useEffect(() => {
    if (selectedPlantId) {
      const idNumber = parseInt(selectedPlantId, 10);
      
      // Auto-flip page: IDs 1-6 are on page 1, IDs 7-12 are on page 2
      if (idNumber > 6) {
        setCurrentPage(2);
      } else {
        setCurrentPage(1);
      }

      // Smoothly scroll down to the targeted plants grid view block
      setTimeout(() => {
        const contentSection = document.getElementById("plants");
        if (contentSection) {
          contentSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
    }
  }, [selectedPlantId]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const contentSection = document.getElementById("plants");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Our Top Selling Indoor Plants | Premium Collection</title>
        <meta
          name="description"
          content="Browse our top selling variety of vibrant house plants, custom styled for your modern interior layout."
        />
      </Head>

      <Navbar />

     {/* Main Container attached with ID 'plants' matching navbar link hashes */}
      <main 
        id="plants" 
        className="relative min-h-screen w-full flex flex-col justify-between items-center pt-24 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      >
        {/* Background Graphic Asset */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bg-1.webp"
            alt="Page Background"
            fill 
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

       <header className="relative z-10 mb-24 mt-8 text-center">
          <div className="inline-block border-t-2 border-b-2 border-l-2 border-emerald-500/50 rounded-tl-xl rounded-bl-xl px-6 py-2 border-r-2 border-r-transparent relative">
            <div className="absolute top-0 right-0 h-full w-2 border-t-2 border-b-2 border-r-2 border-emerald-500/50 rounded-tr-xl rounded-br-xl -mr-2"></div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white drop-shadow">
             Browse Our Plants
            </h1>
          </div>
        </header>

        {/* 3x2 Grid Display */}
     <section className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 px-4">
          {currentPlants.map((plant, index) => {
            // Check if this specific card's ID matches the one clicked in Navbar
            const isHighlighted = String(plant.id) === selectedPlantId;

            return (
              <div
                key={plant.id}
                className={`transition-all duration-500 rounded-[2.5rem] ${
                  isHighlighted 
                    ? "ring-4 ring-emerald-400 border-emerald-400 scale-[1.05] shadow-[0_0_50px_rgba(16,185,129,0.4)] z-20" 
                    : ""
                }`}
              >
                <PlantCard 
                  plant={plant} 
                  isPriority={index < 2} 
                />
              </div>
            );
          })}
        </section>

        {/* Dynamic Pagination Panel Controls */}
       <footer className="relative z-10 w-full max-w-[160px] flex gap-4 justify-between items-center mt-24 mx-auto">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`p-4 rounded-full transition-all duration-200 shadow-lg border ${
              currentPage === 1
                ? "bg-zinc-800/20 border-zinc-700/20 text-zinc-600 cursor-not-allowed"
                : "bg-[#1d271e]/80 border-emerald-900/40 text-zinc-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-600"
            }`}
            aria-label="Previous Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => handlePageChange(2)}
            disabled={currentPage === 2}
            className={`p-4 rounded-full transition-all duration-200 shadow-lg border ${
              currentPage === 2
                ? "bg-zinc-800/20 border-zinc-700/20 text-zinc-600 cursor-not-allowed"
                : "bg-[#1d271e]/80 border-emerald-900/40 text-zinc-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-600"
            }`}
            aria-label="Next Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </footer>
      </main>
    </>
  );
}