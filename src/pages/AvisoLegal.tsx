import Layout from "@/components/Layout";
import { ScrollArea } from "@/components/ui/scroll-area";

const AvisoLegal = () => {
    return (
        <Layout currentPage="legal">
            <section className="bg-slate-50 pt-32 pb-20 min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold font-inter text-slate-900 mb-8">
                        Aviso Legal y Privacidad
                    </h1>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Información General</h2>
                            <p>
                                Este sitio web es operado por MedDocente.cl, liderado por el Dr. Cruz.
                                El contenido disponible en esta plataforma tiene fines exclusivamente educativos e informativos
                                dirigidos a profesionales de la salud y estudiantes de medicina.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Propiedad Intelectual</h2>
                            <p>
                                Todo el contenido, incluyendo textos, gráficos, logotipos, imágenes, clips de audio y software,
                                es propiedad de MedDocente.cl o de sus proveedores de contenido y está protegido por las leyes
                                internacionales de derechos de autor.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Limitación de Responsabilidad</h2>
                            <p>
                                La información proporcionada en MedDocente.cl no constituye consejo médico profesional, diagnóstico o tratamiento.
                                Los profesionales de la salud deben ejercer su propio juicio clínico. MedDocente.cl no se hace responsable
                                por el uso indebido de la información aquí contenida.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Privacidad de Datos</h2>
                            <p>
                                Respetamos su privacidad. Si se comunica con nosotros a través de correo electrónico, utilizaremos su dirección
                                únicamente para responder a su consulta. No compartimos, vendemos ni alquilamos su información personal a terceros.
                                Este sitio puede utilizar cookies para mejorar la experiencia del usuario.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contacto</h2>
                            <p>
                                Para cualquier duda legal o relacionada con el contenido, por favor contáctenos en:
                                <a href="mailto:contacto@drcruz.cl" className="text-brand-primary font-medium hover:underline ml-1">
                                    contacto@drcruz.cl
                                </a>
                            </p>
                        </section>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AvisoLegal;
