"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ShoppingBag, Phone, Instagram } from "lucide-react";

export default function PrisaMakeover() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-300 selection:text-black">
      
      {/* NAVBAR / HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain" />
          <span className="font-light text-xl tracking-[0.3em] uppercase">Prisa Makeover</span>
        </div>
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 rounded-full"
          onClick={() => window.open('https://instagram.com/prisanailstudio', '_blank')}
        >
          <Instagram size={20} />
        </Button>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h1 className="text-5xl md:text-8xl font-light tracking-[0.3em] uppercase mb-4 leading-tight">
          PRISA <span className="font-bold">MAKEOVER</span>
        </h1>
        <p className="text-xs md:text-sm uppercase tracking-[0.6em] text-orange-200/70 mb-10">
          Luxury Nail Art • Makeup • Extensions
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Button 
            className="bg-white text-black hover:bg-orange-100 px-8 py-6 rounded-full text-xs uppercase tracking-widest transition-all"
            onClick={() => window.open('https://wa.me/919350969961', '_blank')}
          >
            Book Appointment
          </Button>
          <Button 
            variant="outline" 
            className="border-white/20 hover:bg-white hover:text-black px-8 py-6 rounded-full text-xs uppercase tracking-widest transition-all"
            onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Press‑On Nails
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-16 text-center italic">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {["Nail Art & Extension", "Makeup", "Mehendi", "Hair Extension", "Eyelashes Extension"].map((s, i) => (
            <Card key={i} className="bg-neutral-900/40 border border-white/5 rounded-xl hover:border-orange-200/30 transition-colors">
              <CardContent className="p-8 text-center text-xs uppercase tracking-widest font-medium">{s}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* MY WORK / GALLERY */}
<section id="gallery" className="py-32 px-6 bg-black">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-4 text-center italic">Portfolio</h2>
    <h3 className="text-3xl font-light tracking-[0.3em] uppercase text-center mb-16 text-white">
      My <span className="font-bold">Work</span>
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "/work1.jpeg", // Inhe aap public folder mein add karte rahein
        "/work2.jpeg",
        "/work3.jpeg",
        "/work4.jpeg",
        "/work5.jpeg",
        "/work6.jpeg",
        "/work7.jpeg",
        "/work8.jpeg"
      ].map((img, i) => (
        <div key={i} className="relative aspect-square overflow-hidden rounded-xl group">
          <img 
            src={img} 
            alt={`Work ${i + 1}`} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-orange-300/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      ))}
    </div>
    
    <p className="text-center mt-12 text-gray-500 text-[10px] uppercase tracking-[0.4em]">
      New work updated weekly
    </p>
  </div>
</section>

      {/* SHOP SECTION */}
      <section id="shop-section" className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black px-6 border-y border-white/5">
        <h2 className="text-3xl font-light tracking-[0.3em] uppercase text-center mb-20 text-white">
          Press-On <span className="font-bold">Sets</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { name: "Classic Nude", img: "/nails1.jpeg", price: "₹799" },
            { name: "Luxury French", img: "/nails2.jpeg", price: "₹1,299" },
            { name: "Bold Glam", img: "/nails3.jpeg", price: "₹1,499" }
          ].map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="flex justify-between items-end px-2">
                <div>
                  <h3 className="text-lg font-light tracking-widest uppercase mb-1">{p.name}</h3>
                  <p className="text-orange-200/60 text-sm font-medium">{p.price}</p>
                </div>
                <Button 
                  size="icon"
                  className="rounded-full bg-white text-black hover:bg-orange-200"
                  onClick={() => {
                    const message = `Hello Prisa Makeover! I'm interested in the "${p.name}" set (${p.price}).`;
                    window.open(`https://wa.me/919350969961?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <ShoppingBag size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT & CONTACT */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-pink-500 mb-6">Visit Us</h2>
            <div className="text-gray-400 space-y-4 font-light tracking-wide">
              <p className="text-2xl text-white font-normal uppercase tracking-tighter">Prisa Makeover Studio</p>
              <p>Near B.K BIET College, CEERI Road,<br />Triveni Pyau, Pilani, Rajasthan</p>
              <div className="pt-4">
        
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-pink-500 mb-6">Inquiries</h2>
            <p className="text-gray-400 mb-8 font-light">DM us on Instagram or call for appointments.</p>
            <div className="flex gap-6">
              <Button 
                variant="outline" 
                className="rounded-full h-16 w-16 border-white/10 hover:bg-white hover:text-black transition-all"
                onClick={() => window.open('tel:+919350969961')}
              >
                <Phone size={24} />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full h-16 w-16 border-white/10 hover:bg-white hover:text-black transition-all"
                onClick={() => window.open('https://instagram.com/prisanailstudio', '_blank')}
              >
                <Instagram size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.8em] text-gray-600">© 2026 Prisa Makeover • Pilani</p>
      </footer>
    </div>
  );
}