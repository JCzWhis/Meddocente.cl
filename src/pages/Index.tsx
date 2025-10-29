import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Headphones, Coffee, Mail, Users, Brain, Microscope, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="page-background min-h-screen relative overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Floating Medical Icons */}
      <div className="pointer-events-none absolute top-20 left-10 hidden lg:block opacity-10 z-10">
        <Heart className="h-16 w-16 text-brand-secondary animate-pulse" />
      </div>
      <div className="pointer-events-none absolute top-40 right-20 hidden lg:block opacity-10 z-10">
        <Microscope className="h-12 w-12 text-brand-primary animate-bounce" />
      </div>
      <div className="pointer-events-none absolute bottom-40 left-20 hidden lg:block opacity-10 z-10">
        <Brain className="h-14 w-14 text-brand-secondary animate-pulse" />
      </div>

      {/* Header */}
      <Header currentPage="inicio" />

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-16 sm:py-20">
        <div className="container mx-auto relative z-10 max-w-6xl text-left">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left side - Text content */}
            <div>
              <div className="mb-10">
                <h1 className="mb-6 text-4xl font-inter font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
                  <span className="block text-gray-200">Proyecto</span>
                  <span className="block font-extrabold tracking-tight text-brand-secondary text-5xl sm:text-6xl md:text-7xl">
                    MedDocente
                  </span>
                  <span className="text-white">-IA</span>
                </h1>

                <div className="mb-6 h-1 w-24 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>

                <p className="mb-8 text-base font-noto leading-relaxed text-gray-200 sm:text-lg md:text-xl">
                  <span className="text-brand-secondary font-semibold">Inteligencia Artificial</span> al servicio de la educación médica, validada por especialistas para acompañarte en tu práctica diaria.
                  <span className="mt-3 block text-sm text-gray-400">Recursos diseñados para ajustarse a cualquier dispositivo.</span>
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link to="/podcast">
                    <Button size="lg" className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-dark hover:to-brand-primary text-white px-8 py-4 text-lg shadow-lg font-noto sm:w-auto">
                      <Headphones className="mr-2 h-5 w-5" />
                      Escuchar Podcasts
                    </Button>
                  </Link>
                  <Link to="/recursos">
                    <Button size="lg" variant="outline" className="w-full border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-4 text-lg shadow-lg font-noto sm:w-auto">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Ver Recursos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side - Logo with better background */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-dark/40 to-brand-primary/40 blur-3xl"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-secondary/20 to-brand-primary/20"></div>
                <img
                  src="/lovable-uploads/45d9b6b9-7abf-4164-b418-3fb00eece51c.png"
                  alt="Logo MedDocente Grande"
                  className="relative z-10 mx-auto h-48 w-48 select-none object-contain sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[28rem] lg:w-[28rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-brand-dark/80 py-14 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-inter font-bold text-white sm:text-4xl">
            ¿Por qué <span className="text-brand-secondary">MedDocente-IA</span>?
          </h2>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
      <section className="relative z-10 px-4 py-14">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-inter font-bold text-white sm:text-4xl">
            Nuestros <span className="text-brand-secondary">Podcasts</span>
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
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
          <h2 className="mb-6 text-2xl font-inter font-bold sm:text-3xl">
            ¿Te gusta nuestro contenido?
          </h2>
          <p className="mb-8 text-base font-noto opacity-90 sm:text-lg md:text-xl">Si este contenido te gusta, considera invitarnos un café ☕</p>
          <Link to="/apoyanos">
            <Button size="lg" className="w-full bg-white text-brand-dark hover:bg-gray-100 px-8 py-3 shadow-lg font-noto sm:w-auto">
              <Coffee className="mr-2 h-5 w-5" />
              Apoyar Proyecto
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
