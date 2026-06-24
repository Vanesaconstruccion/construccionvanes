import { Router } from "express";
import nodemailer from "nodemailer";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { nombre, empresa, email, telefono, tipoProyecto, mensaje } = req.body as Record<string, string>;

  if (!nombre || !email || !telefono || !tipoProyecto || !mensaje) {
    res.status(400).json({ ok: false, error: "Faltan campos obligatorios." });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    req.log.error("GMAIL_USER or GMAIL_APP_PASSWORD not configured");
    res.status(500).json({ ok: false, error: "Servicio de correo no configurado." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a2540">
      <h2 style="color:#1a2540;border-bottom:3px solid #1fb5c5;padding-bottom:10px">
        Nueva consulta desde la web
      </h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666;width:160px">Nombre</td><td style="padding:8px 0;font-weight:600">${nombre}</td></tr>
        ${empresa ? `<tr><td style="padding:8px 0;color:#666">Empresa</td><td style="padding:8px 0;font-weight:600">${empresa}</td></tr>` : ""}
        <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${email}" style="color:#1fb5c5">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666">Teléfono</td><td style="padding:8px 0;font-weight:600"><a href="tel:${telefono}" style="color:#1fb5c5">${telefono}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666">Tipo de proyecto</td><td style="padding:8px 0;font-weight:600">${tipoProyecto}</td></tr>
      </table>
      <h3 style="color:#1a2540;margin-top:24px">Mensaje</h3>
      <p style="background:#f4f6f9;padding:16px;border-left:4px solid #1fb5c5;white-space:pre-wrap">${mensaje}</p>
      <hr style="border:none;border-top:1px solid #eee;margin-top:32px"/>
      <p style="font-size:12px;color:#aaa">Mivanjar Proyectos S.L. · Calle Hacienda de Pavones, 12, Local</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Web Mivanjar" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Nueva consulta web — ${tipoProyecto} — ${nombre}`,
      html,
    });

    req.log.info({ nombre, email, tipoProyecto }, "Contact form sent");
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ ok: false, error: "No se pudo enviar el mensaje. Inténtalo de nuevo." });
  }
});

export default contactRouter;
