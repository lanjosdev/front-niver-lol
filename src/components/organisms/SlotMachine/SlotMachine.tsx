import { useState } from 'react';

const SlotMachineNumber = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [displayNumber, setDisplayNumber] = useState(777);
    

    // Função principal da animação
    const spinNumbers = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        const newLuckyNumber = 13;

        // Animação de números aleatórios por 2 segundos
        const spinInterval = setInterval(() => {
            setDisplayNumber(Math.floor(Math.random() * 999) + 1);
        }, 50);

        // Para a animação e mostra o número final
        
        setTimeout(() => {
            clearInterval(spinInterval);
            setDisplayNumber(newLuckyNumber);
            setIsSpinning(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full text-center">

                {/* Display do número estilo caça-níqueis */}
                <div className="relative mb-8   border-2 border-red-500">
                    <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 border-4 border-yellow-400 shadow-inner">
                        {/* Número principal */}
                        <div className="relative">
                            <div
                                className={`text-6xl font-mono font-bold text-yellow-400 drop-shadow-2xl transition-all duration-100 ${isSpinning ? 'scale-110 animate-pulse' : 'scale-100'}`}
                            >
                                {String(displayNumber).padStart(3, '0')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botão de girar */}
                <button
                    onClick={spinNumbers}
                    disabled={isSpinning}
                    className={`w-full py-4 px-8 rounded-xl font-bold text-xl transition-all duration-300 transform ${isSpinning
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed scale-95'
                            : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
                        }`}
                >
                    {isSpinning ? (
                        <>
                            <span className="inline-block animate-spin mr-2">🎰</span>
                            Girando...
                        </>
                    ) : (
                        <>
                            <span className="mr-2">🎯</span>
                            Girar Números!
                        </>
                    )}
                </button>

            </div>
        </div>
    );
};

export default SlotMachineNumber;