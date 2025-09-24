import { Camera, MapPin, Clock } from "lucide-react";

export function MomentsSection() {
  const moments = [
    {
      title: "Primeira vez que nos conhecemos",
      description: "Aquele momento mágico onde tudo começou. Quem diria que uma simples conversa se tornaria uma amizade tão especial?",
      date: "Janeiro 2023",
      icon: Clock,
      gradient: "gradient-spotify"
    },
    {
      title: "Nossa viagem inesquecível",
      description: "Aventuras, risadas e memórias que vão durar para sempre. Cada lugar que visitamos se tornou ainda mais especial com sua companhia.",
      date: "Verão 2023",
      icon: MapPin,
      gradient: "gradient-pink"
    },
    {
      title: "Aquela sessão de fotos épica",
      description: "Quando decidimos ser modelos por um dia e o resultado foi uma galeria cheia de momentos únicos e muito divertidos.",
      date: "Outono 2023",
      icon: Camera,
      gradient: "gradient-purple"
    }
  ];

  return (
    <div className="space-y-8 slide-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="font-druk text-3xl md:text-4xl text-gradient-pink uppercase tracking-wide">
          Momentos Especiais
        </h2>
        <p className="text-muted-foreground">
          Relembrando os melhores momentos que vivemos juntos
        </p>
      </div>

      {/* Moments List */}
      <div className="space-y-6">
        {moments.map((moment, index) => (
          <div 
            key={index}
            className="bg-card rounded-3xl p-6 border border-border/50 hover:border-accent/50 transition-all duration-300 fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="space-y-4">
              {/* Header with icon and date */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${moment.gradient} flex items-center justify-center flex-shrink-0`}>
                  <moment.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {moment.title}
                  </h3>
                  <div className="text-sm text-muted-foreground font-medium">
                    {moment.date}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed pl-16">
                {moment.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative element */}
      <div className="text-center pt-6">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
          <span className="text-xs uppercase tracking-widest">E muitos outros por vir</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
        </div>
      </div>
    </div>
  );
}
