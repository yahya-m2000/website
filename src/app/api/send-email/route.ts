import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject, phoneNumber } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "127.0.0.1", // Localhost for the ProtonMail Bridge
      port: 1025,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Use your ProtonMail email here
      to: process.env.RECEIVER_EMAIL, // The email address where you want to receive messages
      replyTo: email, // User's email for reply
      subject: `Contact us Form: ${subject}`,
      html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>You have received a new message from the Contact Us form.</h2>
      
            <hr style="border: 1px solid #ccc;" />
      
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Subject:</strong> ${subject}</p>
      
            <hr style="border: 1px solid #ccc;" />
      
            <p><strong>Message:</strong></p>
            <p>${message}</p>
      
            <hr style="border: 1px solid #ccc;" />
      
            <p style="color: #777;">This message was sent from your website contact form.</p>
          </div>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
