"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingBag } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Plants Types", href: "#" },
  { name: "More", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Planto"
              width={40}
              height={40}
            />
            <span className="text-white text-xl font-bold">
              Planto.
            </span>
          </Link>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-400 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Icons */}

          <div className="hidden lg:flex items-center gap-5">

            <button>
              <FiSearch
                className="text-white"
                size={22}
              />
            </button>

            <button>
              <FiShoppingBag
                className="text-white"
                size={22}
              />
            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden bg-black/95 overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white text-lg"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex gap-6">

            <FiSearch
              size={24}
              className="text-white"
            />

            <FiShoppingBag
              size={24}
              className="text-white"
            />

          </div>

        </div>
      </div>

    </header>
  );
}