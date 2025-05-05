import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import ProjectDetailPage from "@/pages/project/[id]";
import ServicesPage from "@/pages/services";
import ServiceDetailPage from "@/pages/service/[id]";
import FurnitureCatalogPage from "@/pages/service/furniture";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Performance Monitoring
const startTime = performance.now();

// Komponen untuk menangani scroll ke atas saat berpindah halaman
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Performance mark for navigation
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(`navigation-to-${location}`);
    }
  }, [location]);
  
  return null;
}

function Router() {
  useEffect(() => {
    // Report initial page load time
    if (typeof window !== 'undefined' && window.performance) {
      const loadTime = performance.now() - startTime;
      console.log(`Initial page load time: ${loadTime.toFixed(2)}ms`);
      
      // Report to analytics or monitoring in production
      // if (process.env.NODE_ENV === 'production') { ... }
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/project/:id" component={ProjectDetailPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/service/furniture" component={FurnitureCatalogPage} />
        <Route path="/service/:id" component={ServiceDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
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
