'use client'

import { useTranslationClient } from '@my-portfolio/hooks'
import { Messages2 } from 'iconsax-react'
import React from 'react'
import { Button } from '../Button/Button'
import { Link } from '../Link/Link'
import { Profile } from '../Profile/Profile'

export const Header: React.FC = () => {
  const { t } = useTranslationClient()

  const links = [
    {
      href: '#about-me',
      transKey: 'header.about'
    },
    {
      href: '#services',
      transKey: 'header.services'
    },
    {
      href: '#portfolio',
      transKey: 'header.portfolio'
    },
    {
      href: '#contact',
      transKey: 'header.contact'
    }
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if ((href as string).startsWith('#')) {
      e.preventDefault()
      const destination = document.querySelector(href as string)
      if (destination) {
        destination.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="w-full h-32 flex justify-between items-center px-16">
      <Profile name={t('common.fullname')} jobTitle={t('common.job-title')} />
      <div className="flex justify-center items-center gap-12">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="uppercase"
            scroll={false}
          >
            {t(link.transKey)}
          </Link>
        ))}
      </div>
      <Button text={t('header.lets-chat')} variant="outline" icon={<Messages2 variant="Outline" />} />
    </div>
  )
}
