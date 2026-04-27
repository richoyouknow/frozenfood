"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Bisa Dijalankan dari Rumah",
      description: "Tidak perlu sewa toko, cukup dari rumah sudah bisa mulai usaha."
    },
    {
      title: "Cocok untuk Ibu Rumah Tangga & Pemula",
      description: "Fleksibel dan bisa dijalankan sambil melakukan aktivitas sehari-hari."
    },
    {
      title: "Modal Terjangkau",
      description: "Mulai usaha tanpa perlu modal besar, cocok untuk yang baru memulai bisnis."
    },
    {
      title: "Produk dari Brand Terkenal",
      description: "Produk terpercaya seperti So Nice, Belfoods, dan lainnya yang sudah dikenal pasar."
    },
    {
      title: "Harga Kompetitif",
      description: "Harga bersaing di pasaran sehingga lebih mudah dijual dan menguntungkan."
    },
    {
      title: "Pengiriman Seluruh Indonesia",
      description: "Layanan distribusi ke berbagai daerah, usaha bisa dijalankan di mana saja."
    },
    {
      title: "Potensi Keuntungan Menarik",
      description: "Margin penjualan kompetitif dengan peluang repeat order tinggi."
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Keunggulan Utama
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-navy leading-tight mb-10">
              Kenapa Harus Gabung <br/> Indo Frozen Food?
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-medium text-navy group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-ink-muted font-light text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Poster Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden clean-shadow border-8 border-white">
              <img 
                src="/hero/IMG_8524.PNG" 
                alt="Kenapa Harus Gabung Indo Frozen Food" 
                className="w-full h-auto shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
