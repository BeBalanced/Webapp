export async function generateToken(id: string) {
  const response = await fetch("/api/plaid/create_link_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
  return response.json();
}
