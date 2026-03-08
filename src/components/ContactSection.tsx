import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-body font-medium text-foreground">Email</h4>
                <a href="mailto:candlesgau@gmail.com" className="font-body text-muted-foreground hover:text-primary transition-colors">candlesgau@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-body font-medium text-foreground">Phone</h4>
                <a href="tel:+919284899928" className="font-body text-muted-foreground hover:text-primary transition-colors">+91 9284899928</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-body font-medium text-foreground">Location</h4>
                <p className="font-body text-muted-foreground">Mumbai, Maharashtra, India</p>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/gau_candles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/919284899928?text=${encodeURIComponent("Hi! I'm interested in Gau Candles.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent text-accent-foreground font-body text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-sm bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-sm bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-sm bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
