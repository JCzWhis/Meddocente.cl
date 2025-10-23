import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Headphones, Coffee, Mail, Users, Brain, Microscope, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen relative overflow-hidden" style={{
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
      <Header currentPage="inicio" />

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-left max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="mb-8">
                <h1 className="text-6xl font-inter font-bold mb-6 tracking-[0.05em]">
                  <span className="text-gray-200">Proyecto</span>
                  <br />
                  <span className="text-brand-secondary px-0 mx-0 font-extrabold text-7xl tracking-tight">
                    MedDocente
                  </span>
                  <span className="text-white">-IA</span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mb-6"></div>
                
                <p className="text-xl font-noto text-gray-200 mb-8 leading-relaxed">
                  <span className="text-brand-secondary font-semibold">Inteligencia Artificial</span> para 
                  <br />Educación Médica
                  <br />
                  <span className="text-sm text-gray-400 mt-2 block">Validado por médicos</span>
                </p>
                
                <div className="flex gap-4 flex-wrap">
                  <Link to="/podcast">
                    <Button size="lg" className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-dark hover:to-brand-primary text-white px-8 py-4 text-lg shadow-lg font-noto">
                      <Headphones className="mr-2 h-5 w-5" />
                      Escuchar Podcasts
                    </Button>
                  </Link>
                <Link to="/recursos">
                  <Button size="lg" variant="outline" className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-4 text-lg shadow-lg font-noto">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Ver Recursos
                  </Button>
                </Link>
                </div>
              </div>
            </div>

            {/* Right side - Logo with better background */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-fit">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/40 to-brand-primary/40 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-brand-primary/20 rounded-full"></div>
                <img src="/lovable-uploads/45d9b6b9-7abf-4164-b418-3fb00eece51c.png" alt="Logo MedDocente Grande" className="h-80 w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] object-contain select-none relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-dark/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-inter font-bold text-center text-white mb-12">
            ¿Por qué <span className="text-brand-secondary">MedDocente-IA</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-brand-dark/80 border-brand-secondary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-brand-secondary font-inter font-bold text-2xl">IA + Medicina</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center font-noto">
                  Combinamos inteligencia artificial de vanguardia con el rigor médico tradicional para crear contenido educativo de calidad superior.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-dark/80 border-brand-primary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-brand-secondary font-inter font-bold text-2xl">Validado por Médicos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center font-noto">
                  Todo nuestro contenido es revisado y validado por médicos para garantizar precisión y relevancia clínica.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-dark/80 border-brand-primary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-brand-primary to-brand-dark rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-brand-primary font-inter font-bold text-2xl">Siempre Actualizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center font-noto">
                  Contenido en constante evolución basado en la evidencia más reciente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Podcasts Preview */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-inter font-bold text-center text-white mb-12">
            Nuestros <span className="text-brand-secondary">Podcasts</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/podcast">
              <Card className="bg-brand-dark/80 border-brand-secondary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 backdrop-blur-sm cursor-pointer h-full">
                <CardHeader>
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 rounded-lg mb-4 relative overflow-hidden">
                    <div className="flex items-center justify-center mb-6">
                      <img src="/lovable-uploads/3cd49f6c-d886-470b-a86f-acc3a4926fef.png" alt="Reum-AI Logo" className="h-40 w-40 object-contain drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-3xl text-white font-inter font-bold text-center">Reum-AI</CardTitle>
                    <CardDescription className="text-blue-100 font-noto text-center text-lg mt-2">
                      Reumatología, evidencia y clínica
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-300 font-noto">Podcast especializado en reumatología que combina evidencia científica, generado con IA y revisado por médicos. Narrado por IA de última generación.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/podcast">
              <Card className="bg-brand-dark/80 border-brand-primary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 backdrop-blur-sm cursor-pointer h-full">
                <CardHeader>
                  <div className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white p-8 rounded-lg mb-4 relative overflow-hidden">
                    <div className="flex items-center justify-center mb-6">
                      <img src="/lovable-uploads/92e4789d-520b-43ec-9e90-07c3559516e3.png" alt="InternistA Logo" className="h-40 w-auto drop-shadow-lg object-fill" />
                    </div>
                    <CardTitle className="text-3xl text-white font-inter font-bold text-center">InternistA</CardTitle>
                    <CardDescription className="text-brand-light font-noto text-center text-lg mt-2">Medicina interna</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-300 font-noto">Enfoque práctico de medicina interna para médicos generales y especialistas, guías de manejo actualizadas. Narrado por IA.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/80 to-brand-secondary/80 text-white relative z-10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-inter font-bold mb-6">
            ¿Te gusta nuestro contenido?
          </h2>
          <p className="text-xl font-noto mb-8 opacity-90">Si este contenido te gusta, considera invitarnos un café ☕</p>
          <Link to="/apoyanos">
            <Button size="lg" className="bg-white text-brand-dark hover:bg-gray-100 px-8 py-3 shadow-lg font-noto">
              <Coffee className="mr-2 h-5 w-5" />
              Apoyar Proyecto
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>;
};

export default Index;
