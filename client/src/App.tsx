import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import TeamPage from "@/pages/team";
import ProjectsPage from "@/pages/projects";
import ProjectDetailPage from "@/pages/project/[id]";
import ServicesPage from "@/pages/services";
import ServiceDetailPage from "@/pages/service/[id]";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/project/:id" component={ProjectDetailPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/service/:id" component={ServiceDetailPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
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
