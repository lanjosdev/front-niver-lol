import { cn } from "@/lib/utils";
import imageTP from '../../../assets/images/tp.webp';
import { ChevronDown } from "lucide-react";


export function Timeline() {
    const timelineImages = [
        { image: './images/timeline/t1.jpeg' },
        { image: './images/timeline/t2.jpeg' },
        { image: './images/timeline/t3.jpeg' },
        { image: './images/timeline/t4.jpeg' },
        { image: './images/timeline/t5.jpeg' },
        { image: './images/timeline/t6.jpeg' },
        { image: './images/timeline/t7.jpeg' },
        { image: './images/timeline/t8.jpeg' },
        { image: './images/timeline/t9.jpeg' },
        { image: './images/timeline/t10.jpeg' },
        { image: './images/timeline/t11.jpeg' },
        { image: './images/timeline/t12.jpeg' },
        { image: './images/timeline/t13.jpeg' },
        { image: './images/timeline/t14.jpeg' },
        { image: './images/timeline/t15.jpeg' },
        { image: './images/timeline/t16.jpeg' },
        { image: './images/timeline/t17.jpeg' },
        { image: './images/timeline/t18.jpeg' },
        { image: './images/timeline/t19.jpeg' },
        { image: './images/timeline/t20.jpeg' },
        { image: './images/timeline/t21.jpeg' },
        { image: './images/timeline/t22.jpeg' },
        { image: './images/timeline/t23.jpeg' },
    ]

    return (
        <div className="flex items-center justify-center p-6 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
            <div className="animate-slide-in-up space-y-6">
                {/* Título e subtítulo */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold" data-aos="zoom-in" data-aos-duration="800">
                        Hoje completa <br />
                        <span className="">27 anos...</span>
                    </h1>

                    <p className="text-muted-foreground" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        que nossas vidas são mais alegres por você existir
                    </p>
                </div>

                {/* Foto principal */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center px-4">
                        <img src={imageTP} className="w-full h-full object-cover rounded-lg shadow-xl" alt="Foto principal" fetchPriority="high" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="900" />
                    </div>

                    {/* Seta para baixo */}
                    <div className="text-muted-foreground mt-4 -mb-2">
                        <ChevronDown className="size-8 animate-bounce animation-duration-[2s]" />
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative -mx-6 -space-y-16">
                    {timelineImages.map((event, index) => (
                        <div
                            key={event.image}
                            className={cn("flex items-center", index % 2 === 0 ? "" : "flex-row-reverse -translate-y-14")}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >

                            <div className={cn("w-[160px] h-[260px]", index % 2 === 0 ? "-rotate-8" : "rotate-8 -translate-x-4")}>
                                <img src={event.image} className="w-full h-full object-cover rounded-lg"  />
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