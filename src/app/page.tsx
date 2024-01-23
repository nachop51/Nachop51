import Experience from '@/components/Experience'
import Nachop from '@/components/Icons/Nachop'
import UruguayanFlag from '@/components/Icons/UruguayanFlag'
import Sectionizer from '@/components/Sectionizer'
import Link from 'next/link'
import Image from 'next/image'
import { BiBox, BiLaugh } from 'react-icons/bi'
import { /* BsCode, */ BsPersonFill } from 'react-icons/bs'
import { FaArrowDown } from 'react-icons/fa'
// import Projects from '@/components/Projects'

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
      <Sectionizer className='set-height flex flex-col items-center justify-around pt-[10%] lg:justify-center lg:pt-0'>
        <div className='flex w-full flex-col items-center gap-4'>
          <div className='relative w-full p-4'>
            <div className='background-deco' />
            <Nachop className='relative mx-auto w-3/4 min-w-[250px] max-w-[350px] lg:w-11/12 lg:max-w-[400px]' />
          </div>
          <header>
            <h1 className='text-balance text-center text-5xl font-normal text-primary lg:text-6xl'>
              Hi, my name is <b className='font-bold'>Nacho</b>
              <span className='dot'>.</span>
            </h1>
            <p className='mt-8 max-w-full text-pretty text-center text-lg text-secondary md:text-xl'>
              I'm a <strong> Web Developer</strong> from <b>Uruguay</b>. Let's
              build something <b>amazing</b> together.
            </p>
          </header>
        </div>
        <Link href='/#experience' className='relative mt-8 text-lg text-secondary [&>span]:mx-0.5 [&>span]:inline-block motion-safe:[&>span]:animate-up-n-down'>
          {scrollDown}
          <FaArrowDown className='mx-auto text-2xl' />
        </Link>
      </Sectionizer>
      <Sectionizer id='experience' className='scroll-mt-24'>
        <h2 className='section-header'><BiBox /> Experience</h2>
        <Experience />
      </Sectionizer>
      {/* <Sectionizer>
        <h2 className='section-header'><BsCode /> Projects</h2>
        <Projects />
      </Sectionizer> */}
      <Sectionizer>
        <h2 className='section-header'><BsPersonFill /> About me</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
          <div className='[&>p]:mb-4 [&>p]:text-pretty [&>p>strong]:font-bold [&>p>strong]:text-secondary'>
            <p>
              My name is Nacho, I'm 21 years old and I'm from Uruguay <UruguayanFlag /> .
              I finished my studies as a Software Developer last year, and <strong>I've been working with web technologies for 3 years now. My main focus is on performance and user experience</strong>. I really hate old looking and slow websites <BiLaugh className='inline size-5' />.
            </p>
            <p>
              While I was studying, <strong>I mainly focused on learning the basics of programming, then I started to learn about web development and I fell in love with it</strong>. I've been working with React for 2 years now, TypeScript, and I'm currently learning Next.js.
            </p>
            <p>
              I really enjoy teaching and helping others, so I'm always open to help anyone who needs it. This is why I'm currently working as a Software Engineer at <a href='https://www.holbertonschool.com/' target='_blank' rel='noopener noreferrer'>Holberton School</a>, a school where <strong>I teach everything I know from web development to algorithms and low level programming</strong>.
            </p>
            <p>
              Also I'm open to learn from others, I find it really interesting to see how other people <strong>solve problems and add new tools to my toolbox 🧰</strong>.
            </p>
          </div>
          <Image src='/ignacio-peralta.webp' alt='Ignacio Peralta' width={275} height={275} className='rounded-full' />
        </div>
      </Sectionizer>
    </main>
  )
}

export default Home
