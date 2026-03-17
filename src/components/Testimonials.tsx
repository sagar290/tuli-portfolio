import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Her voice brings an incredible depth and warmth. The poetry reading was breathtaking and felt so personal.",
    author: "Elena R.",
    role: "Art Director"
  },
  {
    text: "We needed a voice that was persuasive yet trustworthy for our national campaign. She delivered beyond our expectations.",
    author: "David M.",
    role: "Marketing Manager"
  },
  {
    text: "The e-learning modules are so much more engaging now. Her narrative pacing is absolutely perfect.",
    author: "Sarah K.",
    role: "Instructional Designer"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal font-bold tracking-tight">Client Praise</h2>
          <p className="text-lg text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed mt-4 mb-2">
            সন্তুষ্ট ক্লায়েন্টদের মতামত এবং প্রশংসা।
          </p>
          <p className="text-xl text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            What our clients say about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center relative min-h-[16rem] md:min-h-[12rem] flex flex-col justify-center">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
                current === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <svg className="w-12 h-12 text-gold mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-2xl md:text-4xl font-serif text-charcoal/90 mb-8 leading-snug font-medium italic px-4">
                "{t.text}"
              </p>
              <div>
                <p className="font-sans font-bold text-lg text-charcoal tracking-wide">{t.author}</p>
                <p className="font-sans text-sm text-gold tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                current === idx ? 'w-10 h-2 bg-gold' : 'w-2 h-2 bg-gold/30 hover:bg-gold/60'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}