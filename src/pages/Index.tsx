import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Using basic Card for custom styling
import { BookOpen, Headphones, ArrowRight, Brain, Stethoscope, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout currentPage="inicio">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 -z-10 w-1/3 h-2/3 bg-blue-50/50 rounded-br-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-sm font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                IA Generativa + Validación Médica
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-inter tracking-tight text-slate-900 leading-[1.1]">
                Innovación Médica <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Digital
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 font-noto leading-relaxed max-w-xl">
                Plataforma de innovación médica. Creamos podcasts clínicos con IA y desarrollamos software médico especializado para optimizar tu práctica diaria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/podcast">
                  <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-lg rounded-xl shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-1">
                    <Headphones className="mr-2.5 h-5 w-5" />
                    Escuchar Gratis
                  </Button>
                </Link>
                <Link to="/recursos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-lg rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all">
                    Explorar Recursos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual/Image Content */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/hero_logo.png"
                alt="MedDocente App Interface"
                className="relative z-10 w-full max-w-lg mx-auto animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10"
              />

              {/* Floating Cards */}
              <div className="absolute top-10 right-0 lg:-right-4 p-4 glass rounded-2xl animate-bounce shadow-xl hidden sm:block" style={{ animationDuration: '3s' }}>
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute bottom-20 left-0 lg:-left-8 p-4 glass rounded-2xl animate-bounce shadow-xl hidden sm:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Activity className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-slate-900 mb-6">
              Innovación en <span className="text-blue-600">Salud Digital</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Desarrollamos ecosistemas digitales que potencian la práctica clínica. Desde educación continua en audio hasta herramientas de software para la toma de decisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Brain size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">IA Clínica</h3>
                <p className="text-slate-600 leading-relaxed">
                  Integramos inteligencia artificial en nuestros desarrollos para optimizar procesos, desde el resumen de evidencia hasta calculadoras avanzadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-6 text-cyan-600">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Software Médico</h3>
                <p className="text-slate-600 leading-relaxed">
                  Creamos aplicaciones móviles nativas (como ReumaIndex) diseñadas para resolver problemas reales en el punto de atención (Point-of-Care).
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Educación Continua</h3>
                <p className="text-slate-600 leading-relaxed">
                  Podcasts de alta calidad técnica y editorial. Mantenemos a la comunidad médica actualizada con formatos ágiles y accesibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Podcasts Preview */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-cyan-600 font-semibold tracking-wide uppercase text-sm">Escúchanos donde quieras</span>
              <h2 className="text-3xl md:text-4xl font-bold font-inter text-slate-900 mt-2">
                Nuestros Podcasts
              </h2>
            </div>
            <Link to="/podcast">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group font-semibold">
                Ver todos los episodios <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Podcast Card 1 */}
            <Link to="/podcast" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 p-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <img
                    src="/reumai_logo.jpg"
                    alt="Reum-AI Cover"
                    className="w-48 h-48 object-contain drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">Reumatología</span>
                    <span className="text-slate-400 text-sm font-medium">Temporada 1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">Reum-AI</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    La convergencia entre la reumatología clínica y la inteligencia artificial. Casos, novedades y guías clínicas actualizadas al día.
                  </p>
                  <div className="mt-auto flex items-center text-base font-semibold text-blue-600">
                    Escuchar ahora <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ml-3"><ArrowRight size={16} /></div>
                  </div>
                  {/* Listen on badges - Optional addition for visuals */}
                  <div className="flex gap-4 mt-6 opacity-60 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-6 w-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Apple_Podcasts_Icon.svg" alt="Apple Podcasts" className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl group">
            {/* Background Container */}
            <div className="absolute inset-0 bg-slate-900">
              {/* Gradient Splash */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-slate-900 to-cyan-500/20 opacity-100"></div>
              {/* Animated Glow */}
              <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-spin-slow duration-[20s]"></div>
            </div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-4xl">☕</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-inter text-white mb-6 tracking-tight">
                Impulsa la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Educación Médica</span>
              </h2>

              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                MedDocente es un proyecto independiente y gratuito. Tu aporte nos ayuda a costear servidores, herramientas de IA y horas de desarrollo.
              </p>

              <Link to="/apoyanos">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 px-10 py-7 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                  Invítanos un Café
                  <ArrowRight className="ml-2 h-5 w-5 text-blue-600" />
                </Button>
              </Link>

              <p className="mt-6 text-slate-500 text-sm font-medium">
                Sin suscripciones mensuales. Solo un aporte único si te nace. ❤️
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
