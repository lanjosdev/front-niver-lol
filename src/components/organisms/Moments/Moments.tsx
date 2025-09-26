import { useEffect } from "react";


export function Moments() {

    const momentsImages = [
        {
            image: './images/moments/doula.jpeg',
            alt: 'Carol como doula oferecendo cuidado e acolhimento',
            animation: 'zoom-in-left',
        },
        {
            image: './images/moments/foto-hospital.jpeg',
            alt: 'Registro de carinho no ambiente hospitalar',
            animation: 'zoom-in-right',
        },
        {
            image: './images/moments/pilota.jpeg',
            alt: 'Carol pilotando com firmeza e alegria',
            animation: 'zoom-in-left',
        },
        {
            image: './images/moments/macumba.jpeg',
            alt: 'Celebrando a espiritualidade com muita energia',
            animation: 'zoom-in-right',
        },
        {
            image: './images/moments/praia.jpeg',
            alt: 'Momento relaxante à beira da praia',
            animation: 'zoom-in-left',
        },
    ];

    // useEffect para scroll automático para o topo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="flex-1 p-6 bg-gradient-to-br from-green-900 via-teal-800 to-blue-900">

            <div className="animate-slide-in-up space-y-6">
                {/* Título e subtítulo */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold" data-aos="zoom-in" data-aos-duration="800">
                        Momentos especiais
                    </h1>

                    <p className="text-muted-foreground" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        Alguns momentos para reforçar a sua potencia e a pessoa e companhia maravilhosa que você é...
                    </p>
                </div>

                {/* Moments */}
                <div className="space-y-8" data-aos="zoom-in" data-aos-duration="800">
                    {momentsImages.map((moment, index) => (
                        <img
                            key={moment.image}
                            src={moment.image}
                            alt={moment.alt}
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            data-aos={moment.animation}
                            data-aos-duration="800"
                            width={1200}
                            height={1600}
                        />
                    ))}
                </div>

                <div className="text-center pt-4">
                    <p className="text-muted-foreground">
                        E pela sua capacidade de movimento, muitos outros momentos especiais estão por vir...
                        Trazendo mais alegrias e motivos de orgulho.
                    </p>
                </div>
            </div>


        </div>
    )
}