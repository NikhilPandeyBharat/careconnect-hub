import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface QuickActionCardProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

const variantStyles = {
  default: "bg-card border-border hover:border-primary/30",
  primary: "bg-primary/5 border-primary/20 hover:border-primary/40",
  success: "bg-secondary/5 border-secondary/20 hover:border-secondary/40",
  warning: "bg-warning/5 border-warning/20 hover:border-warning/40",
};

const iconVariantStyles = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary/10 text-primary",
  success: "bg-secondary/10 text-secondary",
  warning: "bg-warning/10 text-warning",
};

export function QuickActionCard({
  to,
  icon,
  title,
  description,
  variant = "default",
  className,
}: QuickActionCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200",
        "hover:shadow-card focus:shadow-card active:scale-[0.99]",
        "min-h-touch",
        variantStyles[variant],
        className
      )}
    >
      <div 
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-200",
          "group-hover:scale-105",
          iconVariantStyles[variant]
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
      </div>
      
      <ChevronRight 
        className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" 
        aria-hidden="true"
      />
    </Link>
  );
}
