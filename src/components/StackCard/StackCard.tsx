import classNames from 'classnames'
import React from 'react'

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'content'> {
  title: string
  subtitle?: string
  content?: React.ReactNode
  className?: string
}
export const StackCard: React.FC<Props> = ({
  title,
  subtitle,
  content,
  className,
  href = '#',
  target = '_blank',
  ...remainingProps
}) => {
  return (
    <a className={classNames('flex cursor-pointer gap-2', className)} target={target} href={href} {...remainingProps}>
      <div className="w-24 h-w-24 p-4 bg-slate-200 mask mask-squircle flex align-center justify-center max-md:w-12 max-md:h-12 max-lg:p-2 max-lg:w-20 max-lg:h-20">
        {content}
      </div>
      <div className="flex flex-col mt-1 w-[11.5rem] max-md:w-20 max-lg:w-24 lg:w-28">
        <h6 className="text-2xl text-white inline-block w-fit max-md:text-base max-lg:text-lg">{title}</h6>
        {subtitle && <p className="font-normal mt-1 text-base max-md:text-xs">{subtitle}</p>}
      </div>
    </a>
  )
}
