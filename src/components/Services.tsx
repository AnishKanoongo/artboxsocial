import { 
  Smartphone, 
  Video, 
  Users, 
  Megaphone, 
  Globe, 
  Search, 
  BarChart3 
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import contentCreation from "@/assets/content-creation.jpg";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Complete social media strategy, content planning, and community management across all platforms.",
      delay: "0ms"
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Engaging visuals, videos, and copy that tell your brand story and connect with your audience.",
      delay: "200ms"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to amplify your brand reach and credibility.",
      delay: "400ms"
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Targeted ad campaigns across social platforms to drive conversions and brand awareness.",
      delay: "600ms"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, responsive websites that convert visitors into customers and showcase your brand.",
      delay: "800ms"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your online visibility and organic traffic growth.",
      delay: "1000ms"
    },
    {
      icon: BarChart3,
      title: "Platform Handling",
      description: "Complete management of your digital presence across multiple platforms and channels.",
      delay: "1200ms"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${contentCreation})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95"></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className={`text-center mb-20 ${inView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="section-title text-navy mb-8 font-playfair">
            Our Digital <span className="text-gradient">Toolbox</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Comprehensive digital solutions to grow your brand and engage your audience with 
            premium creative strategies and data-driven insights.
          </p>
        </div>
        
        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card group ${inView ? 'fade-in visible' : 'fade-in'}`}
              style={{
                animationDelay: service.delay,
                // Asymmetrical positioning
                marginTop: index % 3 === 1 ? '2rem' : index % 3 === 2 ? '4rem' : '0',
                ...(index === 3 && { gridColumn: 'span 2' }), // Make one card span 2 columns
              }}
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-gold rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[var(--glow-shadow)]">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6 font-playfair group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-inter">
                {service.description}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-20 ${inView ? 'fade-in visible' : 'fade-in'}`} style={{animationDelay: '1400ms'}}>
          <div className="bg-gradient-to-r from-navy to-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 font-playfair">Ready to Transform Your Digital Presence?</h3>
            <p className="text-xl mb-8 font-inter opacity-90">Let's create something extraordinary together</p>
            <a href="/pricing">
              <button className="bg-gold text-navy px-10 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
                Start Your Journey
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;