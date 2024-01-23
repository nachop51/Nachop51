const Experience = () => {
  const experience = [
    {
      date: 'Nov 2022 - Present',
      role: 'Software Engineer',
      company: 'Holberton',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, aliquid facilis exercitationem eum praesentium. Iusto reiciendis magnam molestias quibusdam, dolorem magni optio cumque consequatur. Sit consectetur beatae unde velit.'
    },
    {
      date: 'Jun 2022 - Nov 2022',
      role: 'Tutor',
      company: 'Holberton',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, aliquid facilis exercitationem eum praesentium. Iusto reiciendis magnam molestias quibusdam, dolorem magni optio cumque consequatur. Sit consectetur beatae unde velit.'
    }
  ]

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
