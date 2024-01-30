import { NextRequest, NextResponse } from "next/server";
import { plaid_client } from "@/lib/plaid/config";
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const publicToken = requestBody;
    const response = await plaid_client.itemPublicTokenExchange({
      public_token: publicToken,
    });
    // These values should be saved to a persistent database and
    // associated with the currently signed-in user
    const accessToken = response.data.access_token;
    const itemID = response.data.item_id;
    return NextResponse.json({
      permanent_token: accessToken,
      item_id: itemID,
    });
  } catch (error: any) {
    // typeof error?
    const message = error?.message ? error.message : "Something went wrong.";
    const status = error?.response?.status ? error.response.status : 400;
    return NextResponse.json(message, { status });
  }
}
