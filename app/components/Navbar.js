"use client";

import Link from "next/link";
import Image from "next/image"

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation"; 
import { useCart } from "@/app/context/CartContext";
import CartDrawer from "./CartDrawer"; 
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiChevronDown,
} from "react-icons/fi";

const topSellingPlants = [
  { id: 1, name: "Hosta Plant" },
  { id: 2, name: "Haworthia Succulent" },
  { id: 3, name: "Blue Torch Cactus" },
  { id: 4, name: "Monstera Deliciosa" },
  { id: 5, name: "Bird of Paradise" },
  { id: 6, name: "Zebra Haworthia" },
  { id: 7, name: "Snake Plant" },
  { id: 8, name: "ZZ Plant" },
  { id: 9, name: "Fiddle Leaf Fig" },
  { id: 10, name: "Pothos" },
  { id: 11, name: "Spider Plant" },
  { id: 12, name: "Boston Fern" },
];

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [open, setOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState("home"); 

  // --- Search Functional States ---
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null); 
  const searchParams = useSearchParams();
  const activePlantId = searchParams.get("id");

  // --- Real-time Scroll Spy Highlighting Engine ---
  useEffect(() => {
    const sectionIds = ["home", "plants", "review", "bestplants", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Close desktop dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Focus on search input when it is opened
  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  // --- Live Search Form Submission Trigger ---
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    
    if (query) {
      const matchedPlant = topSellingPlants.find((plant) =>
        plant.name.toLowerCase().includes(query)
      );

      if (matchedPlant) {
        window.location.href = `/?id=${matchedPlant.id}#plants`;
      } else if ("reviews".includes(query) || "review".includes(query)) {
        window.location.href = "/#review";
      } else if ("contact".includes(query) || "support".includes(query)) {
        window.location.href = "/#contact";
      } else if ("more".includes(query) || "best".includes(query)) {
        window.location.href = "/#plants";
      } else {
        window.location.href = "/#plants";
      }

      setSearchQuery(""); 
      setShowSearchInput(false);
      setOpen(false); 
    }
  };

  const activeGlow = "text-emerald-400 font-semibold drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]";
  const hoverGlow = "text-gray-300 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <Image
                src="/icons/logo.webp"
                alt="Planto"
                width={42}
                height={42}
                className="object-contain group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.6)] transition duration-300"
              />
              <span className="text-white text-xl font-bold tracking-wide group-hover:text-emerald-400 transition duration-300">Planto.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#home" className={`transition duration-300 ${activeSection === "home" ? activeGlow : hoverGlow}`}>
                Home
              </Link>

              {/* Desktop Dropdown Container */}
              <div 
                className="relative flex items-center gap-1" 
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link href="#plants" className={`transition duration-300 ${activeSection === "plants" ? activeGlow : hoverGlow}`}>
                  Plant Types
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="text-gray-400 hover:text-emerald-400 p-1 transition duration-200 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                >
                  <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-emerald-400" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 border border-white/10 rounded-xl shadow-2xl p-2 grid grid-cols-1 gap-1 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                    {topSellingPlants.map((plant) => {
                      const isSubItemActive = activeSection === "plants" && activePlantId === String(plant.id);
                      return (
                        <Link
                          key={plant.id}
                          href={`/?id=${plant.id}#plants`} 
                          onClick={() => setDropdownOpen(false)}
                          className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                            isSubItemActive
                              ? "bg-emerald-500/20 text-emerald-400 font-semibold border-l-4 border-emerald-400 pl-3 drop-shadow-[0_0_6px_rgba(52,211,153,0.4)]"
                              : "text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-300 hover:pl-5"
                          }`}
                        >
                          {plant.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link href="#bestplants" className={`transition duration-300 ${activeSection === "bestplants" ? activeGlow : hoverGlow}`}>
                Best Plants
              </Link>
              <Link href="#review" className={`transition duration-300 ${activeSection === "review" ? activeGlow : hoverGlow}`}>
                Testimonials
              </Link>
              <Link href="#contact" className={`transition duration-300 ${activeSection === "contact" ? activeGlow : hoverGlow}`}>
                Contact
              </Link>
            </nav>

            {/* Right-aligned Header Elements (Icons & Mobile Trigger) */}
            <div className="flex items-center gap-4 lg:gap-5">
              
              {/* Dynamic Search Box (Desktop & Mobile) */}
              {showSearchInput ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1 animate-in fade-in zoom-in-95 duration-200 max-w-[180px] sm:max-w-none">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white text-sm outline-none placeholder-gray-400 w-24 sm:w-40 focus:w-32 sm:focus:w-56 transition-all duration-300"
                  />
                  <button type="submit" className="text-emerald-400 ml-1">
                    <FiSearch size={16} />
                  </button>
                  <button type="button" onClick={() => setShowSearchInput(false)} className="text-gray-400 hover:text-white ml-2 text-xs">
                    <FiX size={14} />
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setShowSearchInput(true)} 
                  className="text-white hover:text-emerald-400 transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)] duration-200"
                >
                  <FiSearch size={22} />
                </button>
              )}
              
              {/* Shopping Bag Trigger (Desktop & Mobile) */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-white hover:text-emerald-400 transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)] duration-200"
              >
                <FiShoppingBag size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-neutral-900 text-[10px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Action Icon */}
              <button onClick={() => setOpen(!open)} className="lg:hidden text-white z-[60] p-1 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)] transition">
                {open ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setOpen(false)}></div>

        {/* Content Box Menu */}
        <div className="relative mt-24 mx-4 rounded-2xl bg-black/90 border border-white/10 shadow-2xl p-6 backdrop-blur-xl">
          <nav className="flex flex-col gap-5">
            <Link 
              href="#home" 
              onClick={() => setOpen(false)} 
              className={`text-lg transition ${activeSection === "home" ? "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-white hover:text-emerald-400"}`}
            >
              Home
            </Link>

            {/* Mobile Dropdown Element */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full">
                <Link
                  href="#plants"
                  onClick={() => setOpen(false)}
                  className={`text-lg transition ${
                    activeSection === "plants" ? "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-white hover:text-emerald-400"
                  }`}
                >
                  Top Selling Plants
                </Link>
                <button 
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="text-white p-2 hover:text-emerald-400 transition"
                >
                  <FiChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180 text-emerald-400" : ""}`} />
                </button>
              </div>

              {mobileDropdownOpen && (
                <div className="pl-3 border-l border-white/10 flex flex-col gap-2.5 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {topSellingPlants.map((plant) => {
                    const isSubItemActive = activeSection === "plants" && activePlantId === String(plant.id);
                    return (
                      <Link
                        key={plant.id}
                        href={`/?id=${plant.id}#plants`}
                        onClick={() => setOpen(false)}
                        className={`text-sm transition-all duration-200 ${
                          isSubItemActive ? "text-emerald-400 font-bold pl-1 drop-shadow-[0_0_6px_rgba(52,211,153,0.4)]" : "text-gray-400 hover:text-emerald-300 hover:pl-2"
                        }`}
                      >
                        {plant.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link 
              href="#review" 
              onClick={() => setOpen(false)} 
              className={`text-lg transition ${activeSection === "review" ? "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-white hover:text-emerald-400"}`}
            >
              Reviews
            </Link>

            <Link 
              href="#bestplants" 
              onClick={() => setOpen(false)} 
              className={`text-lg transition ${activeSection === "bestplants" ? "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-white hover:text-emerald-400"}`}
            >
              More
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className={`text-lg transition ${activeSection === "contact" ? "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-white hover:text-emerald-400"}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Render the drawer overlay component */}
      <CartDrawer />
    </>
  );
}