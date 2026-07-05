"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Mock reviews tailored for Breathe Natural
const reviews = [
  {
    id: 1,
    name: "Maxn Raval",
    image: "/images/men1.webp",
    rating: 5,
    text: "Breathe Natural completely transformed my living room! The Monstera arrived in perfect condition and the care guides made it effortless to keep alive.",
  },
  {
    id: 2,
    name: "Venely K",
    image: "/images/girl1.webp",
    rating: 5,
    text: "I was skeptical about ordering plants online, but these premium indoor plants are stunning. Elegant, fresh, and they bring so much calm to my workspace.",
  },
  {
    id: 3,
    name: "Lii Thakur",
    image: "/images/men2.webp",
    rating: 5,
    text: "Excellent selection and premium quality. The snake plant looks gorgeous in my bedroom and truly brings a touch of effortless nature indoors.",
  },
  {
    id: 4,
    name: "Sarah Ahmed",
    image: "/images/girl2.webp",
    rating: 5,
    text: "The customer service is as wonderful as the plants. Effortless care instructions mean my living space stays vibrant and green year-round.",
  },
  {
    id: 5,
    name: "Zainab Malik",
    image: "/images/girl3.webp",
    rating: 5,
    text: "Beautiful aesthetics! The premium pots and healthy foliage instantly upgraded our office ambiance. Highly recommend Breathe Natural.",
  },
  {
    id: 6,
    name: "Rohit Kumar",
    image: "/images/men3.webp",
    rating: 5,
    text: "A breath of fresh air literally. The indoor plant package brings a serene and healthy atmosphere to the entire home layout.",
  },
];

// Pre-compiled SEO string to save execution time during renders
const schemaData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Breathe Natural Premium Indoor Plants",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": reviews.length.toString(),
  },
});

// Scroll Variants optimized for GPU acceleration
const scrollFadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Memoized handlers prevent recreating functions on every tick
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto rotate every 6 seconds, resetting if index changes via manual click
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext, currentIndex]);

  const total = reviews.length;
  const left = (currentIndex - 1 + total) % total;
  const right = (currentIndex + 1) % total;

  return (
    <section id="review"
      className="relative min-h-[80px] bg-[#0c160c] bg-[url('/images/bg-1.webp')] bg-cover bg-center bg-no-repeat py-20 px-4 overflow-hidden flex flex-col items-center justify-center select-none"
      aria-label="Customer Reviews"
    >
      {/* Structured SEO Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaData }}
      />

      {/* Custom Framed Header - Animates on Scroll Up/Down */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollFadeUpVariants}
        className="relative mb-24 z-10 will-change-transform"
      >
        
        {/* Glowing border accents simulating the UI frame */}
<div className="flex items-center justify-center gap-5">
  <span className="w-14 md:w-20 h-[2px] bg-green-400 rounded-full"></span>

  <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-white">
    Customer Reviews
  </h2>

  <span className="w-14 md:w-20 h-[2px] bg-green-400 rounded-full"></span>
</div>
      </motion.div>

      {/* Carousel Container - Animates on Scroll Up/Down */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollFadeUpVariants}
        className="relative w-full max-w-6xl h-[450px] md:h-[380px] flex items-center justify-center z-10 will-change-transform"
      >
        
        {/* Left Hidden/Blur Card */}
        <div 
          onClick={handlePrev}
          className="absolute left-0 hidden lg:flex w-[320px] h-[300px] flex-col justify-between p-8 bg-[#1a241a]/60 backdrop-blur-sm rounded-[2.5rem_1.5rem_2.5rem_1.5rem] border border-white/50 opacity-35 blur-[1px] scale-90 cursor-pointer transition-all duration-300 hover:opacity-50"
        >
          <CardContent review={reviews[left]} />
        </div>

        {/* Center Active Focused Card with Smooth Custom Transitions */}
        <div className="relative w-full max-w-[360px] h-[330px] flex items-center justify-center">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, scale: 0.95, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full h-full flex flex-col justify-between p-8 bg-[#182318] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-[2.8rem_1.8rem_2.8rem_1.8rem] border border-white/10 z-20 will-change-transform"
            >
              <CardContent review={reviews[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Hidden/Blur Card */}
        <div 
          onClick={handleNext}
          className="absolute right-0 hidden lg:flex w-[320px] h-[300px] flex-col justify-between p-8 bg-[#1a241a]/60 backdrop-blur-sm rounded-[2.5rem_1.5rem_2.5rem_1.5rem] border border-white/50 opacity-35 blur-[1px] scale-90 cursor-pointer transition-all duration-300 hover:opacity-50"
        >
          <CardContent review={reviews[right]} />
        </div>

      </motion.div>

      {/* Control Actions / Navigation Dots */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={scrollFadeUpVariants}
        className="flex items-center gap-6 mt-8 z-10 will-change-transform"
      >
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
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
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
      </motion.div>
    </section>
  );
}

// Reusable card contents layout block - Memoized to completely eliminate unnecessary updates
const CardContent = memo(function CardContent({ review }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Profile Header Block */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg border border-white/10 bg-neutral-700">
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
              {Array.from({ length: review.rating }).map((_, i) => (
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
    </div>
  );
});