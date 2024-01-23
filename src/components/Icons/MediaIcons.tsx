import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

const mediaIcons = [
  {
    name: 'Github',
    link: 'https://github.com/Nachop51/',
    icon: <FiGithub />
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/nachop51/',
    icon: <FiInstagram />
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/inach0f',
    icon: <FiTwitter />
  },
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/ignacio-peralta-dev/',
    icon: <FiLinkedin />
  }
]

const MediaIcons = () => {
  return (
    <nav className='fixed w-10 bottom-0 -left-1 sm:left-3 right-auto z-10 text-xl text-primary'>
      <ul className='flex flex-col items-center m-0 p-0 list-none after:h-20 after:w-px after:bg-secondary'>
        {
          mediaIcons.map(({ name, link, icon }) => (
            <li key={name} className='p-2.5 cursor-pointer last-of-type:mb-3 transition-all hover:-translate-y-1 text-secondary hover:text-primary'>
              <a
                href={link}
                className='relative no-underline'
                target='_blank' rel='noopener noreferrer' title={name}
              >
                {icon}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default MediaIcons
