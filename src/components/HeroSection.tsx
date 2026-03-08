import { motion } from "framer-motion";
import heroImg from "@/assets/candle-lit.jpeg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Lit candle" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="relative container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6"
      >
        Gau Candles
        <span className="block text-lg md:text-2xl font-body font-light tracking-[0.3em] uppercase mt-4 text-cream-dark">
          Handcrafted Luxury Soy Candles
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-body text-base md:text-lg text-cream-dark/90 max-w-xl mx-auto mb-10"
      >
        Eco-friendly, hand-poured soy wax candles crafted with love — for your home, your soul, and your special moments.
      </motion.p>

      <motion.a
        href="#products"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-colors"
      >
        Shop Now
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
