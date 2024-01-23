const Experience = () => {
  const experience = [
    {
      date: 'Nov 2022 - Present',
      role: 'Software Engineer',
      company: 'Holberton',
      description: 'I\'m a Junior Software Engineer adept at merging technical expertise with clear communication. As a collaborative team player, I contribute to student progress tracking and integrate cutting-edge technologies. My focus on efficiency involves leveraging software development and automation. With a strong technical foundation and effective communication skills, I\'m geared for impactful contributions to project success and team achievements.'
    },
    {
      date: 'Jun 2022 - Nov 2022',
      role: 'Tutor',
      company: 'Holberton',
      description: 'At Holberton, I honed technical expertise while developing crucial soft skills. From delivering impactful technical speeches to adapting communication for diverse audiences, my abilities extend to effective teaching, motivating students, and conducting insightful evaluations. These skills uniquely position me to support and foster the growth of aspiring software developers.'
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
