"use client";

import { motion } from "framer-motion";
import { Store, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Store className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Sistem Praktis",
      description: "Kami menyediakan paket lengkap. Anda tidak perlu memikirkan produk dari nol, semua sudah tersedia dan siap jual."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Kemitraan",
      description: "Kami mendukung setiap mitra untuk berkembang. Dukungan penuh mulai dari pendaftaran hingga operasional."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "Kualitas Premium",
      description: "Produk frozen food pilihan yang diminati pasar, tahan lama, dengan margin keuntungan yang sangat menarik."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
          >
            Tentang Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-medium text-navy leading-tight"
          >
            Membangun ekosistem bisnis frozen food yang mudah diakses oleh siapa saja.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white p-10 rounded-[2rem] clean-shadow group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-medium text-navy mb-4">{feature.title}</h3>
              <p className="text-ink-muted leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
