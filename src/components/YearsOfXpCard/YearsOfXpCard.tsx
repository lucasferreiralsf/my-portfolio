import React from 'react'

type Props = {
  years: number
  label: string
}
export const YearsOfXpCard: React.FC<Props> = ({ years, label }) => {
  return (
    <div className="bg-secondary w-96 flex justify-center h-[26rem]">
      <div className="absolute">
        <p className="font-extrabold text-primary text-[21rem] leading-[15rem]">{years}+</p>
      </div>
      <p className="text-4xl text-primary self-end mb-14">{label}</p>
    </div>
  )
}
