import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_KEY);
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "chasehrensberger@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
  return NextResponse.json("Check your inbox");
}
