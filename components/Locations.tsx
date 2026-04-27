"use client";

import { motion } from "framer-motion";
import { Home, Store, Coffee, LayoutGrid } from "lucide-react";

export default function Locations() {
  const locations = [
    { icon: <Home className="w-6 h-6" />, name: "Rumah" },
    { icon: <Store className="w-6 h-6" />, name: "Toko Kecil" },
    { icon: <Coffee className="w-6 h-6" />, name: "Warung" },
    { icon: <LayoutGrid className="w-6 h-6" />, name: "Kios / Booth" }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
          >
            Fleksibilitas Lokasi
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-display font-medium text-navy"
          >
            Cocok untuk Berbagai Lokasi Usaha
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-8 bg-slate-50 rounded-[2rem] hover:bg-primary-light hover:text-primary transition-all duration-500 group"
            >
              <div className="mb-4 text-navy group-hover:text-primary transition-colors">
                {loc.icon}
              </div>
              <span className="font-display font-medium text-navy group-hover:text-primary">{loc.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
