"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiChevronDown,
} from "react-icons/fi";

// The 12 Top Selling Plants
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
  const [open, setOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown state
  const dropdownRef = useRef(null);

  // Read URL params
  const searchParams = useSearchParams();
  const activePlantId = searchParams.get("id");

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2">
              <Image
                src="/icons/logo.webp"
                alt="Planto"
                width={42}
                height={42}
                className="object-contain"
              />
              <span className="text-white text-xl font-bold">Planto.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link href="#home" className="text-gray-300 hover:text-green-400 transition duration-300">
                Home
              </Link>

              {/* Plants Dropdown Trigger */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 transition duration-300 ${
                    activePlantId ? "text-emerald-400 font-medium" : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  Top Selling Plants
                  <FiChevronDown className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-black/95 border border-white/10 rounded-xl shadow-xl p-2 grid grid-cols-1 gap-1 z-50 max-h-96 overflow-y-auto backdrop-blur-xl">
                    {topSellingPlants.map((plant) => {
                      const isActive = activePlantId === String(plant.id);
                      return (
                        <Link
                          key={plant.id}
                          // This routes directly on the main page layout, setting the ID parameter and sliding to your component target section
                          href={`/?id=${plant.id}#plants`} 
                          onClick={() => setDropdownOpen(false)}
                          className={`px-4 py-2 rounded-lg text-sm transition duration-200 ${
                            isActive
                              ? "bg-emerald-500/20 text-emerald-400 font-semibold border-l-4 border-emerald-400 pl-3"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {plant.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link href="#bestplants" className="text-gray-300 hover:text-green-400 transition duration-300">
                More
              </Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
                Contact
              </Link>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-5">
              <button className="text-white hover:text-green-400 transition">
                <FiSearch size={22} />
              </button>
              <button className="text-white hover:text-green-400 transition">
                <FiShoppingBag size={22} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="lg:hidden text-white z-[60]">
              {open ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setOpen(false)}></div>

        {/* Menu Container */}
        <div className="relative mt-20 mx-4 rounded-2xl bg-black/95 border border-white/10 shadow-2xl p-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-5">
            <Link href="/" onClick={() => setOpen(false)} className="text-white text-lg hover:text-green-400 transition">
              Home
            </Link>

            {/* Mobile Plant Accordion Section */}
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Plant Types</span>
              <div className="pl-3 border-l border-white/10 flex flex-col gap-3 mt-1">
                {topSellingPlants.map((plant) => {
                  const isActive = activePlantId === String(plant.id);
                  return (
                    <Link
                      key={plant.id}
                      href={`/?id=${plant.id}#plants`}
                      onClick={() => setOpen(false)}
                      className={`text-base transition ${
                        isActive ? "text-emerald-400 font-bold" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {plant.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link href="#" onClick={() => setOpen(false)} className="text-white text-lg hover:text-green-400 transition">
              More
            </Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-white text-lg hover:text-green-400 transition">
              Contact
            </Link>
          </nav>

          <div className="border-t border-gray-700 my-6" />

          {/* Icons */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-3 text-white hover:text-green-400 transition">
              <FiSearch size={22} />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-3 text-white hover:text-green-400 transition">
              <FiShoppingBag size={22} />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}