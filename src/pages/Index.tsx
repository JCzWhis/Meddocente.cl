import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Dna, Pill, BookOpen, Activity, Heart, Wifi, Star, ArrowRight, Brain, Stethoscope, CheckCircle2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout currentPage="inicio">
      {/* Hero Section - ReumaIndex App Focus */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 -z-10 w-1/3 h-2/3 bg-cyan-200/20 rounded-br-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-300/30 text-cyan-700 text-sm font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
                </span>
                50 Calculadoras • 24 Criterios • 62 Fármacos
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-inter tracking-tight text-slate-900 leading-[1.1]">
                Más que solo una <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  calculadora
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 font-noto leading-relaxed max-w-xl">
                Herramienta médica integral con calculadoras avanzadas, criterios de clasificación, paneles de autoanticuerpos y guías clínicas para reumatólogos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://play.google.com/store/apps/details?id=com.reumaindex.app" target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-lg rounded-xl shadow-lg shadow-cyan-600/20 bg-cyan-600 hover:bg-cyan-700 transition-all hover:-translate-y-1">
                    <Download className="mr-2.5 h-5 w-5" />
                    Google Play
                  </Button>
                </a>
                <a href="https://apps.apple.com/cl/app/reumaindex/id1234567890" target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-lg rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 transition-all">
                    App Store
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual/Image Content */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/app_icon.png"
                alt="ReumaIndex App"
                className="relative z-10 w-full max-w-sm mx-auto animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10 drop-shadow-xl"
              />

              {/* Floating Cards */}
              <div className="absolute top-10 right-0 lg:-right-4 p-4 glass rounded-2xl animate-bounce shadow-xl hidden sm:block" style={{ animationDuration: '3s' }}>
                <Calculator className="h-8 w-8 text-cyan-600" />
              </div>
              <div className="absolute bottom-20 left-0 lg:-left-8 p-4 glass rounded-2xl animate-bounce shadow-xl hidden sm:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Activity className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-slate-900 mb-6">
              Diseñada para mejorar la toma de decisiones
            </h2>
            <p className="text-slate-600 text-lg">
              Herramientas optimizadas para reducir la carga cognitiva en el punto de atención.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-cyan-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-600/10 flex items-center justify-center mb-6 text-cyan-600">
                  <Calculator size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Scores de Actividad</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  DAS28, SDAI, CDAI, DAPSA, ASDAS con interpretación clínica inmediata.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-blue-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 text-blue-600">
                  <Dna size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Paneles de Anticuerpos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  9 paneles con 50+ anticuerpos. ENA, Miositis, Esclerosis, ANCA.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-teal-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-teal-600/10 flex items-center justify-center mb-6 text-teal-600">
                  <Pill size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Vademécum Farmacológico</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  62 fármacos con dosificación y ajustes en situaciones especiales.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-indigo-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center mb-6 text-indigo-600">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Criterios de Clasificación</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  24 criterios EULAR/ACR actualizados para AR, LES, Esclerodermia.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-amber-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-600/10 flex items-center justify-center mb-6 text-amber-600">
                  <Heart size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Guías Clínicas</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enlaces directos a las guías más recientes de principales sociedades.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-orange-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6 text-orange-600">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Ley Ricarte Soto</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Formularios y criterios GES/Ricarte Soto siempre a mano.
                </p>
              </CardContent>
            </Card>

            {/* Feature 7 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-green-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center mb-6 text-green-600">
                  <Wifi size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Funcionamiento Offline</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Acceso sin conexión. Ideal para entornos hospitalarios.
                </p>
              </CardContent>
            </Card>

            {/* Feature 8 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-rose-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-rose-600/10 flex items-center justify-center mb-6 text-rose-600">
                  <Star size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Favoritos Inteligentes</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Acceso directo a tus herramientas más utilizadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-inter text-slate-900">
                Tu Privacidad es lo Primero
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ReumaIndex está construida bajo un modelo de privacidad local. Tus datos de pacientes y análisis clínicos nunca salen de tu dispositivo.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Sin Nube</h3>
                    <p className="text-slate-600">Tus datos nunca salen de tu dispositivo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Sin Cuentas</h3>
                    <p className="text-slate-600">No necesitas registrarte ni compartir datos personales.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Reportes Seguros</h3>
                    <p className="text-slate-600">Genera PDFs profesionales para compartir por canales seguros.</p>
                  </div>
                </div>
              </div>

              <Link to="/aviso-legal">
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-2 rounded-lg mt-4">
                  Leer Política Completa
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl h-96 flex items-center justify-center text-white text-6xl">
              🔒
            </div>
          </div>
        </div>
      </section>

      {/* Platform Ecosystem */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-inter text-slate-900 mb-6">
              Ecosistema de Herramientas Médicas
            </h2>
            <p className="text-slate-600 text-lg">
              ReumaIndex es solo el comienzo. Accede a recursos educativos, investigación y software desarrollados por MedDocenteIA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Podcast Card */}
            <Link to="/podcast" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                  <img
                    src="/reumai_logo.jpg"
                    alt="Reum-AI"
                    className="w-32 h-32 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-cyan-600 text-sm font-semibold mb-2">PODCAST</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    Reum-AI
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    Reumatología + inteligencia artificial. Casos, novedades y guías clínicas actualizadas.
                  </p>
                  <div className="flex items-center text-cyan-600 font-semibold mt-4">
                    Escuchar <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Investigación Card */}
            <Link to="/investigacion" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-5xl">
                  🔬
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-indigo-600 text-sm font-semibold mb-2">RECURSOS</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    Investigación
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    Directorio curado de herramientas IA para investigación médica y escritura académica.
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold mt-4">
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* CapiChile Card */}
            <Link to="/capichile" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-5xl">
                  🔬
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-amber-600 text-sm font-semibold mb-2">SOFTWARE</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    CapiChile
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    Herramienta de capillaroscopia para reumatólogos. Windows y macOS.
                  </p>
                  <div className="flex items-center text-amber-600 font-semibold mt-4">
                    Descargar <ArrowRight className="ml-2 h-4 w-4" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
              {/* Gradient Splash */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/30 via-slate-800 to-blue-600/20 opacity-100"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-4xl">☕</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-inter text-white mb-6 tracking-tight">
                Apoya el Desarrollo
              </h2>

              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                ReumaIndex y todas nuestras herramientas son gratuitas. Tu aporte nos ayuda a costear servidores y desarrollo.
              </p>

              <Link to="/apoyanos">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-7 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-400/30">
                  Invítanos un Café
                  <ArrowRight className="ml-2 h-5 w-5 text-cyan-600" />
                </Button>
              </Link>

              <p className="mt-6 text-slate-300 text-sm font-medium">
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
