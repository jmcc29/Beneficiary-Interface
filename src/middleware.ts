import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getLoginUrl } from './utils/env';

export const middleware = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("sid");
  const sessionId = cookie?.value;

  const urlLogin = getLoginUrl()+"/apphub";

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
