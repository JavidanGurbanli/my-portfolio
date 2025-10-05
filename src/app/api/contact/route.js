import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Please fill out all fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: "javidangrbnl@gmail.com",
    subject: `New Portfolio Message: ${subject}`, 
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Message from Portfolio Contact Form</h2>
        <p>You have received a new message from your website.</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="padding: 12px; border-left: 4px solid #007bff; margin: 0; background-color: #f8f9fa;">
          ${message.replace(/\n/g, "<br>")}
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
