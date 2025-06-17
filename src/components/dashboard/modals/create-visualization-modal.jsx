import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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

export default function CreateVisualizationModal({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    dataCategory: "",
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createVisualizationMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/visualizations", {
        ...formData,
        config: {}, // Default empty config
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/visualizations"] });
      queryClient.invalidateQueries({ queryKey: ["/api/dashboard/stats"] });
      toast({
        title: "Success",
        description: "Visualization created successfully",
      });
      setFormData({ title: "", description: "", type: "", dataCategory: "" });
      onOpenChange(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create visualization",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.type) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    createVisualizationMutation.mutate(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-neutral-dark">Create Visualization</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700">
              Title *
            </Label>
            <Input
              id="title"
              placeholder="e.g., Malaria Case Distribution"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="mt-2"
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-sm font-medium text-gray-700">
              Description
            </Label>
            <Textarea
              id="description"
              rows={3}
              placeholder="Describe your visualization..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="mt-2"
            />
          </div>
          
          <div>
            <Label htmlFor="type" className="text-sm font-medium text-gray-700">
              Visualization Type *
            </Label>
            <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select visualization type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="pie">Pie Chart</SelectItem>
                <SelectItem value="heatmap">Heatmap</SelectItem>
                <SelectItem value="scatter">Scatter Plot</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="dataCategory" className="text-sm font-medium text-gray-700">
              Data Category
            </Label>
            <Select value={formData.dataCategory} onValueChange={(value) => handleInputChange("dataCategory", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select data category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="genomics">Genomics</SelectItem>
                <SelectItem value="clinical">Clinical</SelectItem>
                <SelectItem value="imaging">Imaging</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-4 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-primary-teal text-white hover:bg-opacity-90"
              disabled={createVisualizationMutation.isPending}
            >
              {createVisualizationMutation.isPending ? "Creating..." : "Create Visualization"}
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