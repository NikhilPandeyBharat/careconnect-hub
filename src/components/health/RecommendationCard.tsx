import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface RecommendationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
  type?: "remedy" | "medication" | "lifestyle" | "warning";
  className?: string;
}

const typeConfig = {
  remedy: {
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  medication: {
    iconBg: "bg-info/10",
    iconColor: "text-info",
  },
  lifestyle: {
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  warning: {
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
};

export function RecommendationCard({
  icon: Icon,
  title,
  description,
  details,
  type = "remedy",
  className,
}: RecommendationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const config = typeConfig[type];
  const hasDetails = details && details.length > 0;

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden transition-all duration-200",
        "hover:shadow-card",
        className
      )}
    >
      <button
        type="button"
        onClick={() => hasDetails && setExpanded(!expanded)}
        className={cn(
          "w-full flex items-start gap-3 p-4 text-left min-h-touch",
          hasDetails && "cursor-pointer"
        )}
        disabled={!hasDetails}
        aria-expanded={hasDetails ? expanded : undefined}
      >
        <div 
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0",
            config.iconBg
          )}
        >
          <Icon className={cn("w-5 h-5", config.iconColor)} aria-hidden="true" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-0.5">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        
        {hasDetails && (
          <div className="flex-shrink-0 text-muted-foreground">
            {expanded ? (
              <ChevronUp className="w-5 h-5" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            )}
          </div>
        )}
      </button>
      
      {/* Expanded details */}
      {expanded && hasDetails && (
        <div className="px-4 pb-4 pt-0">
          <div className="pl-[52px]">
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
