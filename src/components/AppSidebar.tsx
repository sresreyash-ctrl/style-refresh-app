import { Home, FileText, HelpCircle, Key, Settings, LogOut, Shield, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const menuItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "report", label: "Report", icon: FileText },
  { id: "support", label: "Support", icon: HelpCircle },
  { id: "api-key", label: "Set OpenAI API Key", icon: Key },
  { id: "settings", label: "Settings", icon: Settings },
];

export function AppSidebar({ activeItem = "home", onItemClick }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
            <Shield className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <h1 className="font-display font-bold text-xl text-sidebar-foreground tracking-tight">
                neo
              </h1>
              <p className="text-sidebar-foreground/60 text-sm font-medium tracking-wide whitespace-nowrap">
                DATA SECURITY
              </p>
              <p className="text-sidebar-foreground/60 text-sm font-medium tracking-wide">
                POSTURE
              </p>
              <p className="text-sidebar-foreground/60 text-sm font-medium tracking-wide">
                MANAGEMENT
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      onClick={() => onItemClick?.(item.id)}
                      isActive={isActive}
                      className="h-12"
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span>{item.label}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={() => onItemClick?.("logout")}
              className="h-12 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}