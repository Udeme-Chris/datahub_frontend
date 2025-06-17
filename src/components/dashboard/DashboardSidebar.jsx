import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { BarChart3, Database, Download, Folder, Settings, CreditCard, HelpCircle, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "@/assets/fedgen_logo.png";
import { Link } from "wouter";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardSidebar({ activeTab }) {
  const [collapsed, setCollapsed] = useState(false);

const mainMenuItems = [
    { title: "Dashboard", icon: BarChart3, key: "dashboard", path: "/dashboard" },
    { title: "Data Sources", icon: Database, key: "data-sources", path: "/data-sources" },
    { title: "Visualizations", icon: BarChart3, key: "visualizations", path: "/visualization" },
    { title: "Data Extraction", icon: Download, key: "data-extraction", path: "/data-extraction" }, // Changed icon to Folder for Data Extraction
    { title: "Projects", icon: Folder, key: "projects", path: "/project" },
];

  const settingsItems = [
    { title: "Settings", icon: Settings, key: "settings", path: "/setting" },
    { title: "Billing", icon: CreditCard, key: "billing", path: "/billing" },
  ];

  const helpItems = [
    { title: "Documentation", icon: BookOpen, external: true, path: "https://docs.example.com" },
    { title: "Help Center", icon: HelpCircle, external: true, path: "https://help.example.com" },
  ];

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} style={{ transition: "width 0.2s" }}>
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center space-x-2 px-2 py-2">
          <img src={Logo} alt="FedGen Logo" className="w-8 h-8 rounded-lg" />
          {!collapsed && (
            <div>
              <div className="font-bold text-primary text-xl">FEDGEN DataHub</div>
              <div className="text-xs text-muted-foreground">Health Data Platform</div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Main Menu</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <Link to={item.path}>
                    <SidebarMenuButton
                      isActive={activeTab === item.key}
                      className="flex items-center"
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Account</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <Link to={item.path}>
                    <SidebarMenuButton
                      isActive={activeTab === item.key}
                      className="flex items-center"
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Support</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {helpItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <a href={item.path} target={item.external ? "_blank" : "_self"} rel={item.external ? "noopener noreferrer" : undefined}>
                    <SidebarMenuButton className="flex items-center">
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}