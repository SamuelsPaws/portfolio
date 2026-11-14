import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'

const handleI18nRouting = createMiddleware(routing);
const NON_INDEXABLE_ROUTE = /\/(?:terms-of-service|privacy-policy)\/?$/;

export default function proxy(request: NextRequest) {
  // Internal tools use unprefixed routes.
  if (request.nextUrl.pathname === '/dev' || request.nextUrl.pathname.startsWith('/dev/')) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  const response = handleI18nRouting(request);

  if (NON_INDEXABLE_ROUTE.test(request.nextUrl.pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
