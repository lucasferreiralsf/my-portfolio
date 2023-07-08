import { defaultNS, getOptions } from '@my-portfolio/i18n'
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { useParams } from 'next/navigation'
import { initReactI18next } from 'react-i18next/initReactI18next'

interface UseTranslationOptions {
  ns?: string
  keyPrefix?: string
}

const initI18next = async (lng: string, ns?: string) => {
  const i18nInstance = createInstance()

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`../../i18n/locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslationServer(lng?: string, options?: string | UseTranslationOptions) {
  const ns = typeof options === 'string' ? options : options?.ns ? options.ns : defaultNS
  const keyPrefix = (options as UseTranslationOptions)?.keyPrefix
  const params = useParams()
  const language = lng || params?.lng || 'en'
  const i18nextInstance = await initI18next(language, ns)

  return {
    t: i18nextInstance.getFixedT(language, Array.isArray(ns) ? ns[0] : ns, keyPrefix),
    i18n: i18nextInstance
  }
}
