import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Lock, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Layout from "@/components/Layout";

const Recursos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout currentPage="recursos">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-slate-900 mb-6">
            Recursos Clínicos
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Biblioteca de infografías, resúmenes y guías clínicas simplificadas.
            Herramientas diseñadas para el uso rápido en la práctica diaria.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
              <Search size={20} />
            </div>
            <Input
              type="text"
              placeholder="Buscar por tema, especialidad o patología..."
              className="pl-10 py-6 text-lg bg-white border-slate-200 shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Content Section - Work in Progress state for now based on previous file content */}
      <section className="py-20 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Featured Projects - ReumaIndex Spotlight */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 pl-3 border-l-8 border-teal-500">Software Médico</h2>

            {/* ReumaIndex Full Width Card */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side */}
                <div className="lg:w-2/5 bg-gradient-to-br from-teal-500 to-emerald-700 relative overflow-hidden min-h-[300px] flex items-center justify-center p-10">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                  <div className="text-center relative z-10 text-white animate-in zoom-in duration-700">
                    <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2 drop-shadow-lg">Reuma<span className="font-light">Index</span></div>
                    <p className="text-teal-50 text-lg font-medium tracking-wide bg-black/20 px-4 py-1 rounded-full inline-block backdrop-blur-sm">
                      Calculadoras Clínicas
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-white text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Clock size={12} className="text-orange-500 animate-pulse" />
                    PRÓXIMAMENTE
                  </div>
                </div>

                {/* Content Side */}
                <CardContent className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                    ReumaIndex App
                  </h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    La aplicación móvil definitiva para el reumatólogo moderno. Accede rápidamente a calculadoras validadas de
                    <span className="font-semibold text-slate-800"> DAS28, SDAI, CDAI</span> y criterios de clasificación <span className="font-semibold text-slate-800">ACR/EULAR</span> directamente desde tu bolsillo.
                    <br /><span className="text-sm text-slate-500 mt-2 block">Más información en <span className="font-medium text-teal-600">Reumaindex.com</span></span>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Criterios Completos</h4>
                        <p className="text-xs text-slate-500 mt-1">Lupus, Artritis, Vasculitis y más.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Lock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">100% Offline</h4>
                        <p className="text-xs text-slate-500 mt-1">Tu práctica no se detiene.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto border-t border-slate-100 pt-8">
                    <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider mr-auto sm:mr-4">Disponible pronto en:</span>
                    <div className="flex gap-4 opacity-50 grayscale cursor-not-allowed" title="Próximamente">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-[2rem] p-12 text-center relative overflow-hidden">

            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl -ml-32 -mb-32 opacity-60"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-slate-400">
                <Clock size={32} />
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-4">Estamos construyendo algo genial</h2>
              <p className="text-slate-600 text-lg mb-8">
                Nuestra biblioteca de recursos está en pleno desarrollo. Muy pronto podrás acceder a decenas de documentos validados por especialistas.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600"><FileText size={18} /></div>
                  <span className="text-slate-700 font-medium">Guías GES Resumidas</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><FileText size={18} /></div>
                  <span className="text-slate-700 font-medium">Tablas de Dosis</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><FileText size={18} /></div>
                  <span className="text-slate-700 font-medium">Algoritmos de Urgencia</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><FileText size={18} /></div>
                  <span className="text-slate-700 font-medium">Flashcards de Estudio</span>
                </div>
              </div>

              <p className="text-slate-500 font-medium mb-4 text-sm">¿Te gustaría proponer un tema prioritario?</p>
              <div className="flex justify-center gap-4">
                <Link to="/contacto">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50">
                    Sugerir Contenido
                  </Button>
                </Link>
                <Link to="/apoyanos">
                  <Button className="bg-slate-900 text-white hover:bg-slate-800">
                    Ayudar a Acelerar el Proyecto
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Recursos;
