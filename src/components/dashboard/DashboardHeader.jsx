import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User, LogOut, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Remove TypeScript types and interfaces

export function DashboardHeader({ activeTab }) {
    const getTabTitle = (tab) => {
        const titles = {
            'dashboard': 'Dashboard',
            'data-sources': 'Data Sources',
            'visualizations': 'Visualizations',
            'projects': 'Projects',
            'settings': 'Settings',
            'billing': 'Billing'
        };
        return titles[tab];
    };

    return (
        <header className="border-b  border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-6 gap-4">
                <SidebarTrigger />
                
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">{getTabTitle(activeTab)}</h1>
                </div>

                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="w-5 h-5" />
                        <Badge variant="destructive" className="absolute -top-1 -right-1 w-2 h-2 p-0" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder.svg" alt="User" />
                                    <AvatarFallback>AB</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">Dr. Adekunle Blessing</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                         adekunle.blessing@research.edu
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
