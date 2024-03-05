import { projects } from '@/constants'
import ProjectItem from './ProjectItem'

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
