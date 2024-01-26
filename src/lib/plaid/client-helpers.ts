export async function generateLinkToken(id: string) {
  const response = await fetch("/api/plaid/create_link_token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
  return response.json();
}

export async function exchangeTempTokenForPermanentToken(tempToken: string) {
  const response = await fetch("/api/plaid/exchange_link_token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tempToken),
  });
  return response.json();
}
