import "./Presentation.css";
import Nacho from "../../assets/nacho.svg";

const Presentation = () => {
  return (
    <section id="presentation">
      <div>
        <h1 className="heading-primary">
          Hi, my <br /> name is <b>Nacho</b>
          <span className="dot">.</span>
        </h1>
        <p className="presentation__p hide-m">
          I'm a passionate <strong>Software Engineer</strong> from{" "}
          <b>Uruguay</b>.
        </p>
      </div>
      <div className="presentation__svg">
        <img src={Nacho} alt="Nacho" />
      </div>
    </section>
  );
};

export default Presentation;
