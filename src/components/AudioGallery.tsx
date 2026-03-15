import { useState, useRef, useEffect } from 'react';

const demos = [
  { id: 1, title: 'Commercial Demo', category: 'Commercial VO', src: '/demos/commercial.mp3' },
  { id: 2, title: 'Poetry Original', category: 'Poetry performances', src: '/demos/poetry.mp3' },
  { id: 3, title: 'Narrative Storytelling', category: 'Audiobook Narration', src: '/demos/audiobook.mp3' },
  { id: 4, title: 'E-learning Explainer', category: 'Custom Script Reading', src: '/demos/elearning.mp3' },
];

export default function AudioGallery() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const togglePlay = (id: number) => {
    if (playingId === id) {
      audioRefs.current[id]?.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null) {
        audioRefs.current[playingId]?.pause();
      }
      setPlayingId(id);
      audioRefs.current[id]?.play();
    }
  };

  const handleEnded = () => setPlayingId(null);

  return (
    <section id="demos" className="py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 font-bold tracking-tight">Audio Gallery</h2>
          <p className="text-xl text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Uncompressed, lossless vocal samples showcasing versatility, warmth, and emotional depth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {demos.map(demo => (
            <div 
              key={demo.id} 
              className={`p-8 border-2 rounded-3xl transition-all duration-500 flex items-center gap-6 group cursor-pointer ${
                playingId === demo.id ? 'border-gold bg-gold/5 shadow-xl' : 'border-cream/50 bg-cream/30 hover:border-gold/30 hover:bg-cream/60'
              }`}
              onClick={() => togglePlay(demo.id)}
            >
              <button 
                className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  playingId === demo.id ? 'bg-gold text-white shadow-lg shadow-gold/30 scale-105' : 'bg-white text-charcoal shadow-sm group-hover:bg-gold group-hover:text-white'
                }`}
                aria-label={playingId === demo.id ? "Pause" : "Play"}
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay(demo.id);
                }}
              >
                {playingId === demo.id ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
              
              <div className="flex-1">
                <span className="text-xs font-bold text-gold tracking-[0.2em] uppercase mb-2 block font-sans">{demo.category}</span>
                <h3 className="text-2xl font-serif text-charcoal mb-3 group-hover:text-gold transition-colors">{demo.title}</h3>
                <div className="h-8 mt-2 flex items-center justify-between gap-1 opacity-40 group-hover:opacity-60 transition-opacity">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 rounded-full bg-charcoal transition-all duration-300 ${playingId === demo.id ? 'animate-pulse' : ''}`}
                      style={{ 
                        height: playingId === demo.id 
                          ? `${20 + (i % 5) * 15}%` 
                          : `${10 + (i % 3) * 10}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <audio 
                ref={el => { audioRefs.current[demo.id] = el; }}
                src={demo.src} 
                onEnded={handleEnded} 
                className="hidden" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
