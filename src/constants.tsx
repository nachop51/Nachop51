import { BiLogoTypescript } from 'react-icons/bi'
import { FaAws, FaDocker, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMysql, SiNextdotjs, SiNginx, SiSvelte } from 'react-icons/si'

export const TECHONOLOGY_CATALOG = {
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
    name: 'Svelte',
    icon: <SiSvelte />,
    color: '#FF3E00'
  }
} as const
