"use client";

import { motion } from "framer-motion";

export default function SummaryPoster() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Informasi Lengkap</h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-navy">Kenapa Harus Gabung Indo Frozen Food?</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden clean-shadow border-8 border-white"
        >
          <img 
            src="/hero/IMG_8524.PNG" 
            alt="Ringkasan Kemitraan Indo Frozen Food" 
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
