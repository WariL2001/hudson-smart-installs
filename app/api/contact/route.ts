// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  details: z.string().min(1),
  hp: z.string().optional(),
});

type ContactBody = z.infer<typeof schema>;

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json().catch(() => ({}))) as Partial<ContactBody>;
    const parsed = schema.safeParse(data);
    if (!parsed.success || parsed.data.hp) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Phone: ${parsed.data.phone ?? "-"}`,
        "",
        parsed.data.details,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) { // <— no 'any'
    const msg = err instanceof Error ? err.message : String(err);
    console.error("POST /api/contact error:", msg);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
