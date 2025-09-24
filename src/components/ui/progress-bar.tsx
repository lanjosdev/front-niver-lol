import { useApp } from '@/contexts/AppContext';

export function ProgressBar() {
  const { 
    // progress, 
    currentSection, 
    totalSections 
  } = useApp();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        {/* Progress segments */}
        <div className="flex-1 flex gap-1">
          {Array.from({ length: totalSections }).map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                index <= currentSection
                  ? 'bg-gradient-to-r from-primary to-chart-5'
                  : 'bg-muted/30'
              }`}
            />
          ))}
        </div>
        
        {/* Section counter */}
        <div className="text-xs text-muted-foreground font-medium">
          {currentSection + 1}/{totalSections}
        </div>
      </div>
    </div>
  );
}
