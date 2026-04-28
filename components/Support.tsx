"use client";

import { motion } from "framer-motion";
import { Snowflake, Utensils, Users, Truck, ShoppingBag, Rocket } from "lucide-react";

export default function Support() {
  const facilities = [
    { icon: <Snowflake className="w-5 h-5" />, text: "Freezer berkualitas & hemat listrik" },
    { icon: <Utensils className="w-5 h-5" />, text: "Produk lengkap & terlaris" },
    { icon: <Users className="w-5 h-5" />, text: "Bimbingan & support untuk mitra" },
    { icon: <Truck className="w-5 h-5" />, text: "Pengiriman cepat seluruh Indonesia" },
    { icon: <ShoppingBag className="w-5 h-5" />, text: "Banner, kantong plastik, stiker & perlengkapan usaha" },
    { icon: <Rocket className="w-5 h-5" />, text: "Siap jualan, untung maksimal" }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
          >
            Fasilitas & Dukungan
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium text-navy leading-tight"
          >
            Segala yang Anda Butuhkan untuk Sukses Bersama Kami
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facilities.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white rounded-3xl clean-shadow border border-slate-100 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="text-navy font-semibold text-lg mb-2">
                {item.text.split(' & ')[0]}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="italic text-slate-400 font-light max-w-2xl mx-auto">
            "Tanpa ribet produksi, tanpa pengalaman pun bisa langsung mulai! Kami siap membimbing Anda hingga meraih keuntungan maksimal."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
