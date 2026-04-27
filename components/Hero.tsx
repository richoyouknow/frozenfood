"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/pricing/IMG_8547.PNG" 
          alt="Indo Frozen Food Background" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-medium leading-[1.05] text-navy mb-8 tracking-tight">
              Kemitraan <br />
              <span className="text-primary font-bold">INDO FROZEN FOOD</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink-muted mb-12 leading-relaxed max-w-2xl font-light">
              Solusi praktis memulai usaha frozen food langsung dari rumah. <span className="font-medium text-navy">Mudah, Terjangkau, & Menguntungkan.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-start">
              <Link
                href="#daftar"
                className="inline-flex justify-center items-center gap-3 bg-primary hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 clean-shadow hover:-translate-y-1 text-lg w-full sm:w-auto"
              >
                Gabung Sekarang
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#paket"
                className="inline-flex justify-center items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-primary/30 hover:bg-white text-navy px-10 py-5 rounded-full font-bold transition-all duration-300 text-lg w-full sm:w-auto"
              >
                Lihat Paket
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 text-sm font-bold text-navy/60 uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Siap Jualan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Bimbingan Mitra</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Stok Terjamin</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Decorative floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:block z-20"
      >
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl clean-shadow border border-white flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
            %
          </div>
          <div>
            <p className="text-navy font-bold leading-tight text-lg">Promo Kemitraan</p>
            <p className="text-ink-muted text-sm uppercase tracking-wide font-medium">Bulan Ini Saja!</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
