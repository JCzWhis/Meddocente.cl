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
                                Este sitio web es operado por ReumaIndex, desarrollado por el Dr. Cruz bajo la marca MedDocenteIA.
                                El contenido disponible en esta plataforma tiene fines exclusivamente educativos e informativos
                                dirigidos a profesionales de la salud, especialmente reumatólogos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Propiedad Intelectual</h2>
                            <p>
                                Todo el contenido, incluyendo textos, gráficos, logotipos, imágenes, clips de audio y software,
                                es propiedad de ReumaIndex / MedDocenteIA o de sus proveedores de contenido y está protegido por las leyes
                                internacionales de derechos de autor.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Limitación de Responsabilidad</h2>
                            <p>
                                La información proporcionada en ReumaIndex y en esta plataforma no constituye consejo médico profesional, diagnóstico o tratamiento.
                                Los profesionales de la salud deben ejercer su propio juicio clínico. ReumaIndex no se hace responsable
                                por el uso indebido de la información aquí contenida. La app es una herramienta de apoyo en la decisión clínica,
                                no un sustituto del criterio médico.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Privacidad de Datos - Sitio Web</h2>
                            <p>
                                Respetamos su privacidad. Si se comunica con nosotros a través de correo electrónico, utilizaremos su dirección
                                únicamente para responder a su consulta. No compartimos, vendemos ni alquilamos su información personal a terceros.
                                Este sitio puede utilizar cookies para mejorar la experiencia del usuario.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Privacidad de Datos - App ReumaIndex</h2>
                            <div className="space-y-4">
                                <p>
                                    La privacidad de los datos clínicos y de pacientes es crítica. ReumaIndex implementa un modelo de privacidad local
                                    que protege completamente su información.
                                </p>

                                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 space-y-3">
                                    <h3 className="font-semibold text-cyan-900">✓ Sin Nube</h3>
                                    <p>
                                        Todos los datos de cálculos, anotaciones clínicas y información de pacientes se almacenan <strong>exclusivamente en tu dispositivo</strong>.
                                        Ningún dato sale de tu teléfono o tablet hacia servidores remotos.
                                    </p>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
                                    <h3 className="font-semibold text-blue-900">✓ Sin Cuentas de Usuario</h3>
                                    <p>
                                        No requiere registro, login ni cuenta de usuario. No necesitas proporcionar tu nombre, email,
                                        institución o cualquier información personal para usar la app.
                                    </p>
                                </div>

                                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 space-y-3">
                                    <h3 className="font-semibold text-teal-900">✓ Reportes Seguros</h3>
                                    <p>
                                        Los reportes se generan como archivos PDF directamente en tu dispositivo.
                                        Puedes compartirlos a través de canales seguros que tú controles (email seguro, mensajería encriptada, etc.).
                                    </p>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-3">
                                    <h3 className="font-semibold text-amber-900">📊 Analytics Anónimo</h3>
                                    <p>
                                        La app utiliza Firebase Analytics de Google para recopilar estadísticas de uso <strong>completamente anónimas</strong>.
                                        Esto nos ayuda a mejorar la app (botones más usados, crashes, versiones usadas) sin identificar usuarios.
                                        No recopilamos datos clínicos ni información de pacientes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contacto</h2>
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
