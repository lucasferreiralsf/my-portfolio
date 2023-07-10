'use client'

import classNames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Button } from '../Button/Button'
import { useTranslationClient } from '@my-portfolio/hooks'

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
  const [showMore, setShowMore] = useState(false)
  const [showReadMoreBtn] = useState(description && description?.length > 178)
  const titlesWrapperRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslationClient()

  const dateCardWidth = 180
  const dateCardHeight = 180
  const defaultTitlesDatePadding = 50
  const defaultLineHeight = 96

  const parsedStartedAt = dayjs(startedAt).locale('pt-BR').format('MMM YYYY')
  const parsedFinishedAt = finishedAt ? dayjs(finishedAt).format('MMM YYYY') : 'current'

  useEffect(() => {
    setTitlesWrapperHeight(titlesWrapperRef?.current?.clientHeight)
  }, [titlesWrapperRef, titlesWrapperRef?.current?.clientHeight])

  const calculateHeight = () => {
    let height = 0
    if (!titlesWrapperHeight && !dateCardHeight) return height
    if (titlesWrapperHeight! > dateCardHeight!) {
      height = titlesWrapperHeight! - dateCardHeight! + defaultLineHeight
    } else {
      height = defaultLineHeight
    }
    return height
  }

  const handleShowMore = () => {
    setShowMore((prevState) => !prevState)
    setTimeout(() => setTitlesWrapperHeight(titlesWrapperRef?.current?.clientHeight))
  }

  const renderDescription = () => {
    if (description) {
      return (
        <div
          className={classNames('flex flex-col gap-4', {
            'items-end': left
          })}
        >
          <article
            className={classNames('max-w-[25rem] mt-7 prose font-extralight', {
              'text-right mr-4': left,
              'max-h-40 overflow-y-clip': showReadMoreBtn && !showMore
            })}
            dir={left ? 'rtl' : 'ltr'}
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </article>
          {showReadMoreBtn && (
            <Button
              text={showMore ? t('common.read-less') : t('common.read-more')}
              variant="ghost"
              onClick={handleShowMore}
            />
          )}
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-[0.125rem] bg-primary" style={{ height: defaultLineHeight }} />
      <div
        className="rounded-lg bg-base-30 flex items-center justify-center p-2"
        style={{
          width: dateCardWidth,
          height: dateCardHeight
        }}
      >
        {parsedStartedAt} - {parsedFinishedAt}
      </div>
      <div
        className={classNames('flex flex-col absolute pb-4 mt-24', {
          'self-start': !left,
          'self-end': left,
          'items-end': left
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

        {description && renderDescription()}
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
