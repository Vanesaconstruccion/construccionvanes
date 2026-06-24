const LOGO_URL = "https://res.cloudinary.com/dwplp85za/image/upload/q_auto/f_auto/v1781630783/logo_empresa_de_construccion_mmfdiy.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand / Logo */}
          <div className="flex items-start justify-start">
            <img
              src={LOGO_URL}
              alt="Logo Mivanjar Proyectos"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <span className="block text-sm text-primary-foreground/50 mb-1">Teléfono</span>
                <a href="tel:632522324" className="hover:text-accent transition-colors">632 522 324</a>
              </li>
              <li>
                <span className="block text-sm text-primary-foreground/50 mb-1">Correo</span>
                <a href="mailto:mivanjarproyectos.sl@gmail.com" className="hover:text-accent transition-colors break-all">mivanjarproyectos.sl@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Dónde encontrarnos */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 uppercase tracking-wider">Dónde Encontrarnos</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <span className="block text-sm text-primary-foreground/50 mb-1">Dirección</span>
                <address className="not-italic">
                  Calle Hacienda de Pavones, 12, Local
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
          <p>&copy; {new Date().getFullYear()} Mivanjar Proyectos S.L. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado con precisión.</p>
        </div>
      </div>
    </footer>
  );
}
