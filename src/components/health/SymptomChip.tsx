import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SymptomChipProps {
  label: string;
  selected?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export function SymptomChip({
  label,
  selected = false,
  removable = false,
  onClick,
  onRemove,
  className,
}: SymptomChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium",
        "transition-all duration-200 min-h-touch",
        "border-2 focus:ring-2 focus:ring-ring focus:ring-offset-2",
        selected
          ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
          : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80 hover:border-primary/20",
        className
      )}
    >
      <span>{label}</span>
      
      {removable && selected && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
              onRemove?.();
            }
          }}
          className="flex items-center justify-center w-4 h-4 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30"
          aria-label={`Remove ${label}`}
        >
          <X className="w-3 h-3" />
        </span>
      )}
    </button>
  );
}
