import { type TechnologyItemType } from './types'
import { AWSIcon, CSSIcon, DockerIcon, ExpressIcon, GitHubIcon, GitIcon, HTMLIcon, JavaScriptIcon, MySQLIcon, NextJSIcon, NginxIcon, NodeJSIcon, PostgresIcon, PythonIcon, ReactIcon, SvelteIcon, TailwindCSSIcon, TypeScriptIcon, VSCodeIcon, VercelIcon } from './components/Icons'

export const TECH_TAGS = {
  React: {
    name: 'React',
    icon: <ReactIcon />,
    color: '#61DAFB'
  },
  TypeScript: {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
    color: '#007ACC'
  },
  JavaScript: {
    name: 'JavaScript',
    icon: <JavaScriptIcon />,
    color: '#F7DF1E'
  },
  NodeJS: {
    name: 'NodeJS',
    icon: <NodeJSIcon />,
    color: '#339933'
  },
  Express: {
    name: 'Express',
    icon: <ExpressIcon />,
    color: '#ffffff'
  },
  MySQL: {
    name: 'MySQL',
    icon: <MySQLIcon />,
    color: '#4479A1'
  },
  Docker: {
    name: 'Docker',
    icon: <DockerIcon />,
    color: '#2496ED'
  },
  Nginx: {
    name: 'Nginx',
    icon: <NginxIcon />,
    color: '#269539'
  },
  AWS: {
    name: 'AWS',
    icon: <AWSIcon />,
    color: '#eaeaea'
  },
  NextJS: {
    name: 'NextJS',
    icon: <NextJSIcon />,
    color: '#ffffff'
  },
  Svelte: {
    name: 'SvelteKit',
    icon: <SvelteIcon />,
    color: '#FF3E00'
  },
  TailwindCSS: {
    name: 'TailwindCSS',
    icon: <TailwindCSSIcon />,
    color: '#38B2AC'
  },
  HTML: {
    name: 'HTML',
    icon: <HTMLIcon />,
    color: '#E34F26'
  },
  CSS: {
    name: 'CSS',
    icon: <CSSIcon />,
    color: '#1572B6'
  },
  Postgres: {
    name: 'Postgres',
    icon: <PostgresIcon />,
    color: '#336791'
  },
  Git: {
    name: 'Git',
    icon: <GitIcon />,
    color: '#F05032'
  },
  GitHub: {
    name: 'GitHub',
    icon: <GitHubIcon />,
    color: '#cccccc'
  },
  VSCode: {
    name: 'VSCode',
    icon: <VSCodeIcon />,
    color: '#007ACC'
  },
  Vercel: {
    name: 'Vercel',
    icon: <VercelIcon />,
    color: '#F5F5F5'
  },
  Python: {
    name: 'Python',
    icon: <PythonIcon />,
    color: '#3776AB'
  }
} as const

export const technologiesSections: TechnologyItemType[] = [
  {
    title: 'Frontend',
    techs: [
      TECH_TAGS.React,
      {
        ...TECH_TAGS.TypeScript,
        glow: true
      },
      {
        ...TECH_TAGS.NextJS,
        glow: true
      },
      TECH_TAGS.Svelte,
      {
        ...TECH_TAGS.TailwindCSS,
        glow: true
      }
    ]
  },
  {
    title: 'Backend',
    techs: [
      TECH_TAGS.NodeJS,
      TECH_TAGS.Express,
      TECH_TAGS.Postgres,
      TECH_TAGS.AWS,
      TECH_TAGS.Nginx,
      TECH_TAGS.Python
    ]
  },
  {
    title: 'Environment & Tools',
    doubleSpan: true,
    techs: [
      TECH_TAGS.Docker,
      TECH_TAGS.Git,
      TECH_TAGS.GitHub,
      TECH_TAGS.Vercel,
      TECH_TAGS.VSCode
    ]
  }
]
