import React from 'react'

type Props = {
  title: string
  subtitle?: string
}
export const TextData: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col flex-1 items-end text-right max-sm:items-center max-sm:text-center max-sm:gap-1">
      <p className="text-2xl sm:text-5xl font-medium text-white">{title}</p>
      {subtitle && <p className="text-base sm:text-2xl">{subtitle}</p>}
    </div>
  )
}
