import { useState } from "react";
import { Plus, Search, Edit, Trash2, Database, FileText, Wifi } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import AddDataSourceModal from "./modals/add-data-source-modal";
import { DashboardSidebar } from "./DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "./DashboardHeader";

export default function DataSources() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false); 

  // Mock location for getActiveTab 
  const location = "/data-sources";

  const getActiveTab = () => {
    if (location === "/dashboard") return "dashboard";
    if (location === "/data-sources") return "data-sources";
    if (location === "/visualization") return "visualizations";
    if (location === "/projects") return "projects";
    if (location === "/settings") return "settings";
    return "data-sources";
  };

  const activeTab = getActiveTab();

  const dataSources = [
    {
      id: "1", 
      name: "GWAS Malaria Dataset",
      type: "Genomic Data",
      status: "Active",
      lastExtracted: "2025-06-15T16:54:00Z", 
      format: "VCF",
      createdAt: "2025-06-01T10:00:00Z",
    },
    {
      id: "2",
      name: "Clinical Trial Database",
      type: "Clinical Data",
      status: "Active",
      lastExtracted: "2025-06-14T16:54:00Z",
      format: "CSV",
      createdAt: "2025-06-01T10:00:00Z",
    },
    {
      id: "3",
      name: "Imaging Repository",
      type: "Medical Imaging",
      status: "Inactive",
      lastExtracted: "2025-06-08T16:54:00Z",
      format: "DICOM",
      createdAt: "2025-06-01T10:00:00Z",
    },
  ];

  const filteredDataSources = dataSources?.filter((source) => {
    const matchesSearch = source.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || source.type === typeFilter;
    return matchesSearch && matchesType;
  }) || [];

  const getSourceIcon = (type) => {
    switch (type) {
      case "Genomic Data":
        return Database;
      case "Clinical Data":
        return FileText;
      case "Medical Imaging":
        return Wifi;
      default:
        return Database;
    }
  };

  const getSourceColor = (type) => {
    switch (type) {
      case "Genomic Data":
        return "from-green-500 to-cyan-500";
      case "Clinical Data":
        return "from-blue-500 to-cyan-500";
      case "Medical Imaging":
        return "from-cyan-500 to-green-500";
      default:
        return "from-teal-500 to-blue-500";
    }
  };

  const deleteDataSource = (id) => {
    toast({
      title: "Data Source Deleted",
      description: `Data source with ID ${id} has been deleted.`,
    });
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
                <h2 className="text-3xl font-bold text-neutral-dark">Data Sources</h2>
                <p className="text-gray-600 mt-2">Manage your genomic, clinical, and imaging data connections</p>
              </div>
              <Button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-primary-teal text-white hover:bg-opacity-90"
              >
                <Plus className="mr-2" size={16} />
                Add New Source
              </Button>
            </div>

            <Card className="border-gray-100">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-neutral-dark">Active Data Sources</CardTitle>
                  <div className="flex items-center space-x-4">
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="Genomic Data">Genomic Data</SelectItem>
                        <SelectItem value="Clinical Data">Clinical Data</SelectItem>
                        <SelectItem value="Medical Imaging">Medical Imaging</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        placeholder="Search sources..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">Loading data sources...</p>
                  </div>
                ) : filteredDataSources.length === 0 ? (
                  <div className="p-8 text-center">
                    <Database className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-lg font-medium">No data sources found</p>
                    <p className="text-gray-400 mt-2">Add your first data source to get started</p>
                    <Button
                      onClick={() => setIsAddModalOpen(true)}
                      className="mt-4 bg-primary-teal text-white hover:bg-opacity-90"
                    >
                      <Plus className="mr-2" size={16} />
                      Add Data Source
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-medium text-gray-700">Name</TableHead>
                        <TableHead className="font-medium text-gray-700">Type</TableHead>
                        <TableHead className="font-medium text-gray-700">Status</TableHead>
                        <TableHead className="font-medium text-gray-700">Added</TableHead>
                        <TableHead className="font-medium text-gray-700">Last Extracted</TableHead>
                        <TableHead className="font-medium text-gray-700">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDataSources.map((source) => {
                        const SourceIcon = getSourceIcon(source.type);
                        return (
                          <TableRow key={source.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 bg-gradient-to-br ${getSourceColor(source.type)} rounded-lg flex items-center justify-center`}>
                                  <SourceIcon className="text-white text-sm" size={16} />
                                </div>
                                <span className="font-medium text-neutral-dark">{source.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-gray-600 capitalize">{source.type}</TableCell>
                            <TableCell>
                              <Badge
                                variant={source.status === "Active" ? "default" : "secondary"}
                                className={source.status === "Active" ? "bg-green-500 text-white" : "bg-orange-500 text-white"}
                              >
                                {source.status}
                                </Badge>
                              </TableCell>
                            <TableCell className="text-gray-600">
                              {source.createdAt ? new Date(source.createdAt).toLocaleDateString() : "N/A"}
                            </TableCell>
                            <TableCell className="text-gray-600">
                              {source.lastExtracted ? new Date(source.lastExtracted).toLocaleString() : "Never"}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" className="text-primary-teal hover:text-blue-600">
                                  <Edit size={16} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-orange-500 hover:text-red-600"
                                  onClick={() => deleteDataSource(source.id)}
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>

            <AddDataSourceModal
              open={isAddModalOpen}
              onOpenChange={setIsAddModalOpen}
            />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}