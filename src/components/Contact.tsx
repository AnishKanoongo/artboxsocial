import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🚀",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      businessName: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Great Together 🚀
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to scale your brand digitally? The Artbox team is just a message away.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Choose Artbox Social?
              </h3>
              <div className="space-y-4">
                {[
                  "🎯 Jaipur-based team with local market expertise",
                  "📊 Data-driven strategies that deliver results",
                  "🎨 Creative content that stands out",
                  "🤝 Dedicated account management",
                  "📈 Proven track record with growing brands"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-lg">{point.split(' ')[0]}</div>
                    <p className="text-muted-foreground">
                      {point.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="text-lg font-semibold text-card-foreground mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <p>📧 hello@artboxsocial.com</p>
                <p>📱 +91 XXXXX XXXXX</p>
                <p>📍 Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Business Name
                </label>
                <Input
                  value={formData.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  placeholder="Your business name"
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Service Required
                </label>
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="rounded-xl border-2 focus:border-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media Management</SelectItem>
                    <SelectItem value="content">Content Creation</SelectItem>
                    <SelectItem value="influencer">Influencer Marketing</SelectItem>
                    <SelectItem value="advertising">Digital Advertising</SelectItem>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="all">Complete Digital Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Tell us about your project
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Share your goals, timeline, and any specific requirements..."
                  className="rounded-xl border-2 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="hero-button w-full">
                💬 Let's Talk
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;