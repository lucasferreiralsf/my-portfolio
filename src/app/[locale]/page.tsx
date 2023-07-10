'use client'

import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'
import {
  AnimatedMouse,
  Button,
  Loading,
  ProjectCard,
  ServiceCard,
  StackCard,
  TextData,
  Timeline,
  TimelineElement,
  Title,
  YearsOfXpCard
} from '@my-portfolio/components'
import { useProfessionalExperiences, useServices, useTranslationClient } from '@my-portfolio/hooks'
import { languages } from '@my-portfolio/i18n'
import { TechStackProps } from '@my-portfolio/types'
import { MessageFavorite } from 'iconsax-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ContactCard } from './components/ContactCard'
const LogoCarousel = dynamic(() => import('@my-portfolio/components/LogoCarousel/LogoCarousel'), {
  ssr: false,
  // TODO: update this to show a loading user friendly
  loading: () => <div>Loading...</div>
})

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params
  const { t } = useTranslationClient(locale)

  const { data: professionalExperiences, isLoading: isProfessionalExperiencesLoading } = useProfessionalExperiences()
  const { data: services, isLoading: isServicesLoading } = useServices()

  const techStacks: TechStackProps[] = [
    {
      title: 'NodeJS',
      subtitle: `4+ ${t('common.years-of-experience')}`,
      link: 'https://nodejs.org/',
      icon: <Image width={82.8} height={82.8} className="w-auto h-auto" src="/icons/nodejs.svg" alt="Node JS icon" />
    },
    {
      title: 'NextJS',
      subtitle: `5+ ${t('common.years-of-experience')}`,
      link: 'https://nextjs.org/',
      icon: <Image width={82.8} height={82.8} className="w-auto h-auto" src="/icons/nextjs.svg" alt="Next JS icon" />
    },
    {
      title: 'ReactJS',
      subtitle: `6+ ${t('common.years-of-experience')}`,
      link: 'https://react.dev/',
      icon: <Image width={82.8} height={82.8} className="w-auto h-auto" src="/icons/react.svg" alt="React JS icon" />
    },
    {
      title: 'AWS',
      subtitle: `4+ ${t('common.years-of-experience')}`,
      link: 'https://aws.amazon.com/',
      icon: <Image width={82.8} height={82.8} className="w-auto h-auto" src="/icons/aws.svg" alt="AWS icon" />
    },
    {
      title: 'NestJS',
      subtitle: `4+ ${t('common.years-of-experience')}`,
      link: 'https://nestjs.com/',
      icon: <Image width={82.8} height={82.8} className="w-auto h-auto" src="/icons/nestjs.svg" alt="Nest JS icon" />
    },
    {
      title: 'Docker & Kubernetes',
      subtitle: `5+ ${t('common.years-of-experience')}`,
      link: 'https://www.docker.com/',
      icon: <Image width={82.8} height={82.8} className="w-auto h-auto" src="/icons/docker.svg" alt="Docker icon" />
    }
  ]

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="w-full p-16 flex flex-col items-center h-[calc(100vh-8rem)]">
        <div className="w-full flex items-center justify-between">
          <div className="max-w-xl flex flex-col gap-11">
            <h1 className="text-5xl text-white font-medium leading-tight">
              {t('hero.presentation')}
              <br />
              {t('common.job-title')}
            </h1>
            <Button text={t('hero.lets-chat')} color="primary" icon={<MessageFavorite variant="Outline" />} />
            <p className="max-w-xs">{t('hero.description')}</p>
          </div>
          <Image
            src="/images/hero-avatar.png"
            alt="My hero avatar, just a photo of myself"
            width={488}
            height={424}
            className="w-auto h-auto"
            priority
          />
          <div className="flex flex-col gap-7">
            <TextData title="6+" subtitle={t('common.years-of-experience')} />
            <TextData title="10+" subtitle={t('hero.handled-projects')} />
            <TextData title="10+" subtitle={t('hero.clients')} />
          </div>
        </div>
        <AnimatedMouse className="absolute bottom-16" />
      </section>

      <section id="about-me" className="w-full px-16 py-20 flex items-center justify-center gap-48 bg-primary">
        <YearsOfXpCard years={6} label={t('common.years-of-experience')} />
        <Title title={t('about.title')} subtitle={t('about.description')} />
      </section>

      <section className="w-full px-16 py-24 flex items-center justify-around ">
        <Title title={t('tech-stack.title')} subtitle={t('tech-stack.description')} variant="left" />
        <div className="flex flex-wrap max-w-[44rem] gap-16">
          {techStacks.map(({ title, subtitle, icon, link }, index) => (
            <StackCard key={index} title={title} subtitle={subtitle} content={icon} href={link} />
          ))}
        </div>
      </section>

      <section id="services" className="w-full px-16 py-24 flex flex-col items-center justify-around bg-base-50 gap-28">
        <Title title={t('services.title')} subtitle={t('services.description')} variant="center" />
        {isServicesLoading && <Loading />}
        {!isServicesLoading && (
          <div className="flex flex-wrap gap-16">
            {services.map(({ title, description, icon }, index) => (
              <ServiceCard key={index} title={title} description={description} content={icon.url} />
            ))}
          </div>
        )}
      </section>

      <section className="w-full px-16 py-12 flex items-center bg-secondary gap-28">
        <Title
          title={t('cta-worked-companies.title')}
          titleClassName="text-2xl font-bold leading-tight text-slate-800 w-fit"
          variant="custom"
        />
        <div className="w-[50%]">
          <LogoCarousel />
        </div>
      </section>

      <section className="w-full px-16 py-24 flex flex-col items-center justify-around bg-base-50 gap-28">
        <Title
          title={t('professional-experience.title')}
          subtitle={t('professional-experience.description')}
          variant="center"
        />
        {isProfessionalExperiencesLoading && <Loading />}
        {!isProfessionalExperiencesLoading && (
          <Timeline>
            {professionalExperiences.map(({ id, title, company, startedAt, finishedAt, description }) => (
              <TimelineElement
                key={id}
                company={company}
                title={title}
                startedAt={startedAt}
                finishedAt={finishedAt}
                description={description}
              />
            ))}
          </Timeline>
        )}
      </section>

      <section
        id="portfolio"
        className="w-full px-16 pt-24 pb-48 flex flex-col items-center justify-around bg-base-100 gap-28"
      >
        <Title title={t('latest-projects.title')} subtitle={t('latest-projects.description')} variant="center" />

        <div className="grid grid-cols-3 gap-24">
          <ProjectCard title={'Project 1'} src={'/images/hero-avatar.png'} isNew skills={['ReactJS', 'NodeJS']} />
          <ProjectCard title={'Project 1'} isNew skills={['ReactJS', 'NodeJS']} />
          <ProjectCard title={'Project 1'} skills={['NextJS', 'ReactJS', 'Typescript', 'NodeJS']} />
          <ProjectCard title={'Project 1'} skills={['NextJS', 'ReactJS', 'Typescript', 'NodeJS']} />
          <ProjectCard title={'Project 1'} skills={['NextJS', 'ReactJS', 'Typescript', 'NodeJS']} />
          <ProjectCard title={'Project 1'} skills={['NextJS', 'ReactJS', 'Typescript', 'NodeJS']} />
        </div>
      </section>

      <section className="w-full flex items-center justify-center">
        <div className="px-16 py-8 flex items-center bg-primary text-white rounded-2xl absolute gap-12">
          <Title title={t('cta-github-linkedin.title')} titleClassName="text-2xl font-bold w-fit" variant="custom" />

          <div className="flex items-center gap-10">
            <a
              href="https://www.linkedin.com/in/lucasferreiralsf/"
              target="_blank"
              className="btn btn-circle btn-outline border-none hover:bg-secondary text-white"
            >
              <SiLinkedin size={32} weight="fill" />
            </a>
            <a
              href="https://github.com/lucasferreiralsf"
              target="_blank"
              className="btn btn-circle btn-outline border-none hover:bg-secondary text-white"
            >
              <SiGithub size={32} weight="fill" />
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full px-52 pb-24 pt-40 flex flex-col justify-around bg-base-200 gap-28">
        <figure className="absolute right-52 mb-44">
          <Image
            src="/icons/footer-icons.svg"
            width={22}
            height={13}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            alt="Footer icons"
          />
        </figure>
        <Title
          title={t('get-in-touch.title')}
          subtitle={t('get-in-touch.description')}
          variant="left"
          subtitleClassName="!text-2xl font-extralight !max-w-2xl"
        />
        <div className="flex gap-40">
          <ContactCard variant="whatsapp" value={t('get-in-touch.whatsapp')} />
          <ContactCard variant="email" value={t('get-in-touch.email')} />
        </div>
      </section>

      <section className="w-full px-16 py-8 flex justify-between bg-secondary text-slate-900">
        <div className="flex items-center">
          <p className="font-medium">Lucas Ferreira</p>
          <p className="font-extralight">&nbsp;|&nbsp;{t('common.job-title')}</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium">© 2023 by Lucas Ferreira. All Rights Reserved</p>
        </div>
      </section>
    </main>
  )
}
