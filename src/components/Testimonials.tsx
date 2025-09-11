import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Anytime Fitness Shyam Nagar",
      content: "Artbox Social transformed our digital presence completely. Their premium content and strategic approach helped us increase member engagement by 300%. The quality of work is truly exceptional.",
      rating: 5,
      role: "Franchise Owner"
    },
    {
      name: "Priya Jain",
      company: "Jewellery by Mitali Jain",
      content: "Working with Artbox Social has been a game-changer for our luxury jewelry brand. Their sophisticated content creation and premium aesthetic perfectly captures our brand essence.",
      rating: 5,
      role: "Creative Director"
    },
    {
      name: "Vikram Singh",
      company: "Roshan Nissan",
      content: "The team at Artbox Social understands luxury branding like no other agency in Jaipur. Our social media presence has never looked more professional and engaging.",
      rating: 5,
      role: "Marketing Head"
    },
    {
      name: "Dr. Meena Gupta",
      company: "Uday Waldorf School",
      content: "Artbox Social helped us reach more parents and showcase our unique educational approach. Their content strategy perfectly communicates our values and philosophy.",
      rating: 5,
      role: "Principal"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 slide-in-section fade-in visible">
            <h2 className="section-title text-foreground mb-8">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped premium brands across Jaipur achieve extraordinary 
              digital growth and build meaningful connections with their audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`group relative bg-card border border-border rounded-3xl p-8 shadow-elegant hover:shadow-luxury transition-all duration-700 hover:-translate-y-2 ${
                  index % 3 === 1 ? 'lg:mt-12' : ''
                }`}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-primary-glow rounded-full flex items-center justify-center shadow-gold-glow">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center gap-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 fill-accent text-accent" 
                    />
                  ))}
                </div>

                <blockquote className="text-card-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary-glow rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-card-foreground text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-accent text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
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

export default Testimonials;