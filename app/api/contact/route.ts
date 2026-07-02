import { NextRequest, NextResponse } from "next/server";

// This route accepts general contact form submissions.
// To go live with real email delivery, add an email provider (Resend,
// Nodemailer + SMTP, SendGrid, etc.) and call it here using environment
// variables. See README.md > "Wiring up the contact & quote forms".
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // TODO: send email via your provider of choice, e.g.:
    // await resend.emails.send({
    //   from: "Al Majid Exim Website <no-reply@almajidexim.com>",
    //   to: "almajidexim6786@gmail.com",
    //   subject: `New enquiry from ${name}`,
    //   text: `${name} (${email}, ${phone ?? "no phone"}) wrote:\n\n${message}`,
    // });

    console.log("New contact submission:", { name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
