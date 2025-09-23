import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, TrendingUp, Users, Clock, Shield, Award, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkWithUs = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Proven Growth Results",
      description: "Average 180% increase in engagement and 150% growth in followers within 6 months",
      stats: "180% Avg Growth"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Dedicated Team",
      description: "Dedicated account manager and creative team assigned to your brand",
      stats: "Dedicated Team"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Business hours support with emergency assistance available when needed",
      stats: "Business Hours"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-level security for your accounts and complete confidentiality guaranteed",
      stats: "100% Secure"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Award-Winning Creative",
      description: "Creative content that consistently performs above industry standards",
      stats: "Top 10% Performance"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Local Expertise",
      description: "Deep understanding of Jaipur and Rajasthan markets with proven results",
      stats: "3+ Years Local"
    }
  ];

  const whyChooseUs = [
    "✨ Leading social media agency in Jaipur with 50+ successful campaigns",
    "🎯 Custom strategies tailored to your industry and target audience", 
    "📊 Monthly reporting with detailed analytics and performance insights",
    "🚀 Professional content delivered within 3-5 business days",
    "💡 Creative content designed to engage your specific audience",
    "🤝 Personal relationship - direct communication with your account manager",
    "📈 Results-driven approach focused on growing your business",
    "🎨 Creative team with expertise across Instagram, Facebook, and LinkedIn"
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹15,000/month",
      description: "Perfect for small businesses starting their social journey",
      features: [
        "15 custom posts per month",
        "2 social platforms",
        "Basic analytics",
        "Email support",
        "Content calendar"
      ]
    },
    {
      name: "Growth",
      price: "₹35,000/month", 
      description: "Ideal for businesses ready to scale their presence",
      features: [
        "30 custom posts per month",
        "4 social platforms", 
        "Advanced analytics",
        "Priority support",
        "Story management",
        "Community management"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹45,000/month",
      description: "For brands seeking market dominance",
      features: [
        "50+ custom posts per month",
        "All major platforms",
        "Comprehensive analytics",
        "24/7 dedicated support",
        "Influencer collaborations",
        "Video content creation",
        "Monthly strategy calls"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-playfair mb-8">
            <span className="text-gradient">Why Choose</span> Artbox Social?
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Partner with Jaipur's most trusted social media agency. We don't just manage your social media - 
            we transform your brand into a digital powerhouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="premium-hero-button text-lg px-8 py-4">
              🚀 Start Your Journey
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
              📞 Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
              The <span className="text-gradient">Artbox Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what sets us apart from other social media agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="service-card group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-playfair">{benefit.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{benefit.stats}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-8">
                Why <span className="text-gradient">Artbox Social</span> is Your Perfect Partner
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-2">Client Satisfaction</h3>
                <p className="text-4xl font-bold text-primary">92%</p>
                <p className="text-muted-foreground">Average client satisfaction score</p>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Successful Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">48hrs</div>
                  <div className="text-muted-foreground">Average Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
              Choose Your <span className="text-gradient">Growth Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. All plans include our signature creative touch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-2xl scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-playfair">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">{pkg.price}</div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-8 ${pkg.popular ? 'premium-hero-button' : 'premium-outline-button'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-8">
            Ready to Transform Your <span className="text-gradient">Digital Presence?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 50+ satisfied clients who've seen their brands grow with Artbox Social
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="premium-hero-button text-lg px-8 py-4">
              🚀 Start Your Project Today
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
              📋 Download Our Portfolio
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Trusted by leading brands in Jaipur</p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span>✅ No Setup Fees</span>
              <span>✅ 30-Day Money Back</span>
              <span>✅ Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkWithUs;