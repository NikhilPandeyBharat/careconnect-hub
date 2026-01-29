import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
  hideNav?: boolean;
}

export function AppLayout({ children, className, hideNav = false }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main 
        className={cn(
          "flex-1 pb-22 md:pb-6",
          className
        )}
        id="main-content"
        role="main"
      >
        {children}
      </main>
      
      {!hideNav && <BottomNav />}
    </div>
  );
}
