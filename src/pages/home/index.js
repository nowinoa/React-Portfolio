import "./index.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/modal";
import Tools from '../../components/tools';
import { Link } from "react-router-dom";


function HomePage() {
  const memoji = require("./img/63256.jpg");
  const memoji_desktop = require(`./img/58982.jpg`);
  const memoji_explosion = require('./img/19576.jpg');
  const phone_dev = require(`./img/phone-developer.png`);
  const body = < Tools />

  const [actMemoji, setActMemoji] =  useState(memoji_desktop);

  const toggleImage = () => {
    if(actMemoji === memoji_explosion) setActMemoji(memoji_desktop)
    else setActMemoji(memoji_explosion)
    
  }
  
  
  
  return (
    <div className="home-page">
      <div className="box about">
        <img src={memoji} alt="Ainhoa Frontend Developer" />
        <div>
          Welcome to my portfolio, my name is{" "}
          <span className="name">Ainhoa</span>, and I am a skilled frontend
          developer hailing from Spain, currently based in the vibrant city of
          London, UK. My passion lies in the creation and design of cutting-edge
          websites that are visually stunning, easy to navigate, and highly
          functional.
        </div>
      </div>
      <div className="box map">
        <h2 className="city">London</h2>
      </div>
      <div className="box home-projects">
        <Link to="/projects" className="button">
          Projects
        </Link>
        <img src={phone_dev} alt="projects frontend development" />
      </div>
      <div className="box tools">
        <Modal title="tools" body={body} header='Tools'/>
      </div>
      <div className="box linkedin">
        <a
          className="p pages"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ainhoa-prada-498913259/"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            className="linkedin-icon"
            style={{ color: "#77ffcb" }}
          />
        </a>
      </div>
      <div className="box toggle">
        <button className="toggle-btn" onClick={toggleImage}>Toogle here!</button>
        <img
          id="toggle-img"
          src={actMemoji}
          alt="Memoji Ainhoa Frontend Developer"
        />
      </div>
      <div className="box about-contact">
        <p>
          If you have any questions or would like to discuss my projects
          further, why wait? Let's connect today and explore any potential
          collaborations or opportunities together
        </p>
        <Link to="/contact" className="button">
          Contact
        </Link>
      </div>
      <div className="box github">
        <a
          className="p pages"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nowinoa"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" className="github-icon" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
