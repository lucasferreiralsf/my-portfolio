import React from 'react'

type Props = {
  children?: React.ReactNode
}
export const HeaderTitle: React.FC<Props> = ({ children }) => {
  return <h1 className="font-medium text-xl uppercase">{children}</h1>
}
