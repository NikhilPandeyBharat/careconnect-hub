import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TimelineEntryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  date: string;
  status?: "completed" | "pending" | "alert";
  isLast?: boolean;
  className?: string;
}

const statusConfig = {
  completed: {
    iconBg: "bg-secondary",
    iconColor: "text-secondary-foreground",
    line: "bg-secondary/30",
  },
  pending: {
    iconBg: "bg-warning",
    iconColor: "text-warning-foreground",
    line: "bg-warning/30",
  },
  alert: {
    iconBg: "bg-destructive",
    iconColor: "text-destructive-foreground",
    line: "bg-destructive/30",
  },
};

export function TimelineEntry({
  icon: Icon,
  title,
  description,
  date,
  status = "completed",
  isLast = false,
  className,
}: TimelineEntryProps) {
  const config = statusConfig[status];

  return (
    <div className={cn("relative flex gap-4", className)}>
      {/* Timeline line */}
      {!isLast && (
        <div 
          className={cn(
            "absolute left-5 top-10 bottom-0 w-0.5",
            config.line
          )}
          aria-hidden="true"
        />
      )}
      
      {/* Icon */}
      <div 
        className={cn(
          "relative z-10 flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0",
          config.iconBg
        )}
      >
        <Icon className={cn("w-5 h-5", config.iconColor)} aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <time className="text-xs text-muted-foreground">{date}</time>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
