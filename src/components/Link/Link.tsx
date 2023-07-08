import classNames from 'classnames'
import NextLink, { LinkProps } from 'next/link'
import React from 'react'

interface Props extends LinkProps {
  className?: string
  children?: React.ReactNode
}
export const Link: React.FC<Props> = ({ className, children, ...remainingProps }) => {
  const cssClass = classNames('link link-hover', className)
  return (
    <NextLink className={cssClass} {...remainingProps}>
      {children}
    </NextLink>
  )
}
