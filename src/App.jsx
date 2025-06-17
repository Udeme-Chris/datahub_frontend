// app.jsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DataSources from "./components/dashboard/data-sources";
import Project from "./components/dashboard/projects";
import Settings from "./components/dashboard/settings";
import Visualization from "./components/dashboard/visualizations";
import NotFound from "./pages/not-found";
import DataExtraction from "./components/dashboard/data-extraction"; 


function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/data-sources" component={DataSources} />
      <Route path="/projects" component={Project} />
      <Route path="/settings/:section" component={Settings} /> 
      <Route path="/settings" component={Settings} /> 
      <Route path="/visualization" component={Visualization} />
      <Route path="/data-extraction" component={DataExtraction} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;