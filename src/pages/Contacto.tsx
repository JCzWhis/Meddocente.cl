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
  return (
    <Layout currentPage="contacto">
      <section className="bg-slate-50 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold font-inter text-slate-900 mb-6">
            Hablemos
          </h1>
          <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto">
            ¿Tienes dudas, sugerencias o propuestas de colaboración?
            Estamos encantados de escucharte.
          </p>

          <Card className="max-w-xl mx-auto border-none shadow-2xl bg-white rounded-3xl overflow-hidden mb-12">
            <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-secondary w-full"></div>
            <CardContent className="p-10 md:p-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-10 w-10 text-brand-primary" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Escríbenos directamente</h3>
              <p className="text-slate-500 mb-8">
                Te responderemos en un plazo de 24 a 48 horas hábiles.
              </p>

              <a
                href="mailto:contacto@drcruz.cl"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary hover:bg-brand-dark text-white rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-brand-secondary/30"
              >
                contacto@drcruz.cl <Send size={18} />
              </a>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> Sugerencias
              </h4>
              <p className="text-slate-600 text-sm">
                ¿Te gustaría ver algún tema específico? Envíanos tus ideas para nuevos recursos o episodios.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand-primary" /> Colaboraciones
              </h4>
              <p className="text-slate-600 text-sm">
                Estamos abiertos a alianzas con instituciones académicas y médicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
