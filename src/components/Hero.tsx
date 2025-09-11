import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">✨ Artbox Social</span>
                <br />
                <span className="text-foreground">We Grow Your Brand Digitally</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                A Jaipur-based social media agency helping brands scale with creative content, 
                data-driven strategies, and impactful digital campaigns.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/pricing">
                <Button className="hero-button">
                  🚀 Work With Us
                </Button>
              </a>
              <a href="/client-work">
                <Button variant="outline" className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Digital marketing illustration" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">📱</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl text-primary-foreground">📊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;