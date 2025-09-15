import { Heart, Target, Zap } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about storytelling and creating meaningful connections"
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Data-driven strategies that deliver measurable results for your brand"
    },
    {
      icon: Zap,
      title: "Creativity",
      description: "Innovative designs and content that make your brand unforgettable"
    }
  ];

  return (
    <section className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Creative Minds Behind{" "}
                <span className="text-gradient">Artbox</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Artbox Social, creativity meets strategy. We're a Jaipur-based team 
                passionate about storytelling, design, and digital growth. Our mission is 
                simple: craft meaningful digital experiences that make your brand unforgettable.
              </p>
            </div>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-[var(--elegant-shadow)]">
              <img 
                src={aboutTeamImage}
                alt="Artbox Social creative team"
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
            
            {/* Floating info cards */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;