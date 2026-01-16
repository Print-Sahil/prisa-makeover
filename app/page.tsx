"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import { Button } from "../components/ui/button";
import { Phone, Instagram } from "lucide-react";

// Types definition
interface Product {
  name: string;
  price: string;
  image: any;
  isSoldOut: boolean;
}

interface GalleryItem {
  title: string;
  image: any;
}

export default function PrisaMakeover() {
  const [products, setProducts] = useState<Product[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
    const fetchData = async () => {
      try {
const products = await client.fetch(`*[_type == "product"]{
  _id,
  name,
  price,
  category,
  isSoldOut,
  image
} | order(_createdAt desc)`);
        const galleryData = await client.fetch(`*[_type == "gallery"]{
          title, image
        }`);
        setProducts(products || []);
        setGallery(galleryData || []);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };
    fetchData();
  }, []);

  const handleAppointment = () => {
    const message = encodeURIComponent("Hi Prisa Makeover, I would like to book an appointment for your services. Please let me know the available slots.");
    window.open(`https://wa.me/919350969961?text=${message}`, '_blank');
  };
// Robust Filtering: Ye har tarah ke data format ko handle karega
const whatsappNumber = "919350969961";
const siteUrl = "https://prisa-makeover.vercel.app"; // Apni live site ka UR

const nailsProducts = products?.filter((p: any) => p.category === 'nails' || p.category?.value === 'nails') || [];
const jewelleryProducts = products?.filter((p: any) => p.category === 'jewellery' || p.category?.value === 'jewellery') || [];
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="h-8 w-auto object-contain" />
          <span className="font-serif text-xl tracking-[0.2em] uppercase italic">PRISA MAKEOVER</span>
        </div>
     {/* Right Side: Phone & Insta Buttons (Dono saath mein right side) */}
  <div className="flex items-center gap-1 md:gap-2">
    {/* Phone Button */}
    <Button 
      variant="ghost" 
      className="rounded-full text-black hover:bg-neutral-100 p-2 transition-all"
      onClick={() => window.open('tel:+919350969961')}
    >
      <Phone size={20} strokeWidth={1.5} />
    </Button>

    {/* Instagram Button */}
    <Button 
      variant="ghost" 
      className="rounded-full text-black hover:bg-neutral-100 p-2 transition-all"
      onClick={() => window.open('https://instagram.com/prisanailstudio', '_blank')}
    >
      <Instagram size={20} strokeWidth={1.5} />
    </Button>
  </div>
</nav>

      {/* HERO SECTION */}
      <section className="h-[95vh] relative flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/back.jpg" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 shadow-inner" />
        </div>
        <div className="relative z-10 space-y-4">
          <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tight leading-none italic">
            Prisa <span className="text-orange-300">Makeover</span>
          </h1>
          <p className="font-sans text-sm md:text-base uppercase tracking-[0.5em] text-gray-200 font-light">
            Luxury Nail Art • Makeup • Extensions
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
            <Button className="bg-white text-black hover:bg-orange-300 px-12 py-8 rounded-full text-xs font-bold uppercase transition-all shadow-2xl" onClick={handleAppointment}>
              Book Appointment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-8 rounded-full text-xs font-bold uppercase backdrop-blur-sm" onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Shop Press-On Nails
            </Button>
          {/* My Work Button - Size & Logic Fixed */}
  <Button 
    variant="outline"
    className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black px-12 py-8 rounded-full text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-sm"
    onClick={() => {
      const element = document.getElementById('gallery-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    View My Work
  </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
            <p className="text-orange-500 text-xs uppercase tracking-[0.4em] mb-4 font-bold">Our Expertise</p>
            <h2 className="font-serif text-5xl italic tracking-tight mb-16">Studio Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {["Nail Art & Extension", "Bridal Makeup", "Eyelash Extensions", "Hair Extensions", "Russian Manicure & Pedicure", "Designer Mehendi"].map((s, i) => (
              <div key={i} className="group p-12 border border-neutral-100 hover:border-orange-200 transition-all bg-neutral-50/50 flex flex-col items-center space-y-4">
                <p className="font-serif text-xl italic tracking-wide">{s}</p>
                <div className="h-[1px] w-10 bg-neutral-300 group-hover:w-20 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    {/* SHOPPING SECTION */}
   <section id="shop-section" className="py-32 px-6 bg-black text-white font-sans">
  <div className="max-w-6xl mx-auto">
    <div className="space-y-32">
      
      {/* --- NAILS SECTION --- */}
      {nailsProducts.length > 0 && (
        <div>
          <h3 className="font-serif text-3xl italic mb-12 text-orange-400 border-l-4 border-orange-400 pl-4 uppercase tracking-widest">Press-On Nails</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {nailsProducts.map((p: any) => {
              // Yahan hum particular product ka link bana rahe hain
              const productLink = `${siteUrl}#${p._id}`;
              const message = `Hi Prisa Makeover, I want to order:\n\n*Product:* ${p.name}\n*Price:* ${p.price}\n*View Product:* ${productLink}`;
              
              return (
                <div key={p._id} id={p._id} className="group scroll-mt-20"> {/* scroll-mt-20 se image heading ke niche nahi dabegi */}
                  <div className="relative aspect-square overflow-hidden mb-6 bg-neutral-900 border border-neutral-800">
                    {p.image && <img src={urlFor(p.image).url()} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />}
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div className="space-y-1 text-left">
                      <h4 className="font-serif text-xl italic">{p.name}</h4>
                      <p className="text-orange-400 font-sans text-sm">{p.price}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                      target="_blank" 
                      className="bg-white text-black hover:bg-orange-400 font-bold px-8 py-4 transition-all"
                    >
                      ORDER
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- JEWELLERY SECTION (Same logic as above) --- */}
      {jewelleryProducts.length > 0 && (
        <div>
          <h3 className="font-serif text-3xl italic mb-12 text-orange-400 border-l-4 border-orange-400 pl-4 uppercase tracking-widest">Luxury Jewellery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {jewelleryProducts.map((p: any) => {
              const productLink = `${siteUrl}#${p._id}`;
              const message = `Hi Prisa Makeover, I want to order:\n\n*Jewellery:* ${p.name}\n*Price:* ${p.price}\n*View Product:* ${productLink}`;

              return (
                <div key={p._id} id={p._id} className="group scroll-mt-20">
                  <div className="relative aspect-square overflow-hidden mb-6 bg-neutral-900 border border-neutral-800">
                    {p.image && <img src={urlFor(p.image).url()} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />}
                  </div>
                  <div className="flex justify-between items-center px-2 text-left">
                    <div className="space-y-1">
                      <h4 className="font-serif text-xl italic">{p.name}</h4>
                      <p className="text-orange-400 font-sans text-sm">{p.price}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                      target="_blank" 
                      className="bg-white text-black hover:bg-orange-400 font-bold px-8 py-4 transition-all"
                    >
                      ORDER
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  </div>
</section>

      {/* MY WORK GALLERY (LIVE) */}
      <section id="gallery-section" className="py-24 px-6 bg-[#fafafa]"></section>
  
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
             <h2 className="font-serif text-5xl italic mb-4 text-neutral-800">My Work</h2>
             <div className="h-1 w-20 bg-orange-200 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden group border-4 border-white shadow-sm">
                {item.image && <img src={urlFor(item.image).url()} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US (COMPLETE) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-orange-200 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            <img src="/aboutus.jpg" alt="About" className="w-full h-[550px] object-cover shadow-2xl" />
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-orange-500 text-xs uppercase tracking-[0.4em] font-bold">The Story</p>
              <h2 className="font-serif text-5xl italic leading-tight text-neutral-800">About Prisa Makeover</h2>
            </div>
            <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
              <p>Prisa Makeover is a luxury beauty studio dedicated to creating elegant, flawless, and confidence-boosting transformations. We specialize in premium nail extensions, press-on nail sets, makeup artistry, eyelash extensions, and personalized beauty services designed to enhance your natural beauty.</p>
              <p>Every detail at Prisa Makeover is crafted with precision, hygiene, and high-quality products to ensure you receive nothing but the best. Our goal is to deliver a salon-perfect experience that feels exclusive, modern, and empowering.</p>
              <p className="font-serif text-xl italic text-orange-400">"We don’t just create looks — we create confidence."</p>
              <div className="pt-4 grid grid-cols-2 gap-8 border-t border-neutral-100">
                <div><h4 className="font-serif text-2xl italic text-neutral-800">3+</h4><p className="text-[10px] uppercase tracking-widest text-gray-400">Years Experience</p></div>
                <div><h4 className="font-serif text-2xl italic text-neutral-800">250+</h4><p className="text-[10px] uppercase tracking-widest text-gray-400">Happy Clients</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT & CONTACT (COMPLETE ADDRESS & CLEAN BUTTONS) */}
      <section className="py-32 px-6 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl italic border-b-2 border-orange-200 pb-2 inline-block">Visit Us</h2>
            <div className="space-y-2">
              <p className="font-serif text-2xl italic">Prisa Makeover Studio</p>
              <p className="text-neutral-500 font-light leading-relaxed">
                Near B.K BIET College, CEERI Road,<br />
                Triveni Pyau, Pilani,<br />
                Rajasthan - 333031
              </p>
<Button 
  variant="outline" 
  className="mt-4 border-black text-black bg-white hover:bg-black hover:text-white rounded-full px-8 py-6 text-xs font-bold uppercase transition-all"
  onClick={() => window.open('https://maps.app.goo.gl/AHqpVXLrEUGvqxLA7', '_blank')}
>
  Get Directions
</Button>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl italic border-b-2 border-orange-200 pb-2 inline-block">Contact Us</h2>
            <p className="text-neutral-500 font-light italic text-sm">
              "Your beauty journey starts here. Reach out to us for appointments and inquiries."
            </p>
            <div className="flex gap-6 pt-4">
              <Button 
                variant="outline" 
                className="h-20 w-20 rounded-full border-neutral-300 text-black hover:bg-black hover:text-white transition-all flex items-center justify-center bg-transparent" 
                onClick={() => window.open('tel:+919350969961')}
              >
                <Phone size={28} strokeWidth={1.5} />
              </Button>
              <Button 
                variant="outline" 
                className="h-20 w-20 rounded-full border-neutral-300 text-black hover:bg-black hover:text-white transition-all flex items-center justify-center bg-transparent" 
                onClick={() => window.open('https://instagram.com/prisanailstudio', '_blank')}
              >
                <Instagram size={28} strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-neutral-50 text-neutral-400 text-center font-light text-[10px] tracking-[0.4em] uppercase">
        © 2026 PRISA MAKEOVER • PILANI • ALL RIGHTS RESERVED
      </footer>
    </div>
  )
}