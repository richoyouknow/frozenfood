"use client";

import { motion } from "framer-motion";
import { Snowflake, Utensils, Users, Truck, ShoppingBag, Rocket, CheckCircle2 } from "lucide-react";

export default function Support() {
  const facilities = [
    { icon: <Snowflake className="w-5 h-5" />, text: "Freezer berkualitas & hemat listrik" },
    { icon: <Utensils className="w-5 h-5" />, text: "Produk lengkap & terlaris" },
    { icon: <Users className="w-5 h-5" />, text: "Bimbingan & support untuk mitra" },
    { icon: <Truck className="w-5 h-5" />, text: "Pengiriman cepat seluruh Indonesia" },
    { icon: <ShoppingBag className="w-5 h-5" />, text: "Banner, kantong plastik, stiker & perlengkapan usaha" },
    { icon: <Rocket className="w-5 h-5" />, text: "Siap jualan, untung maksimal" }
  ];

  const benefits = [
    "Produk berkualitas",
    "Pengiriman seluruh Indonesia",
    "Support marketing & promosi",
    "Packing aman & higienis",
    "Sistem mudah & praktis",
    "Bimbingan untuk mitra"
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Facilities Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-6">Fasilitas & Dukungan</h2>
            <h3 className="text-3xl font-display font-medium text-navy mb-8">Segala yang Anda Butuhkan untuk Sukses</h3>
            <div className="grid gap-4">
              {facilities.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl clean-shadow border border-slate-50">
                  <div className="w-10 h-10 bg-primary-light text-primary flex items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-navy font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* All You Get Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy text-white p-10 md:p-12 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-6">Semua yang Anda Dapatkan</h2>
            <h3 className="text-3xl font-display font-medium mb-10 text-white">Investasi Masa Depan yang Menjanjikan</h3>
            
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300 font-light">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10 italic text-slate-400 font-light">
              "Tanpa ribet produksi, tanpa pengalaman pun bisa langsung mulai!"
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
