import Nachop from '../../components/Nachop'

const Presentation = () => {
  return (
    <section className='set-height' id='presentation'>
      <div className='presentation-avatar'>
        <div className='background-deco' />
        <Nachop className='drawing' />
      </div>
      <header className='presentation-header'>
        <h1 className='heading-primary'>
          Hi, my <br className='hidden lg:block' /> name is <b className='font-bold'>Nacho</b>
          <span className='dot'>.</span>
        </h1>
        <p className='heading-paragraph'>
          I'm a <strong>passionate Software Engineer</strong> from{' '}
          <b>Uruguay</b>.
        </p>
      </header>
      <span className='scroll-down'>
        👇🏼
      </span>
    </section>
  )
}

export default Presentation
