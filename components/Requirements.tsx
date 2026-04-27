"use client";

import { motion } from "framer-motion";

export default function Requirements() {
  const steps = [
    { title: "Registrasi", desc: "Lengkapi formulir dengan data diri dan lokasi usaha." },
    { title: "Verifikasi", desc: "Tim kami akan menghubungi via WhatsApp untuk validasi." },
    { title: "Pembayaran", desc: "Lakukan pembayaran sesuai dengan paket yang dipilih." },
    { title: "Pengiriman", desc: "Produk akan dikirim dan siap untuk dijual hari itu juga." }
  ];

  return (
    <section id="syarat" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
            >
              Syarat & Alur
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-medium text-navy leading-tight mb-8"
            >
              Proses pendaftaran yang dirancang untuk kecepatan dan kemudahan.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] clean-shadow border border-slate-50"
            >
              <h4 className="font-display font-medium text-navy mb-6">Persyaratan Utama:</h4>
              <ul className="space-y-4 text-ink-muted font-light">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Memiliki lokasi fisik yang jelas untuk berjualan (bisa di rumah).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Daya listrik memadai (disarankan minimal 1300 Watt).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Memiliki nomor WhatsApp yang aktif untuk komunikasi.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-6 bottom-6 w-px bg-slate-200"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[32.5px] md:-left-[48.5px] top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
                  <h3 className="text-xl font-display font-medium text-navy mb-2">{step.title}</h3>
                  <p className="text-ink-muted font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
