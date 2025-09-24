import { Calendar, Heart, Smile, Star } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Calendar,
      number: "25",
      label: "Anos de vida",
      sublabel: "E cada um mais incrível que o anterior",
      gradient: "gradient-spotify"
    },
    {
      icon: Smile,
      number: "∞",
      label: "Sorrisos dados",
      sublabel: "Você ilumina qualquer ambiente",
      gradient: "gradient-pink"
    },
    {
      icon: Heart,
      number: "100%",
      label: "De amor recebido",
      sublabel: "Porque você merece todo carinho do mundo",
      gradient: "gradient-purple"
    },
    {
      icon: Star,
      number: "365",
      label: "Dias especiais",
      sublabel: "Porque com você, todo dia é especial",
      gradient: "gradient-orange"
    }
  ];

  return (
    <div className="space-y-8 slide-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="font-druk text-3xl md:text-4xl text-gradient-spotify uppercase tracking-wide">
          Suas Estatísticas
        </h2>
        <p className="text-muted-foreground">
          Os números que mostram o quanto você é especial
        </p>
      </div>

      {/* Stats Grid */}
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-card rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${stat.gradient} flex items-center justify-center flex-shrink-0`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-druk text-3xl text-foreground">
                    {stat.number}
                  </span>
                  <span className="font-bold text-lg text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom message */}
      <div className="text-center pt-4">
        <p className="text-sm text-muted-foreground italic">
          Estes números são apenas uma pequena parte do que você representa 💕
        </p>
      </div>
    </div>
  );
}
