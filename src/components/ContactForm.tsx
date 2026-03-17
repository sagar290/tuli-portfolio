import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'' | 'success' | 'submitting'>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-cream relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6 font-bold tracking-tight">Let's Connect</h2>
            <p className="text-lg text-charcoal/70 font-sans font-light leading-relaxed mb-2">
              আপনার প্রজেক্টে কণ্ঠ দিতে প্রস্তুত? নিচে যোগাযোগ করুন।
            </p>
            <p className="text-xl text-charcoal/70 font-sans font-light leading-relaxed">
              Ready to give your project a voice? Reach out below to discuss rates, availability, or request a custom audition.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-gold/5 border border-cream/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 bg-gold h-full"></div>
            
            {status === 'success' ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-serif text-charcoal mb-4 font-semibold">Message Sent!</h3>
                <p className="text-charcoal/70 font-sans text-lg">Thank you for reaching out. I'll be in touch shortly.</p>
                <button 
                  type="button" 
                  onClick={() => setStatus('')}
                  className="mt-10 px-8 py-3 border border-charcoal/20 rounded-full hover:bg-cream transition-colors text-charcoal font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-charcoal/80 uppercase tracking-widest mb-3">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full bg-cream/30 border-b-2 border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans focus:bg-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-charcoal/80 uppercase tracking-widest mb-3">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full bg-cream/30 border-b-2 border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans focus:bg-white"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-bold text-charcoal/80 uppercase tracking-widest mb-3">Project Type</label>
                  <select 
                    id="project" 
                    className="w-full bg-cream/30 border-b-2 border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans text-charcoal/80 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="commercial">Commercial VO</option>
                    <option value="poetry">Poetry Performance</option>
                    <option value="audiobook">Audiobook Narration</option>
                    <option value="custom">Custom Script</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-charcoal/80 uppercase tracking-widest mb-3">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    className="w-full bg-cream/30 border-b-2 border-charcoal/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none font-sans focus:bg-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-charcoal text-cream font-bold font-sans tracking-widest uppercase rounded-xl hover:bg-gold hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 group"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  {status !== 'submitting' && (
                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}