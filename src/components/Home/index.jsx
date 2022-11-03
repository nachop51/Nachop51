import "./Home.css";

import React from "react";

const Home = () => {
  return (
    <article id="home">
      <section id="presentation">
        <h1 className="text-3xl font-light">
          Hi, my name is <b>Nacho</b>
          <span className="dot">.</span>
        </h1>
        <p>
          I'm a <strong>full-stack developer</strong> from <b>Uruguay</b>.
        </p>
      </section>
      <section id="presentation">
        <h1 className="text-3xl font-light">
          Hi, my name is <b>Nacho</b>
          <span className="dot">.</span>
        </h1>
        <p>
          I'm a <strong>full-stack developer</strong> from <b>Uruguay</b>.
        </p>
      </section>
    </article>
  );
};

export default Home;
