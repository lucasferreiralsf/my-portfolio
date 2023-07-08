import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string
}
export const AnimatedMouse: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('w-[34px] h-[55px] animate-bounce-slow', className)}>
      <div className="w-[3px] py-[10px] px-[15px] h-[35px] border-2 rounded-[25px] border-white opacity-75 box-content">
        <div className="w-[3px] h-[10px] rounded-[25%] bg-white animate-mouse-scroller"></div>
      </div>
    </div>
  )
}
