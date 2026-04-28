"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Star, ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="testimoni" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center group">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div
                className="h-px bg-primary transition-all duration-700"
                style={{
                  width: isHovered ? 48 : 32,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary transition-all duration-700 md:text-xs"
                style={{
                  letterSpacing: isHovered ? "0.3em" : "0.25em",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Testimoni Mitra
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-medium text-navy leading-tight mb-8">
              <span
                className="block transition-all duration-700"
                style={{
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Mulai bisnis frozen food
              </span>
              <span
                className="block transition-all duration-700"
                style={{
                  transform: isHovered ? "translateX(12px)" : "translateX(0)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                hanya dengan <span className="text-primary font-bold">Rp1,5 juta?</span> Bisa!
              </span>
            </h2>
            
            <p className="text-lg text-ink-muted leading-relaxed font-light mb-8">
              Dapatkan fasilitas jualan lengkap mulai dari freezer, materi promosi, hingga produk awal dari brand favorit seperti <span className="font-medium text-navy">Kenzler, Fiesta, Belfoods, So Nice,</span> dan masih banyak lagi—yang sudah pasti dicari pelanggan.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative mb-10">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20 rotate-12" />
              <p className="text-xl md:text-2xl text-navy font-display font-medium leading-relaxed italic">
                "1.000+ Mitra telah membuktikan, ayo mulai usaha frozen food anda sekarang"
              </p>
            </div>
            
            <p className="text-lg text-ink-muted leading-relaxed font-light mb-10">
              Tanpa ribet, tanpa pengalaman—semua sudah kami siapkan. Terbukti, 1.000+ mitra sudah bergabung dan menjalankan bisnisnya. <span className="font-medium text-navy">Saatnya Anda mulai.</span>
            </p>

            <div className="mt-6 flex items-center gap-5 md:mt-10">
              <Link
                href="#daftar"
                className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 shadow-sm border border-slate-200 bg-slate-100 text-navy hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-xl hover:shadow-primary/20 group/btn"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <ArrowUpRight
                  className="h-6 w-6 transition-transform duration-500 group-hover/btn:rotate-45"
                />
              </Link>
              <div className="flex flex-col">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-all duration-700"
                  style={{
                    opacity: isHovered ? 1 : 0.6,
                    transform: isHovered ? "translateX(0)" : "translateX(-4px)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Siap Bergabung?
                </span>
                <span
                  className="text-lg font-display font-medium text-navy transition-all duration-700"
                  style={{
                    opacity: isHovered ? 1 : 0.8,
                    transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "50ms",
                  }}
                >
                  Daftar Sekarang
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative background shape */}
            <div 
              className="absolute -inset-4 border transition-all duration-700 rounded-[3rem]" 
              style={{
                borderColor: isHovered ? "rgba(15, 23, 42, 0.1)" : "transparent",
                transform: isHovered ? "scale(1.01)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            
            <div 
              className="relative z-10 rounded-[2.5rem] overflow-hidden clean-shadow border-8 border-white transition-all duration-700"
              style={{
                boxShadow: isHovered ? "0 24px 64px rgba(15, 23, 42, 0.15)" : "0 0 0 transparent",
                transform: isHovered ? "translateX(4px) translateY(-4px)" : "translateX(0) translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <img 
                src="/hero/testimoni.PNG" 
                alt="Testimoni Mitra Indo Frozen Food" 
                className="w-full h-auto transition-transform duration-1000"
                style={{
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Corner accents */}
              <div
                className="absolute left-4 top-4 h-8 w-px bg-white/80 transition-all duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "50ms",
                }}
              />
              <div
                className="absolute left-4 top-4 h-px w-8 bg-white/80 transition-all duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "100ms",
                }}
              />
              <div
                className="absolute bottom-4 right-4 h-8 w-px bg-white/80 transition-all duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "150ms",
                }}
              />
              <div
                className="absolute bottom-4 right-4 h-px w-8 bg-white/80 transition-all duration-500"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "right",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "200ms",
                }}
              />
            </div>
            
            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.5
                }
              }}
              className="absolute -bottom-10 -right-6 md:right-4 bg-white/80 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 hidden sm:flex items-center gap-5 z-20 group/badge"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover/badge:blur-xl transition-all duration-500" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                  <Users size={28} />
                </div>
                {/* Micro pulse effect */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-bold text-navy tracking-tight leading-none">1.000</span>
                  <span className="text-primary font-bold text-xl">+</span>
                </div>
                <p className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.2em] mt-1">Mitra Bergabung</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
