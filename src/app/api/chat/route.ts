import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  ...(process.env.OPENAI_BASE_URL && { baseURL: process.env.OPENAI_BASE_URL }),
});

//export const runtime = "edge";
const model = process.env.CHAT_MODEL as string;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: model,
    stream: false,
    messages,
  });

  return NextResponse.json(response.choices[0].message.content);
}
