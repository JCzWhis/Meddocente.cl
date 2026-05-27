import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Lock, ArrowRight, BookOpen, Clock, Download, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";



const Recursos = () => {
  return (
    <Layout currentPage="recursos">
      {/* Hero Section */}
      <section className="bg-brand-light pt-32 pb-8">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-brand-dark mb-6">
            Recursos Clínicos
          </h1>
        </div>
      </section>



      {/* Software y Herramientas Clínicas */}
      <section className="bg-brand-light py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-brand-primary/10 w-10 h-10 rounded-xl flex items-center justify-center text-brand-primary">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-brand-dark">
              Software Médico
            </h2>
          </div>

          <div className="text-left">
            {/* ReumaIndex Full Width Card */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side */}
                <div className="lg:w-1/2 bg-gradient-to-br from-brand-secondary to-brand-tertiary relative overflow-hidden min-h-[300px] flex items-center justify-center p-8 md:p-10">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                  <div className="text-center relative z-10 text-white animate-in zoom-in duration-700 w-full px-2">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-2 drop-shadow-lg leading-tight">Reuma<span className="font-light">Index</span></div>
                    <p className="text-brand-light text-lg font-medium tracking-wide bg-black/20 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
                      Herramientas Clínicas
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    DISPONIBLE
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    ReumaIndex App
                  </h3>
                  <p className="text-brand-accent text-lg mb-8 leading-relaxed">
                    La aplicación móvil definitiva para el reumatólogo moderno. <strong>50 calculadoras</strong>, <strong>24 criterios EULAR/ACR</strong>, <strong>9 paneles de anticuerpos</strong> (50+ patrones) y <strong>62 fármacos</strong> con dosificación. Todo offline y sin cloud.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm">50 Calculadoras</h4>
                        <p className="text-xs text-brand-accent/70 mt-1">Scores de actividad validados.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                        <Lock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm">100% Offline</h4>
                        <p className="text-xs text-brand-accent/70 mt-1">Sin conexión a internet.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center gap-4 mt-auto border-t border-brand-accent/10 pt-8">
                    <span className="text-brand-accent/60 text-sm font-semibold uppercase tracking-wider mr-auto xl:mr-4">Descargar ahora:</span>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://play.google.com/store/apps/details?id=com.reumaindex.app" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src="/google-play-badge.svg" alt="Google Play" className="h-10" />
                      </a>
                      <a href="https://apps.apple.com/cl/app/reumaindex/id1234567890" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src="/app-store-badge.svg" alt="App Store" className="h-10" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* CapiChile Card */}
          <div className="text-left mt-8">
            <Link to="/capichile" className="group block">
              <Card className="border-none shadow-2xl bg-white overflow-hidden group">
                <div className="flex flex-col lg:flex-row">
                  {/* Visual Side */}
                  <div className="lg:w-1/2 bg-white border-r border-slate-100 relative overflow-hidden min-h-[300px] flex items-center justify-center p-8 md:p-10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <img
                      src="/Logo.png"
                      alt="CapiChile"
                      className="relative z-10 w-48 h-48 object-contain drop-shadow-sm transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Side */}
                  <CardContent className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">SOCHIRE</span>
                      <span className="text-brand-accent/70 text-sm font-medium">Grupo de Trabajo</span>
                    </div>
                    <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-red-600 transition-colors">
                      CapiChile
                    </h3>
                    <p className="text-brand-accent text-lg mb-8 leading-relaxed">
                      Herramienta de escritorio del Grupo de Trabajo de Capilaroscopía de la Sociedad Chilena de Reumatología. Disponible para
                      <span className="font-semibold text-brand-secondary"> Windows</span> y <span className="font-semibold text-brand-secondary">macOS</span>.
                    </p>
                    <div className="mt-auto flex items-center text-base font-semibold text-red-600">
                      <Download size={16} className="mr-2" />
                      Descargar software <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center ml-3"><ArrowRight size={16} /></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Recursos;
