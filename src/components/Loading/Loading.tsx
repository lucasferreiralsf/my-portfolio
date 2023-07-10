import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string
}
export const Loading: React.FC<Props> = ({ className }) => {
  return <span className={classNames('loading loading-spinner text-primary loading-lg', className)} />
}
