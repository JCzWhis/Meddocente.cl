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
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-light to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 -z-10 w-1/3 h-2/3 bg-brand-tertiary/20 rounded-br-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-brand-tertiary/30 text-brand-secondary text-sm font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                IA Generativa + Validación Médica
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-inter tracking-tight text-brand-dark leading-[1.1]">
                Innovación Médica <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-primary">
                  Digital
                </span>
              </h1>

              <p className="text-lg md:text-xl text-brand-accent font-noto leading-relaxed max-w-xl">
                Plataforma de innovación médica. Creamos soluciones digitales para la prática clínica diaria y el aprendizaje de la medicina.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/podcast">
                  <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-lg rounded-xl shadow-lg shadow-brand-primary/20 bg-brand-secondary hover:bg-brand-secondary/90 transition-all hover:-translate-y-1">
                    <Headphones className="mr-2.5 h-5 w-5" />
                    Escuchar Gratis
                  </Button>
                </Link>
                <Link to="/recursos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-lg rounded-xl border-slate-200 text-brand-accent hover:bg-brand-light hover:text-brand-secondary transition-all">
                    Explorar Recursos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual/Image Content */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-brand-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/hero_logo_new.png"
                alt="MedDocente App Interface"
                className="relative z-10 w-full max-w-lg mx-auto animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10"
              />

              {/* Floating Cards */}
              <div className="absolute top-10 right-0 lg:-right-4 p-4 glass rounded-2xl animate-bounce shadow-xl hidden sm:block" style={{ animationDuration: '3s' }}>
                <Brain className="h-8 w-8 text-brand-secondary" />
              </div>
              <div className="absolute bottom-20 left-0 lg:-left-8 p-4 glass rounded-2xl animate-bounce shadow-xl hidden sm:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Activity className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-brand-dark mb-6">
              Innovación en <span className="text-brand-primary">Salud Digital</span>
            </h2>
            <p className="text-brand-accent text-lg">
              Desarrollamos ecosistemas digitales que potencian la práctica clínica. Desde educación continua en audio hasta herramientas de software para la toma de decisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-brand-light">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-tertiary/10 flex items-center justify-center mb-6 text-brand-tertiary">
                  <Brain size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">IA Clínica</h3>
                <p className="text-brand-accent leading-relaxed">
                  Integramos inteligencia artificial en nuestros desarrollos para optimizar procesos, desde el resumen de evidencia hasta calculadoras avanzadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-brand-light">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Software Médico</h3>
                <p className="text-brand-accent leading-relaxed">
                  Creamos aplicaciones móviles nativas (como ReumaIndex) diseñadas para resolver problemas reales en el punto de atención (Point-of-Care).
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-brand-light">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mb-6 text-brand-secondary">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Educación Continua</h3>
                <p className="text-brand-accent leading-relaxed">
                  Podcasts de alta calidad técnica y editorial. Mantenemos a la comunidad médica actualizada con formatos ágiles y accesibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Podcasts Preview */}
      <section className="py-24 bg-brand-light border-y border-brand-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-brand-primary font-semibold tracking-wide uppercase text-sm">Escúchanos donde quieras</span>
              <h2 className="text-3xl md:text-4xl font-bold font-inter text-brand-dark mt-2">
                Nuestros Podcasts
              </h2>
            </div>
            <Link to="/podcast">
              <Button variant="ghost" className="text-brand-secondary hover:text-brand-secondary hover:bg-brand-primary/10 group font-semibold">
                Ver todos los episodios <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Podcast Card 1 */}
            <Link to="/podcast" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-light flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 p-6 flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-tertiary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <img
                    src="/reumai_logo.jpg"
                    alt="Reum-AI Cover"
                    className="w-48 h-48 object-contain drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-secondary text-sm font-bold rounded-full">Reumatología</span>
                    <span className="text-brand-accent/70 text-sm font-medium">Temporada 1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">Reum-AI</h3>
                  <p className="text-brand-accent text-lg mb-6 leading-relaxed">
                    La convergencia entre la reumatología clínica y la inteligencia artificial. Casos, novedades y guías clínicas actualizadas al día.
                  </p>
                  <div className="mt-auto flex items-center text-base font-semibold text-brand-secondary">
                    Escuchar ahora <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center ml-3"><ArrowRight size={16} /></div>
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
            <div className="absolute inset-0 bg-brand-dark">
              {/* Gradient Splash */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-secondary/40 via-brand-dark to-brand-primary/20 opacity-100"></div>
              {/* Animated Glow */}
              <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-tertiary/20 via-transparent to-transparent animate-spin-slow duration-[20s]"></div>
            </div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-4xl">☕</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-inter text-white mb-6 tracking-tight">
                Impulsa la <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-tertiary">Educación Médica</span>
              </h2>

              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                MedDocente es un proyecto independiente y gratuito. Tu aporte nos ayuda a costear servidores, herramientas de IA y horas de desarrollo.
              </p>

              <Link to="/apoyanos">
                <Button size="lg" className="bg-white text-brand-dark hover:bg-brand-light px-10 py-7 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-brand-primary/30">
                  Invítanos un Café
                  <ArrowRight className="ml-2 h-5 w-5 text-brand-secondary" />
                </Button>
              </Link>

              <p className="mt-6 text-brand-accent/80 text-sm font-medium">
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
