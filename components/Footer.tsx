import { Snowflake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-2 opacity-90">
          <Snowflake size={24} strokeWidth={1.5} />
          <span className="text-xl font-medium font-display tracking-tight">
            Frozen<span className="font-bold">Food</span>
          </span>
        </div>

        <div className="text-sm font-light text-slate-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} FrozenFood Kemitraan. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
