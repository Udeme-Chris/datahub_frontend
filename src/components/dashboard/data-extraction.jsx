import { useState } from "react";
import { Download, Search, Plus, File, Folder, Play, Pause } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

const CreateExtractionModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    extractionType: "",
    outputFormat: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.projectName || !formData.extractionType) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: `Extraction job for ${formData.projectName} started`,
    });
    setFormData({ projectName: "", extractionType: "", outputFormat: "" });
    onOpenChange(false);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-neutral-dark">Start New Extraction</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="projectName" className="text-sm font-medium text-gray-700">
              Project Name *
            </Label>
            <Input
              id="projectName"
              placeholder="e.g., Malaria Resistance Study"
              value={formData.projectName}
              onChange={(e) => handleInputChange("projectName", e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="extractionType" className="text-sm font-medium text-gray-700">
              Extraction Type *
            </Label>
            <Select
              value={formData.extractionType}
              onValueChange={(value) => handleInputChange("extractionType", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select extraction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="genomic">Genomic Sequencing</SelectItem>
                <SelectItem value="transcriptomic">Transcriptomic Analysis</SelectItem>
                <SelectItem value="metagenomic">Metagenomic Study</SelectItem>
                <SelectItem value="clinical">Clinical Research</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="outputFormat" className="text-sm font-medium text-gray-700">
              Output Format
            </Label>
            <Select
              value={formData.outputFormat}
              onValueChange={(value) => handleInputChange("outputFormat", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select output format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fastq">FASTQ</SelectItem>
                <SelectItem value="fasta">FASTA</SelectItem>
                <SelectItem value="vcf">VCF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-primary-teal text-white hover:bg-opacity-90"
            >
              <Download className="mr-2" size={16} />
              Start Extraction
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function DataExtraction() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  // Mock location for getActiveTab
  const location = "/data-extraction";

  const getActiveTab = () => {
    if (location === "/dashboard") return "dashboard";
    if (location === "/data-sources") return "data-sources";
    if (location === "/visualizations") return "visualizations";
    if (location === "/projects") return "projects";
    if (location === "/settings") return "settings";
    if (location === "/data-extraction") return "data-extraction";
    return "data-extraction";
  };

  const activeTab = getActiveTab();

  // Demo data for extraction jobs
  const extractionJobs = [
    {
      id: "EXT_001",
      project: "Malaria Resistance Study",
      type: "genomic",
      samples: 12,
      status: "Running",
      progress: 65,
      started: "2025-06-16T14:30:00Z",
      outputFormat: "fastq",
    },
    {
      id: "EXT_002",
      project: "Microbiome Diversity",
      type: "metagenomic",
      samples: 8,
      status: "Queued",
      progress: 0,
      started: "-",
      outputFormat: "fasta",
    },
    {
      id: "EXT_003",
      project: "Cancer Biomarker Analysis",
      type: "transcriptomic",
      samples: 24,
      status: "Completed",
      progress: 100,
      started: "2025-06-15T09:15:00Z",
      outputFormat: "vcf",
    },
  ];

  const filteredJobs = extractionJobs.filter((job) => {
    const matchesSearch = job.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "Running":
        return "bg-blue-500 text-white";
      case "Queued":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handlePauseJob = (id) => {
    toast({
      title: "Success",
      description: `Extraction job ${id} paused`,
    });
  };

  const handleDownloadJob = (id) => {
    toast({
      title: "Success",
      description: `Downloading results for job ${id}`,
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
                <h2 className="text-3xl font-bold text-neutral-dark">Data Extraction</h2>
                <p className="text-gray-600 mt-2">Manage and monitor data extraction jobs</p>
              </div>
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-primary-teal text-white hover:bg-opacity-90"
              >
                <Plus className="mr-2" size={16} />
                Start New Extraction
              </Button>
            </div>

            <Card className="border-gray-100">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-neutral-dark">Extraction Jobs</CardTitle>
                  <div className="flex items-center space-x-4">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="Running">Running</SelectItem>
                        <SelectItem value="Queued">Queued</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        placeholder="Search extraction jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {filteredJobs.length === 0 ? (
                  <div className="p-8 text-center">
                    <Download className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-lg font-medium">No extraction jobs found</p>
                    <p className="text-gray-400 mt-2">Start a new extraction to get started</p>
                    <Button
                      onClick={() => setIsCreateModalOpen(true)}
                      className="mt-4 bg-primary-teal text-white hover:bg-opacity-90"
                    >
                      <Plus className="mr-2" size={16} />
                      Start New Extraction
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-medium text-gray-700">Job ID</TableHead>
                        <TableHead className="font-medium text-gray-700">Project</TableHead>
                        <TableHead className="font-medium text-gray-700">Type</TableHead>
                        <TableHead className="font-medium text-gray-700">Samples</TableHead>
                        <TableHead className="font-medium text-gray-700">Status</TableHead>
                        <TableHead className="font-medium text-gray-700">Progress</TableHead>
                        <TableHead className="font-medium text-gray-700">Output Format</TableHead>
                        <TableHead className="font-medium text-gray-700">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredJobs.map((job) => (
                        <TableRow key={job.id}>
                          <TableCell className="font-medium">{job.id}</TableCell>
                          <TableCell>{job.project}</TableCell>
                          <TableCell className="capitalize">{job.type}</TableCell>
                          <TableCell>{job.samples}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${job.progress === 100 ? "bg-green-500" : "bg-blue-500"}`}
                                  style={{ width: `${job.progress}%` }}
                                />
                              </div>
                              <span className="text-gray-600 text-sm">{job.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="uppercase">{job.outputFormat}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {job.status === "Running" && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-orange-500 hover:text-red-600"
                                  onClick={() => handlePauseJob(job.id)}
                                >
                                  <Pause size={16} />
                                </Button>
                              )}
                              {job.status === "Completed" && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-primary-teal hover:text-blue-600"
                                  onClick={() => handleDownloadJob(job.id)}
                                >
                                  <Download size={16} />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>

            <CreateExtractionModal
              open={isCreateModalOpen}
              onOpenChange={setIsCreateModalOpen}
            />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}