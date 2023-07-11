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
import { useProfessionalExperiences, useProjects, useServices, useTranslationClient } from '@my-portfolio/hooks'
import { languages } from '@my-portfolio/i18n'
import { TechStackProps } from '@my-portfolio/types'
import { MessageFavorite } from 'iconsax-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ContactCard } from './components/ContactCard'
import classNames from 'classnames'
const LogoCarousel = dynamic(() => import('@my-portfolio/components/LogoCarousel/LogoCarousel'), {
  ssr: false,
  loading: () => <Loading />
})

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params
  const { t } = useTranslationClient(locale)

  const { data: professionalExperiences, isLoading: isProfessionalExperiencesLoading } = useProfessionalExperiences()
  const { data: services, isLoading: isServicesLoading } = useServices()
  const { data: projects, isLoading: isProjectsLoading } = useProjects()

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

  const companiesLogos = [
    '/logos/kwan.png',
    '/logos/mindera.png',
    '/logos/zup.png',
    '/logos/builders.png',
    '/logos/cedro.webp',
    '/logos/subway.png',
    '/logos/totvs.svg',
    '/logos/udibank.webp'
  ]

  const goToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const destination = document.querySelector('#contact')
    if (destination) {
      destination.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  const renderHeroImage = (className?: string) => (
    <div className={classNames('relative max-sm:w-[18rem]', className)}>
      <Image
        src="/images/hero-avatar.png"
        alt="My hero avatar, just a photo of myself"
        width={488}
        height={424}
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  )

  return (
    <main className="flex flex-col items-center justify-between w-full">
      <section className="flex flex-col items-center gap-11 px-8 py-16 w-full sm:p-16 lg:h-[calc(100vh-8rem)]">
        <div className="flex flex-col lg:justify-between sm:flex-row sm:w-full max-sm:gap-11">
          <div className="flex flex-col gap-11 max-sm:items-center">
            <h1 className="text-2xl text-white font-medium leading-tight max-sm:text-center md:text-3xl lg:text-5xl max-sm:order-1">
              {t('hero.presentation')}
              <br />
              {t('common.job-title')}
            </h1>
            {renderHeroImage('sm:hidden max-sm:order-2')}
            <Button
              text={t('hero.lets-chat')}
              color="primary"
              icon={<MessageFavorite variant="Outline" />}
              className="max-sm:order-4"
              onClick={goToContact}
            />
            <p className="max-w-xs max-sm:text-center max-sm:order-3">{t('hero.description')}</p>
          </div>

          {renderHeroImage('max-sm:hidden')}

          <div className="flex justify-center gap-6 sm:flex-col">
            <TextData title="6+" subtitle={t('common.years-of-experience')} />
            <TextData title="10+" subtitle={t('hero.handled-projects')} />
            <TextData title="10+" subtitle={t('hero.clients')} />
          </div>
        </div>
        <AnimatedMouse className="absolute bottom-16 max-sm:order-6 max-lg:hidden" />
      </section>

      <section
        id="about-me"
        className="w-full px-8 py-20 flex items-center justify-center bg-primary gap-48 sm:px-16 sm:flex-row max-sm:flex-col max-sm:gap-24 max-lg:gap-16"
      >
        <YearsOfXpCard years={6} label={t('common.years-of-experience')} />
        <Title title={t('about.title')} subtitle={t('about.description')} />
      </section>

      <section className="w-full px-8 py-24 flex items-center justify-around sm:px-16 max-sm:flex-col max-sm:gap-20 max-lg:gap-8">
        <Title title={t('tech-stack.title')} subtitle={t('tech-stack.description')} variant="left" />
        <div className="flex flex-wrap max-w-lg gap-16 max-md:max-w-xs max-lg:gap-6 max-md:justify-center max-lg:max-w-[26rem]">
          {techStacks.map(({ title, subtitle, icon, link }, index) => (
            <StackCard key={index} title={title} subtitle={subtitle} content={icon} href={link} />
          ))}
        </div>
      </section>

      <section id="services" className="w-full px-16 py-24 flex flex-col items-center justify-around bg-base-50 gap-28">
        <Title title={t('services.title')} subtitle={t('services.description')} variant="center" />
        {isServicesLoading && <Loading />}
        {!isServicesLoading && (
          <div className="flex flex-wrap gap-16 justify-center">
            {services.map(({ title, description, icon }, index) => (
              <ServiceCard key={index} title={title} description={description} content={icon.url} />
            ))}
          </div>
        )}
      </section>

      <section className="w-full px-8 py-8 flex items-center bg-secondary gap-28 sm:px-16 sm:py-12 max-lg:flex-col max-lg:gap-8">
        <Title
          title={t('cta-worked-companies.title')}
          titleClassName="text-2xl font-bold leading-tight text-slate-800 w-fit max-md:text-xl max-lg:text-center"
          variant="custom"
        />
        <div className="w-[50%] max-lg:w-full">
          <LogoCarousel logos={companiesLogos} />
        </div>
      </section>

      <section className="w-full px-4 py-24 flex flex-col items-center justify-around bg-base-50 gap-28 sm:px-16">
        <Title
          title={t('professional-experience.title')}
          subtitle={t('professional-experience.description')}
          variant="center"
        />
        {isProfessionalExperiencesLoading && <Loading />}
        {!isProfessionalExperiencesLoading && (
          <div className="max-md:self-start">
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
          </div>
        )}
      </section>

      <section
        id="portfolio"
        className="w-full px-8 pt-24 pb-48 flex flex-col items-center justify-around bg-base-100 gap-28 sm:px-16"
      >
        <Title title={t('latest-projects.title')} subtitle={t('latest-projects.description')} variant="center" />

        {isProjectsLoading && <Loading />}
        {!isProjectsLoading && (
          <div className="flex gap-24 flex-wrap justify-center max-lg:gap-12">
            {projects.map(({ id, title, description, pinImage, skills }) => (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                src={pinImage.url}
                skills={skills.map((skill) => skill.title)}
              />
            ))}
          </div>
        )}
      </section>

      <section className="w-full flex items-center justify-center">
        <div className="px-16 py-8 flex items-center justify-center bg-primary text-white rounded-2xl absolute gap-12 max-md:px-2 max-sm:flex-col max-lg:w-[80%] max-lg:gap-4">
          <Title
            title={t('cta-github-linkedin.title')}
            titleClassName="text-2xl font-bold w-fit max-lg:text-lg max-lg:text-center max-lg:w-"
            variant="custom"
          />

          <div className="flex items-center gap-10 max-lg:gap-4">
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

      <section id="contact" className="w-full px-52 pb-24 pt-40 flex flex-col justify-around bg-base-200 max-md:px-8">
        <Title
          title={t('get-in-touch.title')}
          subtitle={t('get-in-touch.description')}
          variant="left"
          subtitleClassName="!text-2xl font-extralight !max-w-2xl max-md:!text-sm max-lg:!text-base"
        />
        <div>
          <figure className="absolute right-52 mb-44 max-md:right-2 max-lg:right-8 max-md:mb-32">
            <Image
              src="/icons/footer-icons.svg"
              width={22}
              height={13}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt="Footer icons"
            />
          </figure>
        </div>
        <div className="flex gap-40 flex-wrap mt-28 max-lg:gap-10">
          <ContactCard variant="whatsapp" value={t('get-in-touch.whatsapp')} />
          <ContactCard variant="email" value={t('get-in-touch.email')} />
        </div>
      </section>

      <section className="w-full px-16 py-8 flex justify-between bg-secondary text-slate-900 max-sm:px-1 max-sm:justify-center">
        <div className="flex items-center max-md:text-xs max-sm:hidden">
          <p className="font-medium">Lucas Ferreira</p>
          <p className="font-extralight">&nbsp;|&nbsp;{t('common.job-title')}</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium max-md:text-xs">© 2023 by Lucas Ferreira. All Rights Reserved</p>
        </div>
      </section>
    </main>
  )
}
