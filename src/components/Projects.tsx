import Badge from './Badge'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { TECH_TAGS } from '@/constants'
import type { TechnologyCatalogItem } from '@/types'

interface ProjectsType {
  title: string
  description: string
  image: string
  links: string[]
  repos: string[]
  tags: TechnologyCatalogItem[]
}

const projects: ProjectsType[] = [
  {
    title: 'Nachortener',
    description: 'Simplify your long URLs into short shareable links! Easily customize and track your links for effective online sharing, change the visibility of your link. Say more with less. Try nachortener now!',
    image: '/images/short_nachop.webp',
    repos: ['https://github.com/Nachop51/Nachop51'],
    links: ['https://short.nachop.xyz/'],
    tags: [
      TECH_TAGS.Svelte,
      TECH_TAGS.TypeScript,
      TECH_TAGS.TailwindCSS
    ]
  },
  {
    title: 'Nachop Theme',
    description: 'A dark theme for Visual Studio Code, inspired by the best themes out there. It is designed to be easy on the eyes, while providing all the important information you need to get your work done. It is also designed to be easy to read, with a clean and simple design.',
    image: '/images/nachop-theme.webp',
    repos: ['https://github.com/Nachop51/nachop-theme'],
    links: ['https://marketplace.visualstudio.com/items?itemName=Nachop51.nachop-theme'],
    tags: [
      TECH_TAGS.VSCode,
      TECH_TAGS.JavaScript
    ]
  },
  {
    title: 'Paid websites',
    description: 'Specific websites for paid projects. This projects are for Holberton School Uruguay. Strategicly designed to attract potential clients and show the potential of the students.',
    image: '/images/paid-projects.webp',
    repos: ['https://github.com/Nachop51/hbtn-webs/tree/main/it_builders-web', 'https://github.com/Nachop51/hbtn-webs/tree/main/c20-linktree'],
    links: ['https://holbertonschool.uy/a-holbie-in-your-team', 'https://holbertonschool.uy/c20-demoday'],
    tags: [
      TECH_TAGS.HTML,
      TECH_TAGS.TailwindCSS,
      TECH_TAGS.NodeJS
    ]
  },
  {
    title: 'Loopit',
    description: 'Loopit is a social media platform for programmers to share their code with the world. Create a profile, upload your code, and share it with your friends and followers.',
    image: '/images/loopit.webp',
    repos: ['https://github.com/Nachop51/loopit'],
    links: [],
    tags: [
      TECH_TAGS.React,
      TECH_TAGS.JavaScript,
      TECH_TAGS.NodeJS,
      TECH_TAGS.Express,
      TECH_TAGS.MySQL,
      TECH_TAGS.Docker,
      TECH_TAGS.Nginx,
      TECH_TAGS.AWS
    ]
  }
]

const Projects = () => {
  const renderButtons = (links: string[], repos: string[]) => {
    const max = Math.max(links.length, repos.length)

    const buttons = []

    for (let i = 0; i < max; i++) {
      buttons.push(
        <div key={i} className='flex gap-2'>
          {links[i] != null && <a href={links[i]} target='_blank' rel='noopener noreferrer' className='btn btn-primary gap-1'><TbWorld className='size-5' />Visit</a>}
          {repos[i] != null && <a href={repos[i]} target='_blank' rel='noopener noreferrer' className='btn btn-secondary gap-1'><FaGithub className='size-5' />Repo</a>}
        </div>
      )
    }

    return buttons
  }

  return (
    <div className='flex flex-col gap-12 mb-12'>
      {
        projects.map(({ title, description, image, links, repos, tags }) => (
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
              <div className='relative w-full py-6'>
                <Image
                  src={image}
                  alt={title}
                  layout='responsive'
                  width={800}
                  height={800}
                  className='relative mx-auto w-full rounded-lg'
                />
              </div>
              <div className='flex gap-2 mt-4'>
                {
                  renderButtons(links, repos)
                }
              </div>
            </div>
          </article>
        ))
      }
    </div>
  )
}

export default Projects
