import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@/lib/supabase/config";
import { Account } from "@/lib/supabase/schemas";
export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient(request);
  const { data, error } = await supabase.from("accounts").select();
  if (!error && data) {
    return NextResponse.json(data);
  }
  const message = error;
  return NextResponse.json("Bad Request", { status: 400 });
}
