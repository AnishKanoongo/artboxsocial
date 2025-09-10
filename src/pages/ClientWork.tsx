import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Heart } from "lucide-react";

const ClientWork = () => {
  const clientProjects = [
    {
      client: "Anytime Fitness Jaipur",
      industry: "Fitness & Wellness",
      services: ["Social Media Management", "Content Creation", "Community Building"],
      results: [
        "3x engagement growth in 6 months",
        "50% increase in gym memberships",
        "25K+ new followers"
      ],
      description: "Complete digital transformation focusing on fitness motivation and community building.",
      image: "🏋️",
      instagramUrl: "https://www.instagram.com/af_shyamnagarjaipur/"
    },
    {
      client: "Jewellery by Mitali Jain",
      industry: "Luxury Jewelry",
      services: ["Influencer Marketing", "Premium Content", "Brand Positioning"],
      results: [
        "200% increase in online sales",
        "Collaboration with 15+ influencers",
        "Premium brand positioning"
      ],
      description: "Luxury jewelry brand elevation through strategic influencer partnerships and premium content.",
      image: "💎",
      instagramUrl: "https://www.instagram.com/jewellerybymitalijain/?hl=en"
    },
    {
      client: "Uday Waldorf School",
      industry: "Education",
      services: ["SEO Optimization", "Digital Advertising", "Content Strategy"],
      results: [
        "40% boost in admissions",
        "Top 3 search ranking",
        "Enhanced parent engagement"
      ],
      description: "Comprehensive digital strategy to increase school admissions and parent engagement.",
      image: "🎓",
      instagramUrl: "https://www.instagram.com/udaywaldorf/?hl=en/"
    },
    {
      client: "Yellow Bricks Jaipur",
      industry: "Early Childhood Education",
      services: ["Social Media Management", "Parent Community Building"],
      results: [
        "Enhanced parent communication",
        "Stronger school community",
        "Increased enrollment inquiries"
      ],
      description: "Building a strong parent community through engaging social media content and communication.",
      image: "🧒",
      instagramUrl: "https://www.instagram.com/yellowbrickroadschool/?hl=en"
    },
    {
      client: "Casa Ninos",
      industry: "Children's Fashion",
      services: ["Brand Storytelling", "Visual Content", "E-commerce Integration"],
      results: [
        "Consistent brand voice",
        "High-quality visual content",
        "Improved customer engagement"
      ],
      description: "Creating compelling brand narratives for children's fashion with focus on quality and style.",
      image: "👶",
      instagramUrl: "https://www.instagram.com/casaninosofficial/?hl=en"
    },
    {
      client: "Dilegno India",
      industry: "Furniture & Interior",
      services: ["Product Photography", "Social Commerce", "Brand Building"],
      results: [
        "Professional brand image",
        "Showcase product quality",
        "Enhanced market presence"
      ],
      description: "Elevating furniture brand through professional photography and strategic brand positioning.",
      image: "🪑",
      instagramUrl: "https://www.instagram.com/dilegnoindia/"
    },
    {
      client: "Suadre Studios",
      industry: "Creative Services",
      services: ["Portfolio Showcase", "Creative Content", "Industry Networking"],
      results: [
        "Enhanced portfolio visibility",
        "Creative industry recognition",
        "New client acquisitions"
      ],
      description: "Showcasing creative excellence through strategic content and industry networking.",
      image: "🎨",
      instagramUrl: "https://www.instagram.com/suadrestudio/?hl=en"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped brands across different industries achieve their digital marketing goals through creative strategies and data-driven results.
          </p>
        </div>
      </section>

      {/* Client Projects Grid */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{project.image}</div>
                      <div>
                        <h3 className="font-bold text-card-foreground text-lg group-hover:text-primary transition-colors duration-300">
                          {project.client}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.industry}
                        </Badge>
                      </div>
                    </div>
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground text-sm">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Results:
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-muted-foreground text-xs flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can create similar results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Packages
            </a>
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientWork;