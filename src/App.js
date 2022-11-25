import React from "react";
import styled from "styled-components";

// ICONS
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

// STYLE
import './style.css';

// COMPONENTES
import Username from "./components/Username";
import SocialButton from "./components/SocialButton";

import Desc from "./components/Desc";
import Avatar from "./components/Avatar";


function App() {
  return (
      <div className="App">
        <section className="user-info">  

          <Avatar src={"https://avatars.githubusercontent.com/u/83655187?v=4"} alt="Logo"/>
          <Username>Renan Gimenez</Username>
          <Desc>Desenvolvedor Web / React</Desc>

        </section>

        <section className="socialmedias">
          <SocialButton name="Instagram" logo= {<BsInstagram/>} link="https://instagram.com/renan_gmnz" /> 
          <SocialButton name="Twitter" logo= {<BsTwitter/>} link="https://twitter.com/RenanSGimenez" />
          <SocialButton name="Youtube" logo= {<BsYoutube/>} link="https://www.youtube.com/channel/UCMJrnz3E643i8ETrN6YchwQ" />
          <SocialButton name="GitHub" logo= {<BsGithub/>} link="https://github.com/renan-gimenez" />
          <SocialButton name="Linkedin" logo= {<BsLinkedin/>} link="https://linkedin.com" />
          <SocialButton name="Entre em contato" logo= {<MdOutlineEmail/>} link="mailto:renansousagimenes@gmail.com" />
        </section>
      </div>

  );
}

export default App;
