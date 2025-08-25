import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("sid");
  const sessionId = cookie?.value;

  const urlFront = `${process.env.NEXT_PUBLIC_SERVER_FRONTEND}:${process.env.NEXT_PUBLIC_SERVER_FRONTEND_PORT}`;
  const host = process.env.NEXT_PUBLIC_BACKEND_HOST;
  const port = process.env.NEXT_PUBLIC_BACKEND_PORT;
  const urlLogin = `http://${host}:${port}/api/auth/login?returnTo=http://${urlFront}/persons`;

  try {
    if (!sessionId) {
      return NextResponse.redirect(urlLogin);
    }

    return NextResponse.next();
  } catch (e) {
    console.error("Error verificando la sesión en middleware", e);

    return NextResponse.redirect(urlLogin);
  }
};

export const config = {
  matcher: [
    "/((?!_next/|favicon.ico|static/|images/|fonts/|api/|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.gif|.*\\.ico).*)",
  ],
};
