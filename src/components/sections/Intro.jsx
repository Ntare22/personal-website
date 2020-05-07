import React from 'react';
import '../styles/intro.scss';
// import imgdsktp from '../../assets/imgdsktp.jpg';

const Intro = () => {
  return (
    <React.Fragment>
      <div id="intro-section">
        <section className="intro">
          <div>
            <p className="intro_name">Jim <br/> Ntare</p>
          </div>
          <div className="intro_description">
            <p className="intro_profession">Software Engineer / Blogger / Entrepreneur</p>
            <p className="intro_age">25 years old, Kigali</p>
          </div>
        </section>
        <section className="image">
          <div className="img-container"></div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Intro;

