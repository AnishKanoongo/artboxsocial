const Clients = () => {
  const clients = [
    {
      name: "Anytime Fitness",
      url: "https://www.instagram.com/af_shyamnagarjaipur/"
    },
    {
      name: "Dilegno India",
      url: "https://www.instagram.com/dilegnoindia/"
    },
    {
      name: "Uday Waldorf School",
      url: "https://www.instagram.com/udaywaldorf/?hl=en/"
    },
    {
      name: "Yellow Bricks Jaipur",
      url: "https://www.instagram.com/yellowbrickroadschool/?hl=en"
    },
    {
      name: "Jewellery by Mitali Jain",
      url: "https://www.instagram.com/jewellerybymitalijain/?hl=en"
    },
    {
      name: "Casa Ninos",
      url: "https://www.instagram.com/casaninosofficial/?hl=en"
    },
    {
      name: "Suadre Studios",
      url: "https://www.instagram.com/suadrestudio/?hl=en"
    },
    {
      name: "Shreeya's India",
      url: "https://shreeyasindia.com/"
    },
    {
      name: "Kalaai Studio",
      url: "https://www.instagram.com/kala__studio/"
    },
    {
      name: "Gayatri Arts Creations",
      url: "https://www.instagram.com/gayatri_arts_creations/"
    },
    {
      name: "Roshan Kia",
      url: "https://www.instagram.com/roshan_kia_jaipur/"
    },
    {
      name: "Roshan Nissan",
      url: "https://roshannissan.com/"
    },
    {
      name: "Hydes and Hues",
      url: "https://hydesnhues.com/"
    },
    {
      name: "JB's Home Theatre",
      url: "https://www.facebook.com/JBsJaipur/"
    },
    {
      name: "Aayojan School",
      url: "https://www.instagram.com/aayojan_school/"
    },
    {
      name: "Aroma Amenities",
      url: "https://www.instagram.com/aroma_amenities_jaipur/"
    }
  ];

  return (
    <section className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Brands That Trust Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <a 
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer group"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-card-foreground text-sm lg:text-base group-hover:text-primary transition-colors duration-300">
                {client.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;