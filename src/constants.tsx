import { BiLogoTypescript } from 'react-icons/bi'
import { FaAws, FaDocker, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiHtml5, SiMysql, SiNextdotjs, SiNginx, SiSvelte, SiTailwindcss } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

export const TECH_TAGS = {
  React: {
    name: 'React',
    icon: <FaReact />,
    color: '#61DAFB'
  },
  TypeScript: {
    name: 'TypeScript',
    icon: <BiLogoTypescript />,
    color: '#007ACC'
  },
  JavaScript: {
    name: 'JavaScript',
    icon: <FaJs />,
    color: '#F7DF1E'
  },
  NodeJS: {
    name: 'NodeJS',
    icon: <FaNodeJs />,
    color: '#339933'
  },
  Express: {
    name: 'Express',
    icon: <SiExpress />,
    color: '#000000'
  },
  MySQL: {
    name: 'MySQL',
    icon: <SiMysql />,
    color: '#4479A1'
  },
  Docker: {
    name: 'Docker',
    icon: <FaDocker />,
    color: '#2496ED'
  },
  Nginx: {
    name: 'Nginx',
    icon: <SiNginx />,
    color: '#269539'
  },
  AWS: {
    name: 'AWS',
    icon: <FaAws />,
    color: '#232F3E'
  },
  NextJS: {
    name: 'NextJS',
    icon: <SiNextdotjs />,
    color: '#000000'
  },
  Svelte: {
    name: 'SvelteKit',
    icon: <SiSvelte />,
    color: '#FF3E00'
  },
  TailwindCSS: {
    name: 'TailwindCSS',
    icon: <SiTailwindcss />,
    color: '#38B2AC'
  },
  VSCode: {
    name: 'VSCode',
    icon: <VscCode />,
    color: '#007ACC'
  },
  HTML: {
    name: 'HTML',
    icon: <SiHtml5 />,
    color: '#E34F26'
  }
} as const
