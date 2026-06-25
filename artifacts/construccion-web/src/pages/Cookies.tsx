import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Cookies — Mivanjar Proyectos S.L.";
  }, []);

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <div className="prose prose-neutral dark:prose-invert max-w-none
          prose-h1:font-display prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight
          prose-h2:font-display prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10
          prose-h3:font-display prose-h3:text-lg prose-h3:font-semibold
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-li:my-1">

          <h1>Política de Cookies</h1>
          <p className="text-muted-foreground text-sm">Última actualización: 25 de junio de 2026</p>

          <p>Esta Política de Cookies explica qué son las Cookies y cómo las usamos. Debe leer esta política para poder entender qué tipo de cookies usamos, la información que recopilamos usando Cookies y cómo se usa esa información.</p>
          <p>Las cookies normalmente no contienen ninguna información que identifique personalmente a un usuario, pero la información personal que almacenamos sobre usted puede estar vinculada a la información almacenada en las cookies.</p>

          <h2>Interpretación y Definiciones</h2>
          <h3>Definiciones</h3>
          <ul>
            <li><strong>Empresa</strong> se refiere a mivanjarproyectos.sl, Calle Hacienda de Pavones, 12, Local.</li>
            <li><strong>Cookies</strong> son pequeños archivos que se colocan en su ordenador, dispositivo móvil u otro dispositivo por un sitio web y que contienen detalles de su historial de navegación en ese sitio web.</li>
            <li><strong>Sitio Web</strong> se refiere a Mivanjar Proyectos — Reformas Integrales, accesible desde <a href="https://www.mivanjarproyectossolucionessl.es/" target="_blank" rel="noopener noreferrer">https://www.mivanjarproyectossolucionessl.es/</a>.</li>
            <li><strong>Usted</strong> significa el individuo que accede o utiliza el Sitio Web.</li>
          </ul>

          <h2>El Uso de las Cookies</h2>
          <h3>Tipos de Cookies que Usamos</h3>
          <p>Las cookies pueden ser «Persistentes» o «de Sesión». Las Cookies persistentes permanecen en su ordenador cuando está desconectado, mientras que las Cookies de sesión se eliminan en cuanto cierra su navegador.</p>
          <p>Donde lo exija la ley, solicitaremos su consentimiento antes de utilizar Cookies que no sean estrictamente necesarias.</p>

          <p>Usamos los siguientes tipos de cookies:</p>
          <ul>
            <li>
              <strong>Cookies Necesarias / Esenciales</strong><br/>
              Tipo: Cookies de Sesión · Administradas por: Nosotros<br/>
              Propósito: Son esenciales para proporcionarle los servicios disponibles a través del Sitio Web. Sin estas cookies, los servicios que ha solicitado no pueden ser proporcionados.
            </li>
            <li>
              <strong>Cookies de Aceptación de Política de Cookies</strong><br/>
              Tipo: Cookies Persistentes · Administradas por: Nosotros<br/>
              Propósito: Identifican si los usuarios han aceptado el uso de cookies en el Sitio Web.
            </li>
            <li>
              <strong>Cookies de Funcionalidad</strong><br/>
              Tipo: Cookies Persistentes · Administradas por: Nosotros<br/>
              Propósito: Nos permiten recordar las elecciones que hace cuando utiliza el Sitio Web, como recordar sus preferencias de idioma.
            </li>
          </ul>

          <h3>Sus Opciones Respecto a las Cookies</h3>
          <p>Si prefiere evitar el uso de Cookies en el Sitio Web, primero debe desactivar el uso de Cookies en su navegador y luego eliminar las cookies guardadas en su navegador asociadas a este sitio web.</p>
          <p>Instrucciones para gestionar cookies en los principales navegadores:</p>
          <ul>
            <li><a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>

          <h3>Cambios en esta Política de Cookies</h3>
          <p>Podemos actualizar nuestra Política de Cookies periódicamente. La fecha de «Última actualización» al principio indica cuándo fue revisada por última vez.</p>

          <h3>Contacto</h3>
          <p>Si tiene alguna pregunta sobre esta Política de Cookies, puede contactarnos:</p>
          <ul>
            <li>Por correo electrónico: <a href="mailto:mivanjarproyectos.sl@gmail.com">mivanjarproyectos.sl@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
