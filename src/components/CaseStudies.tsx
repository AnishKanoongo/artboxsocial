import { TrendingUp, Users, School } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      client: "Anytime Fitness",
      result: "3x engagement growth",
      description: "Transformed their social media presence with strategic content and community building",
      metric: "300% increase"
    },
    {
      icon: Users,
      client: "Jewellery by Mitali Jain",
      result: "Instagram influencer-led success",
      description: "Built a luxury brand presence through influencer partnerships and premium content",
      metric: "500K+ reach"
    },
    {
      icon: School,
      client: "Uday Waldorf School",
      result: "Boosted admissions via SEO + ads",
      description: "Increased school enrollment through targeted digital marketing and SEO optimization",
      metric: "45% more admissions"
    }
  ];

  return (
    <section className="py-20 section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We've Made an Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses - see how we've helped our clients achieve their digital goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                  <case_.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {case_.client}
                </h3>
                <div className="text-primary font-semibold text-lg mb-3">
                  {case_.result}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {case_.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="text-2xl font-bold text-gradient">
                  {case_.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;