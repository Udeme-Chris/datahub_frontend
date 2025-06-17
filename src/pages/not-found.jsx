import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter"; 
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export default function NotFoundPage() {
  const activeTab = "dashboard"; 

  return (
    <SidebarProvider>
      <div className="w-full bg-neutral-light flex">
        {/* Sidebar */}
        <div>
          <DashboardSidebar activeTab={activeTab} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <DashboardHeader activeTab={activeTab} />

          {/* Page Content */}
          <div className="flex-1 flex items-center justify-center p-6">
            <Card className="border-gray-100 max-w-md w-full">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-neutral-dark text-center">
                  404 - Page Not Found
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Oops! It looks like the page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex justify-center">
                  <svg
                    className="w-32 h-32 text-primary-teal opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">
                  Let's get you back to safety.
                </p>
                <Button
                  asChild
                  className="bg-primary-teal text-white hover:bg-opacity-90 mt-4"
                >
                  <Link to="/dashboard">
                    <Home className="mr-2" size={16} />
                    Back to Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}