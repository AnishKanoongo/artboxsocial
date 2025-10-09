import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import instagramWorkers from "@/assets/instagram-workers.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fullText = "We Grow Your Brand Digitally";

  useEffect(() => {
    if (inView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="min-h-screen flex items-center section-padding py-20 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{
          backgroundImage: `url(${instagramWorkers})`,
        }}
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-10 ${inView ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-xl font-inter font-medium text-accent tracking-wide uppercase">
                  ✨ Premium Digital Agency
                </div>
                <h1 className="hero-title text-foreground leading-none">
                  <span className="text-gradient font-playfair">Artbox Social</span>
                </h1>
                <div className="h-20 flex items-center">
                  <p className="text-3xl lg:text-4xl font-inter font-light text-secondary">
                    {typedText}
                    {showCursor && (
                      <span className="inline-block w-1 h-8 bg-primary ml-2 animate-pulse"></span>
                    )}
                  </p>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-inter">
                A Jaipur-based social media agency helping brands scale with creative content, 
                data-driven strategies, and impactful digital campaigns.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <a href="/work-with-us">
                <Button className="premium-hero-button">
                  🚀 Work With Us
                </Button>
              </a>
              <a href="/client-work">
                <Button className="premium-outline-button">
                  View Our Work
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative ${inView ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="relative">
              {/* Main hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-[var(--elegant-shadow)]">
                <img 
                  src={instagramWorkers}
                  alt="Creative team managing Instagram and social media content" 
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  width="800"
                  height="600"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg float-animation">
                <span className="text-3xl">📱</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg float-animation" style={{animationDelay: "2s"}}>
                <span className="text-2xl text-white">📊</span>
              </div>
              <div className="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-br from-gold to-accent rounded-full flex items-center justify-center shadow-lg float-animation" style={{animationDelay: "1s"}}>
                <span className="text-xl">⚡</span>
              </div>
              
              {/* Background geometric patterns */}
              <div className="absolute -top-20 -right-20 w-40 h-40 border-2 border-primary/20 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 border-2 border-accent/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white curved-divider"></div>
    </section>
  );
};

export default Hero;