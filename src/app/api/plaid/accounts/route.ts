import { NextRequest, NextResponse } from "next/server";
import { plaid_client } from "@/lib/plaid/config";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const access_token: string = url.searchParams.get("access_token")!;
  try {
    const accountsResponse = await plaid_client.accountsGet({
      access_token,
    });
    return NextResponse.json(accountsResponse.data);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
