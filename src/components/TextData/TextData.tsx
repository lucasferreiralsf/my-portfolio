import React from 'react'

type Props = {
  title: string
  subtitle?: string
}
export const TextData: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <p className="text-5xl font-medium text-white text-right">{title}</p>
      {subtitle && <p className="text-2xl text-right">{subtitle}</p>}
    </div>
  )
}
