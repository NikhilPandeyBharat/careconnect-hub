import { AppLayout } from "@/components/layout/AppLayout";
import { QuickActionCard } from "@/components/health/QuickActionCard";
import { VitalsCard } from "@/components/health/VitalsCard";
import { HealthTipCard } from "@/components/health/HealthTipCard";
import { EmergencyBanner } from "@/components/health/EmergencyBanner";
import { 
  Stethoscope, 
  MapPin, 
  ClipboardList, 
  Heart, 
  Thermometer, 
  Activity,
  Droplet,
  User
} from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="container px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <section className="fade-in">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Good morning,</p>
              <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="slide-up" style={{ animationDelay: "0.1s" }}>
          <EmergencyBanner />
        </section>

        {/* Quick Actions */}
        <section className="space-y-3 slide-up" style={{ animationDelay: "0.15s" }}>
          <h2 className="text-lg font-semibold text-foreground">What would you like to do?</h2>
          
          <div className="grid gap-3">
            <QuickActionCard
              to="/symptoms"
              icon={<Stethoscope className="w-6 h-6" />}
              title="Check Symptoms"
              description="Describe how you're feeling"
              variant="primary"
            />
            
            <QuickActionCard
              to="/pharmacies"
              icon={<MapPin className="w-6 h-6" />}
              title="Find Partner Pharmacy"
              description="Get vitals measured nearby"
              variant="success"
            />
            
            <QuickActionCard
              to="/health-passport"
              icon={<ClipboardList className="w-6 h-6" />}
              title="Health Passport"
              description="View your health history"
            />
          </div>
        </section>

        {/* Vitals Overview */}
        <section className="space-y-3 slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Your Vitals</h2>
            <a 
              href="/vitals" 
              className="text-sm text-primary font-medium hover:underline"
            >
              Update
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <VitalsCard
              icon={Heart}
              label="Blood Pressure"
              value="120/80"
              unit="mmHg"
              status="normal"
              lastUpdated="2 days ago"
            />
            
            <VitalsCard
              icon={Thermometer}
              label="Temperature"
              value="98.6"
              unit="°F"
              status="normal"
              lastUpdated="Yesterday"
            />
            
            <VitalsCard
              icon={Droplet}
              label="Oxygen Level"
              value="98"
              unit="%"
              status="normal"
              lastUpdated="Yesterday"
            />
            
            <VitalsCard
              icon={Activity}
              label="Heart Rate"
              value="72"
              unit="bpm"
              status="normal"
              lastUpdated="2 days ago"
            />
          </div>
        </section>

        {/* Health Tips */}
        <section className="space-y-3 slide-up" style={{ animationDelay: "0.25s" }}>
          <h2 className="text-lg font-semibold text-foreground">Health Tips</h2>
          
          <HealthTipCard
            title="Stay Hydrated"
            description="Drink at least 8 glasses of water daily, especially during warm weather. Proper hydration helps maintain energy and supports overall health."
            type="tip"
          />
          
          <HealthTipCard
            title="Medication Reminder"
            description="Don't forget to take your prescribed vitamins after breakfast."
            type="reminder"
          />
        </section>

        {/* Trust Indicators */}
        <section className="py-6 border-t border-border slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Doctor-Approved Protocols</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Your Data is Secure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Medically Verified</span>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Index;
