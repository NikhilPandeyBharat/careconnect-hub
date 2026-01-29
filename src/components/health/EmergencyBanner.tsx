import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmergencyBannerProps {
  className?: string;
}

export function EmergencyBanner({ className }: EmergencyBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-r from-destructive to-destructive/80 p-5",
        "shadow-emergency",
        className
      )}
      role="region"
      aria-label="Emergency assistance"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="emergency-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#emergency-pattern)" />
        </svg>
      </div>

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 animate-pulse-soft">
            <AlertTriangle className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg">Need Immediate Help?</h3>
            <p className="text-white/90 text-sm">
              Connect instantly to a healthcare provider
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto bg-white text-destructive border-white hover:bg-white/90 hover:text-destructive font-bold shadow-lg"
          aria-label="Call emergency assistance"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Get Emergency Help
        </Button>
      </div>
    </div>
  );
}
