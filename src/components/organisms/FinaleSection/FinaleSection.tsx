import { Cake, Gift, PartyPopper, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";

export function FinaleSection() {
  const { goToSection } = useApp();

  const handleRestart = () => {
    goToSection(0);
  };

  return (
    <div className="space-y-8 text-center fade-in">
      {/* Main celebration */}
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-spotify mb-4 scale-in">
          <Cake className="w-12 h-12 text-white" />
        </div>
        
        <h2 className="font-druk text-4xl md:text-5xl text-gradient-spotify uppercase tracking-wide">
          Feliz
          <br />
          Aniversário!
        </h2>
        
        <div className="flex items-center justify-center gap-3 text-2xl">
          <PartyPopper />
          <Sparkles />
          <Gift />
          <Sparkles />
          <PartyPopper />
        </div>
      </div>

      {/* Final message */}
      <div className="space-y-6 max-w-md mx-auto">
        <div className="bg-card rounded-3xl p-8 border border-border/50">
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Espero que tenha gostado dessa pequena homenagem criada especialmente para você!
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cada seção foi pensada com carinho para celebrar a pessoa incrível que você é. 
            Que esse novo ciclo seja repleto de alegrias, conquistas e muito amor!
          </p>
        </div>

        {/* Stats recap */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
          <h3 className="font-bold text-foreground mb-4">Resumo da Homenagem:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="text-muted-foreground">Seções vistas</div>
              <div className="font-bold text-primary">6 de 6</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">Carinho enviado</div>
              <div className="font-bold text-primary">∞</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">Momentos relembrados</div>
              <div className="font-bold text-primary">Todos</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">Amor compartilhado</div>
              <div className="font-bold text-primary">100%</div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <Button 
            onClick={handleRestart}
            className="w-full gradient-spotify text-white font-bold py-4 rounded-2xl hover:scale-105 transition-transform duration-200"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Ver tudo novamente
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Feito com 💖 especialmente para Carol
          </p>
        </div>
      </div>

      {/* Final decoration */}
      <div className="pt-8">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs uppercase tracking-widest">Wrapped 2024</span>
          <Sparkles className="w-4 h-4 text-primary" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      </div>
    </div>
  );
}
