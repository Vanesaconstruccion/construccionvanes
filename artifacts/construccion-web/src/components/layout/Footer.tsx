import { SiPinterest, SiInstagram } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-2xl tracking-tighter mb-6">
              CONSTRUYE<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Construyendo el futuro desde 2009. Arquitectura y construcción de precisión para proyectos que perduran.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiPinterest className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <span className="block text-sm text-primary-foreground/50 mb-1">Teléfono</span>
                <a href="tel:+34900000000" className="hover:text-accent transition-colors">+34 900 000 000</a>
              </li>
              <li>
                <span className="block text-sm text-primary-foreground/50 mb-1">Correo</span>
                <a href="mailto:info@construye.es" className="hover:text-accent transition-colors">info@construye.es</a>
              </li>
            </ul>
          </div>

          {/* Dónde encontrarnos */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 uppercase tracking-wider">Dónde Encontrarnos</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <span className="block text-sm text-primary-foreground/50 mb-1">Sede Central</span>
                <address className="not-italic">
                  Paseo de la Castellana, 45<br />
                  28046 Madrid, España
                </address>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Igualdad</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Construye S.L. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado con precisión.</p>
        </div>
      </div>
    </footer>
  );
}
