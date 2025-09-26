import { useEffect } from "react";


export function Moments() {

    const momentsImages = [
        { image: './images/moments/doula.jpeg' },
        { image: './images/moments/foto-hospital.jpeg' },
        { image: './images/moments/pilota.jpeg' },
        { image: './images/moments/macumba.jpeg' },
        { image: './images/moments/praia.jpeg' },
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
                    {/* {momentsImages.map((moment, index) => (
                        <img src={moment.image} alt="Moment" key={index} className="w-full h-full object-cover rounded-lg shadow-xl" />
                    ))} */}

                    <img src={momentsImages[0].image} alt="Moment" className="w-full h-full object-cover rounded-lg shadow-xl" data-aos="zoom-in-left" data-aos-duration="800" />
                    <img src={momentsImages[1].image} alt="Moment" className="w-full h-full object-cover rounded-lg shadow-xl" data-aos="zoom-in-right" data-aos-duration="800" />
                    <img src={momentsImages[2].image} alt="Moment" className="w-full h-full object-cover rounded-lg shadow-xl" data-aos="zoom-in-left" data-aos-duration="800" />
                    <img src={momentsImages[3].image} alt="Moment" className="w-full h-full object-cover rounded-lg shadow-xl" data-aos="zoom-in-right" data-aos-duration="800" />
                    <img src={momentsImages[4].image} alt="Moment" className="w-full h-full object-cover rounded-lg shadow-xl" data-aos="zoom-in-left" data-aos-duration="800" />
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