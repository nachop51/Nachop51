import { type ProjectsType } from '@/types'
import Badge from '../Badge'
import Image from 'next/image'
import { GitHubIcon } from '../Icons'
import { World } from '../Icons/Misc'

const ProjectItem = ({ title, description, tags, images, links, repos }: ProjectsType) => {
  const renderButtons = ({ links, repos }: Pick<ProjectsType, 'links' | 'repos'>) => {
    const max = Math.max(links.length, repos.length)

    const buttons = []

    for (let i = 0; i < max; i++) {
      buttons.push(
        <div key={i} className='flex gap-2'>
          {links[i] != null && <a href={links[i]} target='_blank' rel='noopener noreferrer' className='btn btn-primary gap-1'><World className='size-5' />Visit</a>}
          {repos[i] != null && <a href={repos[i]} target='_blank' rel='noopener noreferrer' className='btn btn-secondary gap-1'><GitHubIcon className='size-5' />Repo</a>}
        </div>
      )
    }

    return buttons
  }

  const renderImages = ({ images }: Pick<ProjectsType, 'images'>) => {
    if (typeof images === 'string') {
      return (
        <div className='relative w-full py-6'>
          <Image
            src={images}
            title={title}
            alt={title}
            width={800}
            height={800}
            className='relative mx-auto w-full rounded-lg'
          />
        </div>
      )
    }

    return (
      <div className='diff aspect-[16/9]'>
        <div className='diff-item-1'>
          <Image
            src={images[0]}
            title={title}
            alt={title}
            width={800}
            height={800}
            className='rounded-lg'
          />
        </div>
        <div className='diff-item-2'>
          <Image
            src={images[1]}
            alt={title}
            width={800}
            height={800}
            className='rounded-lg'
          />
        </div>
        <div className='diff-resizer' />
      </div>
    )
  }

  return (
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
          {
            renderImages({ images })
          }
        </div>
        <div className='flex flex-wrap gap-2 mt-4'>
          {
            renderButtons({ links, repos })
          }
        </div>
      </div>
    </article>
  )
}

export default ProjectItem
