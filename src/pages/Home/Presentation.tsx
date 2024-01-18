import Nachop from '../../components/Nachop'
import './Presentation.css'

const Presentation = () => {
  const scrollDown = 'SCROLL'.split('').map((letter, index) => (
    <span key={`${letter} + ${index}`} style={{ animationDelay: `${index * 200}ms` }}>
      {letter}
    </span>
  ))

  return (
    <section className='set-height' id='presentation'>
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
        <i className='bar' />
      </span>
    </section>
  )
}

export default Presentation
