import { 
  Smartphone, 
  Video, 
  Users, 
  Megaphone, 
  Globe, 
  Search, 
  BarChart3,
  PenTool,
  Target,
  Camera,
  TrendingUp,
  Palette
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
      description: "Complete social media strategy, content planning, and community management across all platforms with dedicated account managers.",
      delay: "0ms",
      featured: true
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "High-quality visuals, videos, reels, and copy that tell your brand story and connect authentically with your audience.",
      delay: "200ms"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant micro and macro influencers to amplify your brand reach and build credibility.",
      delay: "400ms"
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "ROI-focused ad campaigns across Facebook, Instagram, Google Ads, and LinkedIn to drive conversions and brand awareness.",
      delay: "600ms"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, responsive websites that convert visitors into customers, optimized for performance and user experience.",
      delay: "800ms"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your online visibility, organic traffic growth, and local search rankings.",
      delay: "1000ms"
    },
    {
      icon: PenTool,
      title: "Logo & Brand Design",
      description: "Custom logo design, brand identity development, and visual guidelines that make your brand memorable and recognizable.",
      delay: "1200ms"
    },
    {
      icon: Target,
      title: "Brand Positioning",
      description: "Strategic brand positioning and messaging that differentiates you from competitors and resonates with your target audience.",
      delay: "1400ms"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional product photography, lifestyle shoots, and video production for social media and marketing campaigns.",
      delay: "1600ms"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking, detailed analytics reports, and data-driven insights to optimize your campaigns.",
      delay: "1800ms"
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Customized digital marketing strategies based on market research, competitor analysis, and your business goals.",
      delay: "2000ms"
    },
    {
      icon: Palette,
      title: "Creative Campaigns",
      description: "Innovative campaign concepts, seasonal promotions, and viral content strategies that capture attention and drive engagement.",
      delay: "2200ms"
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
            Our Complete <span className="text-gradient">Service Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
            From strategy to execution, we provide end-to-end digital marketing solutions 
            that drive real results for your brand. Every service is crafted with premium 
            quality and data-driven insights.
          </p>
        </div>
        
        
        {/* Featured Service */}
        <div className={`mb-16 ${inView ? 'fade-in visible' : 'fade-in'}`}>
          <div className="bg-gradient-to-r from-navy to-primary rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-navy" />
                  </div>
                  <span className="bg-gold text-navy px-4 py-2 rounded-full font-bold text-sm">MOST POPULAR</span>
                </div>
                <h3 className="text-4xl font-bold mb-6 font-playfair">Social Media Management</h3>
                <p className="text-xl text-white/90 mb-8 font-inter leading-relaxed">
                  Complete social media strategy, content planning, and community management across all platforms with dedicated account managers.
                </p>
                <a href="/work-with-us">
                  <button className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
                    Get Started
                  </button>
                </a>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">📱</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 border border-gold/30 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.slice(1).map((service, index) => (
            <div 
              key={index} 
              className={`service-card group ${inView ? 'fade-in visible' : 'fade-in'}`}
              style={{
                animationDelay: service.delay,
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
        <div className={`text-center mt-20 ${inView ? 'fade-in visible' : 'fade-in'}`} style={{animationDelay: '2400ms'}}>
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 font-playfair">Ready to Elevate Your Brand?</h3>
              <p className="text-xl mb-8 font-inter opacity-90 max-w-2xl mx-auto">
                Let's create a customized digital strategy that drives real results. 
                Book a free consultation to discuss your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/work-with-us">
                  <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
                    View Packages
                  </button>
                </a>
                <a href="/contact">
                  <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300">
                    Free Consultation
                  </button>
                </a>
              </div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute bottom-10 left-1/4 w-20 h-20 border border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;