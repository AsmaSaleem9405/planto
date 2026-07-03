import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

// 1. Import your existing Navbar component so the layout stays identical
import Navbar from '@/app/components/Navbar'; // Adjust this path to match your folder structure

// Plant Data Array with accurate names and SEO descriptions
const plantsData = [
  {
    id: 1,
    name: "Aglaonema",
    scientificName: "Chinese Evergreen",
    description: "Known for its beautifully variegated foliage and high tolerance for low-light conditions.",
    price: "Rs. 359/-",
    image: "/images/plant1.png" // Replace with image_e8ecac.png left-top plant from your gallery
  },
  {
    id: 2,
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    description: "A classic indoor favorite featuring lush green leaves and air-purifying qualities.",
    price: "Rs. 359/-",
    image: "/images/plant2.png" // Replace with image_e8ecac.png middle-top plant from your gallery
  },
  {
    id: 3,
    name: "Blue Torch Cactus",
    scientificName: "Pilosocereus azureus",
    description: "A striking, vibrant blue desert cactus that thrives in bright sunshine and minimal water.",
    price: "Rs. 359/-",
    image: "/images/plant3.png" // Replace with image_e8ecac.png right-top plant from your gallery
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    scientificName: "Swiss Cheese Plant",
    description: "Popular for its iconic split leaves, adding an instant tropical vibe to any living room.",
    price: "Rs. 359/-",
    image: "/images/plant4.png" // Replace with image_e8ecac.png left-bottom plant from your gallery
  },
  {
    id: 5,
    name: "Bird of Paradise",
    scientificName: "Strelitzia",
    description: "A dramatic, upright plant with large banana-like leaves that bring architectural structure.",
    price: "Rs. 359/-",
    image: "/images/plant5.png" // Replace with image_e8ecac.png middle-bottom plant from your gallery
  },
  {
    id: 6,
    name: "Zebra Haworthia",
    scientificName: "Hawardiopsis attenuata",
    description: "A charming, low-maintenance succulent distinctively marked with white pearly stripes.",
    price: "Rs. 359/-",
    image: "/images/plant6.png" // Replace with image_e8ecac.png right-bottom plant from your gallery
  }
];

// Reusable Plant Card Component - Enhanced with rich gallery green theme
const PlantCard = ({ plant }) => {
  return (
    <article className="relative bg-gradient-to-b from-[#162218] to-[#0e1610] border-2 border-emerald-500/30 backdrop-blur-md rounded-[2.5rem] p-6 pt-0 flex flex-col justify-between group shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
      
      {/* Decorative background glow for the gallery presentation style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/20 transition-all duration-300"></div>

      {/* Plant Image - Set up to match the visual pop-out style of image_e8ecac.png */}
      <div className="relative w-full h-56 -mt-12 mb-4 flex justify-center items-end drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] z-10">
        <Image
          src={plant.image}
          alt={`Healthy indoor ${plant.name}`}
          width={220}
          height={220}
          className="object-contain max-h-[110%] transition-transform duration-300 group-hover:scale-105"
          priority={plant.id <= 3} // Optimization for above-the-fold content
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow text-left px-2 relative z-10">
        <h3 className="text-xl font-semibold text-zinc-100 tracking-wide group-hover:text-emerald-300 transition-colors duration-200">{plant.name}</h3>
        <p className="text-xs text-emerald-400/80 font-medium italic mb-2">{plant.scientificName}</p>
        <p className="text-sm text-zinc-400 line-clamp-2 mb-6 leading-relaxed">
          {plant.description}
        </p>
      </div>

      {/* Price & Action */}
      <div className="flex justify-between items-center px-2 pb-2 mt-auto relative z-10">
        <span className="text-lg font-bold text-emerald-400 tracking-wide">{plant.price}</span>
        <button 
          aria-label={`Add ${plant.name} to cart`}
          className="p-2.5 rounded-xl border border-emerald-500/30 bg-[#121c14] text-zinc-300 hover:bg-emerald-500 hover:text-neutral-900 hover:border-emerald-400 transition-all duration-200 shadow-md transform active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

// Main Page Component
export default function TopSellingPlantsPage() {
  return (
    <>
      <Head>
        <title>Our Top Selling Indoor Plants | Premium Collection</title>
        <meta name="description" content="Browse our top selling variety of vibrant house plants, custom styled for your modern interior layout." />
      </Head>

      {/* 2. Embedded Navbar renders right here at the top */}
      <Navbar />

      {/* Main Container featuring your custom dark canvas background */}
      <main 
        className="min-h-screen w-full bg-[#111612] bg-cover bg-center flex flex-col justify-between items-center pt-24 pb-16 px-4 md:px-8 lg:px-16" 
        style={{ backgroundImage: "url('/images/page-bg.png')" }}
      >
        
        {/* Custom Framed Header matching image_e8ecac.png */}
        <header className="mb-24 mt-8 text-center">
          <div className="inline-block border-t-2 border-b-2 border-l-2 border-emerald-500/50 rounded-tl-xl rounded-bl-xl px-6 py-2 border-r-2 border-r-transparent relative">
            <div className="absolute top-0 right-0 h-full w-2 border-t-2 border-b-2 border-r-2 border-emerald-500/50 rounded-tr-xl rounded-br-xl -mr-2"></div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white drop-shadow">
              Our Top Selling
            </h1>
          </div>
        </header>

        {/* 3x2 Responsive Grid */}
        <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 px-4">
          {plantsData.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </section>

        {/* Left and Right Navigation Arrows at bottom middle */}
<footer className="w-full max-w-[120px] flex gap-15 items-center mt-8 mx-auto">          {/* Left Arrow Button (Links back to your main/homepage) */}
          <Link href="/app/components/TopSellingPlantsPage" className="p-4 rounded-full bg-[#1d271e]/80 border border-emerald-900/40 text-zinc-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all duration-200 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </Link>

          {/* Right Arrow Button (Links to the 2nd page with same layout structure) */}
          <Link href="/" className="p-4 rounded-full bg-[#1d271e]/80 border border-emerald-900/40 text-zinc-400 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all duration-200 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </footer>
      </main>
    </>
  );
}