import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Calendar, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Recursos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["Todos", "Reumatología", "Medicina Interna", "Infografías", "Guías Clínicas", "Casos Clínicos"];
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="page-background min-h-screen relative overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <Header currentPage="recursos" />

      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        
      </section>

      {/* Categories */}
      

      {/* Coming Soon Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-brand-dark/60 backdrop-blur-sm rounded-2xl p-12 border border-brand-secondary/30">
            <div className="mb-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                
                <Users className="h-10 w-10 text-brand-primary sm:h-12 sm:w-12" />
                <TrendingUp className="h-10 w-10 text-brand-secondary sm:h-12 sm:w-12" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Recursos en Desarrollo
              </h2>
              
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 md:gap-6">
              
              
              
              
              
              
              
            </div>

            <div className="space-y-4">
              <p className="text-brand-secondary font-semibold font-noto">
                ¿Tienes algún tema específico que te gustaría que cubramos?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto">
                  
                </Link>
                <Link to="/apoyanos">
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Recursos;
