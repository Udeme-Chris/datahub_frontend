import { useState } from "react";
import { Plus, Search, Eye, Share, Download, Trash2, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import CreateVisualizationModal from "./modals/create-visualization-modal";

export default function Visualizations() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const { toast } = useToast();

  // Mock location for getActiveTab
  const location = "/visualizations";

  const getActiveTab = () => {
    if (location === "/dashboard") return "dashboard";
    if (location === "/data-sources") return "data-sources";
    if (location === "/visualizations") return "visualizations";
    if (location === "/projects") return "projects";
    if (location === "/settings") return "settings";
    return "visualizations";
  };

  const activeTab = getActiveTab();

  // Demo data
  const visualizations = [
    {
      id: "1",
      title: "Malaria SNP Distribution",
      description: "Bar chart showing SNP frequencies across genomic regions",
      type: "bar",
      dataCategory: "genomics",
      updatedAt: "2025-06-15T10:00:00Z",
    },
    {
      id: "2",
      title: "Clinical Trial Outcomes",
      description: "Line chart tracking patient outcomes over time",
      type: "line",
      dataCategory: "clinical",
      updatedAt: "2025-06-14T12:00:00Z",
    },
    {
      id: "3",
      title: "Brain Scan Heatmap",
      description: "Heatmap of brain activity from MRI scans",
      type: "heatmap",
      dataCategory: "imaging",
      updatedAt: "2025-06-10T08:00:00Z",
    },
  ];

  // Mock delete function 
  const deleteVisualization = (id) => {
    toast({
      title: "Success",
      description: `Visualization with ID ${id} deleted successfully`,
    });
  };

  const filteredVisualizations = visualizations.filter((viz) => {
    const matchesSearch = viz.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || viz.dataCategory === categoryFilter;
    const matchesType = typeFilter === "all" || viz.type === typeFilter;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getVisualizationGradient = (type) => {
    switch (type) {
      case "bar":
        return "from-teal-500 to-green-500";
      case "line":
        return "from-blue-500 to-cyan-500";
      case "pie":
        return "from-cyan-500 to-green-500";
      case "heatmap":
        return "from-orange-500 to-blue-500";
      case "scatter":
        return "from-green-500 to-cyan-500";
      default:
        return "from-teal-500 to-blue-500";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "genomics":
        return "bg-green-500 bg-opacity-10 text-green-500";
      case "clinical":
        return "bg-blue-500 bg-opacity-10 text-blue-500";
      case "imaging":
        return "bg-cyan-500 bg-opacity-10 text-cyan-500";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

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
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-neutral-dark">Visualizations</h2>
                <p className="text-gray-600 mt-2">Create and manage interactive data visualizations</p>
              </div>
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-primary-teal text-white hover:bg-opacity-90"
              >
                <Plus className="mr-2" size={16} />
                Create Visualization
              </Button>
            </div>

            {/* Filters */}
            <Card className="border-gray-100">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="genomics">Genomics</SelectItem>
                      <SelectItem value="clinical">Clinical</SelectItem>
                      <SelectItem value="imaging">Imaging</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                      <SelectItem value="pie">Pie Chart</SelectItem>
                      <SelectItem value="heatmap">Heatmap</SelectItem>
                      <SelectItem value="scatter">Scatter Plot</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative flex-1 min-w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      placeholder="Search visualizations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visualization Gallery */}
            {filteredVisualizations.length === 0 ? (
              <div className="text-center py-12">
                <BarChart3 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-lg font-medium">No visualizations found</p>
                <p className="text-gray-400 mt-2">Create your first visualization to get started</p>
                <Button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="mt-4 bg-primary-teal text-white hover:bg-opacity-90"
                >
                  <Plus className="mr-2" size={16} />
                  Create Visualization
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVisualizations.map((viz) => (
                  <Card key={viz.id} className="border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className={`h-48 bg-gradient-to-br ${getVisualizationGradient(viz.type)} p-6 flex items-center justify-center`}>
                      <BarChart3 className="text-white text-6xl opacity-50" size={60} />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-neutral-dark mb-2">{viz.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{viz.description || "No description available"}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge className={getCategoryColor(viz.dataCategory)}>
                            {viz.dataCategory || "General"}
                          </Badge>
                          <span className="text-gray-500 text-xs">
                            Updated {viz.updatedAt ? new Date(viz.updatedAt).toLocaleDateString() : "N/A"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="text-primary-teal hover:text-blue-600">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-primary-teal hover:text-blue-600">
                            <Share size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-primary-teal hover:text-blue-600">
                            <Download size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-orange-500 hover:text-red-600"
                            onClick={() => deleteVisualization(viz.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <CreateVisualizationModal
              open={isCreateModalOpen}
              onOpenChange={setIsCreateModalOpen}
            />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}