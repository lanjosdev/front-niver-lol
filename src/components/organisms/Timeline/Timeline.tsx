// import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function Timeline() {
    const timelineImages = [    
        { image: "/images/timeline/image1.jpg" },
        { image: "/images/timeline/image2.jpg" },
        { image: "/images/timeline/image3.jpg" },
        { image: "/images/timeline/image4.jpg" },
        { image: "/images/timeline/image5.jpg" },
    ]

    return (
        <div className="flex items-center justify-center p-6    border-4 border-red-500">
            <div className="animate-slide-in-up    border-2 border-blue-500">
                {/* Título e subtítulo */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold">
                        Hoje completa<br />
                        <span className="text-3xl">27 anos...</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        que nossas vidas são mais alegres por você existir
                    </p>
                </div>

                {/* Foto principal */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-48 h-64 bg-gray-200 border-2 border-gray-300 rounded-lg shadow-md flex items-center justify-center">
                        <span className="text-gray-500 font-medium">Foto principal</span>
                    </div>

                    {/* Seta para baixo */}
                    <div className="text-gray-400 text-2xl">
                        ↓
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative border-2 border-blue-500">
                    {timelineImages.map((event, index) => (
                        <div
                            key={event.image}
                            className={cn("flex items-center border-2 border-green-500", index % 2 === 0 ? "" : "flex-row-reverse")}
                        >
                            <div
                                className={cn("w-5/12 animate-fade-in-scale border-2 border-red-500", index % 2 === 0 ? "text-right pr-8" : "text-left pl-8")}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <img src={event.image} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}