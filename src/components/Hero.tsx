import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import premiumHero from "@/assets/premium-hero.jpg";
import luxuryBg from "@/assets/luxury-bg.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "We Grow Your Brand Digitally";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="parallax-bg opacity-10"
        style={{
          backgroundImage: `url(${luxuryBg})`,
        }}
      />
      
      <div className="section-padding w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Content - Asymmetrical Layout */}
            <div className="space-y-12 slide-in-section fade-in visible lg:pt-20">
              <div className="space-y-8">
                <h1 className="hero-title">
                  <span className="text-gradient block mb-4">✨ Artbox Social</span>
                  <span className="text-foreground block leading-tight">
                    {typedText}
                    <span className="animate-pulse text-accent">|</span>
                  </span>
                </h1>
                <p className="hero-subtitle text-muted-foreground leading-relaxed max-w-xl">
                  A Jaipur-based luxury digital growth agency crafting bespoke social media 
                  strategies, premium content, and sophisticated campaigns that elevate your 
                  brand to extraordinary heights.
                </p>
              </div>
              
              {/* Premium CTAs with asymmetrical positioning */}
              <div className="flex flex-col sm:flex-row gap-8 pt-8">
                <a href="/pricing" className="group">
                  <button className="hero-button group-hover:shadow-2xl">
                    🚀 Partner With Us
                  </button>
                </a>
                <a href="/client-work" className="group">
                  <button className="premium-button text-lg font-semibold">
                    Explore Our Craft
                  </button>
                </a>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="flex gap-8 pt-12">
                <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Premium Brands</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-accent">300%</div>
                  <div className="text-sm text-muted-foreground">Avg Growth</div>
                </div>
              </div>
            </div>

            {/* Hero Image - Overlapping Design */}
            <div className="relative slide-in-right fade-in visible lg:-mt-20">
              <div className="relative">
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-luxury transform rotate-2 hover:rotate-0 transition-all duration-700">
                  <img 
                    src={premiumHero} 
                    alt="Premium digital marketing and social media growth strategies" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent to-primary-glow rounded-full flex items-center justify-center shadow-gold-glow animate-bounce opacity-90">
                  <span className="text-4xl">📱</span>
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-luxury animate-pulse opacity-90">
                  <span className="text-2xl text-primary-foreground">📊</span>
                </div>
                
                <div className="absolute top-1/2 -right-12 w-20 h-20 bg-gradient-to-br from-accent/80 to-primary-glow/80 rounded-full flex items-center justify-center shadow-gold-glow animate-spin-slow opacity-80">
                  <span className="text-xl">✨</span>
                </div>

                {/* Geometric Accent */}
                <div className="absolute -top-4 left-1/4 w-16 h-16 border-4 border-accent rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Divider */}
      <div className="curved-divider"></div>
    </section>
  );
};

export default Hero;