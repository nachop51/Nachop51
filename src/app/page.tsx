import Nachop from '@/components/Nachop'
import './Home.css'
import { FaArrowDown } from 'react-icons/fa'

const Home = () => {
  const scrollDown = 'SCROLL'.split('').map((letter, index) => (
    <span key={`${letter} + ${index}`} style={{ animationDelay: `${index * 200}ms` }}>
      {letter}
    </span>
  ))

  return (
    <>
      <main className='px-8 sm:px-16 pb-16'>
        <section className='set-height presentation'>
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
              <p className='heading-paragraph'>
                I'm a <strong>passionate Software Engineer</strong> from{' '}
                <b>Uruguay</b>.
              </p>
            </header>
          </div>
          <span className='scroll-down'>
            {scrollDown}
            <FaArrowDown />
          </span>
        </section>
        <section>
          <header>
            <h2>Experience</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, aliquid facilis exercitationem eum praesentium. Iusto reiciendis magnam molestias quibusdam, dolorem magni optio cumque consequatur. Sit consectetur beatae unde velit.
          </p>
        </section>
        <section>
          <header>
            <h2>Projects</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente, aliquid facilis exercitationem eum praesentium. Iusto reiciendis magnam molestias quibusdam, dolorem magni optio cumque consequatur. Sit consectetur beatae unde velit.
          </p>
        </section>
        <section>
          <header>
            <h2>Experience</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente
          </p>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Odit minima rem itaque
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur, quod accusamus
            cupiditate ea soluta qui dolorem aliquam non.
          </p>
        </section>
      </main>
    </>
  )
}

export default Home
