import { motion } from "framer-motion";
import { Leaf, Flame, Heart, Sparkles } from "lucide-react";

const features = [
  { icon: Leaf, title: "Natural Soy Wax", desc: "100% pure soy wax for a clean, non-toxic burn that's better for you and the environment." },
  { icon: Sparkles, title: "Premium Fragrance", desc: "Carefully curated scents that fill your space with lasting, luxurious aromas." },
  { icon: Heart, title: "Handmade With Love", desc: "Every candle is hand-poured and crafted with meticulous attention to detail." },
  { icon: Flame, title: "Eco-Friendly", desc: "Sustainable materials, reusable containers, and cruelty-free — always." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">The Gau Difference</p>
        <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">Why Choose Us</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center p-8 rounded-lg bg-sage-light/50 hover:bg-sage-light transition-colors"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
              <f.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl mb-3 text-foreground">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
