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
import Investigacion from "./pages/Investigacion";
import IAGenerativa from "./pages/investigacion/IAGenerativa";
import EscrituraAcademica from "./pages/investigacion/EscrituraAcademica";
import BusquedaLiteratura from "./pages/investigacion/BusquedaLiteratura";
import BasesDeDatos from "./pages/investigacion/BasesDeDatos";
import GestionReferencias from "./pages/investigacion/GestionReferencias";
import RevisionesSistematicas from "./pages/investigacion/RevisionesSistematicas";

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
          <Route path="/investigacion" element={<Investigacion />} />
          <Route path="/investigacion/ia-generativa" element={<IAGenerativa />} />
          <Route path="/investigacion/escritura-academica" element={<EscrituraAcademica />} />
          <Route path="/investigacion/busqueda-literatura" element={<BusquedaLiteratura />} />
          <Route path="/investigacion/bases-de-datos" element={<BasesDeDatos />} />
          <Route path="/investigacion/gestion-referencias" element={<GestionReferencias />} />
          <Route path="/investigacion/revisiones-sistematicas" element={<RevisionesSistematicas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
