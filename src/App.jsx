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
import Projects from "./pages/projects";
import Settings from "./components/dashboard/settings";
import Visualization from "./components/dashboard/visualizations";
import NotFound from "./pages/not-found";
import DataExtraction from "./components/dashboard/data-extraction"; 
import ForgotPassword from "./pages/forgot-password";
import VerifyEmail from "./pages/verify-email";
import DProject from "./components/dashboard/projects"



function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/data-sources" component={DataSources} />
      <Route path="/projects" component={Projects} />
      {/* <Route path="/project" component={DProject} /> */}
      <Route path="/settings/:section" component={Settings} /> 
      <Route path="/settings" component={Settings} /> 
      <Route path="/visualization" component={Visualization} />
      <Route path="/data-extraction" component={DataExtraction} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/verify-email" component={VerifyEmail} />


      {/* Catch-all route for 404 Not Found */}
      <Route path="/:path" component={NotFound} />
      {/* Fallback route for any unmatched paths */}
      <Route path="/:path*" component={NotFound} />
      {/* Catch-all for any other paths */}
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