'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/swiper.css'
import { useBreakpoint } from '@my-portfolio/hooks'

interface Props {
  logos?: string[] | { url: string; title?: string }[]
  children?: React.ReactNode
}
const LogoCarousel: React.FC<Props> = ({
  logos = [
    '/icons/aws.svg',
    '/icons/docker.svg',
    '/icons/nestjs.svg',
    '/icons/nextjs.svg',
    '/icons/nodejs.svg',
    '/icons/react.svg'
  ]
}) => {
  const { isBelowSm } = useBreakpoint('sm')
  return (
    <Swiper
      slidesPerView={isBelowSm ? 2 : 3}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false
      }}
      loop
      modules={[Autoplay]}
      className="w-full h-full"
    >
      {logos &&
        logos.map((src, index) => (
          <SwiperSlide key={index} className="!flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-40 h-40 brightness-0 saturate-0 hover:saturate-100 hover:brightness-75">
              <Image
                width={600}
                height={600}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                src={typeof src === 'string' ? src : src.url}
                alt="World wide web icon"
              />
              {typeof src !== 'string' && src?.title && (
                <h1 className="font-medium text-lg text-slate-700">{src.title}</h1>
              )}
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default LogoCarousel
