import React, { Children } from 'react'

type Props = {
  children?: React.ReactElement | React.ReactElement[]
}
export const Timeline: React.FC<Props> = ({ children }) => {
  children = Children.toArray(children) as React.ReactElement[]

  const [element1, ...remainingElements] = children

  const otherElements = Children.map(remainingElements, (child, index) =>
    React.cloneElement(child, {
      left: index % 2 === 0
    })
  )

  return (
    <div className="flex flex-col items-center">
      {element1 && (
        <>
          <div className="rounded-full w-5 h-5 bg-primary" />
          {element1}
        </>
      )}
      {otherElements}
    </div>
  )
}
