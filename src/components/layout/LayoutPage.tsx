import type { PropsWithChildren, ReactNode } from "react";

type LayoutPageProps = PropsWithChildren<{
  header?: string;
  footer?: ReactNode;
}>;

export default function LayoutPage({ children }: LayoutPageProps) {
  return (
    <div
      className="min-h-dvh h-full w-full max-w-lg mx-auto flex flex-col relative"
    >
      {/* Header */}
      <header className="p-6 pt-10 relative text-center">
        <h1 className="font-druk uppercase text-7xl leading-16">
          Summit <br /> 
          JCDecaux 2025
        </h1>
      </header>

      {children}

      {/* <footer className="p-10 relative z-20 text-center border-2 border-red-500">
        
      </footer> */}
    </div>
  );
}