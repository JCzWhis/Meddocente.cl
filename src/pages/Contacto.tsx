import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto."
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
        variant: "destructive"
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="page-background min-h-screen relative overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <Header currentPage="contacto" />

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-14">
        <div className="container mx-auto max-w-4xl text-center">
          <Mail className="mx-auto mb-6 h-12 w-12 text-brand-secondary sm:h-16 sm:w-16" />
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Contáctanos
          </h1>
          <p className="mb-8 text-base text-gray-300 sm:text-lg md:text-xl">
            ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? 
            Nos encantaría escucharte. Estamos aquí para ayudarte y mejorar juntos.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 px-4 py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Contact Form */}
            <Card className="bg-brand-dark/80 border-brand-secondary/30 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-secondary flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Completa el formulario y te responderemos lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Nombre completo *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Dr. Juan Pérez" required className="mt-1 bg-white/10 border-brand-secondary/30 text-white placeholder-gray-500 focus:bg-white/20" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Correo electrónico *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="juan@hospital.cl" required className="mt-1 bg-white/10 border-brand-secondary/30 text-white placeholder-gray-500 focus:bg-white/20" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Asunto *</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Sugerencia de tema para podcast" required className="mt-1 bg-white/10 border-brand-secondary/30 text-white placeholder-gray-500 focus:bg-white/20" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Mensaje *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos tu idea, sugerencia o pregunta..." required className="mt-1 min-h-[120px] bg-white/10 border-brand-secondary/30 text-white placeholder-gray-500 focus:bg-white/20" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-dark">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              
              {/* Contact Methods */}
              

              {/* FAQ */}
              <Card className="bg-brand-dark/80 border-brand-primary/30 shadow-xl backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-brand-primary">Preguntas Frecuentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">¿Cómo puedo sugerir un tema?</h4>
                    <p className="text-sm text-gray-300">
                      Usa el formulario de contacto especificando el tema y especialidad. 
                      Revisamos todas las sugerencias y priorizamos según relevancia clínica.
                    </p>
                  </div>
                  
                  <div>
                    
                    
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">¿Cómo garantizan la calidad?</h4>
                    <p className="text-sm text-gray-300">Todo contenido IA es revisado por médicos antes de publicación. Seguimos protocolos estrictos de validación médica.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-brand-dark/80 border-brand-secondary/30 shadow-xl backdrop-blur-sm">
                
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contacto;
