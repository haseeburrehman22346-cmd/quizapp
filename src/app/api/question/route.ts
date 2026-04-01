import { NextResponse } from "next/server";
import question from "@/data/question.json";
export async function GET() {
  return NextResponse.json(question);
}