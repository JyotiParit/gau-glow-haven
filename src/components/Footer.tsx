const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="font-display text-xl text-primary-foreground mb-4">Gau Candles</h4>
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
            Handcrafted luxury soy candles for home décor, relaxation, and gifting.
          </p>
        </div>
        <div>
          <h4 className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Products", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/gau_candles" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Instagram
            </a>
            <a href={`https://wa.me/919284899928`} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">© 2026 Gau Candles. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
