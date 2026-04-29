"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Snowflake } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Paket Usaha", href: "#paket" },
    { name: "Syarat & Alur", href: "#syarat" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-nav py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <Link href="#" className="flex items-center gap-3 group">
          <div className="h-12 w-12 overflow-hidden rounded-xl flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:border-primary/20 transition-colors duration-500">
            <img 
              src="/logo/IMG_8448.PNG" 
              alt="Indo Frozen Food Logo" 
              className="h-full w-full object-cover scale-110 transition-transform duration-500 group-hover:scale-125"
            />
          </div>
          <span className="text-xl font-medium font-display tracking-tight text-navy hidden sm:block">
            Indo<span className="text-primary font-bold">FrozenFood</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink-muted hover:text-navy transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#daftar"
            className="bg-navy hover:bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 clean-shadow hover:-translate-y-0.5"
          >
            Daftar Sekarang
          </Link>
        </nav>

        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden absolute top-full left-0 w-full"
          >
            <nav className="flex flex-col py-6 px-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-lg font-display font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#daftar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-navy text-white text-center p-4 rounded-xl font-medium mt-2"
              >
                Daftar Sekarang
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
