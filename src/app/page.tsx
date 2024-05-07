import Experience from '@/components/Experience'
import UruguayanFlag from '@/components/Icons/UruguayanFlag'
import Sectionizer from '@/components/Sectionizer'
import Link from 'next/link'
import Image from 'next/image'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies/'
import { Arrow, Code, Toolbox, Person, Laugh, Box } from '@/components/Icons/Misc'

const Home = () => {
  const scrollDown = 'SCROLL'.split('').map((letter, index) => (
    <span
      key={`${letter} + ${index}`}
      style={{ animationDelay: `${index * 220}ms` }}
    >
      {letter}
    </span>
  ))

  return (
    <main className='px-8 pb-16 sm:px-16'>
      <Sectionizer id='home' className='set-height flex flex-col items-center justify-around pt-[10%] lg:justify-center lg:pt-0'>
        <div className='flex w-full flex-col items-center gap-4'>
          <div className='relative w-full p-4'>
            <div className='background-deco' />
            <Image className='relative mx-auto w-3/4 min-w-[250px] max-w-[350px] lg:w-11/12 lg:max-w-[400px]' src='/images/nachop-draw.webp' alt='draw of nacho' width={600} height={600} />
          </div>
          <header>
            <h1 className='text-balance text-center text-5xl font-normal text-primary lg:text-6xl inline-grid w-full'>
              <span className='pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]' aria-hidden='true' data-text='Hi, my name is Nacho' />
              <span className='[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]'>
                Hi, my name is <b className='font-bold'>Nacho</b>
                <span className='dot'>.</span>
              </span>
            </h1>
            <p className='mt-8 max-w-full text-pretty text-center text-lg text-secondary md:text-xl'>
              I'm a <strong> Web Developer</strong> from <b>Uruguay</b>. Let's
              build something <b>amazing</b> together.
            </p>
          </header>
        </div>
        <Link href='/#experience' className='relative mt-8 text-lg text-secondary [&>span]:mx-0.5 [&>span]:inline-block motion-safe:[&>span]:animate-up-n-down'>
          {scrollDown}
          <Arrow className='mx-auto size-8' />
        </Link>
      </Sectionizer>
      <Sectionizer id='experience'>
        <h2 className='section-header'><Box /> Experience</h2>
        <Experience />
      </Sectionizer>
      <Sectionizer id='projects'>
        <h2 className='section-header'><Code /> Projects</h2>
        <Projects />
      </Sectionizer>
      <Sectionizer id='about-me' className='mb-12'>
        <h2 className='section-header'><Person /> About me</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
          <div className='[&>p]:mb-4 [&>p]:text-pretty [&>p>strong]:font-bold [&>p>strong]:text-secondary'>
            <p>
              My name is Nacho, I'm 21 years old and I'm from Uruguay <UruguayanFlag />. &nbsp;
              <strong>I've been working with web technologies for 3 years now. My main focus is on performance and user experience</strong>. I really hate old looking and slow websites <Laugh className='inline size-5' />.
            </p>
            <p>
              While I was studying, <strong>I mainly focused on learning the basics of programming, then I started to learn about web development and I fell in love with it</strong>. I'm currently in love with Next.js after 2 years of working with React & TypeScript.
            </p>
            <p>
              I really enjoy teaching and helping others, so I'm always open to help anyone who needs it. That's why I'm currently working as a software engineer at <a href='https://www.holbertonschool.com/' target='_blank' rel='noopener noreferrer'>Holberton School</a>, a school where <strong>From web development to algorithms and low-level programming, I teach everything I know</strong>.
            </p>
            <p>
              I'm also open to learning, I find it really interesting to see how people <strong>solve problems and add new tools to my toolbox </strong> <Toolbox className='inline size-4 ml-1 mr-px' />.
            </p>
          </div>
          <Image src='/images/ignacio-peralta.webp' alt='Ignacio Peralta' width={275} height={275} className='rounded-full shadow-2xl shadow-[var(--shadow)]' />
        </div>
      </Sectionizer>
      <Sectionizer id='technologies'>
        <h2 className='section-header'>
          <Code />
          Technologies
        </h2>
        <p>
          All over the years I've been working with a lot of technologies, here are the ones I feel more comfortable with:
        </p>
        <Technologies />
      </Sectionizer>
    </main>
  )
}

export default Home
