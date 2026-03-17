interface AudioTrack {
  id: string;
  label: string;
  platform: string;
}

interface AudioGalleryProps {
  tracks: AudioTrack[];
}

export default function AudioGallery({ tracks }: AudioGalleryProps) {
  return (
    <section id="demos" className="py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 font-bold tracking-tight">Listen to My Work</h2>
          <p className="text-xl text-charcoal/70 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Explore a versatile range of vocal styles—from soulful Bangla poetry to high-impact commercial narration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map(track => (
            <div 
              key={track.id}
              className="flex flex-col"
            >
              <h3 className="text-lg font-semibold text-charcoal mb-4 font-sans tracking-wide">
                {track.label}
              </h3>
              <div 
                className="rounded-2xl border border-gray-200 overflow-hidden bg-cream/20"
                style={{ borderRadius: '12px', borderWidth: '1px' }}
              >
                {track.platform === 'audio.com' ? (
                  <iframe
                    src={`https://audio.com/embed/audio/${track.id}?theme=image`}
                    style={{ display: 'block', borderRadius: '1px', border: 'none', height: '204px', width: '100%' }}
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https://soundcloud.com${track.id}&color=%238B5A2B&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true`}
                  />
                )}
              </div>
              {track.platform === 'audio.com' && (
                <a 
                  href="https://audio.com/subarnadastule"
                  style={{ 
                    textAlign: 'center', 
                    display: 'block', 
                    color: '#A4ABB6', 
                    fontSize: '12px', 
                    fontFamily: 'sans-serif', 
                    lineHeight: '16px', 
                    marginTop: '8px', 
                    overflow: 'hidden', 
                    whiteSpace: 'nowrap', 
                    textOverflow: 'ellipsis' 
                  }}
                >
                  @subarnadastule
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}