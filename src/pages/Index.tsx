import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === "logout") {
      // Handle logout logic here
      console.log("Logout clicked");
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <Dashboard />
    </div>
  );
};

export default Index;
