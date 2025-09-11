import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "Anytime Fitness",
      url: "https://www.instagram.com/af_shyamnagarjaipur/",
      initial: "AF"
    },
    {
      name: "Dilegno India",
      url: "https://www.instagram.com/dilegnoindia/",
      initial: "DI"
    },
    {
      name: "Uday Waldorf School",
      url: "https://www.instagram.com/udaywaldorf/?hl=en/",
      initial: "UW"
    },
    {
      name: "Yellow Bricks Jaipur",
      url: "https://www.instagram.com/yellowbrickroadschool/?hl=en",
      initial: "YB"
    },
    {
      name: "Jewellery by Mitali Jain",
      url: "https://www.instagram.com/jewellerybymitalijain/?hl=en",
      initial: "MJ"
    },
    {
      name: "Casa Ninos",
      url: "https://www.instagram.com/casaninosofficial/?hl=en",
      initial: "CN"
    },
    {
      name: "Suadre Studios",
      url: "https://www.instagram.com/suadrestudio/?hl=en",
      initial: "SS"
    },
    {
      name: "Shreeya's India",
      url: "https://shreeyasindia.com/",
      initial: "SI"
    },
    {
      name: "Kalaai Studio",
      url: "https://www.instagram.com/kala__studio/",
      initial: "KS"
    },
    {
      name: "Gayatri Arts Creations",
      url: "https://www.instagram.com/gayatri_arts_creations/",
      initial: "GA"
    },
    {
      name: "Roshan Kia",
      url: "https://www.instagram.com/roshan_kia_jaipur/",
      initial: "RK"
    },
    {
      name: "Roshan Nissan",
      url: "https://roshannissan.com/",
      initial: "RN"
    },
    {
      name: "Hydes and Hues",
      url: "https://hydesnhues.com/",
      initial: "HH"
    },
    {
      name: "JB's Home Theatre",
      url: "https://www.facebook.com/JBsJaipur/",
      initial: "JB"
    },
    {
      name: "Aayojan School",
      url: "https://www.instagram.com/aayojan_school/",
      initial: "AS"
    },
    {
      name: "Aroma Amenities",
      url: "https://www.instagram.com/aroma_amenities_jaipur/",
      initial: "AA"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Auto-play every 5 seconds
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dark Premium Background Band */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Title */}
          <div className="text-center mb-20 slide-in-section fade-in visible">
            <h2 className="section-title text-primary-foreground mb-6">
              Brands That Trust Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8"></div>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Partnering with premium brands across Jaipur and beyond to create 
              extraordinary digital experiences that drive real growth.
            </p>
          </div>
          
          {/* Premium Carousel */}
          <div className="client-carousel relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="client-carousel-track">
                {clients.map((client, index) => (
                  <div key={index} className="client-carousel-item">
                    <a 
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="text-center p-6">
                        {/* Premium Logo Circle */}
                        <div className="client-logo group-hover:shadow-gold-glow">
                          <div className="w-20 h-20 bg-gradient-to-br from-accent via-primary-glow to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-luxury">
                            <span className="text-primary font-black text-2xl">
                              {client.initial}
                            </span>
                          </div>
                        </div>
                        
                        {/* Client Name */}
                        <h3 className="font-semibold text-primary-foreground text-sm lg:text-base mt-4 group-hover:text-accent transition-colors duration-300">
                          {client.name}
                        </h3>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:border-accent z-10 ${!canScrollPrev ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-gold-glow'}`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </button>

            <button
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:border-accent z-10 ${!canScrollNext ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-gold-glow'}`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(clients.length / 6) }).map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full bg-primary-foreground/30 hover:bg-accent transition-colors duration-300"
                onClick={() => emblaApi?.scrollTo(index * 6)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;