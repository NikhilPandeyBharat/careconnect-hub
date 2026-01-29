import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { SymptomChip } from "@/components/health/SymptomChip";
import { VoiceInputButton } from "@/components/health/VoiceInputButton";
import { TriageResultCard } from "@/components/health/TriageResultCard";
import { RecommendationCard } from "@/components/health/RecommendationCard";
import { 
  ArrowRight, 
  Loader2, 
  Pill, 
  Utensils, 
  Moon, 
  AlertTriangle,
  RotateCcw
} from "lucide-react";

const commonSymptoms = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Sore Throat",
  "Body Aches",
  "Nausea",
  "Dizziness",
];

type Step = "input" | "analyzing" | "results";

const Symptoms = () => {
  const [step, setStep] = useState<Step>("input");
  const [symptomText, setSymptomText] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleVoiceTranscript = (text: string) => {
    setSymptomText(text);
  };

  const handleAnalyze = () => {
    setStep("analyzing");
    // Simulate analysis
    setTimeout(() => {
      setStep("results");
    }, 2500);
  };

  const handleStartOver = () => {
    setStep("input");
    setSymptomText("");
    setSelectedSymptoms([]);
    setShowRecommendations(false);
  };

  const hasInput = symptomText.trim() || selectedSymptoms.length > 0;

  return (
    <AppLayout>
      <div className="container px-4 py-6">
        {step === "input" && (
          <div className="space-y-6 fade-in">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                How are you feeling?
              </h1>
              <p className="text-muted-foreground">
                Describe your symptoms in your own words, or select from common
                symptoms below.
              </p>
            </div>

            {/* Voice Input */}
            <div className="flex justify-center py-4">
              <VoiceInputButton onTranscript={handleVoiceTranscript} />
            </div>

            {/* Text Input */}
            <div className="space-y-2">
              <label
                htmlFor="symptoms-input"
                className="text-sm font-medium text-foreground"
              >
                Or type your symptoms
              </label>
              <textarea
                id="symptoms-input"
                value={symptomText}
                onChange={(e) => setSymptomText(e.target.value)}
                placeholder="Example: I've had a headache for 2 days with some dizziness..."
                className="w-full min-h-[120px] p-4 rounded-xl border-2 border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all resize-none text-base"
                aria-describedby="symptoms-hint"
              />
              <p id="symptoms-hint" className="text-xs text-muted-foreground">
                Be as specific as possible - include duration, severity, and any
                triggers.
              </p>
            </div>

            {/* Common Symptoms */}
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-foreground">
                Common symptoms
              </h2>
              <div className="flex flex-wrap gap-2">
                {commonSymptoms.map((symptom) => (
                  <SymptomChip
                    key={symptom}
                    label={symptom}
                    selected={selectedSymptoms.includes(symptom)}
                    onClick={() => handleSymptomToggle(symptom)}
                    removable
                    onRemove={() => handleSymptomToggle(symptom)}
                  />
                ))}
              </div>
            </div>

            {/* Selected Summary */}
            {selectedSymptoms.length > 0 && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">
                  Selected symptoms:
                </p>
                <p className="font-medium text-foreground">
                  {selectedSymptoms.join(", ")}
                </p>
              </div>
            )}

            {/* Analyze Button */}
            <Button
              variant="medical"
              size="lg"
              className="w-full"
              disabled={!hasInput}
              onClick={handleAnalyze}
            >
              <span>Analyze Symptoms</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Trust Disclaimer */}
            <p className="text-xs text-muted-foreground text-center">
              This is guidance only, not a diagnosis. Always consult a healthcare
              provider for serious symptoms.
            </p>
          </div>
        )}

        {step === "analyzing" && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 fade-in">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-foreground">
                Analyzing your symptoms...
              </h2>
              <p className="text-muted-foreground">
                Our medical AI is reviewing your information
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-secondary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Checking symptom patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                <span>Evaluating severity</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <div className="w-4 h-4 rounded-full border-2 border-muted" />
                <span>Preparing recommendations</span>
              </div>
            </div>
          </div>
        )}

        {step === "results" && (
          <div className="space-y-6 fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">
                Assessment Results
              </h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleStartOver}
                className="gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                Start Over
              </Button>
            </div>

            {/* Triage Result */}
            <TriageResultCard
              level="low"
              title="Likely Tension Headache"
              description="Based on your symptoms, this appears to be a common tension headache that can usually be managed at home."
              confidence={87}
              onViewRecommendations={() => setShowRecommendations(true)}
            />

            {/* Recommendations */}
            {showRecommendations && (
              <div className="space-y-4 slide-up">
                <h2 className="text-lg font-semibold text-foreground">
                  Recommended Actions
                </h2>

                <div className="space-y-3">
                  <RecommendationCard
                    icon={Pill}
                    title="Over-the-Counter Relief"
                    description="Take acetaminophen (Paracetamol) for pain relief"
                    type="medication"
                    details={[
                      "Adults: 500-1000mg every 4-6 hours",
                      "Maximum 4g (4000mg) in 24 hours",
                      "Take with food to prevent stomach upset",
                      "Do not exceed 3 days without consulting a doctor",
                    ]}
                  />

                  <RecommendationCard
                    icon={Utensils}
                    title="Stay Hydrated"
                    description="Dehydration can worsen headaches"
                    type="lifestyle"
                    details={[
                      "Drink at least 8 glasses of water today",
                      "Avoid excessive caffeine or alcohol",
                      "Eat regular, balanced meals",
                    ]}
                  />

                  <RecommendationCard
                    icon={Moon}
                    title="Rest in a Quiet Space"
                    description="Reduce screen time and rest your eyes"
                    type="remedy"
                    details={[
                      "Take a break from screens for at least 30 minutes",
                      "Dim the lights if possible",
                      "Try gentle neck stretches",
                      "Apply a cool compress to your forehead",
                    ]}
                  />

                  <RecommendationCard
                    icon={AlertTriangle}
                    title="When to Seek Help"
                    description="Contact a doctor if symptoms worsen"
                    type="warning"
                    details={[
                      "Headache becomes severe or sudden",
                      "Accompanied by fever, stiff neck, or confusion",
                      "Vision changes or difficulty speaking",
                      "Symptoms persist beyond 3 days",
                    ]}
                  />
                </div>

                {/* Track Button */}
                <div className="pt-4 space-y-3">
                  <Button variant="trust" size="lg" className="w-full">
                    Track This Symptom
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Set Reminder to Check Back
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Symptoms;
