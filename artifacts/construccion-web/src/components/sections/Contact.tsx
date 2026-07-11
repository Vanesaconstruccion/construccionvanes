import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  empresa: z.string().optional(),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(9, "Introduce un teléfono válido"),
  tipoProyecto: z.string().min(1, "Selecciona el tipo de proyecto"),
  mensaje: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  privacidad: z.boolean().refine((v) => v === true, {
    message: "Debes aceptar la política de privacidad para continuar",
  }),
});

type ContactForm = z.infer<typeof contactSchema>;

const PROJECT_TYPES = [
  "Reforma Integral",
  "Albañilería y Acabados",
  "Montaje y Equipamiento",
  "Otro",
];

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      tipoProyecto: "",
      mensaje: "",
      privacidad: false,
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("idle");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMsg("Servicio de correo no configurado. Contacta directamente al 632 522 324.");
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre: data.nombre,
          empresa: data.empresa ?? "—",
          email: data.email,
          telefono: data.telefono,
          tipo_proyecto: data.tipoProyecto,
          mensaje: data.mensaje,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      reset();
    } catch {
      setErrorMsg("No se pudo enviar el mensaje. Inténtalo de nuevo o llámanos al 632 522 324.");
      setStatus("error");
    }
  };

  return (
    <section id="contacto" ref={ref} className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Hablemos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mt-3 mb-8">
              Cuéntanos<br />tu proyecto.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Analizamos cada consulta con rigor. Recibirás una respuesta personalizada en menos de 24 horas hábiles.
            </p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Teléfono</p>
                  <a href="tel:632522324" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                    632 522 324
                  </a>
                  <p className="text-sm text-muted-foreground mt-0.5">Lun–Sáb 8:30 – 21:00</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Correo Electrónico</p>
                  <a href="mailto:mivanjarproyectos.sl@gmail.com" className="text-lg font-medium text-foreground hover:text-accent transition-colors break-all">
                    mivanjarproyectos.sl@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Dónde Encontrarnos</p>
                  <address className="not-italic text-lg font-medium text-foreground">
                    Calle Hacienda de Pavones, 12, Local
                  </address>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-6 py-20 border border-border bg-muted/30"
              >
                <CheckCircle className="w-16 h-16 text-accent" />
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2">Mensaje enviado</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Hemos recibido tu consulta. Te responderemos en menos de 24 horas hábiles.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-accent hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      {...register("nombre")}
                      className="rounded-none h-12"
                    />
                    {errors.nombre && <p className="text-xs text-destructive">{errors.nombre.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      placeholder="Nombre de empresa"
                      {...register("empresa")}
                      className="rounded-none h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      {...register("email")}
                      className="rounded-none h-12"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="600 000 000"
                      {...register("telefono")}
                      className="rounded-none h-12"
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="tipoProyecto">Tipo de Proyecto *</Label>
                  <Select onValueChange={(val) => setValue("tipoProyecto", val, { shouldValidate: true })}>
                    <SelectTrigger className="rounded-none h-12">
                      <SelectValue placeholder="Selecciona el tipo de proyecto" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROJECT_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.tipoProyecto && <p className="text-xs text-destructive">{errors.tipoProyecto.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos los detalles de tu reforma: tipo de espacio, metros aproximados, plazos, presupuesto orientativo..."
                    rows={5}
                    {...register("mensaje")}
                    className="rounded-none resize-none"
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje.message}</p>}
                </div>

                {/* Privacy checkbox */}
                <div className="space-y-1.5">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      {...register("privacidad")}
                      className="mt-0.5 w-4 h-4 shrink-0 accent-[hsl(var(--accent))] cursor-pointer"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      He leído y acepto la{" "}
                      <Link
                        href="/privacidad"
                        target="_blank"
                        className="text-accent hover:underline underline-offset-2 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        política de privacidad
                      </Link>{" "}
                      *
                    </span>
                  </label>
                  {errors.privacidad && (
                    <p className="text-xs text-destructive ml-7">{errors.privacidad.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-none h-14 text-base tracking-wide gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Enviar Consulta <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
