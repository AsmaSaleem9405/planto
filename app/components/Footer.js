"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1b2b16] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 -mb-21">
  <Image
    src="/icons/logo.webp"
    alt="Planto Logo"
    width={70}
    height={40}
    priority
  />

  <span className="text-3xl font-bold pt-5 text-white tracking-wide">
    Planto<span className="text-green-400">.</span>
  </span>
</Link>

            <p className="text-gray-300 leading-7 text-sm max-w-sm">
              We provide premium quality plants to make your
              home greener and healthier. Beautiful plants
              delivered directly to your doorstep.
            </p>

            <div className="flex gap-5 mt-8">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:text-green-400 duration-300"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="hover:text-green-400 duration-300"
  >
    <FaTwitter />
  </a>

  <a
    href="https://pk.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-green-400 duration-300"
  >
    <FaLinkedinIn />
  </a>
</div>
          </div>

          {/* Links */}

          <div>
            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#plants"
                  className="hover:text-green-400 duration-300"
                >
                  Types Of Plants
                </Link>
              </li>
              <li>
                
                <Link
                  href="/#bestplants"
                  className="hover:text-green-400 duration-300"
                >
                  Best Plants
                </Link>
              </li>
               <li>
                
                <Link
                  href="/#review"
                  className="hover:text-green-400 duration-300"
                >
                  Testimonials
                </Link>
              </li>
              
 
              

              <li>

                <Link
                  href="/#contact"
                  className="hover:text-green-400 duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-green-400 duration-300"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Get Every Update
            </h3>

            <form className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded-md border border-gray-500 bg-transparent px-4 py-3 outline-none focus:border-green-500"
              />

              <button
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-green-500 hover:text-white transition"
              >
                Subscribe
              </button>

            </form>

            <p className="text-gray-400 text-sm mt-4">
              Subscribe to receive plant care tips and
              exclusive offers.
            </p>

          </div>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-green-900">

        <div className="max-w-7xl mx-auto py-5 text-center text-gray-400 text-sm">

          © {year} Planto. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}