import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(6, "Please provide a valid phone number with country/area code")
    .max(30),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z
    .string()
    .max(3000)
    .optional()
    .default("No additional message provided."),
});

/**
 * Generates a corporate-style, responsive HTML email notification template
 */
function generateContactEmailHtml({
  name,
  email,
  phone,
  subject,
  message,
  timestamp,
}: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
  timestamp: string;
}) {
  const displayMessage = message?.trim() || "No additional message provided.";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4FAFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0A1235; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F4FAFF; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E5EDF7; box-shadow: 0 10px 30px rgba(5, 10, 53, 0.08); overflow: hidden;">
          
          <!-- Corporate Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #050A35 0%, #0B1554 100%); padding: 30px; border-bottom: 3px solid #1677FF;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 11px; font-weight: 700; color: #00CFFF; text-transform: uppercase; letter-spacing: 0.1em; font-family: monospace;">MAYANK PADHI · PORTFOLIO</p>
                    <h1 style="color: #FFFFFF; margin: 8px 0 4px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">NEW CONTACT FORM SUBMISSION</h1>
                    <p style="color: #A9B8D8; margin: 0; font-size: 13px;">A new message has been submitted through your portfolio website.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Body Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Section: Contact Details -->
              <p style="margin: 0 0 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #1677FF; letter-spacing: 0.08em; font-family: monospace;">CONTACT DETAILS</p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; border: 1px solid #E5EDF7; border-radius: 8px; overflow: hidden;">
                <tr style="background-color: #FAFCFF;">
                  <td style="padding: 10px 15px; border-bottom: 1px solid #E5EDF7; width: 110px; font-size: 12px; font-weight: 600; color: #5D6C87;">Name:</td>
                  <td style="padding: 10px 15px; border-bottom: 1px solid #E5EDF7; font-size: 14px; font-weight: 700; color: #0A1235;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; border-bottom: 1px solid #E5EDF7; font-size: 12px; font-weight: 600; color: #5D6C87;">Email:</td>
                  <td style="padding: 10px 15px; border-bottom: 1px solid #E5EDF7; font-size: 14px; font-weight: 600; color: #1677FF;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #1677FF; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr style="background-color: #FAFCFF;">
                  <td style="padding: 10px 15px; border-bottom: 1px solid #E5EDF7; font-size: 12px; font-weight: 600; color: #5D6C87;">Phone:</td>
                  <td style="padding: 10px 15px; border-bottom: 1px solid #E5EDF7; font-size: 14px; font-weight: 600; color: #0A1235;">
                    <a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="color: #0A1235; text-decoration: none;">${escapeHtml(phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 15px; font-size: 12px; font-weight: 600; color: #5D6C87;">Subject:</td>
                  <td style="padding: 10px 15px; font-size: 14px; font-weight: 700; color: #0A1235;">${escapeHtml(subject)}</td>
                </tr>
              </table>

              <!-- Section: Message -->
              <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #1677FF; letter-spacing: 0.08em; font-family: monospace;">MESSAGE</p>
              <div style="background-color: #F4FAFF; border: 1px solid #E5EDF7; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #0A1235; white-space: pre-wrap;">${escapeHtml(displayMessage)}</p>
              </div>

              <!-- Quick Reply Action -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; background-color: #1677FF; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 6px; text-decoration: none; box-shadow: 0 3px 10px rgba(22, 119, 255, 0.3);">
                      Reply to ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Corporate Footer -->
          <tr>
            <td style="background-color: #F4FAFF; padding: 18px 30px; border-top: 1px solid #E5EDF7;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 11px; color: #5D6C87;">
                    <strong>Submitted from:</strong> Mayank Padhi Portfolio<br>
                    <strong>Date:</strong> ${timestamp}
                  </td>
                  <td align="right" style="font-size: 11px; color: #5D6C87; font-family: monospace;">
                    mayankpadhi.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
          message: "Validation failed. Please check the entered fields.",
        },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = parseResult.data;
    const timestamp = new Date().toUTCString();

    const emailHtml = generateContactEmailHtml({
      name,
      email,
      phone,
      subject,
      message,
      timestamp,
    });

    const destinationEmail =
      process.env.CONTACT_DESTINATION_EMAIL ||
      process.env.CONTACT_EMAIL ||
      "mayankpadhi91@gmail.com";

    let emailSent = false;

    // 1. If SMTP credentials are configured in environment variables, dispatch via Nodemailer
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      try {
        const port = process.env.SMTP_PORT
          ? parseInt(process.env.SMTP_PORT, 10)
          : 465;
        const isSecure =
          process.env.SMTP_SECURE === "true" ||
          port === 465 ||
          process.env.SMTP_SECURE === undefined;

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: port,
          secure: isSecure,
          auth: {
            user: process.env.SMTP_USER.trim(),
            pass: process.env.SMTP_PASS.trim().replace(/\s+/g, ""),
          },
        });

        const mailOptions = {
          from:
            process.env.SMTP_FROM ||
            `"Mayank Padhi Portfolio" <${process.env.SMTP_USER}>`,
          to: destinationEmail,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          text: `You received a new message from ${name} (${email}, ${phone}):\n\nSubject: ${subject}\n\nMessage:\n${message || "No message provided."}\n\nSubmitted at: ${timestamp}`,
          html: emailHtml,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log("[SMTP Email Sent Successfully]:", {
          to: destinationEmail,
          subject,
          sender: { name, email, phone },
        });
      } catch (smtpError) {
        console.error("[SMTP Dispatch Error]:", smtpError);
      }
    }

    // 2. Fallback to Resend if configured and SMTP was not used
    if (!emailSent && process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: destinationEmail,
            reply_to: email,
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            html: emailHtml,
          }),
        });
        emailSent = true;
      } catch (sendError) {
        console.error("[Resend Dispatch Error]:", sendError);
      }
    }

    console.log("[Portfolio Contact Processed]:", {
      timestamp,
      recipient: destinationEmail,
      sender: { name, email, phone },
      subject,
      emailSent,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An internal server error occurred while processing your message.",
      },
      { status: 500 },
    );
  }
}
