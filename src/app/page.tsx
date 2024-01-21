import Nachop from '@/components/Nachop'
import './Home.css'
import { FaArrowDown } from 'react-icons/fa'
import Sectionizer from '@/components/Sectionizer'

const Home = () => {
  const scrollDown = 'SCROLL'.split('').map((letter, index) => (
    <span
      key={`${letter} + ${index}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {letter}
    </span>
  ))

  return (
    <>
      <main className='px-8 pb-16 sm:px-16'>
        <Sectionizer className='set-height presentation'>
          <div className='presentation-wrapper'>
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
          <span className='scroll-down'>
            {scrollDown}
            <FaArrowDown />
          </span>
        </Sectionizer>
        <Sectionizer>
          <header>
            <h2 className='section-header'>Experience</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            sapiente, aliquid facilis exercitationem eum praesentium. Iusto
            reiciendis magnam molestias quibusdam, dolorem magni optio cumque
            consequatur. Sit consectetur beatae unde velit.
          </p>
        </Sectionizer>
        <Sectionizer>
          <header>
            <h2 className='section-header'>Projects</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            sapiente, aliquid facilis exercitationem eum praesentium. Iusto
            reiciendis magnam molestias quibusdam, dolorem magni optio cumque
            consequatur. Sit consectetur beatae unde velit.
          </p>
        </Sectionizer>
        <Sectionizer>
          <header>
            <h2 className='section-header'>About me</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            sapiente
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            minima rem itaque
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            pariatur, quod accusamus cupiditate ea soluta qui dolorem aliquam
            non.
          </p>
        </Sectionizer>
      </main>
    </>
  )
}

export default Home
