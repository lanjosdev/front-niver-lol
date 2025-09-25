export function Teste() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-6 flex flex-col items-center justify-center">
            <div className="max-w-md w-full mx-auto space-y-8">
                {/* Título e subtítulo */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                        Hoje completa<br />
                        <span className="text-3xl text-purple-600">27 anos...</span>
                    </h1>
                    <p className="text-sm text-gray-600 px-4">
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

                {/* Grid de fotos menores */}
                <div className="relative h-64 w-full">
                    {/* Foto esquerda superior */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded-lg shadow-sm"></div>

                    {/* Foto direita superior */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 border-2 border-gray-300 rounded-lg shadow-sm"></div>

                    {/* Foto esquerda inferior */}
                    <div className="absolute bottom-4 left-2 w-22 h-22 bg-gray-200 border-2 border-gray-300 rounded-lg shadow-sm"></div>

                    {/* Foto direita inferior */}
                    <div className="absolute bottom-0 right-4 w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded-lg shadow-sm"></div>
                </div>

                {/* Texto final */}
                <div className="text-center pt-4">
                    <p className="text-sm text-gray-600 px-4">
                        e muitos anos especiais ainda virão pela frente...
                    </p>
                </div>
            </div>
        </div>
    );
}