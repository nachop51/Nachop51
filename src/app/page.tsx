import './Home.css'
import Experience from '@/components/Experience'
import Nachop from '@/components/Icons/Nachop'
import UruguayanFlag from '@/components/Icons/UruguayanFlag'
import Sectionizer from '@/components/Sectionizer'
import Link from 'next/link'
import { BiBox, BiLaugh } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import { FaArrowDown } from 'react-icons/fa'

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
      <Sectionizer className='set-height presentation'>
        <div className='presentation-wrapper gap-4'>
          <div className='presentation-avatar'>
            <div className='background-deco' />
            <Nachop className='drawing' />
          </div>
          <header className='presentation-header'>
            <h1 className='heading-primary'>
              Hi, my name is <b className='font-bold'>Nacho</b>
              <span className='dot'>.</span>
            </h1>
            <p className='mt-8 max-w-md text-pretty text-center text-lg text-secondary md:text-xl lg:text-left'>
              I'm a <strong> Web Developer</strong> from <b>Uruguay</b>. Let's
              build something <b>amazing</b> together.
            </p>
          </header>
        </div>
        <Link href='/#experience' className='scroll-down'>
          {scrollDown}
          <FaArrowDown />
        </Link>
      </Sectionizer>
      <Sectionizer id='experience' className='scroll-mt-24'>
        <h2 className='section-header'><BiBox /> Experience</h2>
        <Experience />
      </Sectionizer>
      {/* <Sectionizer>
        <h2 className='section-header'><BsCode /> Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          sapiente, aliquid facilis exercitationem eum praesentium. Iusto
          reiciendis magnam molestias quibusdam, dolorem magni optio cumque
          consequatur. Sit consectetur beatae unde velit.
        </p>
      </Sectionizer> */}
      <Sectionizer>
        <h2 className='section-header'><BsPersonFill /> About me</h2>
        <div className='[&>p]:mb-4 [&>p>strong]:font-bold [&>p>strong]:text-secondary'>
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
      </Sectionizer>
    </main>
  )
}

export default Home
