import { type ProjectsType, type TechnologyItemType } from './types'
import { AWSIcon, CSSIcon, DockerIcon, ExpressIcon, FigmaIcon, GitHubIcon, GitIcon, HTMLIcon, JavaScriptIcon, MongoIcon, MySQLIcon, NextJSIcon, NginxIcon, NodeJSIcon, PostgresIcon, PythonIcon, ReactIcon, ReduxIcon, SvelteIcon, TailwindCSSIcon, TypeScriptIcon, VSCodeIcon, VercelIcon } from './components/Icons'

export const TECH_TAGS = {
  React: {
    name: 'React',
    icon: <ReactIcon />,
    color: '#61DAFB'
  },
  Redux: {
    name: 'Redux',
    icon: <ReduxIcon />,
    color: '#764ABC'
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
  },
  MongoDB: {
    name: 'MongoDB',
    icon: <MongoIcon />,
    color: '#47A248'
  },
  Figma: {
    name: 'Figma',
    icon: <FigmaIcon />,
    color: '#F24E1E'
  }
} as const

export const experience = [
  {
    date: 'Nov 2022 - Present',
    role: 'Software Engineer',
    company: 'Holberton',
    description: 'I\'m a Junior Software Engineer who can combine technical expertise with clear communication. As a collaborative team player, I contribute to student progress tracking and integrate cutting-edge technologies. My focus is on efficiency through the use of software development and automation. With a strong technical foundation and effective communication skills, I\'m geared to make an impactful contribution to project success and team performance.'
  },
  {
    date: 'Jun 2022 - Nov 2022',
    role: 'Tutor',
    company: 'Holberton',
    description: 'At Holberton, I have honed my technical expertise while developing crucial soft skills. From delivering powerful technical speeches to adapting communications for diverse audiences, my abilities extend to effective teaching, motivating students and conducting insightful evaluations. These skills uniquely position me to support and encourage the growth of aspiring software developers.'
  }
] as const

export const projects: ProjectsType[] = [
  {
    title: 'Linkly',
    description: 'Simplify your long URLs into short shareable links! Easily customize and track your links for effective online sharing, change the visibility of your link. Say more with less. Try Linkly now!',
    images: '/images/linkly.webp',
    repos: ['https://github.com/Nachop51/Nachop51'],
    links: ['https://short.nachop.xyz/'],
    tags: [
      TECH_TAGS.Svelte,
      TECH_TAGS.TypeScript,
      TECH_TAGS.MongoDB,
      TECH_TAGS.Vercel,
      TECH_TAGS.TailwindCSS
    ]
  },
  {
    title: 'Nachop Theme',
    description: 'A dark theme for Visual Studio Code, inspired by the best themes out there. It is designed to be easy on the eyes, while providing all the important information you need to get your work done. It is also designed to be easy to read, with a clean and simple design.',
    images: '/images/nachop-theme.webp',
    repos: ['https://github.com/Nachop51/nachop-theme'],
    links: ['https://marketplace.visualstudio.com/items?itemName=Nachop51.nachop-theme'],
    tags: [
      TECH_TAGS.VSCode,
      TECH_TAGS.JavaScript
    ]
  },
  {
    title: 'Paid websites',
    description: 'Specific websites for paid projects. This projects are for Holberton School Uruguay. Strategicly designed to attract potential clients and show the potential of the students.',
    images: ['/images/paid_1.webp', '/images/paid_2.webp'],
    repos: ['https://github.com/Nachop51/hbtn-webs/tree/main/it_builders-web', 'https://github.com/Nachop51/hbtn-webs/tree/main/c20-linktree'],
    links: ['https://holbertonschool.uy/a-holbie-in-your-team', 'https://holbertonschool.uy/c20-demoday'],
    tags: [
      TECH_TAGS.HTML,
      TECH_TAGS.TailwindCSS,
      TECH_TAGS.NodeJS
    ]
  },
  {
    title: 'Loopit',
    description: 'Loopit is a social media platform for programmers to share their code with the world. Create a profile, upload your code, and share it with your friends and followers.',
    images: '/images/loopit.webp',
    repos: ['https://github.com/Nachop51/loopit'],
    links: [],
    tags: [
      TECH_TAGS.React,
      TECH_TAGS.JavaScript,
      TECH_TAGS.NodeJS,
      TECH_TAGS.Express,
      TECH_TAGS.MySQL,
      TECH_TAGS.Docker,
      TECH_TAGS.Nginx,
      TECH_TAGS.AWS
    ]
  }
] as const

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
      TECH_TAGS.Redux,
      TECH_TAGS.Svelte,
      {
        ...TECH_TAGS.TailwindCSS,
        glow: true
      },
      TECH_TAGS.HTML,
      TECH_TAGS.CSS,
      TECH_TAGS.JavaScript
    ]
  },
  {
    title: 'Backend',
    techs: [
      TECH_TAGS.NodeJS,
      TECH_TAGS.Express,
      TECH_TAGS.Postgres,
      TECH_TAGS.Python,
      TECH_TAGS.MongoDB,
      TECH_TAGS.AWS,
      TECH_TAGS.Nginx
    ]
  },
  {
    title: 'Environment & Tools',
    doubleSpan: true,
    techs: [
      TECH_TAGS.VSCode,
      TECH_TAGS.Git,
      TECH_TAGS.Docker,
      TECH_TAGS.GitHub,
      TECH_TAGS.Figma,
      TECH_TAGS.Vercel
    ]
  }
]
