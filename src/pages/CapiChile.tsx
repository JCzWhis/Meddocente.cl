import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Shield, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M11.5 4.35V11.5H3V5.557L11.5 4.35ZM3 12.5H11.5V19.65L3 18.443V12.5ZM12.5 4.2L21 3V11.5H12.5V4.2ZM21 12.5V21L12.5 19.8V12.5H21Z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const CapiChile = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl">
          {/* Logo + Badge */}
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl scale-110 opacity-60"></div>
              <img
                src="/Logo.png"
                alt="CapiChile - Sociedad Chilena de Reumatología"
                className="relative z-10 w-36 h-36 object-contain drop-shadow-lg"
              />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Sociedad Chilena de Reumatología
              </div>

              <h1 className="text-5xl sm:text-6xl font-black font-inter tracking-tight text-slate-800">
                Grupo de Trabajo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  CapiChile
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-noto">
                Herramienta de escritorio desarrollada en colaboración con el Grupo de Trabajo CapiChile. Disponible para Windows y macOS.
              </p>
            </div>
          </div>

          {/* Feature Pill */}
          <div className="flex justify-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm">
              <span className="text-red-500"><Shield size={14} /></span>
              Software validado clínicamente
            </span>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            {/* Windows Card */}
            <Card className="border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  <WindowsIcon />
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-slate-800">Windows</h2>
                  <p className="text-slate-500 text-sm">Compatible con Windows 10 y 11</p>
                </div>

                <div className="w-full space-y-2 text-left text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                    <span>v1.1.0 · Instalador .exe · 64-bit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                    <span>Instalación rápida y sencilla</span>
                  </div>
                </div>

                <a href="/downloads/CapiChile_Installer_v1.1.0.exe" download className="w-full" aria-label="Descargar para Windows">
                  <Button
                    size="lg"
                    className="w-full h-14 text-base rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-200 transition-all hover:shadow-blue-300"
                  >
                    <Download className="mr-2.5 h-5 w-5" />
                    Descargar para Windows
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Mac Card */}
            <Card className="border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-slate-600 to-slate-400"></div>
              <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-500 flex items-center justify-center text-white shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-300">
                  <AppleIcon />
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-slate-800">macOS</h2>
                  <p className="text-slate-500 text-sm">Compatible con macOS 12 Monterey o superior</p>
                </div>

                <div className="w-full space-y-2 text-left text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-slate-500 shrink-0" />
                    <span>v1.1.0 · Instalador .dmg · Apple Silicon & Intel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-slate-500 shrink-0" />
                    <span>Instalación nativa universal</span>
                  </div>
                </div>

                <a href="/downloads/CapiChile_1.1.0.dmg" download className="w-full" aria-label="Descargar para macOS">
                  <Button
                    size="lg"
                    className="w-full h-14 text-base rounded-xl bg-gradient-to-r from-slate-700 to-slate-500 hover:from-slate-800 hover:to-slate-600 text-white shadow-lg shadow-slate-200 transition-all hover:shadow-slate-300"
                  >
                    <Download className="mr-2.5 h-5 w-5" />
                    Descargar para macOS
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-slate-400 text-sm">
            Al descargar el software aceptas los{" "}
            <a href="/aviso-legal" className="underline hover:text-slate-600 transition-colors">
              términos y condiciones
            </a>
            . Software gratuito sin garantía de soporte técnico.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CapiChile;
