import React from 'react'

type ContactCardVariant = 'default' | 'whatsapp' | 'email'
type Props = {
  value: string
  title?: string
  href?: string
  target?: React.HTMLAttributeAnchorTarget
  variant?: ContactCardVariant
}
export const ContactCard: React.FC<Props> = ({
  value,
  title: titleFromProps,
  variant = 'default',
  href: hrefFromProps,
  target = '_blank'
}) => {
  const href = {
    default: hrefFromProps,
    whatsapp: `https://wa.me/${value.replaceAll(' ', '')}`,
    email: `mailto:${value}`
  }
  const title = {
    default: titleFromProps,
    whatsapp: 'Whatsapp:',
    email: 'E-mail:'
  }

  return (
    <a className="flex flex-col gap-3 cursor-pointe max-md:gap-1" href={href[variant]} target={target}>
      <p className="max-w-2xl text-2xl font-light max-lg:text-base">{title[variant]}</p>
      <h1 className="text-4xl text-white font-medium max-lg:text-lg">{value}</h1>
    </a>
  )
}
