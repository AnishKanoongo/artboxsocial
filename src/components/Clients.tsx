const Clients = () => {
  const clients = [
    "Anytime Fitness",
    "Dilegno",
    "Uday Waldorf School",
    "Yellow Brics School",
    "Jewellery by Mitali Jain",
    "Casa Ninos",
    "Suadre Studios"
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
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {client.charAt(0)}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-card-foreground text-sm lg:text-base">
                {client}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;