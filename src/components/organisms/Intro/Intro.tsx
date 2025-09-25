import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

export function Intro() {
    // const { nextSection } = useApp();

    return (
        <div className="flex-1 text-center space-y-8 fade-in bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900    border-4 border-red-500">
            {/* Header with icon */}
            <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-spotify mb-6">
                    <Heart className="w-10 h-10 text-white" fill="white" />
                </div>
                
                <h1 className="font-druk text-4xl md:text-6xl text-gradient-spotify uppercase tracking-wider">
                    Carol's
                    <br />
                    Birthday
                </h1>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-widest">Wrapped 2024</span>
                    <Sparkles className="w-4 h-4" />
                </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed max-w-md mx-auto">
                    Uma homenagem especial com muito amor e carinho para celebrar 
                    essa pessoa incrível que você é
                </p>
                
                <p className="text-sm text-muted-foreground italic">
                    (Espero que goste! 💖)
                </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
                <Button 
                    // onClick={nextSection}
                    size="lg"
                    className="gradient-spotify text-white font-bold px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform duration-200 scale-in"
                >
                    Começar a magia ✨
                </Button>
            </div>
        </div>
    );
}