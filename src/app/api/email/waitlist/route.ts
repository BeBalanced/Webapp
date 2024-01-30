import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_KEY);
  const userEmail = (await request.json()).userEmail;

  const { error } = await resend.emails.send({
    from: "noreply@balance.chaserensberger.com",
    to: userEmail,
    subject: "You're on the waitlist!",
    html: "<h1>Thanks for signing up for the waitlist!</h1>",
  });
  if (error) {
    return NextResponse.json(error, { status: 400 });
  }
  return NextResponse.json("Email sent successfully");
}
