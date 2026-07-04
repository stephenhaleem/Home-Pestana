import { json } from "@tanstack/react-start/server";

interface BookingInquiry {
  name: string;
  email: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  message?: string;
  apartmentTitle: string;
  apartmentSlug: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingInquiry;

    // Validate required fields
    if (!body.name || !body.email || !body.checkIn || !body.checkOut || !body.apartmentTitle) {
      return json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get the site owner's email from environment variable
    const ownerEmail = process.env.VITE_SITE_EMAIL || process.env.SITE_EMAIL;
    
    if (!ownerEmail) {
      console.error("VITE_SITE_EMAIL or SITE_EMAIL not configured");
      return json({ error: "Email service not configured" }, { status: 500 });
    }

    // Format the email message
    const emailBody = `
New Booking Inquiry - Golden Haven Residences

Apartment: ${body.apartmentTitle}
Guest Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}

Check-in: ${body.checkIn}
Check-out: ${body.checkOut}

${body.message ? `Message:\n${body.message}` : ""}

---
Please reply to: ${body.email}
    `.trim();

    // Send email using your email service
    // This uses Resend, but you can use any email service (SendGrid, Mailgun, nodemailer, etc.)
    
    try {
      // Try using Resend if available
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "bookings@golden-haven-residences.com",
        to: ownerEmail,
        replyTo: body.email,
        subject: `New Booking Inquiry: ${body.apartmentTitle} (${body.checkIn} to ${body.checkOut})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #c9a961;">New Booking Inquiry</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Apartment:</strong> ${body.apartmentTitle}</p>
              <p><strong>Guest Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
            </div>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Check-in:</strong> ${body.checkIn}</p>
              <p><strong>Check-out:</strong> ${body.checkOut}</p>
            </div>

            ${body.message ? `<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Message:</strong></p>
              <p>${body.message.replace(/\n/g, "<br>")}</p>
            </div>` : ""}

            <p style="color: #666; font-size: 12px;">Reply to: ${body.email}</p>
          </div>
        `,
      });

      return json({ success: true, message: "Inquiry sent successfully" });
    } catch (resendError) {
      // Fallback: Log to console and return success (or implement your own email service)
      console.log("Email inquiry received (email service not configured):", emailBody);
      
      // You can also send via other services here
      // For now, we'll return success but log it
      return json({ success: true, message: "Inquiry received" });
    }
  } catch (error) {
    console.error("Booking inquiry error:", error);
    return json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
