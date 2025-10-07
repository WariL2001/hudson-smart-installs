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

   const host = process.env.SMTP_HOST?.trim();
const port = Number(process.env.SMTP_PORT ?? 587);
const user = process.env.EMAIL_USER?.trim();
const pass = process.env.EMAIL_PASS?.trim();

if (!host || !user || !pass) {
  console.error("Missing SMTP envs", { host, userSet: !!user, passSet: !!pass });
  return NextResponse.json({ ok: false }, { status: 500 });
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // 587=false (STARTTLS), 465=true (SSL)
  auth: { user, pass },
});

// Optional: verify helps surface real SMTP errors in logs
await transporter.verify().catch((e) => {
  console.error("SMTP verify failed:", e?.message || e);
  throw e;
});

await transporter.sendMail({
  from: `"Hudson Smart Installs" <${user}>`, // must match auth user
  to: user,
  replyTo: parsed.data.email,
  subject: `New contact from ${parsed.data.name}`,
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
