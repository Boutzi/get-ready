import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// List of public routes that don't require authentication
const publicRoutes = ["/auth/signin"];

export default withAuth(
  function middleware(req) {
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
    const isAuthed = !!req.nextauth.token;

    // Redirect authenticated users away from public routes (like signin)
    if (isPublicRoute && isAuthed) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
        return isPublicRoute || !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
