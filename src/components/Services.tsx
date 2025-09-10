import { 
  Smartphone, 
  Video, 
  Users, 
  Megaphone, 
  Globe, 
  Search, 
  BarChart3 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Complete social media strategy, content planning, and community management across all platforms."
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Engaging visuals, videos, and copy that tell your brand story and connect with your audience."
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to amplify your brand reach and credibility."
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Targeted ad campaigns across social platforms to drive conversions and brand awareness."
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, responsive websites that convert visitors into customers and showcase your brand."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your online visibility and organic traffic growth."
    },
    {
      icon: BarChart3,
      title: "Platform Handling",
      description: "Complete management of your digital presence across multiple platforms and channels."
    }
  ];

  return (
    <section className="py-20 section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Digital Toolbox
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to grow your brand and engage your audience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;