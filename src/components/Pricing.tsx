export default function Pricing() {
  const plans = [
    {
      title: "Poetry & Artistic",
      price: "150",
      description: "Perfect for artists, animators, and personal projects seeking emotional depth.",
      features: [
        "Up to 250 words",
        "1 Free Revision",
        "High-quality WAV/MP3",
        "Standard usage rights"
      ]
    },
    {
      title: "Commercial VO",
      price: "350",
      description: "For brands, advertisements, and promotional material needing a warm, persuasive voice.",
      features: [
        "Up to 60 seconds",
        "2 Free Revisions",
        "Commercial Broadcast Rights",
        "Fully mastered audio",
        "24-hour turnaround"
      ],
      featured: true
    },
    {
      title: "Audiobook & Long-form",
      price: "PFH",
      description: "Engaging and clear storytelling that keeps listeners hooked from prologue to the final chapter.",
      features: [
        "Per Finished Hour rating",
        "ACX standard compliant",
        "Full proofing included",
        "Consistent character tones"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 font-bold tracking-tight">Investment</h2>
          <p className="text-xl text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Transparent pricing for professional voiceover services, tailored to the scope of your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl p-10 transition-all duration-500 relative ${
                plan.featured 
                  ? 'bg-charcoal text-cream shadow-2xl scale-100 md:scale-105 border border-charcoal z-10' 
                  : 'bg-cream/40 border border-gold/20 hover:border-gold hover:bg-white text-charcoal'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-4">
                  <span className="bg-gold text-white text-xs font-bold font-sans tracking-widest uppercase py-1 px-3 rounded-full shadow-lg">Most Popular</span>
                </div>
              )}
              
              <h3 className={`text-2xl font-serif mb-4 font-semibold ${plan.featured ? 'text-gold' : 'text-charcoal'}`}>{plan.title}</h3>
              <p className={`font-sans font-light mb-8 h-16 ${plan.featured ? 'text-cream/80' : 'text-charcoal/70'}`}>{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-2">
                {plan.price !== 'PFH' && <span className={`text-2xl font-serif ${plan.featured ? 'text-white' : 'text-charcoal'}`}>$</span>}
                <span className={`text-6xl font-serif font-bold tracking-tight ${plan.featured ? 'text-white' : 'text-charcoal'}`}>{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 font-sans text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-gold' : 'text-gold/80'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className={plan.featured ? 'text-cream' : 'text-charcoal/80'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-full font-sans tracking-widest text-sm uppercase font-bold transition-colors inline-block text-center ${
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
        
        <div className="mt-16 text-center">
          <p className="text-charcoal/60 font-sans text-sm tracking-wide">
            Need a custom quote for a unique project? <a href="#contact" className="text-gold hover:underline font-semibold">Contact me directly.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
