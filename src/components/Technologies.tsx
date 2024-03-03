import { TECH_TAGS } from '@/constants'
import React from 'react'

interface TechnologyItemType {
  title: string
  doubleSpan?: boolean
  techs: Array<typeof TECH_TAGS[keyof typeof TECH_TAGS] & { glow?: boolean }>
}

const TechnologyItem = ({ title, doubleSpan, techs }: TechnologyItemType) => {
  const className = `bg-gray-500/10 transition-all hover:shadow-2xl hover:shadow-3xl hover:shadow-[var(--shadow)] rounded-lg p-6 ${doubleSpan === true ? 'md:col-span-2' : ''}`

  const renderTechnologies = () => {
    const rendered = []
    let slice: React.ReactNode[] = []

    techs.forEach((tech, idx) => {
      if (idx % 3 === 0 && idx !== 0) {
        rendered.push(slice)
        slice = []
      }

      slice.push(
        <div key={tech.name + tech.color} className={` ${tech?.glow === true ? 'glow' : ''}`}>
          <div className='w-min mx-auto [&>svg]:size-12 [&>svg]:mx-auto mb-2'>
            {tech.icon}
          </div>
          <p className='text-center'>
            {tech.name}
          </p>
        </div>
      )
    })

    if (slice.length > 0) {
      rendered.push(slice)
    }

    return rendered
  }

  return (
    <article className={className}>
      <h3 className='text-primary text-center font-semibold text-2xl sm:text-3xl mb-5'>{title}</h3>
      <ul
        className='flex flex-col gap-8 flex-wrap justify-around'
      >
        {
          renderTechnologies().map((slice, idx) => (
            <li key={idx} className='flex flex-row gap-4 justify-evenly'>
              {slice}
            </li>
          ))
        }
      </ul>
    </article>
  )
}

const technologiesSections: TechnologyItemType[] = [
  {
    title: 'Frontend',
    techs: [
      TECH_TAGS.React,
      {
        ...TECH_TAGS.TypeScript,
        glow: true
      },
      {
        ...TECH_TAGS.NextJS,
        glow: true
      },
      TECH_TAGS.Svelte,
      {
        ...TECH_TAGS.TailwindCSS,
        glow: true
      }
    ]
  },
  {
    title: 'Backend',
    techs: [
      TECH_TAGS.NodeJS,
      TECH_TAGS.Express,
      TECH_TAGS.Postgres,
      TECH_TAGS.AWS,
      TECH_TAGS.Nginx
    ]
  },
  {
    title: 'Environment & Tools',
    doubleSpan: true,
    techs: [
      TECH_TAGS.Docker,
      TECH_TAGS.Git,
      TECH_TAGS.GitHub,
      TECH_TAGS.Vercel,
      TECH_TAGS.VSCode
    ]
  }
]

const Technologies = () => {
  return (
    <div className='mt-6 grid md:grid-cols-2 gap-8 mx-auto'>
      {
        technologiesSections.map(({ title, techs, doubleSpan }) => (
          <TechnologyItem key={title} title={title} techs={techs} doubleSpan={doubleSpan} />
        ))
      }
    </div>
  )
}

export default Technologies
