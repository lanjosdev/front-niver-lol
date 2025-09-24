import { AppProvider } from "./contexts/AppContext";
import { Presentation } from "./components/organisms/Presentation/Presentation";
import { Intro } from "./components/organisms/Intro/Intro";
import { StatsSection } from "./components/organisms/StatsSection/StatsSection";
import { MomentsSection } from "./components/organisms/MomentsSection/MomentsSection";
import { GallerySection } from "./components/organisms/GallerySection/GallerySection";
import { FunFactsSection } from "./components/organisms/FunFactsSection/FunFactsSection";
import { MessagesSection } from "./components/organisms/MessagesSection/MessagesSection";
import { FinaleSection } from "./components/organisms/FinaleSection/FinaleSection";

export default function App() {
  const sections = [
    {
      id: "intro",
      title: "Introdução",
      component: <Intro />
    },
    {
      id: "stats",
      title: "Estatísticas",
      component: <StatsSection />
    },
    {
      id: "moments",
      title: "Momentos Especiais",
      component: <MomentsSection />
    },
    {
      id: "gallery",
      title: "Galeria",
      component: <GallerySection />
    },
    {
      id: "funfacts",
      title: "Curiosidades",
      component: <FunFactsSection />
    },
    {
      id: "messages",
      title: "Mensagens",
      component: <MessagesSection />
    },
    {
      id: "finale",
      title: "Final",
      component: <FinaleSection />
    }
  ];

  return (
    <AppProvider sections={sections}>
      <div className="min-h-screen w-full max-w-lg mx-auto relative bg-background">
        <Presentation />
      </div>
    </AppProvider>
    // <div
    //   className="min-h-dvh w-full max-w-lg mx-auto flex flex-col relative border-4 border-yellow-500"
    // >
    //   <Intro />
    // </div>
  );
}