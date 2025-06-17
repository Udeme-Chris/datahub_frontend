import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function AddDataSourceModal({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    connectionParams: "",
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createDataSourceMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/data-sources", {
        ...formData,
        connectionParams: formData.connectionParams ? JSON.parse(formData.connectionParams) : {},
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/data-sources"] });
      queryClient.invalidateQueries({ queryKey: ["/api/dashboard/stats"] });
      toast({
        title: "Success",
        description: "Data source added successfully",
      });
      setFormData({ name: "", type: "", connectionParams: "" });
      onOpenChange(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add data source",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.type) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    createDataSourceMutation.mutate(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-neutral-dark">Add New Data Source</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Source Name *
            </Label>
            <Input
              id="name"
              placeholder="e.g., Malaria_Genomics_DB"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="mt-2"
            />
          </div>
          
          <div>
            <Label htmlFor="type" className="text-sm font-medium text-gray-700">
              Source Type *
            </Label>
            <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select source type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Genomic Data">Genomic Data</SelectItem>
                <SelectItem value="Clinical Data">Clinical Data</SelectItem>
                <SelectItem value="Medical Imaging">Medical Imaging</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="connectionParams" className="text-sm font-medium text-gray-700">
              Connection Parameters
            </Label>
            <Textarea
              id="connectionParams"
              rows={3}
              placeholder='{"host": "localhost", "port": 5432, "database": "health_data"}'
              value={formData.connectionParams}
              onChange={(e) => handleInputChange("connectionParams", e.target.value)}
              className="mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">Enter connection details as JSON</p>
          </div>
          
          <div className="flex items-center space-x-4 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-primary-teal text-white hover:bg-opacity-90"
              disabled={createDataSourceMutation.isPending}
            >
              {createDataSourceMutation.isPending ? "Adding..." : "Add Source"}
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
}