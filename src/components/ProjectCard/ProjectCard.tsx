import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { EmptyState } from '../EmptyState/EmptyState'

type Props = {
  title: string
  src?: string
  isNew?: boolean
  skills?: string[]
  className?: string
}
export const ProjectCard: React.FC<Props> = ({ title, src, skills, isNew = false, className }) => {
  return (
    <div className={classNames('card w-96 bg-slate-200 shadow-xl', className)}>
      <figure className="w-full h-72 self-center">
        {src && (
          <Image
            src={src}
            width={600}
            height={600}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
            alt={`Image of ${title} project`}
          />
        )}
        {!src && <EmptyState text="Due to copyright I cannot show you a project image." />}
      </figure>
      <div className="card-body text-slate-700">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-accent text-white">NEW</div>}
        </h2>
        <p className="text-slate-500">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end text-slate-600">
          {skills?.length &&
            skills.map((skill) => (
              <div key={skill} className="badge badge-outline">
                {skill}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
