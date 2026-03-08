import { motion } from "framer-motion";
import pinkJar from "@/assets/candle-pink-jar.jpeg";
import yellow from "@/assets/candle-yellow.jpeg";
import blue from "@/assets/candle-blue.jpeg";
import thankyou from "@/assets/candle-thankyou.jpeg";
import giftBag from "@/assets/candle-gift-bag.jpeg";
import giftBox from "@/assets/candle-giftbox.jpeg";
import ethnicWrap from "@/assets/candle-ethnic-wrap.jpeg";
import mandalaWrap from "@/assets/candle-mandala-wrap.jpeg";
import heartGiftSet from "@/assets/candle-heart-gift-set.jpeg";
import flowerShaped from "@/assets/candle-flower-shaped.jpeg";
import roseGarden from "@/assets/candle-rose-garden.jpeg";

const products = [
  { name: "Rose Petal Bliss", category: "Aromatherapy", img: pinkJar },
  { name: "Sunshine Glow", category: "Decorative", img: yellow },
  { name: "Ocean Breeze", category: "Aromatherapy", img: blue },
  { name: "Thank You Candle", category: "Gift Set", img: thankyou },
  { name: "Party Favour", category: "Gift Set", img: giftBag },
  { name: "Holiday Gift Box", category: "Gift Set", img: giftBox },
  { name: "Ethnic Elegance", category: "Decorative", img: ethnicWrap },
  { name: "Mandala Harmony", category: "Decorative", img: mandalaWrap },
  { name: "Sweetheart Bliss", category: "Gift Set", img: heartGiftSet },
  { name: "Floral Dreams", category: "Decorative", img: flowerShaped },
  { name: "Rose Garden Romance", category: "Aromatherapy", img: roseGarden },
];

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Collections</p>
        <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">Our Candle Collections</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">{p.category}</span>
              <h3 className="font-display text-xl mt-1 text-foreground">{p.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
