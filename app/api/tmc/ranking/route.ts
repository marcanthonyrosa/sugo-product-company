import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const KEY = "tmc:ranking";

export async function GET() {
  try {
    const order = await redis.get<string[]>(KEY);
    return NextResponse.json({ order: order ?? null });
  } catch (err) {
    console.error("[TMC ranking GET]", err);
    return NextResponse.json({ order: null });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { order } = await request.json();

    if (!Array.isArray(order) || !order.every((s: unknown) => typeof s === "string")) {
      return NextResponse.json({ error: "order must be a string array" }, { status: 400 });
    }

    await redis.set(KEY, order);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[TMC ranking PUT]", err);
    return NextResponse.json({ error: "Failed to save ranking" }, { status: 500 });
  }
}
