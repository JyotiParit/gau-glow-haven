import { motion } from "framer-motion";
import aboutImg from "@/assets/candle-decorative.jpeg";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutImg} alt="Decorative candles by Gau Candles" className="rounded-lg shadow-lg w-full max-h-[500px] object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6">About Gau Candles</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Gau Candles was born from a passion for creating warm, beautiful spaces through the art of candle-making. Each candle is lovingly handcrafted using 100% natural soy wax and premium fragrances, ensuring a clean, long-lasting burn.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            We believe in sustainability and eco-conscious living. Our candles are free from harmful chemicals, using only natural ingredients and reusable containers — because luxury should never come at the cost of the planet.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            From trendy decorative shapes to soothing aromatherapy blends, every Gau Candle is designed to bring joy, relaxation, and a touch of elegance to your home.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
