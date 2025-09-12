import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const clients = [
    {
      name: "Anytime Fitness",
      url: "https://www.instagram.com/af_shyamnagarjaipur/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Anytime_Fitness_logo.png"
    },
    {
      name: "Dilegno India",
      url: "https://www.instagram.com/dilegnoindia/",
      logo: "https://dilegno.in/cdn/shop/files/logo.png"
    },
    {
      name: "Uday Waldorf School",
      url: "https://www.instagram.com/udaywaldorf/?hl=en/",
      logo: "https://udaywaldorfschool.org/wp-content/uploads/2023/05/cropped-uday-logo.png"
    },
    {
      name: "Yellow Bricks Jaipur",
      url: "https://www.instagram.com/yellowbrickroadschool/?hl=en",
      logo: "https://yellowbrics.edu.in/assets/img/logo.png"
    },
    {
      name: "Jewellery by Mitali Jain",
      url: "https://www.instagram.com/jewellerybymitalijain/?hl=en",
      logo: "https://jewellerybymitalijain.com/cdn/shop/files/logo.png"
    },
    {
      name: "Casa Ninos",
      url: "https://www.instagram.com/casaninosofficial/?hl=en",
      logo: "https://casaninos.in/cdn/shop/files/casa-ninos-logo.png"
    },
    {
      name: "Suadre Studios",
      url: "https://www.instagram.com/suadrestudio/?hl=en",
      logo: "https://suadre.com/cdn/shop/files/logo.png"
    },
    {
      name: "Shreeya's India",
      url: "https://shreeyasindia.com/",
      logo: "https://shreeyasindia.com/cdn/shop/files/logo_150x.png"
    },
    {
      name: "Kalaai Studio",
      url: "https://www.instagram.com/kala__studio/",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Gayatri Arts Creations",
      url: "https://www.instagram.com/gayatri_arts_creations/",
      logo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Roshan Kia",
      url: "https://www.instagram.com/roshan_kia_jaipur/",
      logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Roshan Nissan",
      url: "https://roshannissan.com/",
      logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const itemsPerView = {
    desktop: 6,
    tablet: 4,
    mobile: 2
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / itemsPerView.desktop));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(clients.length / itemsPerView.desktop) - 1 : prev - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && inView) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, inView, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--navy)), hsl(220, 40%, 25%))'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className={`text-center mb-20 ${inView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="section-title text-gold mb-8 font-playfair">
            Brands That Trust Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold to-primary mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-gold/20 hover:bg-gold/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gold/30"
          >
            <ChevronLeft className="w-6 h-6 text-gold" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-gold/20 hover:bg-gold/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gold/30"
          >
            <ChevronRight className="w-6 h-6 text-gold" />
          </button>

          {/* Clients Grid */}
          <div className="overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.ceil(clients.length / itemsPerView.desktop))}%)`
              }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView.desktop}%` }}
                >
                  <a 
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:bg-white/20 h-48 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 mb-4 rounded-full overflow-hidden bg-white/90 flex items-center justify-center group-hover:scale-110 transition-all duration-500 filter group-hover:grayscale-0 grayscale group-hover:rotate-3">
                        <img 
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-16 h-16 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-lg">${client.name.charAt(0)}</div>`;
                            }
                          }}
                        />
                      </div>
                      <h3 className="text-white font-inter font-semibold text-center text-sm group-hover:text-gold transition-colors duration-300">
                        {client.name}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(clients.length / itemsPerView.desktop) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gold scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;