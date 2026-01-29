import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Star,
  Activity,
  Thermometer,
  Heart,
  CheckCircle2,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Pharmacy {
  id: string;
  name: string;
  address: string;
  distance: string;
  rating: number;
  hours: string;
  isOpen: boolean;
  phone: string;
  services: string[];
  isCertified: boolean;
}

const pharmacies: Pharmacy[] = [
  {
    id: "1",
    name: "HealthFirst Pharmacy",
    address: "123 Main Street, Near Bus Stand",
    distance: "0.5 km",
    rating: 4.8,
    hours: "8:00 AM - 10:00 PM",
    isOpen: true,
    phone: "+91 98765 43210",
    services: ["BP", "Temperature", "SpO2", "First Aid"],
    isCertified: true,
  },
  {
    id: "2",
    name: "Apollo Pharmacy",
    address: "45 Market Road, City Center",
    distance: "1.2 km",
    rating: 4.6,
    hours: "24 Hours",
    isOpen: true,
    phone: "+91 98765 43211",
    services: ["BP", "Temperature", "SpO2"],
    isCertified: true,
  },
  {
    id: "3",
    name: "MedPlus",
    address: "78 Gandhi Nagar, Block B",
    distance: "2.1 km",
    rating: 4.3,
    hours: "9:00 AM - 9:00 PM",
    isOpen: false,
    phone: "+91 98765 43212",
    services: ["BP", "Temperature"],
    isCertified: false,
  },
];

const serviceIcons: Record<string, React.ElementType> = {
  BP: Heart,
  Temperature: Thermometer,
  SpO2: Activity,
  "First Aid": CheckCircle2,
};

const PharmacyCard = ({ pharmacy }: { pharmacy: Pharmacy }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 space-y-3 transition-all hover:shadow-card">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{pharmacy.name}</h3>
            {pharmacy.isCertified && (
              <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                Certified
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            {pharmacy.address}
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-bold text-primary">{pharmacy.distance}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3.5 h-3.5 text-warning fill-warning" />
            {pharmacy.rating}
          </div>
        </div>
      </div>

      {/* Status & Hours */}
      <div className="flex items-center gap-4 text-sm">
        <span className={cn(
          "flex items-center gap-1.5 font-medium",
          pharmacy.isOpen ? "text-secondary" : "text-destructive"
        )}>
          <span className={cn(
            "w-2 h-2 rounded-full",
            pharmacy.isOpen ? "bg-secondary" : "bg-destructive"
          )} />
          {pharmacy.isOpen ? "Open Now" : "Closed"}
        </span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {pharmacy.hours}
        </span>
      </div>

      {/* Services */}
      <div className="flex flex-wrap gap-2">
        {pharmacy.services.map((service) => {
          const Icon = serviceIcons[service] || Activity;
          return (
            <span
              key={service}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
            >
              <Icon className="w-3.5 h-3.5" />
              {service}
            </span>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <Button variant="outline" size="sm" className="flex-1 gap-1.5">
          <Phone className="w-4 h-4" />
          Call
        </Button>
        <Button variant="medical" size="sm" className="flex-1 gap-1.5">
          <Navigation className="w-4 h-4" />
          Directions
        </Button>
      </div>
    </div>
  );
};

const Pharmacies = () => {
  const [filter, setFilter] = useState<"all" | "open" | "certified">("all");

  const filteredPharmacies = pharmacies.filter((p) => {
    if (filter === "open") return p.isOpen;
    if (filter === "certified") return p.isCertified;
    return true;
  });

  return (
    <AppLayout>
      <div className="container px-4 py-6 space-y-6">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Partner Pharmacies
          </h1>
          <p className="text-muted-foreground">
            Get your vitals measured at a pharmacy near you
          </p>
        </div>

        {/* Map Placeholder */}
        <div 
          className="h-48 rounded-xl bg-muted flex items-center justify-center border-2 border-dashed border-border slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="text-center">
            <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Map view coming soon</p>
            <Button variant="soft" size="sm" className="mt-2 gap-1.5">
              <Navigation className="w-4 h-4" />
              Enable Location
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div 
          className="flex gap-2 overflow-x-auto pb-2 slide-up" 
          style={{ animationDelay: "0.15s" }}
        >
          <Button
            variant={filter === "all" ? "medical" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "open" ? "medical" : "outline"}
            size="sm"
            onClick={() => setFilter("open")}
            className="gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Open Now
          </Button>
          <Button
            variant={filter === "certified" ? "medical" : "outline"}
            size="sm"
            onClick={() => setFilter("certified")}
            className="gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            Certified
          </Button>
        </div>

        {/* Pharmacy List */}
        <div className="space-y-3 slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Nearby ({filteredPharmacies.length})
            </h2>
            <Button variant="ghost" size="icon-sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {filteredPharmacies.map((pharmacy) => (
              <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div 
          className="p-4 rounded-xl bg-info/5 border border-info/20 slide-up" 
          style={{ animationDelay: "0.25s" }}
        >
          <h3 className="font-semibold text-foreground mb-1">
            Why visit a partner pharmacy?
          </h3>
          <p className="text-sm text-muted-foreground">
            Get accurate vitals measurements from trained staff. Your readings are 
            automatically synced to your Health Passport for better health tracking.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Pharmacies;
