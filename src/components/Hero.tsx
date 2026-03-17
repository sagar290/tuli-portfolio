export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 select-none">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl rounded-tr-full mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-gold/10 rounded-full blur-3xl mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-bangla-serif text-charcoal leading-tight mb-4">
            কথার জাদুতে, <br/><span className="text-gold font-normal italic">গল্পের ছোঁয়ায়</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 mb-8 font-sans font-medium tracking-wide">
            Where Soulful Poetry Meets Professional Narration.
          </p>
          <p className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl font-bangla-serif font-semibold leading-relaxed">
            শুদ্ধ উচ্চারণ আর দরদী কণ্ঠের জাদুতে আপনার ব্র্যান্ড বা কবিতা পৌঁছে দিন সবার হৃদয়ে। নিখুঁত বাংলা এবং ইংরেজি ডিকশন নিয়ে আপনার গল্পের সঙ্গী হতে প্রস্তুত।
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a href="#demos" className="px-10 py-4 bg-charcoal text-cream font-medium rounded-full hover:bg-gold hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 text-center font-sans tracking-wide text-lg flex items-center justify-center gap-2 group">
              শুনুন ডেমো
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
            <a href="#contact" className="px-10 py-4 bg-transparent border-2 border-charcoal/30 text-charcoal font-medium rounded-full hover:border-charcoal transition-all duration-300 text-center font-sans tracking-wide text-lg">
              যোগাযোগ করুন
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
            <span className="text-sm font-bold tracking-widest text-charcoal/50 uppercase">Follow Me</span>
            <div className="w-12 h-px bg-charcoal/20"></div>
            <a href="https://soundcloud.com/suborna-dash-tuli" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-gold transition-colors block" aria-label="SoundCloud">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 100 100">
                 <path d="M97.1 57.6C97.1 66.8 89.6 74.3 80.3 74.3L38 74.3C36.8 74.3 35.8 73.3 35.8 72.1L35.8 30.6C35.8 30.3 35.9 30.1 36 29.8C42.8 19.3 53 14 62.4 14C74.6 14 84.7 23.3 85.8 35.3C92.2 36.8 97.1 42.6 97.1 49.6Z"/>
                 <rect x="23.9" y="38.7" width="2.3" height="35.6" rx="1.1"/>
                 <rect x="18.8" y="44.2" width="2.3" height="30.1" rx="1.1"/>
                 <rect x="13.8" y="50" width="2.3" height="24.3" rx="1.1"/>
                 <rect x="8.7" y="55" width="2.3" height="19.3" rx="1.1"/>
                 <rect x="3.7" y="60.5" width="2.3" height="13.8" rx="1.1"/>
                 <rect x="29" y="32" width="2.3" height="42.3" rx="1.1"/>
               </svg>
            </a>
            <a href="https://www.facebook.com/suborna.dashtuli/" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-gold transition-colors block" aria-label="Facebook">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://www.youtube.com/@suborna.dashtuli" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-gold transition-colors block" aria-label="YouTube">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.684 2.684 0 00-1.884-1.896C17.9 3.8 12 3.8 12 3.8s-5.9 0-7.698.49a2.684 2.684 0 00-1.884 1.896C2 7.9 2 12 2 12s0 4.1.418 5.814a2.684 2.684 0 001.884 1.896c1.798.49 7.698.49 7.698.49s5.9 0 7.698-.49a2.684 2.684 0 001.884-1.896C22 16.1 22 12 22 12s0-4.1-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://audio.com/subarnadastule" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-gold transition-colors block" aria-label="Audio.com">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            </a>
          </div>
        </div>
        <div className="flex-1 w-full relative max-w-lg md:max-w-none">
          <div className="absolute inset-0 bg-gold/20 rounded-t-full transform translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 will-change-transform"></div>
          {/* I'll use the placeholder logic, referencing the hero.jpg derived from the shared image */}
          <div className="relative z-10 bg-white p-2 rounded-t-full shadow-2xl overflow-hidden aspect-[4/5] object-cover mx-auto border border-gold-muted/30">
            <img 
              src="/hero.jpg" 
              alt="Portrait of the Voiceover Artist" 
              className="w-full h-full object-cover rounded-t-full hover:scale-105 transition-transform duration-1000 origin-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}