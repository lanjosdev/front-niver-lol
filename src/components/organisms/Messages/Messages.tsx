import { cn } from "@/lib/utils";
import { VideoIcon, Volume2, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";


type PersonMessage = {
    name: string;
    image: string;
    type_media: 'audio' | 'video';
    media: string;
};

export function Messages() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<PersonMessage | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

    const peopleMessages: PersonMessage[] = [
        { name: 'Caio', image: './images/perfil-caio.jpeg', type_media: 'audio', media: './messages/audio-caio.ogg' },
        { name: 'Lucas', image: './images/perfil-lucas.jpg', type_media: 'video', media: '/messages/video-lucas.mp4' },
    ];

    const handleCardClick = (person: PersonMessage) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
        setIsPlaying(false);
        // Ajusta o BG imediatamente ao abrir e pausa para qualquer mídia (vídeo/áudio)
        window.dispatchEvent(new CustomEvent("bg-audio:volume", { detail: { volume: 0.1 } }));
        window.dispatchEvent(new Event("bg-audio:pause"));
        window.__bgAudio?.pause?.();
    };

    const togglePlayPause = () => {
        if (mediaRef.current) {
            if (isPlaying) {
                mediaRef.current.pause();
            } else {
                mediaRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMediaLoadedData = () => {
        if (mediaRef.current) {
            mediaRef.current.addEventListener('play', () => setIsPlaying(true));
            mediaRef.current.addEventListener('pause', () => setIsPlaying(false));
            mediaRef.current.addEventListener('ended', () => setIsPlaying(false));
        }
    };

    // Quando o modal fecha, pausar mídia ativa e retomar BG no mesmo gesto
    useEffect(() => {
        if (!isModalOpen) {
            const media = mediaRef.current as HTMLVideoElement | HTMLAudioElement | null;
            if (media) {
                try { media.pause(); } catch { /* noop */ }
                try { media.currentTime = 0; } catch { /* noop */ }
            }
            window.dispatchEvent(new Event("bg-audio:resume"));
            window.dispatchEvent(new CustomEvent("bg-audio:volume", { detail: { volume: window.__bgAudio?.initialVolume ?? 0.3 } }));
            setSelectedPerson(null);
            setIsPlaying(false);
        }
    }, [isModalOpen]);

    return (
        <div className="flex-1 p-6 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900     border-4 border-red-500">
            {/* <div className="hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 INTRO"></div>

            <div className="hidden bg-gradient-to-br from-green-900 via-teal-800 to-blue-900"></div>
            <div className="hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900"></div>

            <div className="hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900"></div>
            <div className="hidden bg-gradient-to-br from-orange-900 via-red-800 to-pink-900"></div> */}


            <div className="animate-slide-in-up space-y-6">
                {/* Título e subtítulo */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold" data-aos="zoom-in" data-aos-duration="800">
                        Mensagens de carinho
                    </h1>

                    <p className="text-muted-foreground" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        Um espaço dedicado a demonstrar o carinho que temos por você
                    </p>
                </div>

                {/* People Messages */}
                <div className="grid grid-cols-2 gap-4     border-2 border-amber-500">
                    {peopleMessages.map((person, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(person)}
                            className={cn(
                                "group relative overflow-hidden cursor-pointer transition-all duration-300",
                                "bg-gradient-card border border-muted/20 shadow-card hover:shadow-elegant",
                                "hover:scale-105 hover:border-primary/30"
                            )}
                        >
                            <div className="aspect-square relative overflow-hidden p-0 rounded-lg">
                                <img
                                    src={person.image}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                />

                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
                                    "opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                                )} />

                                <div className="absolute top-1 right-1 p-2 rounded-full bg-black/50">
                                    {person.type_media === 'audio' && (
                                        <Volume2 className="w-5 h-5 text-white" />
                                    )}
                                    {person.type_media === 'video' && (
                                        <VideoIcon className="w-5 h-5 text-white" />
                                    )}
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 px-3 text-white">
                                <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para reproduzir mídia */}
            <Dialog
                open={isModalOpen}
                onOpenChange={(open) => {
                    // Executa retomada do BG no mesmo callstack de gesto ao fechar
                    if (!open) {
                        const media = mediaRef.current as HTMLVideoElement | HTMLAudioElement | null;
                        if (media) {
                            try { media.pause(); } catch { void 0; }
                            try { media.currentTime = 0; } catch { void 0; }
                        }
                        const restoreVol = window.__bgAudio?.initialVolume ?? 0.3;
                        window.__bgAudio?.setVolume?.(restoreVol);
                        window.__bgAudio?.play?.();
                        window.dispatchEvent(new CustomEvent("bg-audio:volume", { detail: { volume: restoreVol } }));
                        window.dispatchEvent(new Event("bg-audio:resume"));
                        setSelectedPerson(null);
                        setIsPlaying(false);
                    }
                    setIsModalOpen(open);
                }}
            >
                <DialogContent className="w-full max-w-[95%] p-0 bg-gradient-to-br from-black/95 to-purple-900/95 border border-purple-500/30 backdrop-blur-lg">
                    <DialogHeader className="p-6 pb-2">
                        <DialogTitle className="text-xl font-bold text-white flex items-center gap-3">
                            <img 
                                src={selectedPerson?.image} 
                                alt={selectedPerson?.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
                            />
                            Mensagem de {selectedPerson?.name}
                        </DialogTitle>
                    </DialogHeader>
                    
                    <div className="px-6 pb-6">
                        {selectedPerson?.type_media === 'video' ? (
                            <div className="relative bg-black rounded-lg overflow-hidden">
                                <video
                                    ref={mediaRef as React.RefObject<HTMLVideoElement>}
                                    src={selectedPerson?.media}
                                    className="w-full h-auto max-h-[500px] object-contain"
                                    controls
                                    controlsList="nodownload"
                                    playsInline
                                    {...({ webkitPlaysinline: true } as unknown as Record<string, unknown>)}
                                    onLoadedData={handleMediaLoadedData}
                                    poster={selectedPerson?.image}
                                />
                            </div>
                        ) : (
                            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-lg p-8 border border-purple-400/30">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="relative">
                                        <img 
                                            src={selectedPerson?.image} 
                                            alt={selectedPerson?.name}
                                            className="w-50 h-50 rounded-full object-cover border-4 border-purple-400 shadow-2xl"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/30 to-transparent"></div>
                                    </div>
                                    
                                    <audio
                                        ref={mediaRef as React.RefObject<HTMLAudioElement>}
                                        src={selectedPerson?.media}
                                        onLoadedData={handleMediaLoadedData}
                                        className="hidden"
                                    />
                                    
                                    <div className="flex flex-col items-center gap-4">
                                        <button
                                            onClick={togglePlayPause}
                                            className={cn(
                                                "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                                                "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400",
                                                "shadow-lg hover:shadow-purple-500/25 hover:scale-110 active:scale-95"
                                            )}
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-8 h-8 text-white ml-0" />
                                            ) : (
                                                <Play className="w-8 h-8 text-white ml-1" />
                                            )}
                                        </button>
                                        
                                        <p className="text-white/80 text-center max-w-md">
                                            {isPlaying ? 'Reproduzindo áudio...' : 'Clique para reproduzir a mensagem de áudio'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}