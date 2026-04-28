"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TravelCard } from "@/components/ui/card-7";
import { X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Packages({ onSelectPackage }: { onSelectPackage?: (id: string) => void }) {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const packages = [
    {
      id: "paket1",
      name: "Paket Promo",
      title: "Investasi Terjangkau",
      stock: "135 Pack",
      desc: "Solusi praktis untuk Anda yang ingin memulai usaha frozen food dengan modal minimal dari rumah.",
      popular: false,
      imageUrl: "/pricing/paket1.PNG",
      price: 1500000,
      pricePeriod: "Investasi Awal",
      features: [
        "1 Unit Freezer 500L",
        "Stok Produk Lengkap",
        "Mesin Kasir Digital",
        "Timbangan Digital",
        "Vacuum Sealer",
        "Banner Costum"
      ]
    },
    {
      id: "paket2",
      name: "Paket Usaha",
      title: "Kapasitas Menengah",
      stock: "250 Pack",
      desc: "Langkah serius untuk usaha yang lebih lengkap dengan penambahan unit showcase display.",
      popular: true,
      imageUrl: "/pricing/paket2.PNG",
      price: 2500000,
      pricePeriod: "Investasi Awal",
      features: [
        "1 Unit Freezer 500L",
        "1 Unit Showcase 2 Pintu",
        "Stok Produk Lengkap",
        "Mesin Kasir Digital",
        "Timbangan Digital",
        "Vacuum Sealer",
        "Banner Costum"
      ]
    },
    {
      id: "paket3",
      name: "Paket Bisnis",
      title: "Skala Profesional",
      stock: "700 Pack",
      desc: "Kapasitas stok melimpah dengan dua unit freezer besar untuk melayani lebih banyak pelanggan.",
      popular: false,
      imageUrl: "/pricing/paket3.PNG",
      price: 4000000,
      pricePeriod: "Investasi Awal",
      features: [
        "2 Unit Freezer 500L",
        "1 Unit Showcase 2 Pintu",
        "Stok Produk Lengkap",
        "Mesin Kasir Digital",
        "Timbangan Digital",
        "Vacuum Sealer",
        "Banner Costum"
      ]
    },
    {
      id: "paket4",
      name: "Paket Distributor",
      title: "Skala Minimarket",
      stock: "Kapasitas Maksimal",
      desc: "Solusi lengkap minimarket frozen food dengan rak display dan unit pendingin maksimal.",
      popular: false,
      imageUrl: "/pricing/paket4.PNG",
      price: 9000000,
      pricePeriod: "Investasi Awal",
      features: [
        "1 Unit Freezer 500L",
        "2 Unit Showcase 2 Pintu",
        "2 Unit Rak Minimarket",
        "Stok Produk Lengkap",
        "Mesin Kasir Digital",
        "Timbangan Digital",
        "Vacuum Sealer",
        "Banner Costum"
      ]
    }
  ];

  const handleSelect = (id: string) => {
    if (onSelectPackage) {
      onSelectPackage(id);
    }
    setSelectedPackage(null);
    const element = document.getElementById("daftar");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paket" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
          >
            Pilihan Kemitraan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-medium text-navy leading-tight"
          >
            Pilih paket yang sesuai <br/> dengan target bisnis Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TravelCard
                imageUrl={pkg.imageUrl}
                imageAlt={pkg.name}
                title={pkg.name}
                location={pkg.title}
                overview={pkg.desc}
                price={pkg.price}
                pricePeriod={pkg.pricePeriod}
                className={cn(
                  "cursor-pointer",
                  pkg.popular ? "border-primary/50 ring-4 ring-primary/10" : ""
                )}
                onBookNow={(e) => {
                  e?.stopPropagation();
                  handleSelect(pkg.id);
                }}
                onViewDetail={(e) => {
                  e?.stopPropagation();
                  setSelectedPackage(pkg);
                }}
                onClick={() => setSelectedPackage(pkg)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[3rem] shadow-2xl flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[400px] md:h-auto bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={selectedPackage.imageUrl} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X size={24} className="text-navy" />
                </button>

                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4">
                    Detail Paket
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium text-navy mb-4">
                    {selectedPackage.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-6">
                    Rp {selectedPackage.price.toLocaleString()}
                  </div>
                  <p className="text-ink-muted leading-relaxed font-light">
                    {selectedPackage.desc}
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-navy uppercase tracking-widest mb-6">Fasilitas yang Didapat:</h4>
                  <div className="grid gap-4">
                    {selectedPackage.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="text-navy font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleSelect(selectedPackage.id)}
                    className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all clean-shadow"
                  >
                    Daftar Sekarang
                  </button>
                  <button 
                    onClick={() => setSelectedPackage(null)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-navy font-bold py-4 rounded-2xl transition-all"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
