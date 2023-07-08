'use client'

import classNames from 'classnames'
import React from 'react'

type TitleVariant = 'default' | 'left' | 'center' | 'custom'
type Props = {
  title: string
  subtitle?: string
  variant?: TitleVariant
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}
export const Title: React.FC<Props> = ({
  title,
  subtitle,
  variant = 'default',
  className,
  titleClassName,
  subtitleClassName
}) => {
  const wrapperClasses = {
    'max-w-3xl flex flex-col': variant !== 'custom',
    'gap-11': variant !== ('center' || 'custom'),
    'gap-7 items-center': variant === 'center'
  }
  const titleClasses = {
    'text-5xl text-white font-medium whitespace-pre-line': variant !== 'custom',
    'leading-tight': variant === 'left',
    'leading-tight text-center': variant === 'center'
  }
  const subtitleClasses = {
    'max-w-lg whitespace-pre-line': variant !== 'custom',
    'text-xl text-white': variant === 'default',
    'text-base': variant === 'left',
    'text-base text-center': variant === 'center'
  }

  return (
    <div className={classNames(wrapperClasses, className)}>
      <h1 className={classNames(titleClasses, titleClassName)}>{title}</h1>
      {subtitle && <p className={classNames(subtitleClasses, subtitleClassName)}>{subtitle}</p>}
    </div>
  )
}
