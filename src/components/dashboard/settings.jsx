import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRoute, Link } from "wouter"; // Import wouter hooks and Link
import { User, Bell, Shield, Key, Settings, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

// Mock fetchUser function (replace with your actual API call)
const fetchUser = async () => {
  // Example: Fetch user data from an API
  // Replace with your actual API endpoint
  const response = await fetch("/api/user");
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

export default function Setting() {
  // Get the section from the URL (e.g., /settings/profile -> section = "profile")
  const [match, params] = useRoute("/settings/:section");
  const [activeSection, setActiveSection] = useState(params?.section || "profile");

  // Sync activeSection with URL changes
  useEffect(() => {
    if (params?.section && params.section !== activeSection) {
      setActiveSection(params.section);
    } else if (!params?.section && activeSection !== "profile") {
      setActiveSection("profile"); // Default to profile if no section is specified
    }
  }, [params?.section]);

  // Fetch user data
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  const sections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "api", label: "API Keys", icon: Key },
    { id: "preferences", label: "Preferences", icon: Settings },
  ];

  const renderProfileSection = () => (
    <Card className="border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-neutral-dark">Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isLoading ? (
          <p>Loading user data...</p>
        ) : error ? (
          <p>Error loading user data: {error.message}</p>
        ) : (
          <>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-teal to-success-green rounded-full flex items-center justify-center">
                <User className="text-white text-2xl" size={32} />
              </div>
              <Button className="bg-primary-teal text-white hover:bg-opacity-90">
                <Camera className="mr-2" size={16} />
                Change Photo
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                <Input
                  id="firstName"
                  defaultValue={user?.firstName || ""}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                <Input
                  id="lastName"
                  defaultValue={user?.lastName || ""}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email || ""}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="institution" className="text-sm font-medium text-gray-700">Institution</Label>
              <Input
                id="institution"
                placeholder="Your institution or organization"
                defaultValue={user?.institution || ""}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="bio" className="text-sm font-medium text-gray-700">Bio</Label>
              <Textarea
                id="bio"
                rows={3}
                placeholder="Tell us about your research interests..."
                defaultValue={user?.bio || ""}
                className="mt-2"
              />
            </div>
            <Button className="bg-primary-teal text-white hover:bg-opacity-90">
              Save Changes
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );

  const renderNotificationsSection = () => (
    <Card className="border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-neutral-dark">Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-neutral-dark">Email Notifications</h4>
            <p className="text-gray-600 text-sm">Receive updates about your projects and data processing</p>
          </div>
          <Switch defaultChecked={user?.notifications?.email || false} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-neutral-dark">Push Notifications</h4>
            <p className="text-gray-600 text-sm">Get notified about real-time data updates</p>
          </div>
          <Switch defaultChecked={user?.notifications?.push || false} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-neutral-dark">Weekly Reports</h4>
            <p className="text-gray-600 text-sm">Receive weekly summaries of your activity</p>
          </div>
          <Switch defaultChecked={user?.notifications?.weekly || false} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-neutral-dark">Security Alerts</h4>
            <p className="text-gray-600 text-sm">Get notified about security-related events</p>
          </div>
          <Switch defaultChecked={user?.notifications?.security || true} />
        </div>
      </CardContent>
    </Card>
  );

  const renderSecuritySection = () => (
    <Card className="border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-neutral-dark">Security Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium text-neutral-dark mb-2">Password</h4>
          <p className="text-gray-600 text-sm mb-4">Update your password to keep your account secure</p>
          <Button variant="outline" className="border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white">
            Change Password
          </Button>
        </div>
        <div>
          <h4 className="font-medium text-neutral-dark mb-2">Two-Factor Authentication</h4>
          <p className="text-gray-600 text-sm mb-4">Add an extra layer of security to your account</p>
          <div className="flex items-center justify-between">
            <span className="text-sm">2FA Status: {user?.twoFactorEnabled ? "Enabled" : "Disabled"}</span>
            <Button variant="outline" className="border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white">
              {user?.twoFactorEnabled ? "Disable 2FA" : "Enable 2FA"}
            </Button>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-neutral-dark mb-2">Login Sessions</h4>
          <p className="text-gray-600 text-sm mb-4">Manage your active login sessions</p>
          <Button variant="outline" className="border-warning-orange text-warning-orange hover:bg-warning-orange hover:text-white">
            View Active Sessions
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderApiSection = () => (
    <Card className="border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-neutral-dark">API Keys</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-gray-600 mb-4">Generate API keys for programmatic access to your data</p>
          <Button className="bg-primary-teal text-white hover:bg-opacity-90">
            <Key className="mr-2" size={16} />
            Generate New API Key
          </Button>
        </div>
        <div>
          <h4 className="font-medium text-neutral-dark mb-4">Active API Keys</h4>
          <div className="text-center py-8 text-gray-500">
            No API keys generated yet
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPreferencesSection = () => (
    <Card className="border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-neutral-dark">Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-neutral-dark">Dark Mode</h4>
            <p className="text-gray-600 text-sm">Switch between light and dark theme</p>
          </div>
          <Switch defaultChecked={user?.preferences?.darkMode || false} />
        </div>
        <div>
          <Label htmlFor="language" className="text-sm font-medium text-gray-700">Language</Label>
          <select
            id="language"
            className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2"
            defaultValue={user?.preferences?.language || "en"}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div>
          <Label htmlFor="timezone" className="text-sm font-medium text-gray-700">Timezone</Label>
          <select
            id="timezone"
            className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2"
            defaultValue={user?.preferences?.timezone || "UTC"}
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time</option>
            <option value="PST">Pacific Time</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return renderProfileSection();
      case "notifications":
        return renderNotificationsSection();
      case "security":
        return renderSecuritySection();
      case "api":
        return renderApiSection();
      case "preferences":
        return renderPreferencesSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-neutral-dark">Settings</h2>
        <p className="text-gray-600 mt-2">Manage your account and application preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="border-gray-100">
            <CardContent className="p-2">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <Link key={section.id} to={`/settings/${section.id}`}>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "text-primary-teal bg-primary-teal bg-opacity-10"
                          : "text-gray-600 hover:text-primary-teal hover:bg-gray-50"
                      }`}
                    >
                      <section.icon size={16} />
                      <span>{section.label}</span>
                    </button>
                  </Link>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}