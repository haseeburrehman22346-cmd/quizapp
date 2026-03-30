import { NextResponse } from "next/server";
import questions from "@/data/question.json";
export async function GET() {
  return NextResponse.json(questions);
}