'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/swiper.css'

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
  return (
    <Swiper
      slidesPerView={3}
      // spaceBetween={100}
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
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <Image
                width={82.8}
                height={82.8}
                className="w-auto h-auto block"
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
