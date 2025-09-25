// import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import imageTP from '../../../assets/images/tp.webp';
import { ChevronDown } from "lucide-react";


export function Timeline() {
    const timelineImages = [
        { image: imageTP },
        { image: imageTP },
        { image: imageTP },
        { image: imageTP },
    ]

    return (
        <div className="flex items-center justify-center p-6     bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900   border- border-red-500">
            <div className="animate-slide-in-up space-y-6">
                {/* Título e subtítulo */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold">
                        Hoje completa <br />
                        <span className="">27 anos...</span>
                    </h1>

                    <p className="text-muted-foreground">
                        que nossas vidas são mais alegres por você existir
                    </p>
                </div>

                {/* Foto principal */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="shadow-md flex items-center justify-center">
                        <img src={imageTP} className="w-full h-full object-cover rounded-lg" alt="Foto principal" fetchPriority="high" />
                    </div>

                    {/* Seta para baixo */}
                    <div className="text-muted-foreground mt-4 -mb-2">
                        <ChevronDown className="size-8 animate-bounce animation-duration-[2s]" />
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative border-2 -mx-6  border-blue-500 -space-y-16">
                    {timelineImages.map((event, index) => (
                        <div
                            key={event.image}
                            className={cn("flex items-center border-2 border-green-500", index % 2 === 0 ? "" : "flex-row-reverse -translate-y-14")}
                        >

                            <div className={cn("w-[160px] h-[260px]", index % 2 === 0 ? "-rotate-8" : "rotate-8 -translate-x-4")}>
                                <img src={event.image} className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-4">
                    <p className="text-muted-foreground">
                        Quantas versões de Carol, não é mesmo? <br />
                        E que venham muitos mais anos especiais pela frente...
                    </p>
                </div>
            </div>
        </div>
    )
}