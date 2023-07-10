import classNames from 'classnames'
import React from 'react'

type ButtonVariant = 'default' | 'outline' | 'ghost'
type ButtonColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: ButtonVariant
  color?: ButtonColor
  icon?: React.ReactNode
  showIconOnRight?: boolean
  fullwidth?: boolean
}
export const Button: React.FC<Props> = ({
  text,
  icon,
  className: classNameFromProps,
  showIconOnRight = false,
  variant = 'default',
  color = 'neutral',
  fullwidth = false,
  ...remainingProps
}) => {
  const defaultClass = classNames('btn normal-case', { ['w-fit']: !fullwidth, ['w-full']: fullwidth })
  const variantClasses = classNames({
    [`btn-outline`]: variant === 'outline',
    [`btn-ghost`]: variant === 'ghost'
  })
  const colorClasses = classNames({
    [`btn-neutral hover:btn-primary`]: color === 'neutral',
    [`btn-primary`]: color === 'primary',
    [`btn-secondary`]: color === 'secondary',
    [`btn-accent`]: color === 'accent',
    [`btn-info`]: color === 'info',
    [`btn-success`]: color === 'success',
    [`btn-warning`]: color === 'warning',
    [`btn-error`]: color === 'error'
  })

  return (
    <button className={classNames(defaultClass, variantClasses, colorClasses, classNameFromProps)} {...remainingProps}>
      {!showIconOnRight && icon}
      {text}
      {showIconOnRight && icon}
    </button>
  )
}
