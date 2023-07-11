'use client'

import { useTranslationClient } from '@my-portfolio/hooks'
import { Messages2 } from 'iconsax-react'
import React from 'react'
import { Button } from '../Button/Button'
import { Link } from '../Link/Link'
import { Profile } from '../Profile/Profile'
import classNames from 'classnames'

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
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

  const renderLetsTalkButton = (className: string) => (
    <Button
      text={t('header.lets-chat')}
      variant="outline"
      icon={<Messages2 variant="Outline" />}
      className={classNames(className)}
      onClick={(e) => handleClick(e, '#contact')}
    />
  )

  return (
    <nav className="flex sticky top-[calc((8rem-5rem)*-1)] z-[2] bg-base-100 px-8 h-[8rem] items-center">
      <div className="navbar sticky top-2 h-5">
        <div className="navbar-start">
          <Profile name={t('common.fullname')} jobTitle={t('common.job-title')} />
        </div>
        <div className="navbar-center hidden lg:flex gap-12">
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
        <div className="navbar-end">
          {renderLetsTalkButton('max-lg:hidden')}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content my-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
            >
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
          </div>
        </div>
      </div>
    </nav>
  )
}
