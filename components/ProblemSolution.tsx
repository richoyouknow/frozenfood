"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text/Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Solusi Bisnis</h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-navy leading-tight mb-8">
              Punya Keinginan Usaha Tapi Bingung Mulai dari Mana?
            </h3>
            <p className="text-lg text-ink-muted leading-relaxed font-light mb-8">
              Banyak orang terhambat oleh rasa takut modal besar, kurang pengalaman, atau bingung produk apa yang laku dijual. 
              <br/><br/>
              <span className="font-medium text-navy">Indo Frozen Food hadir sebagai solusi!</span> Kami menyediakan sistem yang sudah teruji, produk yang pasti laku, dan bimbingan penuh hingga Anda sukses.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl clean-shadow border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <p className="text-navy font-bold">Usaha Mudah & Menguntungkan</p>
                <p className="text-xs text-ink-muted font-light uppercase tracking-wider">Tanpa perlu ribet produksi sendiri</p>
              </div>
            </div>
          </motion.div>

          {/* Poster Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden clean-shadow border-8 border-white">
              <img 
                src="/hero/IMG_8534.PNG" 
                alt="Masalah dan Solusi Bisnis" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
