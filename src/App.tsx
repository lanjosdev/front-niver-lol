// import { AppProvider } from "./contexts/AppContext";
// import { Presentation } from "./components/organisms/Presentation/Presentation";
import { useState } from "react";
// import { Teste } from "./components/organisms/Teste/Teste";
import { Intro } from "./components/organisms/Intro/Intro";
import { Timeline } from "./components/organisms/Timeline/Timeline";




export default function App() {
  const [start, setStart] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: "timeline" },
    { id: "moments" },
    { id: "curiosities" },
    { id: "memories" },
    { id: "finale" },
  ];


  const renderSection = () => {
    const section = sections[currentSection]

    switch (section.id) {
      case "timeline":
        return <Timeline />
      // case "moments":
      //   return <MomentsSection />
      default:
        return <Intro />
    }
  }

  return (
    <div
      className="min-h-dvh w-full max-w-lg mx-auto flex flex-col overflow-x-hidden relative   border-4 border-yellow-500"
    >
      {/* {start ? (
        <Presentation />
      ) : (
        <Intro setStart={setStart} />
      )} */}


      {renderSection()}
    </div>
  );
}