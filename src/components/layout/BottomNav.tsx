import { NavLink } from "@/components/NavLink";
import { Home, Stethoscope, ClipboardList, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/symptoms", icon: Stethoscope, label: "Check Symptoms" },
  { to: "/health-passport", icon: ClipboardList, label: "Health History" },
  { to: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-bottom md:hidden"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around h-18">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={cn(
              "flex flex-col items-center justify-center gap-1 px-3 py-2 min-w-[72px] min-h-touch",
              "text-muted-foreground transition-colors duration-200",
              "hover:text-primary focus:text-primary"
            )}
            activeClassName="text-primary"
          >
            <item.icon className="w-6 h-6" aria-hidden="true" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
