import { useApp } from '@/contexts/AppContext';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Presentation() {
  const { 
    currentSection, 
    sections, 
    nextSection, 
    previousSection, 
    isAnimating,
    totalSections 
  } = useApp();

  const currentSectionData = sections[currentSection];

  const handleNext = () => {
    nextSection();
  };

  const handlePrevious = () => {
    previousSection();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSection();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      previousSection();
    }
  };

  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      <ProgressBar />
      
      {/* Main content area */}
      <div className="pt-12 pb-20 h-screen flex flex-col">
        <div 
          className={`flex-1 flex items-center justify-center p-6 transition-all duration-500 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div className="w-full max-w-lg mx-auto">
            {currentSectionData?.component}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-6 left-0 right-0 z-40">
        <div className="flex justify-between items-center max-w-lg mx-auto px-6">
          {/* Previous button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={currentSection === 0 || isAnimating}
            className="flex items-center gap-2 bg-card/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          {/* Touch indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalSections }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-primary scale-125'
                    : 'bg-muted/50 hover:bg-muted'
                }`}
                onClick={() => {
                  // Optional: implement direct navigation
                }}
              />
            ))}
          </div>

          {/* Next button */}
          <Button
            size="sm"
            onClick={handleNext}
            disabled={currentSection === totalSections - 1 || isAnimating}
            className="flex items-center gap-2 gradient-spotify"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Click areas for mobile navigation */}
      <div className="absolute inset-0 flex z-10 pointer-events-none">
        {/* Left side - previous */}
        <button
          className="flex-1 pointer-events-auto opacity-0 hover:opacity-10 bg-white transition-opacity"
          onClick={handlePrevious}
          disabled={currentSection === 0 || isAnimating}
        />
        
        {/* Right side - next */}
        <button
          className="flex-1 pointer-events-auto opacity-0 hover:opacity-10 bg-white transition-opacity"
          onClick={handleNext}
          disabled={currentSection === totalSections - 1 || isAnimating}
        />
      </div>
    </div>
  );
}
