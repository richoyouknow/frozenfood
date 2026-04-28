"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Registration({ 
  selectedPackage = "", 
  onPackageChange 
}: { 
  selectedPackage?: string;
  onPackageChange?: (value: string) => void;
}) {
  const [formData, setFormData] = useState({
    namaToko: "",
    listrik: "",
    nomorHp: "",
    alamat: "",
    bank: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { namaToko, listrik, nomorHp, alamat, bank } = formData;
    
    // Mapping paket value to label
    const packageLabels: Record<string, string> = {
      "paket1": "Paket 1 — Promo",
      "paket2": "Paket 2 — Usaha",
      "paket3": "Paket 3 — Bisnis",
      "paket4": "Paket 4 — Distributor"
    };

    const selectedPackageLabel = packageLabels[selectedPackage] || selectedPackage || "Belum dipilih";

    const message = `Halo Tim Frozen Food, saya ingin mendaftar sebagai mitra.

*Detail Pendaftaran:*
- *Nama Toko:* ${namaToko || '-'}
- *Kapasitas Listrik:* ${listrik || '-'} Watt
- *Nomor HP:* ${nomorHp || '-'}
- *Alamat Lengkap:* ${alamat || '-'}
- *Pilihan Paket:* ${selectedPackageLabel}
- *Metode Pembayaran:* ${bank.toUpperCase() || '-'}

Mohon dibantu proses selanjutnya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285933058243?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <section id="daftar" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4"
          >
            Formulir Pendaftaran
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-medium text-navy leading-tight mb-6"
          >
            Mulai Langkah Pertama Menuju Kebebasan Finansial.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-2"
          >
            <p className="text-ink-muted font-light text-lg">
              Tanpa ribet produksi, tanpa pengalaman pun bisa langsung mulai!
            </p>
            <p className="text-primary font-medium text-lg">
              Gabung sekarang dan mulai usaha frozen food Anda hari ini!
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] clean-shadow border border-slate-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Informasi Dasar & Listrik */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Nama Toko Calon Mitra</label>
                <input 
                  type="text" 
                  name="namaToko"
                  value={formData.namaToko}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-light"
                  placeholder="Contoh: Frozen Food Berkah"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Kapasitas Listrik (Watt)</label>
                <input 
                  type="text" 
                  name="listrik"
                  value={formData.listrik}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-light"
                  placeholder="Contoh: 1300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Nomor HP (WhatsApp)</label>
                <input 
                  type="tel" 
                  name="nomorHp"
                  value={formData.nomorHp}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-light"
                  placeholder="08..."
                />
              </div>
              <div className="space-y-2 flex flex-col justify-end">
                {/* Empty space for balance or add another field if needed */}
              </div>
            </div>

            {/* Lokasi (Single Field) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy tracking-wide uppercase">Alamat Lengkap Lokasi Usaha</label>
              <textarea 
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-light resize-none"
                placeholder="Masukkan Alamat Lengkap (Provinsi, Kota, Kecamatan, Kelurahan, Nama Jalan, dsb.)"
              ></textarea>
            </div>

            {/* Pilihan Paket & Bank */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Pilihan Paket Kemitraan</label>
                <div className="relative">
                  <select 
                    value={selectedPackage}
                    onChange={(e) => onPackageChange?.(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-light appearance-none"
                  >
                    <option value="" disabled>Pilih Paket...</option>
                    <option value="paket1">Paket 1 — Promo</option>
                    <option value="paket2">Paket 2 — Usaha</option>
                    <option value="paket3">Paket 3 — Bisnis</option>
                    <option value="paket4">Paket 4 — Distributor</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Metode Pembayaran (Bank)</label>
                <div className="relative">
                  <select 
                    name="bank"
                    value={formData.bank}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-light appearance-none"
                  >
                    <option value="" disabled>Pilih Bank...</option>
                    <option value="bca">BCA</option>
                    <option value="mandiri">Mandiri</option>
                    <option value="bni">BNI</option>
                    <option value="bri">BRI</option>
                    <option value="bsi">BSI</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Catatan Penting */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Catatan Penting:
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-ink-muted leading-relaxed font-light">
                  <span className="text-primary mt-1">•</span>
                  Untuk dokumen pendukung seperti Foto KTP dan Foto Lokasi Usaha, silakan kirimkan menyusul melalui chat WhatsApp setelah Anda menekan tombol "Kirim Pendaftaran" di bawah ini.
                </li>
                <li className="flex gap-3 text-sm text-ink-muted leading-relaxed font-light">
                  <span className="text-primary mt-1">•</span>
                  Pastikan Semua data yang dimasukkan sudah benar
                </li>
                <li className="flex gap-3 text-sm text-ink-muted leading-relaxed font-light">
                  <span className="text-primary mt-1">•</span>
                  Tim kami akan menghubungi anda segera untuk konfirmasi setelah data di verifikasi
                </li>
              </ul>
            </div>

            <button 
              type="submit"
              className="w-full bg-navy hover:bg-primary text-white font-bold py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-3 clean-shadow hover:-translate-y-1 shadow-xl shadow-navy/10"
            >
              <Send size={20} />
              Kirim Pendaftaran
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
