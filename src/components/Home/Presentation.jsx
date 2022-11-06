import "./Presentation.css";

const Presentation = () => {
  return (
    <section id="presentation">
      <h1 className="heading-primary">
        Hi, my name is <b>Nacho</b>
        <span className="dot">.</span>
      </h1>
      <p className="presentation__p">
        I'm a passionate <strong>Software Engineer</strong> from <b>Uruguay</b>.
      </p>
    </section>
  );
};

export default Presentation;
