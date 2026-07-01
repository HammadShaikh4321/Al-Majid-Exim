import { NextRequest, NextResponse } from "next/server";

// This route accepts "Request a Quote" submissions. Wire it to your
// email provider the same way as app/api/contact/route.ts — see
// README.md > "Wiring up the contact & quote forms".
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, country, product, quantity, message } = body ?? {};

    if (!name || !email || !product || !country) {
      return NextResponse.json(
        { ok: false, error: "Name, email, product and destination country are required." },
        { status: 400 }
      );
    }

    console.log("New quote request:", {
      name,
      email,
      phone,
      country,
      product,
      quantity,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
