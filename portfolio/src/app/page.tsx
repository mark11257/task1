import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative">
      {/* Hero Section */}
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient animate-fade-in-up">
            The Cosmic
          </h1>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient animate-fade-in-up [animation-delay:0.2s]">
            Architect
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-space-silver max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.4s]">
          {SITE_CONFIG.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.6s]">
          <button className="btn-primary px-8 py-4 text-lg font-semibold">
            Explore My Universe
          </button>
          <button className="btn-secondary px-8 py-4 text-lg font-semibold">
            View Mission Log
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-space-teal rounded-full animate-twinkle"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-space-gold rounded-full animate-twinkle [animation-delay:0.5s]"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-space-silver rounded-full animate-twinkle [animation-delay:1s]"></div>
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-space-teal rounded-full animate-twinkle [animation-delay:1.5s]"></div>
    </main>
  );
}