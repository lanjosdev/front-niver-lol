import { Heart, MessageCircle, Star, Sparkles } from "lucide-react";

export function MessagesSection() {
  const messages = [
    {
      author: "Sua melhor amiga",
      message: "Carol, você é a pessoa mais incrível que eu conheço! Sua risada é contagiante e seu coração é do tamanho do mundo. Que esse novo ano seja repleto de alegrias!",
      icon: Heart,
      gradient: "gradient-pink"
    },
    {
      author: "Sua família",
      message: "Nossa querida Carol, ver você crescer e se tornar essa pessoa maravilhosa é nossa maior alegria. Você ilumina nossa vida todos os dias. Te amamos infinito!",
      icon: Star,
      gradient: "gradient-spotify"
    },
    {
      author: "Seus amigos",
      message: "Carol, você é aquela amiga que todo mundo quer ter! Sempre disposta a ajudar, sempre com um sorriso no rosto. Obrigado por ser essa luz em nossas vidas!",
      icon: Sparkles,
      gradient: "gradient-purple"
    }
  ];

  return (
    <div className="space-y-8 slide-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="font-druk text-3xl md:text-4xl text-gradient-pink uppercase tracking-wide">
          Mensagens Especiais
        </h2>
        <p className="text-muted-foreground">
          Palavras carinhosas de quem mais te ama
        </p>
      </div>

      {/* Messages */}
      <div className="space-y-6">
        {messages.map((msg, index) => (
          <div 
            key={index}
            className="bg-card rounded-3xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300 fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${msg.gradient} flex items-center justify-center`}>
                  <msg.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">
                    {msg.author}
                  </h3>
                </div>
              </div>
              
              {/* Message */}
              <div className="pl-13">
                <blockquote className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">
                  "{msg.message}"
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Personal message */}
      <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-purple-500/10 rounded-3xl p-8 border border-primary/20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-spotify">
            <MessageCircle className="w-10 h-10 text-white" fill="white" />
          </div>
          
          <div className="space-y-4">
            <h3 className="font-druk text-xl text-gradient-spotify uppercase tracking-wide">
              Minha Mensagem Para Você
            </h3>
            <div className="max-w-md mx-auto space-y-4">
              <p className="text-foreground leading-relaxed">
                Carol, preparar essa homenagem foi uma alegria imensa! Cada seção, 
                cada detalhe foi pensado com muito carinho porque você merece 
                ser celebrada todos os dias.
              </p>
              <p className="text-foreground leading-relaxed">
                Que esse novo ano de vida seja repleto de momentos mágicos, 
                conquistas incríveis e muita, muita felicidade. Você é especial 
                demais e espero que nunca se esqueça disso!
              </p>
              <p className="text-foreground font-semibold">
                Feliz aniversário! 🎉✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Heart decoration */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1 text-red-400">
          <Heart className="w-4 h-4" fill="currentColor" />
          <Heart className="w-6 h-6" fill="currentColor" />
          <Heart className="w-4 h-4" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
