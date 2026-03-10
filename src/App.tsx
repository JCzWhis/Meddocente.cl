import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Podcast from "./pages/Podcast";
import Recursos from "./pages/Recursos";
import Apoyanos from "./pages/Apoyanos";
import Contacto from "./pages/Contacto";
import AvisoLegal from "./pages/AvisoLegal";
import NotFound from "./pages/NotFound";
import CapiChile from "./pages/CapiChile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/apoyanos" element={<Apoyanos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/capichile" element={<CapiChile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
