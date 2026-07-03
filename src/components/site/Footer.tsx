export function Footer() {
  return (
    <footer id="contact" className="bg-[oklch(0.15_0.01_85)] text-[oklch(0.9_0.01_85)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-serif text-lg text-primary-foreground">
                P
              </span>
              <div className="font-serif text-2xl text-white">Home Pestana Apartments</div>
            </div>
            <p className="mt-5 max-w-md text-sm text-[oklch(0.75_0.01_85)] leading-relaxed">
              A collection of serviced residences designed for those who value privacy,
              craftsmanship, and considered hospitality.
            </p>
          </div>
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.3em]">Visit</h4>
            <p className="mt-4 text-sm leading-relaxed text-[oklch(0.85_0.01_85)]">
              14 Marina Boulevard<br />
              Victoria Island, Lagos<br />
              Nigeria
            </p>
          </div>
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.3em]">Contact</h4>
            <p className="mt-4 text-sm leading-relaxed text-[oklch(0.85_0.01_85)]">
              stay@homepestana.com<br />
              +234 (0) 800 555 0199
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-[oklch(0.65_0.01_85)]">
          <div>© {new Date().getFullYear()} Home Pestana Apartments. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="gold-underline hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="gold-underline hover:text-gold transition-colors">Terms</a>
            <a href="#" className="gold-underline hover:text-gold transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
