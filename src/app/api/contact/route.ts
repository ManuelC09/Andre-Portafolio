import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Faltan variables de entorno del servidor." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Nuevo mensaje de contacto</title>
          </head>

          <body style="margin:0; padding:0; background-color:#020610; font-family: Arial, Helvetica, sans-serif; color:#ffffff;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#020610; padding:40px 16px;">
              <tr>
                <td align="center">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:680px; background:linear-gradient(145deg,#071020,#0b1426); border:1px solid rgba(255,255,255,0.10); border-radius:28px; overflow:hidden; box-shadow:0 24px 80px rgba(0,0,0,0.35);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="padding:34px 34px 24px 34px; background:radial-gradient(circle at top right, rgba(37,99,235,0.35), transparent 38%), linear-gradient(135deg,#071020,#0b1426); border-bottom:1px solid rgba(255,255,255,0.08);">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td>
                              <div style="display:inline-block; width:42px; height:42px; line-height:42px; text-align:center; background:#0f2b70; border:1px solid #2563eb; border-radius:12px; color:#93c5fd; font-weight:800; font-size:18px;">
                                A
                              </div>

                              <h1 style="margin:22px 0 8px 0; color:#ffffff; font-size:30px; line-height:1.15; letter-spacing:-0.04em;">
                                Nuevo mensaje desde el portafolio
                              </h1>

                              <p style="margin:0; color:#94a3b8; font-size:15px; line-height:1.7;">
                                Una persona completó el formulario de contacto en el sitio web de André.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:34px;">
                        
                        <!-- Contact info card -->
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.10); border-radius:22px; overflow:hidden;">
                          <tr>
                            <td style="padding:22px 24px; border-bottom:1px solid rgba(255,255,255,0.08);">
                              <p style="margin:0 0 8px 0; color:#64748b; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.14em;">
                                Nombre
                              </p>
                              <p style="margin:0; color:#ffffff; font-size:18px; font-weight:700;">
                                ${safeName}
                              </p>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:22px 24px;">
                              <p style="margin:0 0 8px 0; color:#64748b; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.14em;">
                                Email
                              </p>
                              <a href="mailto:${safeEmail}" style="color:#60a5fa; font-size:17px; font-weight:700; text-decoration:none;">
                                ${safeEmail}
                              </a>
                            </td>
                          </tr>
                        </table>

                        <!-- Message -->
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:22px; background:#08111f; border:1px solid rgba(96,165,250,0.18); border-radius:22px;">
                          <tr>
                            <td style="padding:24px;">
                              <p style="margin:0 0 14px 0; color:#64748b; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.14em;">
                                Mensaje
                              </p>

                              <div style="color:#e5e7eb; font-size:16px; line-height:1.8;">
                                ${safeMessage}
                              </div>
                            </td>
                          </tr>
                        </table>

                        <!-- CTA -->
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:26px;">
                          <tr>
                            <td align="center">
                              <a href="mailto:${safeEmail}" style="display:inline-block; background:linear-gradient(135deg,#2563eb,#3b82f6); color:#ffffff; text-decoration:none; font-size:14px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em; padding:15px 24px; border-radius:14px; box-shadow:0 18px 40px rgba(37,99,235,0.28);">
                                Responder a ${safeName}
                              </a>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding:22px 34px; border-top:1px solid rgba(255,255,255,0.08); background:#050b16;">
                        <p style="margin:0; color:#64748b; font-size:13px; line-height:1.6; text-align:center;">
                          Este correo fue enviado automáticamente desde el formulario de contacto del portafolio de André.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Correo enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);

    return NextResponse.json(
      { error: "No se pudo enviar el correo. Inténtalo nuevamente." },
      { status: 500 }
    );
  }
}