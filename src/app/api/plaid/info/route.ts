import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    // item_id: ITEM_ID,
    // access_token: ACCESS_TOKEN,
    // products: PLAID_PRODUCTS,
    test: "test",
  });
}
