import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_KEY);

export function sendWaitlistConfirmationEmail() {
  resend.emails.send({
    from: "balance.chaserensberger.com",
    to: "chasehrensberger@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
}
