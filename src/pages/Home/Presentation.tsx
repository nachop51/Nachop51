import Nachop from '../../components/Nachop'

const Presentation = () => {
  return (
    <section className='set-height' id='presentation'>
      <div className='presentation-avatar'>
        <div className='background-deco' />
        <Nachop className='drawing' />
      </div>
      <header className='header'>
        <h1 className='heading-primary'>
          Hi, my <br /> name is <b>Nacho</b>
          <span className='dot'>.</span>
        </h1>
        <p className='heading-paragraph hide-m'>
          I'm a <strong>passionate Software Engineer</strong> from{' '}
          <b>Uruguay</b>.
        </p>
      </header>

    </section>
  )
}

export default Presentation
