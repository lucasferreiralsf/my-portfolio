import React from 'react'

type Props = {
  years: number
  label: string
}
export const YearsOfXpCard: React.FC<Props> = ({ years, label }) => {
  return (
    <div className="bg-secondary w-96 flex flex-shrink-0 justify-center h-[26rem] max-lg:h-[18rem] max-lg:w-[14rem]">
      <div className="absolute">
        <p className="font-extrabold text-primary text-[21rem] leading-[15rem] max-lg:text-[12rem] max-lg:leading-[8rem]">
          {years}+
        </p>
      </div>
      <p className="text-4xl text-primary self-end mb-14 max-lg:text-lg max-lg:font-bold">{label}</p>
    </div>
  )
}
