import { NextResponse } from "next/server";
import Portkey from "portkey-ai";

const portKey = new Portkey({
  // baseURL: process.env.BASE_URL,
  apiKey: process.env.PORTKEY_API_KEY,
  virtualKey: process.env.VIRTUAL_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!portKey.apiKey)
      return new NextResponse("API Key not configured", { status: 500 });

    if (!portKey.virtualKey)
      return new NextResponse("Virtual Key not configured", { status: 500 });

    if (!messages)
      return new NextResponse("Messages not provided", { status: 400 });

    const response = await portKey.chat.completions.create(
      {
        model: "solar-1-mini-chat-240612:AI/4",
        user: process.env.TENANT_ID,
        messages,
      }
      // {
      //   Authorization: `Bearer ${process.env.PORTKEY_API_KEY}`,
      // }
    );

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("error", error);
  }
}
