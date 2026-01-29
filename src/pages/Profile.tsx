import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Bell, 
  Shield, 
  HelpCircle,
  ChevronRight,
  Globe,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SettingsItemProps {
  icon: React.ElementType;
  label: string;
  value?: string;
  to?: string;
  onClick?: () => void;
  danger?: boolean;
}

const SettingsItem = ({ icon: Icon, label, value, to, onClick, danger }: SettingsItemProps) => {
  const Comp = to ? Link : "button";
  const props = to ? { to } : { onClick };

  return (
    <Comp
      {...(props as any)}
      className={cn(
        "w-full flex items-center gap-4 p-4 text-left min-h-touch transition-colors",
        "hover:bg-muted/50 active:bg-muted",
        danger && "text-destructive"
      )}
    >
      <Icon className={cn("w-5 h-5 flex-shrink-0", danger ? "text-destructive" : "text-muted-foreground")} />
      <div className="flex-1 min-w-0">
        <p className={cn("font-medium", danger ? "text-destructive" : "text-foreground")}>{label}</p>
        {value && <p className="text-sm text-muted-foreground truncate">{value}</p>}
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
    </Comp>
  );
};

const Profile = () => {
  return (
    <AppLayout>
      <div className="container px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 fade-in">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Guest User</h1>
            <p className="text-sm text-muted-foreground">Complete your profile for better care</p>
            <Button variant="soft" size="sm" className="mt-2">
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Verification Status */}
        <div 
          className="p-4 rounded-xl bg-warning/5 border-2 border-warning/20 flex items-center gap-3 slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-warning" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">Verify your phone number</p>
            <p className="text-sm text-muted-foreground">Required for consultations</p>
          </div>
          <Button variant="soft" size="sm">
            Verify
          </Button>
        </div>

        {/* Personal Info */}
        <div className="space-y-1 slide-up" style={{ animationDelay: "0.15s" }}>
          <h2 className="text-sm font-medium text-muted-foreground px-4 py-2">
            Personal Information
          </h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
            <SettingsItem icon={User} label="Full Name" value="Not set" />
            <SettingsItem icon={Phone} label="Phone Number" value="Not verified" />
            <SettingsItem icon={Mail} label="Email" value="Not set" />
            <SettingsItem icon={MapPin} label="Location" value="Enable for nearby pharmacies" />
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-1 slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-sm font-medium text-muted-foreground px-4 py-2">
            Preferences
          </h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
            <SettingsItem icon={Globe} label="Language" value="English" />
            <SettingsItem icon={Bell} label="Notifications" value="Reminders, Health tips" />
          </div>
        </div>

        {/* Support */}
        <div className="space-y-1 slide-up" style={{ animationDelay: "0.25s" }}>
          <h2 className="text-sm font-medium text-muted-foreground px-4 py-2">
            Support & Privacy
          </h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
            <SettingsItem icon={HelpCircle} label="Help & Support" />
            <SettingsItem icon={Shield} label="Privacy & Data" />
            <SettingsItem icon={LogOut} label="Sign Out" danger />
          </div>
        </div>

        {/* App Info */}
        <div className="text-center text-xs text-muted-foreground pt-4 slide-up" style={{ animationDelay: "0.3s" }}>
          <p>CareConnect v1.0.0</p>
          <p className="mt-1">Made with ❤️ for community health</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
