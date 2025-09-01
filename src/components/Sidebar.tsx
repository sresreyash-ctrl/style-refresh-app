import { Home, FileText, HelpCircle, Key, Settings, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const menuItems = [
  { id: "home", label: "Home", icon: Home, active: true },
  { id: "report", label: "Report", icon: FileText },
  { id: "support", label: "Support", icon: HelpCircle },
  { id: "api-key", label: "Set OpenAI API Key", icon: Key },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({ activeItem = "home", onItemClick }: SidebarProps) {
  return (
    <div className="w-80 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-sidebar-foreground tracking-tight">
              NeoCortex
            </h1>
            <p className="text-sidebar-foreground/60 text-sm font-medium tracking-wide">
              SECURITY
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <Button
                key={item.id}
                variant={isActive ? "sidebar-active" : "sidebar"}
                size="lg"
                className="w-full justify-start gap-3 h-12 text-sm font-medium"
                onClick={() => onItemClick?.(item.id)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="sidebar-danger"
          size="lg"
          className="w-full justify-start gap-3 h-12 text-sm font-medium"
          onClick={() => onItemClick?.("logout")}
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}