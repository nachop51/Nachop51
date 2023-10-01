import Nacho from '../../assets/nacho.svg'

const Presentation = () => {
  return (
    <section id="presentation">
      <div className="background-deco"></div>
      <div className="heading">
        <h1 className="heading-primary">
          Hi, my <br /> name is <b>Nacho</b>
          <span className="dot">.</span>
        </h1>
        <p className="heading-paragraph hide-m">
          I'm a passionate <strong>Software Engineer</strong> from{' '}
          <b>Uruguay</b>.
        </p>
      </div>
      <div className="presentation-svg">
        <img src={Nacho} alt="Nacho" />
      </div>
    </section>
  )
}

export default Presentation
