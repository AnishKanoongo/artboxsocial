import { Heart, Target, Zap } from "lucide-react";

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
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-lg font-semibold">Based in Jaipur, India</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                  <span className="text-lg font-semibold">Creative Team of Experts</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-lg font-semibold">Data-Driven Approach</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;