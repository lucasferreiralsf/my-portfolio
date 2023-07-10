import { NextRequest } from 'next/server'
import acceptLanguage from 'accept-language'
import { getCookie } from 'cookies-next'
import { usePathname } from 'next/navigation'

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'pt']
export const defaultNS = 'common'
export const i18nextCookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}

export function getCurrentLanguage(req?: NextRequest) {
  let lng
  if (req) {
    if (req.cookies.has(i18nextCookieName)) lng = acceptLanguage.get(req?.cookies?.get(i18nextCookieName)?.value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng
  } else {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const pathname = usePathname()
      const documentLang = window.document.documentElement.lang
      const isMissingTheLanguageFromPathname = languages.every((loc) => !pathname.startsWith(`/${loc}`))
      const isMissingLangFromDocument = languages.every((loc) => !pathname.startsWith(`/${loc}`))
      if (!isMissingLangFromDocument) lng = documentLang
      if (!lng && isMissingTheLanguageFromPathname) lng = fallbackLng
      if (!lng) lng = pathname.split('/')[1]
    } else {
      const cookieLng = getCookie(i18nextCookieName)
      if (cookieLng) lng = acceptLanguage.get(cookieLng.toString())
    }
    if (!lng) lng = fallbackLng
  }

  return lng
}

export function getCurrentLocaleHeader(req?: NextRequest) {
  const locale = getCurrentLanguage(req)
  return { 'gcms-locales': locale }
}
