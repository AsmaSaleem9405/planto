"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Mock reviews tailored for Breathe Natural
const reviews = [
  {
    id: 1,
    name: "Maxn Raval",
    image: "/gallery/person1.jpg", // Replace with your gallery image path
    rating: 5,
    text: "Breathe Natural completely transformed my living room! The Monstera arrived in perfect condition and the care guides made it effortless to keep alive.",
  },
  {
    id: 2,
    name: "Venely K",
    image: "/gallery/person2.jpg",
    rating: 5,
    text: "I was skeptical about ordering plants online, but these premium indoor plants are stunning. Elegant, fresh, and they bring so much calm to my workspace.",
  },
  {
    id: 3,
    name: "Lii Thakur",
    image: "/gallery/person3.jpg",
    rating: 5,
    text: "Excellent selection and premium quality. The snake plant looks gorgeous in my bedroom and truly brings a touch of effortless nature indoors.",
  },
  {
    id: 4,
    name: "Sarah Ahmed",
    image: "/gallery/person4.jpg",
    rating: 5,
    text: "The customer service is as wonderful as the plants. Effortless care instructions mean my living space stays vibrant and green year-round.",
  },
  {
    id: 5,
    name: "Zainab Malik",
    image: "/gallery/person5.jpg",
    rating: 5,
    text: "Beautiful aesthetics! The premium pots and healthy foliage instantly upgraded our office ambiance. Highly recommend Breathe Natural.",
  },
  {
    id: 6,
    name: "Rohit Kumar",
    image: "/gallery/person6.jpg",
    rating: 5,
    text: "A breath of fresh air literally. The indoor plant package brings a serene and healthy atmosphere to the entire home layout.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Helper to get visible items in positions: Left, Center, Right
  const getVisibleIndices = () => {
    const total = reviews.length;
    const left = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;
    return { left, center, right };
  };

  const { left, center, right } = getVisibleIndices();

  return (
    <section 
  className="relative min-h-[80px] bg-[#0c160c] bg-[url('/images/bg-1.png')] bg-cover bg-center bg-no-repeat py-20 px-4 overflow-hidden flex flex-col items-center justify-center select-none"
  aria-label="Customer Reviews"
>
      {/* Structured SEO Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Breathe Natural Premium Indoor Plants",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": reviews.length.toString(),
            },
          }),
        }}
      />

      {/* Custom Framed Header */}
      <div className="relative mb-24 z-10">
        <div className="absolute -inset-x-4 -inset-y-2 border-t border-b border-l border-green-400/30 rounded-l-xl pointer-events-none"></div>
        <div className="absolute -inset-x-4 -inset-y-2 border-t border-b border-r border-green-400/30 rounded-r-xl pointer-events-none"></div>
        
        {/* Glowing border accents simulating the UI frame */}
        <div className="absolute top-[-8px] right-[-16px] w-6 h-6 border-t-2 border-r-2 border-green-400 rounded-tr-md"></div>
        <div className="absolute bottom-[-8px] left-[-16px] w-6 h-6 border-b-2 border-l-2 border-green-400 rounded-bl-md"></div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide px-6 py-1 text-center font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Customer Review
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-[450px] md:h-[380px] flex items-center justify-center z-10">
        
        {/* Left Hidden/Blur Card (Mobile Responsive: hidden on smaller viewports) */}
        <div 
          onClick={handlePrev}
          className="absolute left-0 hidden lg:flex w-[320px] h-[300px] flex-col justify-between p-8 bg-[#1a241a]/60 backdrop-blur-sm rounded-[2.5rem_1.5rem_2.5rem_1.5rem] border border-white/50 opacity-35 blur-[1px] scale-90 cursor-pointer transition-all duration-500 hover:opacity-40"
        >
          <CardContent review={reviews[left]} />
        </div>

        {/* Center Active Focused Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={center}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full max-w-[360px] h-[330px] flex flex-col justify-between p-8 bg-[#182318] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-[2.8rem_1.8rem_2.8rem_1.8rem] border border-white/10 z-20"
          >
            <CardContent review={reviews[center]} />
          </motion.div>
        </AnimatePresence>

        {/* Right Hidden/Blur Card */}
        <div 
          onClick={handleNext}
          className="absolute right-0 hidden lg:flex w-[320px] h-[300px] flex-col justify-between p-8 bg-[#1a241a]/60 backdrop-blur-sm rounded-[2.5rem_1.5rem_2.5rem_1.5rem] border border-white/50 opacity-35 blur-[1px] scale-90 cursor-pointer transition-all duration-500 hover:opacity-40"
        >
          <CardContent review={reviews[right]} />
        </div>

      </div>

      {/* Control Actions / Navigation Dots */}
      <div className="flex items-center gap-6 mt-8 z-10">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Previous Review"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-green-400" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Next Review"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

// Reusable card contents layout block
function CardContent({ review }) {
  return (
    <>
      <div>
        {/* Profile Header Block */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg border border-white/10">
            {/* Fallback layout background if gallery image doesn't load immediately */}
            <div className="absolute inset-0 bg-neutral-700 animate-pulse" />
            <img 
              src={review.image} 
              alt={review.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg tracking-wide">{review.name}</h3>
            {/* Star Display System */}
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Review Context Copy */}
        <p className="text-gray-400/90 text-sm leading-relaxed font-light text-left">
          {review.text}
        </p>
      </div>
    </>
  );
}