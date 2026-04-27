import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Define the props for the TravelCard component
interface TravelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  logo?: React.ReactNode;
  title: string;
  location: string;
  overview: string;
  price: string | number;
  pricePeriod: string;
  onBookNow?: () => void;
  onViewDetail?: () => void;
}

const TravelCard = React.forwardRef<HTMLDivElement, TravelCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      logo,
      title,
      location,
      overview,
      price,
      pricePeriod,
      onBookNow,
      onViewDetail,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full h-[750px] overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lg",
          "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2",
          className
        )}
        {...props}
      >
        {/* Background Image with Zoom Effect on Hover */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Stronger Gradient Overlay at the Bottom for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content Container */}
        <div className="relative flex h-full flex-col justify-end p-10 text-white">
          
          {/* Content Block (slides up on hover) */}
          <div className="space-y-6 transition-transform duration-500 ease-in-out group-hover:-translate-y-40">
             {logo && (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md mb-4 transition-transform duration-500 group-hover:scale-110">
                   {logo}
                </div>
             )}

            <div>
              <h3 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-2 drop-shadow-lg">{title}</h3>
              <p className="text-base text-primary font-bold tracking-widest uppercase drop-shadow-md">{location}</p>
            </div>
            
            <div className="transition-all duration-500">
              <h4 className="text-xs font-bold text-white/50 tracking-widest uppercase mb-3">Deskripsi Singkat</h4>
              <p className="text-base text-white/90 leading-relaxed font-light line-clamp-2 group-hover:line-clamp-none transition-all duration-500 drop-shadow-md">
                {overview}
              </p>
            </div>
          </div>

          {/* Bottom Section: Price and Buttons (revealed on hover) */}
          <div className="absolute -bottom-40 left-0 w-full p-10 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Mulai Dari</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{typeof price === 'number' ? `Rp ${price.toLocaleString()}` : price}</span>
                  </div>
                  <span className="text-white/60 text-sm block mt-1"> {pricePeriod}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={onViewDetail} 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white rounded-full h-14 font-bold transition-all duration-300"
                >
                  Lihat Detail
                </Button>
                <Button 
                  onClick={onBookNow} 
                  className="bg-primary hover:bg-blue-600 text-white rounded-full h-14 font-bold transition-all duration-300 clean-shadow"
                >
                  Pilih Paket
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
TravelCard.displayName = "TravelCard";

export { TravelCard };
