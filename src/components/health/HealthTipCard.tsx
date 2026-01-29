import { cn } from "@/lib/utils";
import { Lightbulb, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HealthTipCardProps {
  title: string;
  description: string;
  type?: "tip" | "reminder" | "alert";
  dismissible?: boolean;
  className?: string;
}

const typeStyles = {
  tip: {
    bg: "bg-info/5",
    border: "border-info/20",
    icon: "text-info",
  },
  reminder: {
    bg: "bg-warning/5",
    border: "border-warning/20",
    icon: "text-warning",
  },
  alert: {
    bg: "bg-destructive/5",
    border: "border-destructive/20",
    icon: "text-destructive",
  },
};

export function HealthTipCard({
  title,
  description,
  type = "tip",
  dismissible = true,
  className,
}: HealthTipCardProps) {
  const [dismissed, setDismissed] = useState(false);
  const styles = typeStyles[type];

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "relative p-4 rounded-xl border-2 transition-all duration-200 fade-in",
        styles.bg,
        styles.border,
        className
      )}
      role="alert"
    >
      <div className="flex gap-3">
        <div className={cn("flex-shrink-0 mt-0.5", styles.icon)}>
          <Lightbulb className="w-5 h-5" aria-hidden="true" />
        </div>
        
        <div className="flex-1 min-w-0 pr-8">
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {dismissible && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute top-2 right-2 w-8 h-8 min-h-0"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss tip"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
