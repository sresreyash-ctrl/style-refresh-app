import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { HomeView } from "@/components/views/HomeView";
import { ReportView } from "@/components/views/ReportView";
import { ApiKeyView } from "@/components/views/ApiKeyView";

const Index = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === "logout") {
      console.log("Logout clicked");
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <HomeView />;
      case "report":
        return <ReportView />;
      case "api-key":
        return <ApiKeyView />;
      case "support":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-foreground">Support</h1>
            <p className="text-muted-foreground">Contact our support team for assistance.</p>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Configure your application settings.</p>
          </div>
        );
      default:
        return <HomeView />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar activeItem={activeItem} onItemClick={handleItemClick} />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b border-border bg-background px-6">
            <SidebarTrigger className="mr-4" />
            <h2 className="font-semibold text-lg">NeoCortex Security Dashboard</h2>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
