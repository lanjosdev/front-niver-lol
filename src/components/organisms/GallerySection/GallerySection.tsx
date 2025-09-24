import { Image, Users, Coffee, Plane } from "lucide-react";

export function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      title: "Momentos com amigos",
      description: "Risadas, conversas e momentos únicos",
      icon: Users,
      gradient: "gradient-spotify",
      placeholder: "👫"
    },
    {
      id: 2,
      title: "Nossos cafés especiais",
      description: "Aqueles papos que se estendem por horas",
      icon: Coffee,
      gradient: "gradient-pink",
      placeholder: "☕"
    },
    {
      id: 3,
      title: "Aventuras pelo mundo",
      description: "Cada viagem, uma nova descoberta",
      icon: Plane,
      gradient: "gradient-purple",
      placeholder: "✈️"
    },
    {
      id: 4,
      title: "Selfies espontâneas",
      description: "Capturando a essência dos momentos",
      icon: Image,
      gradient: "gradient-orange",
      placeholder: "📸"
    }
  ];

  return (
    <div className="space-y-8 slide-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="font-druk text-3xl md:text-4xl text-gradient-purple uppercase tracking-wide">
          Nossa Galeria
        </h2>
        <p className="text-muted-foreground">
          Memórias capturadas em pixels e guardadas no coração
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 scale-in group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image placeholder */}
            <div className={`aspect-square ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
              <span className="text-6xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.placeholder}
              </span>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <item.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-sm text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main featured item */}
      <div className="bg-card rounded-3xl p-6 border border-border/50 fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-spotify">
            <Image className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">
              Foto do ano
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aquela foto que capturou perfeitamente a sua essência. 
              Um momento congelado no tempo que sempre nos fará sorrir.
            </p>
          </div>
          
          {/* Placeholder for featured image */}
          <div className="w-full aspect-[4/3] bg-muted/20 rounded-2xl flex items-center justify-center">
            <span className="text-8xl">🌟</span>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground italic">
          Cada foto conta uma história, e todas têm você como protagonista 📷
        </p>
      </div>
    </div>
  );
}
