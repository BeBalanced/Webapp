import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";

const config: PlaidLinkOptions = {
  onSuccess: (public_token, metadata) => {},
  onExit: (err, metadata) => {},
  onEvent: (eventName, metadata) => {},
  token: "GENERATED_LINK_TOKEN",
};
const { open, exit, ready } = usePlaidLink(config);
