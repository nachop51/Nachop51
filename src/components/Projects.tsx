import React from 'react'
import Badge from './Badge'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { TECHONOLOGY_CATALOG } from '@/constants'
import type { TechnologyCatalogItem } from '@/types'

interface ProjectsType {
  title: string
  description: string
  image: string
  link?: string
  repo: string
  tags: TechnologyCatalogItem[]
}

const projects: ProjectsType[] = [
  {
    title: 'Loopit',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, aliquid facilis exercitationem eum praesentium. Iusto reiciendis magnam molestias quibusdam, dolorem magni optio cumque consequatur. Sit consectetur beatae unde velit.',
    image: '/images/loopit.png',
    repo: 'https://github.com/Nachop51/loopit',
    tags: [
      TECHONOLOGY_CATALOG.React,
      TECHONOLOGY_CATALOG.JavaScript,
      TECHONOLOGY_CATALOG.NodeJS,
      TECHONOLOGY_CATALOG.Express,
      TECHONOLOGY_CATALOG.MySQL,
      TECHONOLOGY_CATALOG.Docker,
      TECHONOLOGY_CATALOG.Nginx,
      TECHONOLOGY_CATALOG.AWS
    ]
  }
]

const Projects = () => {
  return (
    <>
      {
        projects.map(({ title, description, image, link, repo, tags }) => (
          <article key={title} className='flex flex-col items-start gap-4'>
            <h3 className='font-bold text-2xl'>{title}</h3>
            <div className='[&>p]:mb-4 [&>p]:text-pretty [&>p>strong]:font-bold [&>p>strong]:text-secondary'>
              <p>
                {description}
              </p>
              <p>
                <strong>Technologies used:</strong>
              </p>
              <div className='flex flex-wrap gap-2'>
                {
                  tags.map(technology => (
                    <Badge key={technology.name} techonology={technology} />
                  ))
                }
              </div>
              <div className='relative w-full p-4'>
                <Image
                  src={image}
                  alt={title}
                  layout='responsive'
                  width={1920}
                  height={1080}
                  className='relative mx-auto w-3/4 min-w-[250px] max-w-[350px] lg:w-11/12 lg:max-w-[400px]'
                />
              </div>
              <div className='flex gap-2 mt-4'>
                {link != null && <a href={link} target='_blank' rel='noopener noreferrer' className='btn btn-primary gap-1'><TbWorld className='size-5' />Visit</a>}
                <a href={repo} target='_blank' rel='noopener noreferrer' className='btn btn-secondary gap-1'><FaGithub className='size-5' />Repo</a>
              </div>
            </div>
          </article>
        ))
      }
    </>
  )
}

export default Projects
