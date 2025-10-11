import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Heart, Users, BookOpen, ExternalLink, Brain, Microscope, Target, Lightbulb, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Apoyanos = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: `url('/lovable-uploads/10d04f23-d0a0-46cb-a28d-c386a6598d02.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Floating Medical Icons */}
      <div className="absolute top-20 left-10 opacity-10 z-10">
        <Heart className="h-16 w-16 text-brand-secondary animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 z-10">
        <Microscope className="h-12 w-12 text-brand-primary animate-bounce" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 z-10">
        <Brain className="h-14 w-14 text-brand-secondary animate-pulse" />
      </div>

      {/* Header */}
      <Header currentPage="apoyanos" />

      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Coffee className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-4xl font-inter font-bold text-white mb-6">
            Apoya Nuestro Proyecto
          </h1>
          <p className="text-xl font-noto text-gray-300 mb-8">
            Si este contenido te ayuda en tu práctica médica diaria, considera invitarnos un café ☕
            Tu apoyo nos permite seguir creando contenido educativo de calidad, gratuito y accesible para toda la comunidad médica.
          </p>
          
          
        </div>
      </section>

      {/* Support Options - Moved up */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl relative z-10">
          
          {/* Main CTA - Buy Me a Coffee */}
          <Card className="border-orange-800/30 shadow-xl mb-8 bg-brand-dark/50 backdrop-blur-sm">
            <CardContent className="text-center space-y-6 p-6">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg shadow-lg font-noto" onClick={() => window.open('https://buymeacoffee.com/meddocente', '_blank')}>
                <ExternalLink className="mr-2 h-5 w-5" />
                Apoyar en Buy Me a Coffee
              </Button>
              
              <p className="text-sm text-gray-400 font-noto">
                Pagos seguros procesados por Buy Me a Coffee
              </p>
            </CardContent>
          </Card>

          {/* Other ways to support */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-brand-dark/50 border-brand-primary/30 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-primary font-inter font-bold flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Compartir Contenido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 font-noto">
                  Comparte nuestros podcasts y recursos con colegas. El boca a boca 
                  es una forma invaluable de apoyo.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  
                  
                </div>
              </CardContent>
            </Card>

            <Card className="bg-brand-dark/50 border-brand-secondary/30 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-secondary font-inter font-bold flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Feedback & Sugerencias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 font-noto">
                  Comparte tus ideas, sugerencias de temas o feedback. 
                  Nos ayuda a mejorar constantemente.
                </p>
                <Link to="/contacto">
                  <Button variant="outline" className="w-full border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 font-noto">
                    Enviar Sugerencias
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Support Section - Moved down */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-inter font-bold text-white text-center mb-12">
            ¿Por qué apoyar MedDocente-IA?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
            <Card className="bg-brand-dark/50 border-brand-primary/30 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <Target className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle className="text-brand-primary font-inter">Contenido Especializado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-noto">
                  Creamos contenido educativo específico para cada especialidad médica, 
                  validado por profesionales expertos en cada área.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-dark/50 border-brand-secondary/30 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-brand-secondary mb-2" />
                <CardTitle className="text-brand-secondary font-inter">Innovación Constante</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-noto">
                  Utilizamos las últimas tecnologías de IA para mantenernos actualizados 
                  con los avances médicos más recientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      

      {/* Thank You */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/80 to-brand-secondary/80 text-white relative z-10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Heart className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-inter font-bold mb-6">
            ¡Gracias por Considerar Apoyarnos!
          </h2>
          <p className="text-xl font-noto mb-8 max-w-2xl mx-auto">
            Cada apoyo, sin importar su tamaño, nos ayuda a seguir construyendo 
            una comunidad médica más informada y conectada.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/podcast">
              
            </Link>
            <Link to="/contacto">
              
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Apoyanos;
