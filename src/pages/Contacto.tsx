import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
          title: "¡Mensaje Enviado!",
          description: "Gracias por escribirnos. Te responderemos a la brevedad.",
          className: "bg-green-50 border-green-200 text-green-900"
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
          description: "Hubo un problema al enviar. Por favor intenta directamente al email.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error de conexión",
        description: "Revisa tu conexión a internet e intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout currentPage="contacto">
      <section className="bg-slate-50 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold font-inter text-slate-900 mb-6">
            Hablemos
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            ¿Tienes dudas, sugerencias o propuestas de colaboración?
            Completa el formulario y nuestro equipo te contactará.
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden order-2 lg:order-1">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 w-full"></div>
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                        className="bg-slate-50 border-slate-200 focus:bg-white h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tucorreo@ejemplo.com"
                        required
                        className="bg-slate-50 border-slate-200 focus:bg-white h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-700 font-medium">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿Sobre qué quieres hablar?"
                      required
                      className="bg-slate-50 border-slate-200 focus:bg-white h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                      className="bg-slate-50 border-slate-200 focus:bg-white min-h-[150px] resize-none p-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg rounded-xl font-medium shadow-lg shadow-slate-900/10 transition-all"
                  >
                    {isSubmitting ? "Enviando..." : (
                      <span className="flex items-center gap-2">Enviar Mensaje <Send size={18} /></span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Side */}
            <div className="space-y-8 order-1 lg:order-2 pt-10">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" /> Tiempo de respuesta
                </h3>
                <p className="text-blue-800/80 leading-relaxed">
                  Solemos responder en un plazo de 24 a 48 horas hábiles. Revisamos cada mensaje personalmente.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Preguntas Frecuentes</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">¿Cómo sugiero un tema?</h4>
                    <p className="text-slate-600 text-sm">
                      Utiliza el formulario seleccionando "Sugerencia de contenido" en el asunto.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">¿Quieren colaborar?</h4>
                    <p className="text-slate-600 text-sm">
                      Estamos abiertos a colaboraciones con instituciones académicas y médicas. Escríbenos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-sm bg-white px-4 py-2 rounded-full w-fit shadow-sm border border-slate-100">
                <Mail size={16} /> contacto@meddocente.cl
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
