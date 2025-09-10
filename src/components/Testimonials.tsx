import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Anytime Fitness Jaipur",
      testimonial: "Artbox Social completely transformed our digital presence. Their creative approach and data-driven strategies helped us achieve 3x engagement growth in just 6 months.",
      rating: 5
    },
    {
      name: "Mitali Jain",
      company: "Jewellery by Mitali Jain",
      testimonial: "The team at Artbox understands luxury branding perfectly. Their influencer marketing strategy has been phenomenal for our jewelry business growth.",
      rating: 5
    },
    {
      name: "Dr. Priya Gupta",
      company: "Uday Waldorf School",
      testimonial: "Professional, creative, and results-driven. Artbox helped us boost admissions significantly through their comprehensive digital marketing approach.",
      rating: 5
    },
    {
      name: "Amit Verma",
      company: "Casa Ninos",
      testimonial: "Working with Artbox Social has been amazing. They understand our brand vision and consistently deliver high-quality content that resonates with our audience.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-card-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].testimonial}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold text-card-foreground mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;