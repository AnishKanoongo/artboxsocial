import { Palette, TrendingUp, Users, Video, Camera, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Premium Content Creation",
      description: "Bespoke visual storytelling with luxury photography, sophisticated graphics, and artisanal video content that embodies your brand's essence.",
      features: ["Luxury Photography", "Premium Graphics", "Brand Storytelling"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Strategic Growth Marketing",
      description: "Data-driven strategies crafted by experts to amplify your digital presence and accelerate sustainable growth across all platforms.",
      features: ["Growth Strategy", "Market Analysis", "Performance Optimization"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Elite Social Management",
      description: "Comprehensive social media stewardship with white-glove service, community building, and sophisticated engagement strategies.",
      features: ["Platform Management", "Community Building", "Engagement Strategy"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Cinematic Video Production",
      description: "Award-winning video content from concept to completion, featuring premium production values and compelling narratives.",
      features: ["Video Production", "Motion Graphics", "Post-Production"]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Influencer Partnerships",
      description: "Curated collaborations with premium influencers and thought leaders to amplify your brand's reach and credibility.",
      features: ["Influencer Matching", "Campaign Management", "Performance Tracking"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Advanced Analytics",
      description: "Sophisticated data insights and comprehensive reporting to optimize performance and maximize your return on investment.",
      features: ["Advanced Analytics", "ROI Tracking", "Strategic Insights"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden curved-divider">
      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 slide-in-section fade-in visible">
            <h2 className="section-title text-foreground mb-8">
              Our <span className="text-gradient">Premium Services</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Elevating brands through sophisticated digital strategies, premium content creation, 
              and data-driven growth methodologies that deliver extraordinary results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card group fade-in visible ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary-glow rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-gold-glow">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;