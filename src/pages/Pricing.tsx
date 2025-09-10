import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Social Media Management (2 platforms)",
        "10 Posts per month",
        "Basic Content Creation",
        "Community Management",
        "Monthly Analytics Report",
        "Email Support"
      ],
      recommended: false
    },
    {
      name: "Growth",
      price: "₹30,000",
      period: "/month",
      description: "Ideal for growing brands ready to scale their presence",
      features: [
        "Social Media Management (3 platforms)",
        "20 Posts per month",
        "Professional Content Creation",
        "Stories & Reels",
        "Influencer Outreach (Basic)",
        "Bi-weekly Analytics Reports",
        "Basic Paid Advertising",
        "Phone & Email Support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "₹45,000",
      period: "/month",
      description: "Complete digital marketing solution for established businesses",
      features: [
        "Social Media Management (All platforms)",
        "30+ Posts per month",
        "Premium Content Creation",
        "Video Content & Reels",
        "Advanced Influencer Marketing",
        "Weekly Analytics & Strategy Calls",
        "Complete Paid Advertising Management",
        "SEO Optimization",
        "Website Maintenance",
        "Dedicated Account Manager",
        "24/7 Priority Support"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Header */}
      <section className="py-20 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient">Growth Package</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for every stage of your business. No hidden fees, no surprises - just results.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.recommended ? 'border-primary shadow-2xl scale-105' : 'border-border'} hover:shadow-lg transition-all duration-300`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6">
                    <Button 
                      className={`w-full ${pkg.recommended ? 'hero-button' : ''}`}
                      variant={pkg.recommended ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <Button variant="outline" className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;