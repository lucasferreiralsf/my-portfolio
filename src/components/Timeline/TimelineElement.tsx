'use client'

import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

type TimelineElementProps = {
  title: string
  company: string
  startedAt: string
  description?: string
  finishedAt?: string
  left?: boolean
}
const TimelineElement: React.FC<TimelineElementProps> = ({
  title,
  company,
  startedAt,
  description,
  finishedAt,
  left = false
}) => {
  const [titlesWrapperHeight, setTitlesWrapperHeight] = useState<number | undefined>(0)
  const [dateHeight, setDateHeight] = useState<number | undefined>(0)
  const titlesWrapperRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)

  const dateCardWidth = 160
  const dateCardHeight = 160
  const defaultTitlesDatePadding = 50
  const defaultLineHeight = 96

  useEffect(() => {
    setTitlesWrapperHeight(titlesWrapperRef?.current?.clientHeight)
  }, [titlesWrapperRef])

  useEffect(() => {
    setDateHeight(dateRef?.current?.clientHeight)
  }, [dateRef])

  const calculateHeight = () => {
    let height = 0
    if (!titlesWrapperHeight && !dateHeight) return height
    if (titlesWrapperHeight! > dateHeight!) {
      height = titlesWrapperHeight! - dateHeight! + defaultLineHeight
    } else {
      height = defaultLineHeight
    }
    return height
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-[0.125rem] bg-primary" style={{ height: defaultLineHeight }} />
      <div
        className="rounded-lg bg-base-30 flex items-center justify-center"
        style={{
          width: dateCardWidth,
          height: dateCardHeight
        }}
        ref={dateRef}
      >
        {startedAt} - {finishedAt ? finishedAt : 'current'}
      </div>
      <div
        className={classNames('flex flex-col absolute pb-4 mt-24', {
          'self-start': !left,
          'self-end': left
        })}
        style={{
          marginLeft: !left ? dateCardWidth + defaultTitlesDatePadding : 0,
          marginRight: left ? dateCardWidth + defaultTitlesDatePadding : 0
        }}
        ref={titlesWrapperRef}
      >
        <h2
          className={classNames('text-3xl text-white mb-1 font-extralight', {
            'text-right': left
          })}
        >
          {company}
        </h2>
        <h1
          className={classNames('text-4xl text-secondary font-medium', {
            'text-right': left
          })}
        >
          {title}
        </h1>
        {description && (
          <p
            className={classNames('max-w-[25rem] mt-7 text-xl font-extralight', {
              'text-right': left
            })}
          >
            {description}, {description}, {description}
          </p>
        )}
      </div>
      <div
        className="w-[0.125rem] bg-primary"
        style={{
          height: calculateHeight()
        }}
      />
    </div>
  )
}

TimelineElement.displayName = 'TimelineElement'

export { TimelineElement }
