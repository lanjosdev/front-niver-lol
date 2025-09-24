import { Lightbulb, Music, Utensils, Book, GamepadIcon, Palette } from "lucide-react";

export function FunFactsSection() {
  const funFacts = [
    {
      icon: Music,
      title: "Playlist perfeita",
      fact: "Você sempre sabe qual música tocar no momento certo",
      gradient: "gradient-spotify"
    },
    {
      icon: Utensils,
      title: "Chef secreta",
      fact: "Seus pratos têm aquele toque especial que ninguém consegue imitar",
      gradient: "gradient-pink"
    },
    {
      icon: Book,
      title: "Contadora de histórias",
      fact: "Suas histórias sempre prendem a atenção de todo mundo",
      gradient: "gradient-purple"
    },
    {
      icon: GamepadIcon,
      title: "Gamer de carteirinha",
      fact: "Quando se concentra no jogo, não há quem te pare",
      gradient: "gradient-orange"
    },
    {
      icon: Palette,
      title: "Artista nata",
      fact: "Tudo que você toca vira arte, até os rabiscos",
      gradient: "gradient-spotify"
    },
    {
      icon: Lightbulb,
      title: "Rainha das ideias",
      fact: "Sempre tem uma solução criativa para qualquer problema",
      gradient: "gradient-pink"
    }
  ];

  return (
    <div className="space-y-8 slide-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="font-druk text-3xl md:text-4xl text-gradient-spotify uppercase tracking-wide">
          Curiosidades
        </h2>
        <p className="text-muted-foreground">
          Fatos incríveis sobre essa pessoa única que você é
        </p>
      </div>

      {/* Fun Facts Grid */}
      <div className="space-y-4">
        {funFacts.map((fact, index) => (
          <div 
            key={index}
            className="bg-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 scale-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${fact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <fact.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-foreground">
                  {fact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {fact.fact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special highlight */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-6 border border-primary/20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-spotify">
            <span className="text-2xl">⭐</span>
          </div>
          
          <div>
            <h3 className="font-druk text-xl text-gradient-spotify uppercase tracking-wide mb-2">
              Fato Mais Especial
            </h3>
            <p className="text-foreground leading-relaxed">
              Você tem o poder único de fazer qualquer dia comum se tornar extraordinário. 
              É essa magia que torna você tão especial para todos ao seu redor.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom emoji decoration */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-2xl">
          <span>🎭</span>
          <span>🎨</span>
          <span>🎵</span>
          <span>🎮</span>
          <span>📚</span>
          <span>🍳</span>
        </div>
      </div>
    </div>
  );
}
