import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kemitraan Usaha Frozen Food | Agen & Reseller Terbaik",
    template: "%s | Frozen Food Kemitraan",
  },
  description: "Pusat kemitraan dan agen frozen food terlengkap. Jual sosis, nugget, dimsum, bakso, kentang goreng, kebab, dan aneka makanan beku lainnya. Peluang usaha dari rumah dengan modal kecil, margin besar!",
  keywords: [
    "frozen food", "kemitraan", "usaha dari rumah", "agen frozen food", "reseller frozen food", 
    "bisnis modal kecil", "franchise frozen food", "jual sosis", "grosir sosis", "nugget ayam", 
    "agen dimsum", "bakso sapi", "kentang goreng beku", "makanan beku murah", "supplier frozen food"
  ],
  authors: [{ name: "Frozen Food Kemitraan" }],
  creator: "Frozen Food Kemitraan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.indofrozenfood.web.id",
    title: "Kemitraan Usaha & Grosir Frozen Food Terlengkap",
    description: "Gabung kemitraan agen dan reseller frozen food dari rumah. Tersedia aneka sosis, nugget, dimsum, dan bakso dengan untung besar.",
    siteName: "Frozen Food Kemitraan",
    images: [
      {
        url: "/og-image.PNG", // Gambar yang akan muncul (letakkan di folder public/)
        width: 1200,
        height: 630,
        alt: "Frozen Food Kemitraan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemitraan Usaha & Grosir Frozen Food Terlengkap",
    description: "Gabung kemitraan agen dan reseller frozen food dari rumah. Tersedia aneka sosis, nugget, dimsum, dan bakso dengan untung besar.",
    images: ["/og-image.PNG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Tambahkan kode verifikasi Google Search Console di sini nanti
    google: "google-site-verification=SLBORc4St9czcCUm0wUJyzEqGkTgVVuyuYiyHqCROH0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${dmSans.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
