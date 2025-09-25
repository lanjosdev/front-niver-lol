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

    audio.volume = 0.4;

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