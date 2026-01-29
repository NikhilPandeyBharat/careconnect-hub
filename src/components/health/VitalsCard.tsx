import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface VitalsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  unit: string;
  status: "normal" | "warning" | "high";
  lastUpdated?: string;
  className?: string;
}

const statusStyles = {
  normal: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    icon: "text-secondary",
    badge: "bg-secondary/20 text-secondary",
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/20",
    icon: "text-warning",
    badge: "bg-warning/20 text-warning",
  },
  high: {
    bg: "bg-destructive/10",
    border: "border-destructive/20",
    icon: "text-destructive",
    badge: "bg-destructive/20 text-destructive",
  },
};

const statusLabels = {
  normal: "Normal",
  warning: "Monitor",
  high: "High",
};

export function VitalsCard({
  icon: Icon,
  label,
  value,
  unit,
  status,
  lastUpdated,
  className,
}: VitalsCardProps) {
  const styles = statusStyles[status];

  return (
    <div
      className={cn(
        "relative p-4 rounded-xl border-2 transition-all duration-200",
        styles.bg,
        styles.border,
        className
      )}
    >
      {/* Status Badge */}
      <div 
        className={cn(
          "absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium",
          styles.badge
        )}
      >
        {statusLabels[status]}
      </div>

      {/* Icon */}
      <div className={cn("w-10 h-10 mb-3", styles.icon)}>
        <Icon className="w-full h-full" aria-hidden="true" />
      </div>

      {/* Label */}
      <p className="text-sm text-muted-foreground mb-1">{label}</p>

      {/* Value */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>

      {/* Last Updated */}
      {lastUpdated && (
        <p className="text-xs text-muted-foreground mt-2">{lastUpdated}</p>
      )}
    </div>
  );
}
