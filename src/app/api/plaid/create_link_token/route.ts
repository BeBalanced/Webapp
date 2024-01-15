import { plaid_client } from "@/lib/plaid/config";
import { NextRequest, NextResponse } from "next/server";
import { Products } from "plaid";

const PLAID_PRODUCTS = (
  process.env.PLAID_PRODUCTS || Products.Transactions
).split(",");

const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || "US").split(
  ","
);

const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || "";

export async function POST(request: NextRequest) {
  const configs: any = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: "user-id",
    },
    client_name: "Balance",
    products: PLAID_PRODUCTS,
    country_codes: PLAID_COUNTRY_CODES,
    language: "en",
  };

  if (PLAID_REDIRECT_URI !== "") {
    configs.redirect_uri = PLAID_REDIRECT_URI;
  }
  try {
    const createTokenResponse = await plaid_client.linkTokenCreate(configs);

    return NextResponse.json(createTokenResponse.data);
  } catch (e) {
    console.log(e);
  }
  return NextResponse.json("Something went wrong");
}
