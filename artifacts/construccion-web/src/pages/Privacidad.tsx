import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidad — Mivanjar Proyectos S.L.";
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

          <h1>Política de Privacidad</h1>
          <p className="text-muted-foreground text-sm">Última actualización: 25 de junio de 2026</p>

          <p>Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de su información cuando utiliza el Servicio e informa sobre sus derechos de privacidad y cómo la ley le protege.</p>
          <p>Utilizamos sus Datos Personales para proporcionar y mejorar el Servicio. Al utilizar el Servicio, acepta la recopilación y el uso de información de acuerdo con esta Política de Privacidad.</p>

          <h2>Interpretación y Definiciones</h2>
          <h3>Interpretación</h3>
          <p>Las palabras cuya letra inicial está en mayúscula tienen significados definidos en las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.</p>
          <h3>Definiciones</h3>
          <p>A los efectos de esta Política de Privacidad:</p>
          <ul>
            <li><strong>Empresa</strong> (denominada «la Empresa», «Nosotros», «Nos» o «Nuestro» en esta Política) se refiere a MivanjarProyectos.SL, Calle Hacienda de Pavones, 12, Local.</li>
            <li><strong>Cookies</strong> son pequeños archivos que un sitio web coloca en su ordenador, dispositivo móvil u otro dispositivo y que contienen los detalles de su historial de navegación en ese sitio web.</li>
            <li><strong>País</strong> se refiere a: España.</li>
            <li><strong>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al Servicio, como un ordenador, un teléfono móvil o una tableta digital.</li>
            <li><strong>Datos Personales</strong> es cualquier información relacionada con una persona identificada o identificable.</li>
            <li><strong>Servicio</strong> se refiere al Sitio Web.</li>
            <li><strong>Proveedor de Servicios</strong> significa cualquier persona física o jurídica que procese datos en nombre de la Empresa.</li>
            <li><strong>Datos de Uso</strong> se refieren a datos recopilados automáticamente, generados por el uso del Servicio o desde la propia infraestructura del Servicio.</li>
            <li><strong>Sitio Web</strong> se refiere a Mivanjar Proyectos — Reformas Integrales, accesible desde <a href="https://www.mivanjarproyectossolucionessl.es/" target="_blank" rel="noopener noreferrer">https://www.mivanjarproyectossolucionessl.es/</a>.</li>
            <li><strong>Usted</strong> significa la persona que accede o utiliza el Servicio, o la empresa u otra entidad jurídica en nombre de la cual dicha persona accede o utiliza el Servicio.</li>
          </ul>

          <h2>Recopilación y Uso de sus Datos Personales</h2>
          <h3>Tipos de Datos Recopilados</h3>
          <h4>Datos Personales</h4>
          <p>Al utilizar nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal que puede incluir, entre otras:</p>
          <ul>
            <li>Dirección de correo electrónico</li>
            <li>Nombre y apellidos</li>
            <li>Número de teléfono</li>
          </ul>

          <h4>Datos de Uso</h4>
          <p>Los Datos de Uso se recopilan automáticamente cuando se utiliza el Servicio y pueden incluir información como la dirección IP de su dispositivo, el tipo de navegador, las páginas del Servicio que visita, la hora y fecha de su visita y el tiempo que pasa en esas páginas.</p>

          <h4>Tecnologías de Seguimiento y Cookies</h4>
          <p>Utilizamos Cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio. Para más información, consulte nuestra <Link href="/cookies">Política de Cookies</Link>.</p>

          <h3>Uso de sus Datos Personales</h3>
          <p>La Empresa puede utilizar los Datos Personales para los siguientes fines:</p>
          <ul>
            <li><strong>Para proporcionar y mantener nuestro Servicio.</strong></li>
            <li><strong>Para contactarle</strong> mediante correo electrónico, llamadas telefónicas u otras formas equivalentes de comunicación electrónica.</li>
            <li><strong>Para gestionar sus solicitudes:</strong> atender y gestionar sus peticiones dirigidas a nosotros.</li>
          </ul>

          <h3>Conservación de sus Datos Personales</h3>
          <p>La Empresa conservará sus Datos Personales solo durante el tiempo necesario para los fines establecidos en esta Política de Privacidad. Los datos del formulario de contacto se conservarán durante el tiempo necesario para atender su solicitud y, en cualquier caso, no más de 2 años salvo obligación legal.</p>

          <h3>Transferencia de sus Datos Personales</h3>
          <p>Sus datos no se transferirán a terceros países fuera del Espacio Económico Europeo sin garantías adecuadas de protección.</p>

          <h3>Eliminación de sus Datos Personales</h3>
          <p>Tiene derecho a solicitar que eliminemos los Datos Personales que hayamos recopilado sobre usted. Puede ejercer este derecho contactándonos en <a href="mailto:mivanjarproyectos.sl@gmail.com">mivanjarproyectos.sl@gmail.com</a>.</p>

          <h3>Sus Derechos (RGPD)</h3>
          <p>En virtud del Reglamento General de Protección de Datos (RGPD), usted tiene derecho a:</p>
          <ul>
            <li>Acceso a sus datos personales</li>
            <li>Rectificación de datos inexactos</li>
            <li>Supresión («derecho al olvido»)</li>
            <li>Limitación del tratamiento</li>
            <li>Portabilidad de los datos</li>
            <li>Oposición al tratamiento</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, contáctenos en <a href="mailto:mivanjarproyectos.sl@gmail.com">mivanjarproyectos.sl@gmail.com</a>. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

          <h2>Seguridad de sus Datos Personales</h2>
          <p>La seguridad de sus Datos Personales es importante para nosotros. Utilizamos medios técnicos y organizativos adecuados para proteger sus datos, aunque ningún método de transmisión por Internet es 100% seguro.</p>

          <h2>Cambios en esta Política de Privacidad</h2>
          <p>Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política en esta página y actualizando la fecha de «Última actualización».</p>

          <h2>Contacto</h2>
          <p>Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:</p>
          <ul>
            <li>Por correo electrónico: <a href="mailto:mivanjarproyectos.sl@gmail.com">mivanjarproyectos.sl@gmail.com</a></li>
            <li>Por teléfono: <a href="tel:632522324">632 522 324</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
