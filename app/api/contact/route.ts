// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  details: z.string().min(1),
  hp: z.string().optional(), // honeypot anti-spam
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}));
    const parsed = schema.safeParse(data);
    if (!parsed.success || parsed.data.hp) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const { name, email, phone, details } = parsed.data;

    await transporter.sendMail({
      from: `North Jersey Tech <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject: `New quote request: ${name}`,
      text: `${name} (${email}${phone ? ", " + phone : ""})\n\n${details}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
