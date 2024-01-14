// import {
//   usePlaidLink,
//   PlaidLinkOptions,
//   PlaidLinkOnSuccess,
// } from "react-plaid-link";

// const config: PlaidLinkOptions = {
//   onSuccess: (public_token, metadata) => {},
//   onExit: (err, metadata) => {},
//   onEvent: (eventName, metadata) => {},
//   token: "GENERATED_LINK_TOKEN",
// };
// const { open, exit, ready } = usePlaidLink(config);

import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const config = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET_SANDBOX_ID,
      "Plaid-Version": "2020-09-14",
    },
  },
});

export const plaid_client = new PlaidApi(config);
