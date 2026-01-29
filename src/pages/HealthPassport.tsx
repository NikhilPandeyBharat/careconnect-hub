import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { TimelineEntry } from "@/components/health/TimelineEntry";
import { 
  Download, 
  Share2, 
  Stethoscope, 
  Pill, 
  Activity, 
  Video,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const healthHistory = [
  {
    icon: CheckCircle2,
    title: "Symptom Check: Headache",
    description: "Resolved with self-care - OTC medication and rest",
    date: "Jan 27, 2026",
    status: "completed" as const,
  },
  {
    icon: Video,
    title: "Doctor Consultation",
    description: "Follow-up for seasonal allergies. Prescribed antihistamines.",
    date: "Jan 20, 2026",
    status: "completed" as const,
  },
  {
    icon: Activity,
    title: "Vitals Recorded",
    description: "BP: 118/76, Temp: 98.4°F, SpO2: 99%",
    date: "Jan 15, 2026",
    status: "completed" as const,
  },
  {
    icon: Pill,
    title: "Medication Started",
    description: "Vitamin D3 supplement - daily",
    date: "Jan 10, 2026",
    status: "completed" as const,
  },
  {
    icon: AlertCircle,
    title: "Symptom Check: Mild Fever",
    description: "Escalated to doctor after 2 days",
    date: "Jan 5, 2026",
    status: "alert" as const,
  },
  {
    icon: Stethoscope,
    title: "Initial Health Assessment",
    description: "Health passport created. No major concerns noted.",
    date: "Dec 28, 2025",
    status: "completed" as const,
  },
];

const HealthPassport = () => {
  return (
    <AppLayout>
      <div className="container px-4 py-6 space-y-6">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Health Passport
          </h1>
          <p className="text-muted-foreground">
            Your complete health history in one place
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <p className="text-2xl font-bold text-primary">6</p>
            <p className="text-xs text-muted-foreground">Health Events</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <p className="text-2xl font-bold text-secondary">1</p>
            <p className="text-xs text-muted-foreground">Doctor Visits</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <p className="text-2xl font-bold text-foreground">2</p>
            <p className="text-xs text-muted-foreground">Active Meds</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 slide-up" style={{ animationDelay: "0.15s" }}>
          <Button variant="outline" className="flex-1 gap-2">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Important Info Card */}
        <div 
          className="p-4 rounded-xl bg-destructive/5 border-2 border-destructive/20 slide-up" 
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-destructive" />
            Emergency Info
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Blood Type</p>
              <p className="font-medium text-foreground">A+</p>
            </div>
            <div>
              <p className="text-muted-foreground">Allergies</p>
              <p className="font-medium text-foreground">Penicillin</p>
            </div>
            <div>
              <p className="text-muted-foreground">Chronic Conditions</p>
              <p className="font-medium text-foreground">None</p>
            </div>
            <div>
              <p className="text-muted-foreground">Emergency Contact</p>
              <p className="font-medium text-foreground">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-3 slide-up" style={{ animationDelay: "0.25s" }}>
          <h2 className="text-lg font-semibold text-foreground">
            Health Timeline
          </h2>
          
          <div className="bg-card rounded-xl border border-border p-4">
            {healthHistory.map((entry, index) => (
              <TimelineEntry
                key={index}
                icon={entry.icon}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                status={entry.status}
                isLast={index === healthHistory.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Trust Footer */}
        <div className="py-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Your health data is encrypted and secure
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default HealthPassport;
