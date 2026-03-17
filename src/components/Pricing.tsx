interface PricingPlan {
  title: string;
  price: string;
  description: string;
  featured: boolean;
  features: string[];
}

interface PricingProps {
  plans: PricingPlan[];
}

export default function Pricing({ plans }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-4 md:mb-6 font-bold tracking-tight">Investment</h2>
          <p className="text-base md:text-lg text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed mb-2">
            আপনার গল্পের পরিধি অনুযায়ী পেশাদার ভয়েসওভার সেবার স্বচ্ছ মূল্য।
          </p>
          <p className="text-lg md:text-xl text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Transparent pricing for professional voiceover services, tailored to the scope of your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-500 relative ${
                plan.featured 
                  ? 'bg-charcoal text-cream shadow-2xl scale-100 md:scale-105 border border-charcoal z-10' 
                  : 'bg-cream/40 border border-gold/20 hover:border-gold hover:bg-white text-charcoal'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3 md:-translate-y-4">
                  <span className="bg-gold text-white text-[10px] md:text-xs font-bold font-sans tracking-widest uppercase py-1 px-2 md:px-3 rounded-full shadow-lg">Most Popular</span>
                </div>
              )}
              
              <h3 className={`text-xl md:text-2xl font-serif mb-3 md:mb-4 font-semibold ${plan.featured ? 'text-gold' : 'text-charcoal'}`}>{plan.title}</h3>
              <p className={`font-sans font-light mb-6 md:mb-8 h-12 md:h-16 text-sm md:text-base ${plan.featured ? 'text-cream/80' : 'text-charcoal/70'}`}>{plan.description}</p>
              
              <div className="mb-6 md:mb-8 flex items-baseline gap-2">
                {plan.price !== 'PFH' && <span className={`text-xl md:text-2xl font-serif ${plan.featured ? 'text-white' : 'text-charcoal'}`}>BDT</span>}
                <span className={`text-5xl md:text-6xl font-serif font-bold tracking-tight ${plan.featured ? 'text-white' : 'text-charcoal'}`}>{plan.price}</span>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 font-sans text-xs md:text-sm">
                    <svg className={`w-4 md:w-5 h-4 md:h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-gold' : 'text-gold/80'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className={plan.featured ? 'text-cream' : 'text-charcoal/80'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-3 md:py-4 rounded-full font-sans tracking-widest text-xs md:text-sm uppercase font-bold transition-colors inline-block text-center ${
                  plan.featured 
                    ? 'bg-gold text-white hover:bg-white hover:text-charcoal' 
                    : 'bg-transparent border-2 border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white'
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-charcoal/60 font-sans text-xs md:text-sm tracking-wide">
            Need a custom quote for a unique project? <a href="#contact" className="text-gold hover:underline font-semibold">Contact me directly.</a>
          </p>
        </div>
      </div>
    </section>
  );
}