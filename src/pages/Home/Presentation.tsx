import Nacho from '../../assets/nacho.svg'

const Presentation = () => {
  return (
    <section className='set-height' id='presentation'>
      <div className='background-deco' />
      <figure className='presentation-svg'>
        <img src={Nacho} alt='Nacho' />
      </figure>
      <header className='heading'>
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
