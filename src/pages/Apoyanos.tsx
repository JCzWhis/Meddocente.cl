import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, Share2, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Apoyanos = () => {
  return (
    <Layout currentPage="apoyanos">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-orange-500 shadow-xl shadow-orange-200">
            <Heart size={40} className="fill-current animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-slate-900 mb-6">
            Apoya Nuestro Proyecto
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            MedDocente es 100% gratuito y libre de publicidad invasiva.
            Tu aporte nos ayuda a mantener los servidores, pagar las herramientas de IA y seguir produciendo contenido de calidad.
          </p>

          <Button
            size="lg"
            onClick={() => window.open('https://buymeacoffee.com/meddocente', '_blank')}
            className="bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-slate-900 text-lg font-bold px-10 py-6 rounded-xl shadow-lg shadow-orange-500/20 transform hover:-translate-y-1 transition-all"
          >
            <Coffee className="mr-2.5 h-6 w-6" />
            Invítanos un Café
          </Button>
          <p className="mt-4 text-sm text-slate-400 font-medium">A través de Buy Me a Coffee (Seguro y Rápido)</p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">

            <Card className="border-none shadow-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <Share2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Difunde la voz</h3>
                <p className="text-slate-600 mb-8 flex-1">
                  Compartir nuestros podcasts con tus colegas, grupos de WhatsApp de becados o en tus redes sociales tiene un impacto gigante.
                </p>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-100 w-full" onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'MedDocente.cl',
                      text: 'Educación médica con IA',
                      url: window.location.origin
                    })
                  }
                }}>
                  Compartir ahora <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-cyan-50/50 hover:bg-cyan-50 transition-colors">
              <CardContent className="p-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Feedback Constructivo</h3>
                <p className="text-slate-600 mb-8 flex-1">
                  ¿Encontraste un error? ¿Tienes una idea para mejorar? Tu feedback nos ayuda a mantener el estándar de calidad alto.
                </p>
                <Link to="/contacto" className="w-full">
                  <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-100 w-full">
                    Enviar Sugerencia <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">¿Por qué necesitamos tu apoyo?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">IA</div>
              <h4 className="font-bold text-slate-800 mb-2">Costos de API</h4>
              <p className="text-sm text-slate-500">Los modelos de lenguaje avanzados (Vertex AI, Claude) tienen un costo por uso significativo.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <h4 className="font-bold text-slate-800 mb-2">Infraestructura</h4>
              <p className="text-sm text-slate-500">Mantenimiento de servidores, dominio y herramientas de desarrollo web.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">Free</div>
              <h4 className="font-bold text-slate-800 mb-2">Acceso Libre</h4>
              <p className="text-sm text-slate-500">Queremos mantener el conocimiento médico accesible sin muros de pago.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apoyanos;
