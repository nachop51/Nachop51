import { TECH_TAGS } from '@/constants'
import type { ProjectsType } from '@/types'
import ProjectItem from './ProjectItem'

const projects: ProjectsType[] = [
  {
    title: 'Nachortener',
    description: 'Simplify your long URLs into short shareable links! Easily customize and track your links for effective online sharing, change the visibility of your link. Say more with less. Try nachortener now!',
    images: '/images/short_nachop.webp',
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
    images: '/images/nachop-theme.webp',
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
    images: ['/images/paid_1.webp', '/images/paid_2.webp'],
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
    images: '/images/loopit.webp',
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
  return (
    <div className='flex flex-col gap-12 mb-12'>
      {
        projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))
      }
    </div>
  )
}

export default Projects
