import { useEffect, useRef, useState } from "react";
import AOS from "aos";

import { ProgressBar } from "./components/ui/ProgressBar";
import { Intro } from "./components/organisms/Intro/Intro";
import { Timeline } from "./components/organisms/Timeline/Timeline";
import { Moments } from "./components/organisms/Moments/Moments";
import { Messages } from "./components/organisms/Messages/Messages";
import { Finale } from "./components/organisms/Finale/Finale";

// import soundBackground from "./assets/sounds/AsasLuedjiLuna.mp3";
import { Button } from "./components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function App() {
  const [start, setStart] = useState(false);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const DEFAULT_BG_VOLUME = 0.3;

  const sections = [
    { id: "timeline" },
    { id: "moments" },
    { id: "messages" },
    { id: "finale" },
  ];


  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 0,
      easing: 'ease-out-cubic'
    });
  }, []);

  useEffect(() => {
    // Recalcula posições quando muda de seção
    AOS.refresh();
  }, [currentSection]);

  // Tenta iniciar áudio de fundo; se bloqueado, ativa no primeiro gesto do usuário
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = DEFAULT_BG_VOLUME;

    let removeUnlockListeners: (() => void) | null = null;

    const addUnlockListeners = () => {
      const unlock = async () => {
        try {
          await audio.play();
        } catch {
          // Se ainda falhar, não faz nada
        } finally {
          document.removeEventListener("pointerdown", unlock);
          document.removeEventListener("keydown", unlock);
          document.removeEventListener("touchstart", unlock);
          document.removeEventListener("click", unlock);
        }
      };

      document.addEventListener("pointerdown", unlock, { once: true, passive: true });
      document.addEventListener("keydown", unlock, { once: true });
      document.addEventListener("touchstart", unlock, { once: true, passive: true });
      document.addEventListener("click", unlock, { once: true, passive: true });

      return () => {
        document.removeEventListener("pointerdown", unlock);
        document.removeEventListener("keydown", unlock);
        document.removeEventListener("touchstart", unlock);
        document.removeEventListener("click", unlock);
      };
    };

    audio.play().catch(() => {
      removeUnlockListeners = addUnlockListeners();
    });

    return () => {
      if (removeUnlockListeners) removeUnlockListeners();
    };
  }, []);

  // Orquestra pausa/retomada do áudio de fundo via eventos globais
  useEffect(() => {
    const handlePause = () => {
      audioRef.current?.pause();
    };

    const handleResume = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        await audio.play();
      } catch {
        // Se falhar (iOS exigindo gesto), anexa ao próximo gesto
        const unlock = () => {
          audio.play().catch(() => {});
          document.removeEventListener("pointerdown", unlock);
          document.removeEventListener("touchstart", unlock);
          document.removeEventListener("click", unlock);
          document.removeEventListener("keydown", unlock);
        };
        document.addEventListener("pointerdown", unlock, { once: true, passive: true });
        document.addEventListener("touchstart", unlock, { once: true, passive: true });
        document.addEventListener("click", unlock, { once: true, passive: true });
        document.addEventListener("keydown", unlock, { once: true });
      }
    };

    const handleVolume = (e: Event) => {
      const anyEvent = e as unknown as { detail?: { volume?: number } };
      const vol = anyEvent.detail?.volume;
      if (typeof vol === "number" && audioRef.current) {
        audioRef.current.volume = Math.min(1, Math.max(0, vol));
      }
    };

    window.addEventListener("bg-audio:pause", handlePause);
    window.addEventListener("bg-audio:resume", handleResume);
    window.addEventListener("bg-audio:volume", handleVolume as EventListener);

    // expõe API tipada para consumo direto (opcional)
    window.__bgAudio = {
      play: handleResume,
      pause: () => handlePause(),
      setVolume: (v: number) => handleVolume(new CustomEvent("bg-audio:volume", { detail: { volume: v } }) as unknown as Event),
      getVolume: () => audioRef.current?.volume ?? DEFAULT_BG_VOLUME,
      initialVolume: DEFAULT_BG_VOLUME
    }

    return () => {
      window.removeEventListener("bg-audio:pause", handlePause);
      window.removeEventListener("bg-audio:resume", handleResume);
      window.removeEventListener("bg-audio:volume", handleVolume as EventListener);
      // cleanup API
      delete window.__bgAudio;
    };
  }, []);

  
  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      // setIsAnimating(true)
      setTimeout(() => {
        setCurrentSection(currentSection + 1)
        // setIsAnimating(false)
      }, 100)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      // setIsAnimating(true)
      setTimeout(() => {
        setCurrentSection(currentSection - 1)
        // setIsAnimating(false)
      }, 100)
    }
  }

  const restart = () => {
    setCurrentSection(0)
    setStart(false)
  }

  const renderSection = () => {
    const section = sections[currentSection]

    switch (section.id) {
      case "timeline":
        return <Timeline />
      case "moments":
        return <Moments />
      case "messages":
        return <Messages />
      case "finale":
        return <Finale onRestart={restart} />
      default:
        return <Intro onStart={() => setStart(true)} />
    }
  }

  return (
    <div
      className="min-h-dvh w-full max-w-lg mx-auto flex flex-col overflow-x-hidden relative"
    >
      <audio
        ref={audioRef}
        src="./sounds/AsasLuedjiLuna.mp3"
        preload="auto"
        loop
        autoPlay
        playsInline
        className="hidden"
      />

      {start ? (
        <>
          <ProgressBar currentSection={currentSection} totalSections={sections.length} />

          {/* Main content area */}
          {renderSection()}

          {/* Navigation controls */}
          <Button 
            variant='ghost' 
            className={`fixed top-0 left-0 h-dvh w-12 rounded-none hover:bg-black/20 active:bg-black/20 transition-colors ${currentSection === 0 ? 'hidden' : ''}`} 
            onClick={() => prevSection()}
          >
            <ChevronLeft className="drop-shadow-lg" />
          </Button>
          
          <Button 
            variant='ghost' 
            className={`fixed top-0 right-0 h-dvh w-12 rounded-none hover:bg-black/20 active:bg-black/20 transition-colors ${currentSection === sections.length - 1 ? 'hidden' : ''}`} 
            onClick={() => nextSection()}
          >
            <ChevronRight className="drop-shadow-lg" />
          </Button>
        </>
      ) : (
        <Intro onStart={() => setStart(true)} />
      )}

    </div>
  );
}