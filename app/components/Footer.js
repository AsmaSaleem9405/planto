"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  // Animation variants for the grid columns
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Staggered container variants for social icons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
  };

  // Quick links tracking array
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Types Of Plants", href: "/#plants" },
    { name: "Best Plants", href: "/#bestplants" },
    { name: "Testimonials", href: "/#review" },
    { name: "Contact", href: "/#contact" },
    { name: "Privacy Policy", href: "/privacy-policy" }
  ];

  return (
    <footer className="bg-[#1b2b16] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Logo Section */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <Link href="#home" className="inline-flex items-center gap-3">
              <Image
                src="/icons/logo.webp"
                alt="Planto Logo"
                width={60}
                height={40}
                priority
                className="transition-transform duration-300 hover:rotate-6"
              />
              <span className="text-3xl font-bold pt-3 text-white tracking-wide">
                Planto<span className="text-green-400">.</span>
              </span>
            </Link>

            <p className="text-gray-300 leading-7 text-sm max-w-sm">
              We provide premium quality plants to make your
              home greener and healthier. Beautiful plants
              delivered directly to your doorstep.
            </p>

            {/* Staggered Social Icons */}
            <motion.div 
              variants={containerVariants}
              className="flex gap-5 mt-4"
            >
              <motion.a
                variants={itemVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-green-400 duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-green-400 duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://pk.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-green-400 duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10"
              >
                <FaLinkedinIn />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block hover:text-green-400 transition-all duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-bold text-lg mb-5">
              Get Every Update
            </h3>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 rounded-md border border-gray-500 bg-transparent px-4 py-3 outline-none focus:border-green-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 active:scale-95"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              Subscribe to receive plant care tips and
              exclusive offers.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto py-5 text-center text-gray-400 text-sm">
          © {year} Planto. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}