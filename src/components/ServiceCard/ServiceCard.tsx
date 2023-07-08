import classNames from 'classnames'
import React from 'react'

interface Props {
  title: string
  subtitle?: string
  content?: React.ReactNode | any
  className?: string
}
export const ServiceCard: React.FC<Props> = ({ title, subtitle, content, className }) => {
  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="w-10 text-secondary mask mask-squircle flex align-center justify-center">{content}</div>
      <div className="flex flex-col mt-4 w-60">
        <h6 className="text-2xl text-white">{title}</h6>
        {subtitle && <p className="font-normal mt-5">{subtitle}</p>}
      </div>
    </div>
  )
}
