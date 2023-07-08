import React from 'react'

type Props = {
  name: string
  jobTitle: string
}
export const Profile: React.FC<Props> = ({ name, jobTitle }) => {
  return (
    <div className="flex flex-col">
      <div className="font-medium text-lg">{name}</div>
      <div className="text-base">{jobTitle}</div>
    </div>
  )
}
