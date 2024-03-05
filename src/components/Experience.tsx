import { experience } from '@/constants'

const Experience = () => {
  return (
    <ol className='relative border-s border-base-content'>
      {
        experience.map(({ date, role, company, description }) => {
          return (
            <li key={date} className='mb-10 ms-4'>
              <div
                className='absolute w-[11px] h-3 rounded-full mt-1.5 -start-1.5 border border-accent bg-secondary'
              />
              <header>
                <time className='text-neutral-content'>{date}</time>
                <h3 className='font-bold text-xl text-secondary'>{role} - {company}</h3>
              </header>
              <p>
                {description}
              </p>
            </li>
          )
        })
      }
    </ol>
  )
}

export default Experience
