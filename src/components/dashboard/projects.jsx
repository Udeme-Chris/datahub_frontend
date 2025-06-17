import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus, Microscope, Dna, Heart, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import  { Project, ProjectMember } from "@/lib/types";



// interface ProjectWithMembers extends Project {
//   members?: ProjectMember[];
//   memberCount?: number;
// }

export default function Projects() {
  // const { data: projects, isLoading } = useQuery<ProjectWithMembers[]>({
  //   queryKey: ["/api/projects"],
  // });

  const getProjectIcon = () => {
    if (name.toLowerCase().includes("malaria")) return Microscope;
    if (name.toLowerCase().includes("cancer") || name.toLowerCase().includes("biomarker")) return Dna;
    if (name.toLowerCase().includes("cardiovascular") || name.toLowerCase().includes("heart")) return Heart;
    return Dna;
  };

  const getProjectGradient = () => {
    if (name.toLowerCase().includes("malaria")) return "from-primary-teal to-success-green";
    if (name.toLowerCase().includes("cancer")) return "from-primary-blue to-accent-cyan";
    if (name.toLowerCase().includes("cardiovascular")) return "from-accent-cyan to-success-green";
    return "from-primary-teal to-primary-blue";
  };

  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-success-green bg-opacity-10 text-success-green";
      case "completed":
        return "bg-primary-blue bg-opacity-10 text-primary-blue";
      case "on_hold":
        return "bg-warning-orange bg-opacity-10 text-warning-orange";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "on_hold":
        return "On Hold";
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  const generateMemberAvatars = () => {
    const colors = ["bg-primary-teal", "bg-success-green", "bg-primary-blue", "bg-accent-cyan", "bg-warning-orange"];
    const initials = ["SC", "JW", "AM", "DR", "LM", "KL", "TP"];
    
    return Array.from({ length: Math.min(memberCount, 3) }, (_, i) => ({
      initials: initials[i] || "U",
      color: colors[i % colors.length]
    }));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-neutral-dark">Projects</h2>
          <p className="text-gray-600 mt-2">Organize and collaborate on research projects</p>
        </div>
        <Button className="bg-primary-teal text-white hover:bg-opacity-90">
          <Plus className="mr-2" size={16} />
          Create Project
        </Button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      ) : !projects || projects.length === 0 ? (
        <div className="text-center py-12">
          <Dna className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg font-medium">No projects found</p>
          <p className="text-gray-400 mt-2">Create your first research project to get started</p>
          <Button className="mt-4 bg-primary-teal text-white hover:bg-opacity-90">
            <Plus className="mr-2" size={16} />
            Create Project
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample projects for demonstration */}
          {[
            {
              id: 1,
              name: "Malaria Resistance Study",
              description: "Analyzing genomic variants associated with antimalarial drug resistance across West African populations",
              status: "active",
              memberCount: 8,
              updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
            },
            {
              id: 2,
              name: "Cancer Biomarker Discovery", 
              description: "Multi-omics analysis to identify novel biomarkers for early cancer detection and prognosis",
              status: "active",
              memberCount: 12,
              updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
            },
            {
              id: 3,
              name: "Cardiovascular Risk Assessment",
              description: "Integrating genomic and clinical data to develop predictive models for cardiovascular disease risk", 
              status: "on_hold",
              memberCount: 6,
              updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            }
          ].map((project) => {
            const ProjectIcon = getProjectIcon(project.name);
            const memberAvatars = generateMemberAvatars(project.memberCount);
            
            return (
              <Card key={project.id} className="border-gray-100 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getProjectGradient(project.name)} rounded-lg flex items-center justify-center`}>
                      <ProjectIcon className="text-white text-lg" size={20} />
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusLabel(project.status)}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{project.memberCount} members</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {memberAvatars.map((member, index) => (
                        <Avatar key={index} className="w-8 h-8 border-2 border-white">
                          <AvatarFallback className={`${member.color} text-white text-xs font-medium`}>
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {project.memberCount > 3 && (
                        <Avatar className="w-8 h-8 border-2 border-white">
                          <AvatarFallback className="bg-gray-400 text-white text-xs font-medium">
                            +{project.memberCount - 3}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                    <Button 
                      className={
                        project.status === "active" 
                          ? "bg-primary-teal text-white hover:bg-opacity-90" 
                          : "border border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white"
                      }
                      size="sm"
                    >
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
