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
    <a className={classNames('flex cursor-pointer', className)} target={target} href={href} {...remainingProps}>
      <div className="w-28 h-28 p-4 bg-slate-200 mask mask-squircle flex align-center justify-center">{content}</div>
      <div className="flex flex-col ml-5 mt-3 w-[11.5rem]">
        <h6 className="text-2xl text-white">{title}</h6>
        {subtitle && <p className="font-normal mt-1">{subtitle}</p>}
      </div>
    </a>
  )
}
