import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full bg-card/95 backdrop-blur-sm border-b border-border safe-top",
        className
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 min-h-touch"
          aria-label="CareConnect Home"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-primary-foreground"
              aria-hidden="true"
            >
              <path
                d="M12 4C10.9 4 10 4.9 10 6V8H8C6.9 8 6 8.9 6 10V12H4C2.9 12 2 12.9 2 14V18C2 19.1 2.9 20 4 20H8C9.1 20 10 19.1 10 18V16H12V18C12 19.1 12.9 20 14 20H18C19.1 20 20 19.1 20 18V14C20 12.9 19.1 12 18 12H16V10C16 8.9 15.1 8 14 8H12V6C12 4.9 11.1 4 10 4H12Z"
                fill="currentColor"
              />
              <path
                d="M12 2L13.09 3.41L14.83 2.59L14.41 4.41L16.24 5.17L14.59 6.24L15.17 8.07L13.41 7.17L12 8.5L10.59 7.17L8.83 8.07L9.41 6.24L7.76 5.17L9.59 4.41L9.17 2.59L10.91 3.41L12 2Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">CareConnect</h1>
            <p className="text-xs text-muted-foreground">Healthcare for Everyone</p>
          </div>
        </Link>

        {/* Emergency Button - Always Visible */}
        <div className="flex items-center gap-2">
          <Button
            variant="emergency"
            size="sm"
            className="gap-1.5 text-sm font-bold"
            aria-label="Emergency Help"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Emergency</span>
          </Button>
          
          {/* Desktop Menu Button */}
          <Button 
            variant="ghost" 
            size="icon-sm" 
            className="hidden md:flex"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
