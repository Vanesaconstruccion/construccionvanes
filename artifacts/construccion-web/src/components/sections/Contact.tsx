import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
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
});

type ContactForm = z.infer<typeof contactSchema>;

const PROJECT_TYPES = [
  "Reforma Integral",
  "Albañilería y Acabados",
  "Montaje y Equipamiento",
  "Otro",
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { nombre: "", empresa: "", email: "", telefono: "", tipoProyecto: "", mensaje: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("idle");
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json() as { ok: boolean; error?: string };
      if (json.ok) {
        setStatus("success");
      } else {
        setErrorMsg(json.error ?? "Error al enviar. Inténtalo de nuevo.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Inténtalo de nuevo.");
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
                data-testid="contact-phone"
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
                data-testid="contact-email"
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
                data-testid="contact-address"
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
                    Hemos recibido tu consulta. Te responderemos en menos de 24 horas hábiles a través del correo o teléfono que nos has facilitado.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      {...register("nombre")}
                      className="rounded-none h-12"
                      data-testid="input-nombre"
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
                      data-testid="input-empresa"
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
                      data-testid="input-email"
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
                      data-testid="input-telefono"
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="tipoProyecto">Tipo de Proyecto *</Label>
                  <Select onValueChange={(val) => setValue("tipoProyecto", val)}>
                    <SelectTrigger className="rounded-none h-12" data-testid="select-tipo-proyecto">
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
                    data-testid="textarea-mensaje"
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje.message}</p>}
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
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Consulta <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario aceptas nuestra{" "}
                  <a href="#" className="text-accent hover:underline">Política de Protección de Datos</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
