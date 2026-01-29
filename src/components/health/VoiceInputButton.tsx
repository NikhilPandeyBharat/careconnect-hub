import { useState } from "react";
import { cn } from "@/lib/utils";
import { Mic, MicOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceInputButtonProps {
  onTranscript?: (text: string) => void;
  className?: string;
  disabled?: boolean;
}

export function VoiceInputButton({
  onTranscript,
  className,
  disabled = false,
}: VoiceInputButtonProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleToggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      setIsProcessing(true);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        onTranscript?.("I have been experiencing headaches for the past 3 days");
      }, 1500);
    } else {
      // Start recording
      setIsRecording(true);
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <Button
        type="button"
        variant={isRecording ? "destructive" : "medical"}
        size="icon-lg"
        onClick={handleToggleRecording}
        disabled={disabled || isProcessing}
        className={cn(
          "relative rounded-full w-16 h-16",
          isRecording && "pulse-voice"
        )}
        aria-label={isRecording ? "Stop recording" : "Start voice input"}
      >
        {isProcessing ? (
          <Loader2 className="w-7 h-7 animate-spin" />
        ) : isRecording ? (
          <MicOff className="w-7 h-7" />
        ) : (
          <Mic className="w-7 h-7" />
        )}
        
        {/* Recording indicator rings */}
        {isRecording && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping bg-destructive/30" />
            <span className="absolute inset-[-4px] rounded-full border-2 border-destructive/50 animate-pulse" />
          </>
        )}
      </Button>
      
      <p className="text-sm text-muted-foreground text-center">
        {isProcessing
          ? "Processing your voice..."
          : isRecording
          ? "Listening... Tap to stop"
          : "Tap to speak your symptoms"}
      </p>
    </div>
  );
}
