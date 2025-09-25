// import { AppProvider } from "./contexts/AppContext";
// import { Presentation } from "./components/organisms/Presentation/Presentation";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
// import { Teste } from "./components/organisms/Teste/Teste";
import { Intro } from "./components/organisms/Intro/Intro";
import { Timeline } from "./components/organisms/Timeline/Timeline";
import { Messages } from "./components/organisms/Messages/Messages";

import soundBackground from "./assets/sounds/AsasLuedjiLuna.mp3";




export default function App() {
  const [start, setStart] = useState(false);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const DEFAULT_BG_VOLUME = 0.3;

  const sections = [
    { id: "timeline" },
    { id: "messages" },
    { id: "curiosities" },
    { id: "memories" },
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


  const renderSection = () => {
    // const section = sections[currentSection]
    const section = sections[1]

    switch (section.id) {
      case "timeline":
        return <Timeline />
      case "messages":
        return <Messages />
      default:
        return <Intro />
    }
  }

  return (
    <div
      className="min-h-dvh w-full max-w-lg mx-auto flex flex-col overflow-x-hidden relative   border-4 border-yellow-500"
    >
      <audio
        ref={audioRef}
        src={soundBackground}
        preload="auto"
        loop
        autoPlay
        playsInline
        className="hidden"
      />


      {renderSection()}
    </div>
  );
}