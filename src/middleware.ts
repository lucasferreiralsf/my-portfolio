import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'
import { getCurrentLanguage, i18nextCookieName, languages } from './i18n'

acceptLanguage.languages(languages)

const PUBLIC_FILE = /\.(.*)$/

export const config = {
  matcher: '/:locale*'
  // matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req: NextRequest) {
  const lng = getCurrentLanguage(req)

  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req?.headers?.get('referer') as string)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(i18nextCookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
