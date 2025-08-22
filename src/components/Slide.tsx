import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: "navy" | "gradient" | "dark";
}

export default function Slide({
  children,
  className,
  background = "navy",
}: SlideProps) {
  const backgroundClasses = {
    navy: "bg-drivers-navy",
    gradient:
      "bg-gradient-to-br from-drivers-navy via-slate-800 to-drivers-navy",
    dark: "bg-slate-900",
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full flex items-center justify-center p-8 relative overflow-hidden",
        backgroundClasses[background],
        className,
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-drivers-orange rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
