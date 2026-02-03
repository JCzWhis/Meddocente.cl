import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Lock, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Recursos = () => {
  return (
    <Layout currentPage="recursos">
      {/* Hero Section */}
      <section className="bg-brand-light pt-32 pb-16 min-h-[85vh]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-brand-dark mb-6">
            Recursos Clínicos
          </h1>
          <div className="text-left mt-8">
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
                  <div className="absolute top-6 left-6 bg-white text-brand-secondary text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Clock size={12} className="text-orange-500 animate-pulse" />
                    PRÓXIMAMENTE
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    ReumaIndex App
                  </h3>
                  <p className="text-brand-accent text-lg mb-8 leading-relaxed">
                    La aplicación móvil definitiva para el reumatólogo moderno. Accede rápidamente a calculadoras validadas de
                    <span className="font-semibold text-brand-secondary"> DAS28, SDAI, CDAI</span> y criterios de clasificación <span className="font-semibold text-brand-secondary">ACR/EULAR</span> directamente desde tu bolsillo.
                    <br /><span className="text-sm text-brand-accent/70 mt-2 block">Más información en <span className="font-medium text-brand-primary">Reumaindex.com</span></span>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm">Criterios Completos</h4>
                        <p className="text-xs text-brand-accent/70 mt-1">Lupus, Artritis, Vasculitis y más.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0">
                        <Lock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-sm">100% Offline</h4>
                        <p className="text-xs text-brand-accent/70 mt-1">Tu práctica no se detiene.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center gap-4 mt-auto border-t border-brand-accent/10 pt-8">
                    <span className="text-brand-accent/60 text-sm font-semibold uppercase tracking-wider mr-auto xl:mr-4">Disponible pronto en:</span>
                    <div className="flex flex-wrap gap-4 opacity-50 grayscale cursor-not-allowed">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recursos;
