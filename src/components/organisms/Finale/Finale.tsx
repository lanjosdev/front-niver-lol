import { useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Finale({ onRestart }: { onRestart: () => void }) {

  // useEffect para scroll automático para o topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 p-6 text-center fade-in bg-gradient-to-br from-orange-900 via-red-800 to-pink-900">
      <div className="space-y-8" data-aos="fade-up" data-aos-duration="800">
        {/* Header with icon */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>

          <h1 className="text-4xl md:text-6xl text-yellow-400 uppercase tracking-wider font-semibold">
            Feliz Aniversário <br />
            Carol!
          </h1>

          {/* <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">27 anos</span>
            <Sparkles className="w-4 h-4" />
          </div> */}
        </div>
        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-foreground leading-relaxed max-w-md mx-auto">
            Parabéns pela linda caminhada que você já trilhou e por todas as conquistas que ainda virão, tenho certeza de que serão maravilhosas, e quero estar ao seu lado para presenciar cada uma delas. <br />
            Sou grato por ter você na minha vida. Desejo vida longa, prosperidade e muito axé no seu caminho. <br />
            Te amo! 💛
          </p>

          <p className="text-sm text-muted-foreground italic">
            Lucas dos Anjos
          </p>
        </div>
        {/* CTA Button */}
        <div className="pt-6">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform duration-200 scale-in"
          >
            Ver novamente
          </Button>
        </div>
      </div>
    </div>
  );
}
