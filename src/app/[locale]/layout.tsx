import { Header } from '@my-portfolio/components'
import classNames from 'classnames'
import { Inter } from 'next/font/google'

import './globals.css'
import { dir } from 'i18next'
import { languages } from '@my-portfolio/i18n'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata = {
  title: 'Lucas Ferreira | Portfolio',
  description: "This is the Lucas' Portfolio website"
}

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { locale = 'en' } = params || {}

  return (
    <html lang={locale} dir={dir(locale)} data-theme="mytheme">
      <body className={classNames(inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
