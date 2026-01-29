import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle2, AlertCircle, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TriageResultCardProps {
  level: "low" | "medium" | "high";
  title: string;
  description: string;
  confidence?: number;
  onViewRecommendations?: () => void;
  className?: string;
}

const levelConfig = {
  low: {
    icon: CheckCircle2,
    bg: "bg-secondary/5",
    border: "border-secondary/30",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    badge: "bg-secondary text-secondary-foreground",
    label: "Low Risk",
  },
  medium: {
    icon: AlertCircle,
    bg: "bg-warning/5",
    border: "border-warning/30",
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    badge: "bg-warning text-warning-foreground",
    label: "Moderate",
  },
  high: {
    icon: AlertTriangle,
    bg: "bg-destructive/5",
    border: "border-destructive/30",
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    badge: "bg-destructive text-destructive-foreground",
    label: "Needs Attention",
  },
};

export function TriageResultCard({
  level,
  title,
  description,
  confidence = 85,
  onViewRecommendations,
  className,
}: TriageResultCardProps) {
  const config = levelConfig[level];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "rounded-2xl border-2 overflow-hidden transition-all duration-300 slide-up",
        config.bg,
        config.border,
        className
      )}
      role="region"
      aria-label="Health assessment result"
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div 
            className={cn(
              "flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0",
              config.iconBg
            )}
          >
            <Icon className={cn("w-7 h-7", config.iconColor)} aria-hidden="true" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span 
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-bold",
                  config.badge
                )}
              >
                {config.label}
              </span>
              
              {/* Confidence indicator */}
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{confidence}% confidence</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="px-5 pb-5">
        <Button
          variant={level === "high" ? "destructive" : level === "medium" ? "soft" : "trust"}
          size="lg"
          className="w-full justify-between"
          onClick={onViewRecommendations}
        >
          <span>View Recommendations</span>
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </Button>
      </div>

      {/* Trust footer */}
      <div className="px-5 py-3 bg-muted/50 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
          <Shield className="w-3.5 h-3.5" aria-hidden="true" />
          This assessment uses doctor-approved protocols
        </p>
      </div>
    </div>
  );
}
