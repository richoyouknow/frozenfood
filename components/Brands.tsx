"use client";

import { motion } from "framer-motion";
import { InteractiveProductCard } from "@/components/ui/interactive-product-card";

export default function Brands() {
  const products = [
    { 
      name: "Kanzler", 
      desc: "Sosis Premium No. 1", 
      price: "Best Seller",
      image: "/Product/kenzler.jpg", 
      logo: "/Product/logokenzler.jpg" 
    },
    { 
      name: "Belfoods", 
      desc: "Nugget Ceria Keluarga", 
      price: "Terlaris",
      image: "/Product/belfoods.png", 
      logo: "/Product/logobelfoods.png" 
    },
    { 
      name: "Fiesta", 
      desc: "Kualitas Bintang 5", 
      price: "Premium",
      image: "/Product/fiesta.jpg", 
      logo: "/Product/fiestalogo.png" 
    },
    { 
      name: "Champ", 
      desc: "Pilihan Juara", 
      price: "Hemat",
      image: "/Product/champ.jpg", 
      logo: "/Product/champlogo.jpg" 
    },
    { 
      name: "Okey", 
      desc: "Rasa Okey Harga Okey", 
      price: "Ekonomis",
      image: "/Product/okey.jpg", 
      logo: "/Product/okey-logo.png" 
    },
    { 
      name: "Akumo", 
      desc: "Gurih & Berkualitas", 
      price: "Populer",
      image: "/Product/akumo.png", 
      logo: "/Product/akumologo.png" 
    },
    { 
      name: "So Good", 
      desc: "Sangat Baik Sangat Lezat", 
      price: "Keluarga",
      image: "/Product/soogod.png", 
      logo: "/Product/Sogood-logo.png" 
    },
    { 
      name: "So Nice", 
      desc: "Nikmat Tiada Dua", 
      price: "Favorit",
      image: "/Product/sonice.png", 
      logo: "/Product/logo sonice.jpg" 
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4"
          >
            Brand Terpercaya
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium text-navy"
          >
            Produk Unggulan Kami
          </motion.p>
        </div>

        {/* Responsive Grid of Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <InteractiveProductCard
                title={product.name}
                description={product.desc}
                price={product.price}
                imageUrl={product.image}
                logoUrl={product.logo}
                className="hover:z-50"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
