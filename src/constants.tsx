import { SiAmazonaws, SiDocker, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiNginx, SiNodedotjs, SiPostgresql, SiReact, SiSvelte, SiTailwindcss, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'

export const TECH_TAGS = {
  React: {
    name: 'React',
    icon: <SiReact />,
    color: '#61DAFB'
  },
  TypeScript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: '#007ACC'
  },
  JavaScript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: '#F7DF1E'
  },
  NodeJS: {
    name: 'NodeJS',
    icon: <SiNodedotjs />,
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
    icon: <SiDocker />,
    color: '#2496ED'
  },
  Nginx: {
    name: 'Nginx',
    icon: <SiNginx />,
    color: '#269539'
  },
  AWS: {
    name: 'AWS',
    icon: <SiAmazonaws />,
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
  HTML: {
    name: 'HTML',
    icon: <SiHtml5 />,
    color: '#E34F26'
  },
  Postgres: {
    name: 'Postgres',
    icon: <SiPostgresql />,
    color: '#336791'
  },
  Git: {
    name: 'Git',
    icon: <SiGit />,
    color: '#F05032'
  },
  GitHub: {
    name: 'GitHub',
    icon: <SiGithub />,
    color: '#181717'
  },
  VSCode: {
    name: 'VSCode',
    icon: <SiVisualstudiocode />,
    color: '#007ACC'
  },
  Vercel: {
    name: 'Vercel',
    icon: <SiVercel />,
    color: '#000000'
  }
} as const
