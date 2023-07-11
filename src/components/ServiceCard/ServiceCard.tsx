import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  description?: string
  content?: React.ReactNode | any
  className?: string
}
export const ServiceCard: React.FC<Props> = ({ title, description, content, className }) => {
  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="w-10 text-secondary mask mask-squircle flex align-center justify-center">
        <Image width={68} height={68} className="w-auto h-auto" src={content} alt={`${title} icon`} />
      </div>
      <div className="flex flex-col mt-4 w-60 max-md:mt-2">
        <h6 className="text-2xl text-white max-md:text-lg">{title}</h6>
        {description && <p className="font-normal mt-5 max-md:text-sm max-md:mt-3">{description}</p>}
      </div>
    </div>
  )
}
