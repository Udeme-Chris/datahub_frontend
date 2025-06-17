// dashboard.jsx
import { useLocation, useRoute } from "wouter";
import DashboardTab from "@/components/dashboard/dashboard-tab";
import DataSources from "@/components/dashboard/data-sources";
import Visualizations from "@/components/dashboard/visualizations";
import Projects from "@/components/dashboard/projects";
import Setting from "@/components/dashboard/settings";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";

export default function Dashboard() {
  const [location] = useLocation();
  const [match, params] = useRoute("/settings/:section"); // Extract section for settings sub-routes

  const getActiveTab = () => {
    if (location === "/dashboard") return "dashboard";
    if (location === "/data-sources") return "data-sources";
    if (location === "/visualization") return "visualizations";
    if (location === "/projects") return "projects";
    if (location.startsWith("/settings")) return "settings";
    return "dashboard"; 
  };

  const activeTab = getActiveTab();
  const activeSection = params?.section || "profile"; // Default to "profile" for /settings

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "data-sources":
        return <DataSources />;
      case "visualizations":
        return <Visualizations />;
      case "projects":
        return <Projects />;
      case "settings":
        return <Settings section={activeSection} />; // Pass section prop
      default:
        return <DashboardTab />;
    }
  };

  return (
    <SidebarProvider>
      <div className="w-full bg-neutral-light flex">
        {/* Sidebar */}
        <div>
          <DashboardSidebar activeTab={activeTab} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <DashboardHeader activeTab={activeTab} />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {renderActiveTab()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}