import { useState } from "react";
import { TrendingUp, Database, FileText, BarChart3,CheckCircle, Clock, Shield, Plus, Folder, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AddDataSourceModal from "./modals/add-data-source-modal";
import CreateVisualizationModal from "./modals/create-visualization-modal";



export default function DashboardTab() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


  const statsLoading = false; 
  const activitiesLoading = false; 



  if (statsLoading || activitiesLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-32 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }


    const recentActivities = [
    {
      action: "New genomic dataset uploaded",
      description: "GWAS_malaria_cohort_2024.vcf",
      timestamp: "2 hours ago",
      type: "upload"
    },
    {
      action: "Visualization shared",
      description: "Cancer biomarker analysis dashboard",
      timestamp: "4 hours ago",
      type: "share"
    },
    {
      action: "Project created",
      description: "Malaria drug resistance study",
      timestamp: "1 day ago",
      type: "project"
    },
    {
      action: "Data quality check completed",
      description: "Clinical trial dataset validation",
      timestamp: "2 days ago",
      type: "quality"
    }
  ];


  

  const metrics = [
    {
      title: "Active Data Sources",
      value: "12",
      description: "+2 from last month",
      icon: Database,
      trend: "up"
    },
    {
      title: "Total Datasets",
      value: "847",
      description: "156 GB processed",
      icon: FileText,
      trend: "up"
    },
    {
      title: "Recent Visualizations",
      value: "24",
      description: "Created this week",
      icon: BarChart3,
      trend: "up"
    },
    {
      title: "Data Quality Score",
      value: "94%",
      description: "Excellent quality",
      icon: CheckCircle,
      trend: "stable"
    }
  ];

  return (
    <div className="w-full space-y-6  mx-auto p-6 ">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-br from-blue-100 to-blue-50  border-primary/20  shadow-lg border-0">

      {/* <Card className="bg-gradient-to-r from-/10 to-secondary/10 border-primary/20 text-primary shadow-lg border-0"> */}
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome back, Dr. Adekunle Blessing</h2>
              <p className="text-primary-100 text-lg">Your health data platform is ready for analysis</p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                alt="Medical data visualization dashboard" 
                className="rounded-lg w-64 h-32 object-cover opacity-80" 
              />
            </div>
          </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => setIsAddModalOpen(true)}
         className="bg-primary-teal text-white hover:bg-opacity-90">
          <Plus className="mr-2" size={16} />
          Add Data Source
        </Button>
        <Button onClick={() => setIsCreateModalOpen(true)}
        className="bg-primary-blue text-white border-primary-blue hover:bg-white hover:text-primary-blue">
          <BarChart3 className="mr-2" size={16} />
          Create Visualization
        </Button>
        <Button variant="outline" className="border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white">
          <Folder className="mr-2" size={16} />
          View Projects
        </Button>
      </div>

        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {metric.trend === "up" && <TrendingUp className="w-3 h-3 mr-1 text-success" />}
                {metric.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Feed and Pinned Visualizations */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
 <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 w-5 h-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest data operations and collaborations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{activity.action}</div>
                      <div className="text-sm text-muted-foreground">{activity.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">{activity.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Pinned Visualizations */}
        <Card className="border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl font-bold text-neutral-dark">Pinned Charts</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-neutral-dark mb-2">Data Overview</h4>
                <div className="h-20 bg-orange  from-success-green to-accent-cyan rounded opacity-60"></div>
                <Button variant="link" className="mt-2 text-primary-teal text-sm font-medium p-0">
                  <Eye size={14} className="mr-1" />
                  View Chart
                </Button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-neutral-dark mb-2">Quality Metrics</h4>
                <div className="h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded opacity-20"></div>
                <Button variant="link" className="mt-2 text-primary-teal text-sm font-medium p-0">
                  <Eye size={14} className="mr-1" />
                  View Chart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


{/*  modals */}
    <AddDataSourceModal
              open={isAddModalOpen}
              onOpenChange={setIsAddModalOpen}
            />

            <CreateVisualizationModal
              open={isCreateModalOpen}
              onOpenChange={setIsCreateModalOpen}
            />

    </div>
  );
}
