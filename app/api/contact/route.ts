// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation (keeps it simple)
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Gmail via App Password (most reliable settings)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // 465 = SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Gmail often requires from to be the authenticated user
    await transporter.sendMail({
      from: `Hudson Smart Installs <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,       // you receive it
      replyTo: `${name} <${email}>`,    // replying goes to the sender
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    // Surface the reason in your terminal so we know what failed
    console.error("Email send failed:", {
      code: err?.code,
      command: err?.command,
      response: err?.response,
      message: err?.message,
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
