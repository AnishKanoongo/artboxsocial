import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Artbox Social
              </span>
            </h3>
            <p className="text-background/80">
              Growing brands digitally with creativity and strategy.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-background/60 mb-2">Follow us</p>
            <div className="flex justify-center gap-4">
              {["Instagram", "LinkedIn", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/60 mb-2">Based in Jaipur</p>
            <p className="text-background/80">hello@artboxsocial.com</p>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> by Artbox Social © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;