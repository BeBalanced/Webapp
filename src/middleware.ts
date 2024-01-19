import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "./lib/supabase/config";
import { balanceConfig } from "./lib/balance.config";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/plans", request.url));
  }
  const { supabase, response } = createMiddlewareClient(request);

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (
    !session &&
    balanceConfig.protectedRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/welcome", request.url));
  }
  if (
    session &&
    balanceConfig.noAuthRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
