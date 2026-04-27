"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface Region {
  id: string;
  name: string;
}

export default function Registration() {
  const [provinces, setProvinces] = useState<Region[]>([]);
  const [regencies, setRegencies] = useState<Region[]>([]);
  const [districts, setDistricts] = useState<Region[]>([]);

  // Form State
  const [namaToko, setNamaToko] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  // Listen for package selection from other components
  useEffect(() => {
    const handlePackageSelection = (e: any) => {
      setSelectedPackage(e.detail);
    };

    window.addEventListener("packageSelected", handlePackageSelection);
    return () => window.removeEventListener("packageSelected", handlePackageSelection);
  }, []);

  // Fetch Provinces on mount
  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then(res => res.json())
      .then(data => setProvinces(data));
  }, []);

  // Fetch Regencies when province changes
  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
        .then(res => res.json())
        .then(data => setRegencies(data));
      setDistricts([]);
      setSelectedRegency("");
      setSelectedDistrict("");
    }
  }, [selectedProvince]);

  // Fetch Districts when regency changes
  useEffect(() => {
    if (selectedRegency) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency}.json`)
        .then(res => res.json())
        .then(data => setDistricts(data));
      setSelectedDistrict("");
    }
  }, [selectedRegency]);

  const handleSubmit = () => {
    const provinceName = provinces.find(p => p.id === selectedProvince)?.name || "";
    const regencyName = regencies.find(r => r.id === selectedRegency)?.name || "";
    const districtName = districts.find(d => d.id === selectedDistrict)?.name || "";
    
    const message = `Halo Admin Indo Frozen Food, saya ingin mendaftar kemitraan:

*DATA PENDAFTARAN:*
• Nama Toko: ${namaToko}
• WhatsApp: ${nomorHp}
• Wilayah: ${districtName}, ${regencyName}, ${provinceName}
• Paket: ${selectedPackage.toUpperCase()}
• Pembayaran: ${selectedBank.toUpperCase()}

Mohon informasikan langkah selanjutnya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6285933058243"; // International format for wa.me
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
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
          className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] clean-shadow border border-slate-100"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Nama Toko Calon Mitra</label>
                <input 
                  type="text" 
                  value={namaToko}
                  onChange={(e) => setNamaToko(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light"
                  placeholder="Contoh: Frozen Food Berkah"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Nomor HP (WhatsApp)</label>
                <input 
                  type="tel" 
                  value={nomorHp}
                  onChange={(e) => setNomorHp(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light"
                  placeholder="08..."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Provinsi */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Provinsi</label>
                <div className="relative">
                  <select 
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light appearance-none"
                  >
                    <option value="" disabled>Pilih Provinsi...</option>
                    {provinces.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Kota */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Kota / Kabupaten</label>
                <div className="relative">
                  <select 
                    value={selectedRegency}
                    onChange={(e) => setSelectedRegency(e.target.value)}
                    disabled={!selectedProvince}
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light appearance-none disabled:opacity-50"
                  >
                    <option value="" disabled>Pilih Kota...</option>
                    {regencies.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Kelurahan */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Kelurahan / Kecamatan</label>
                <div className="relative">
                  <select 
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedRegency}
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light appearance-none disabled:opacity-50"
                  >
                    <option value="" disabled>Pilih Kelurahan...</option>
                    {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Pilihan Paket Kemitraan</label>
                <div className="relative">
                  <select 
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light appearance-none"
                  >
                    <option value="" disabled>Pilih Paket...</option>
                    <option value="promo">Paket 1 — Promo</option>
                    <option value="usaha">Paket 2 — Usaha</option>
                    <option value="bisnis">Paket 3 — Bisnis</option>
                    <option value="distributor">Paket 4 — Distributor</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy tracking-wide uppercase">Metode Pembayaran (Bank)</label>
                <div className="relative">
                  <select 
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-xl text-navy focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary-light outline-none transition-all font-light appearance-none"
                  >
                    <option value="" disabled>Pilih Bank...</option>
                    <option value="bca">BCA</option>
                    <option value="mandiri">Mandiri</option>
                    <option value="bni">BNI</option>
                    <option value="bri">BRI</option>
                    <option value="bsi">BSI</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Catatan Penting:
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-ink-muted leading-relaxed font-light">
                  <span className="text-primary mt-1">•</span>
                  Untuk dokumen pendukung seperti Foto KTP and Foto Lokasi Usaha, silakan kirimkan menyusul melalui chat WhatsApp setelah Anda menekan tombol "Kirim Pendaftaran" di bawah ini.
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
              type="button"
              onClick={handleSubmit}
              className="w-full bg-navy hover:bg-primary text-white font-medium py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 clean-shadow hover:-translate-y-1"
            >
              <Send size={18} />
              Kirim Pendaftaran
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
