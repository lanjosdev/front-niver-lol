import React from 'react';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentSection, totalSections }) => {
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};