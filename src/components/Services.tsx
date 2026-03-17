import type { ReactNode } from 'react';

interface Service {
  title: string;
  icon: string;
  body: string;
}

const icons: Record<string, ReactNode> = {
  feather: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
  ),
  book: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
  ),
  mic: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
  ),
  script: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  )
};

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-32 bg-cream relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 font-bold tracking-tight">Vocal Expertise</h2>
          <p className="text-lg text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed mb-2">
            পেশাদার, উষ্ণ এবং আত্মিক কণ্ঠের মাধ্যমে আপনার ব্র্যান্ড এবং গল্পকে উন্নত করা।
          </p>
          <p className="text-xl text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Elevating your brand and story with a voice that is professional, warm, and soulful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-8 rounded-full border-2 border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 will-change-transform group-hover:scale-110 shadow-lg shadow-gold/10">
                {icons[service.icon] || icons['mic']}
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4 font-semibold">{service.title}</h3>
              <p className="text-charcoal/70 font-sans font-light leading-relaxed">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}