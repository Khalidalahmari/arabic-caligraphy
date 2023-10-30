import { NextApiResponse } from "next";
import content from "@/utils/content.json";

export async function GET() {
  return new Response(JSON.stringify({ ...content }));
}
