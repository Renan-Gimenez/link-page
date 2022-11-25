import React from "react";

// ICONS
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaRegClipboard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Helmet } from "react-helmet";

// COMPONENTES
import Perfil from "./components/Perfil";
import Card from "./components/Card";

import Curriculo from "./Renan-Gimenez-Curriculo.pdf";

// import Test from "./components/Test";


function App() {
  return (
    <div className="App">
      <Perfil 
      avatarLink="https://avatars.githubusercontent.com/u/83655187?v=4" 
      username="Renan Gimenez" 
      description="Desenvolvedor Web / React"
      />

      {/* <Test value="Teste 2"/> */}

      <section className="socialmedias">
        <Card name="GitHub" logo= {<BsGithub/>} link="https://github.com/renan-gimenez" />
        <Card name="Linkedin" logo= {<BsLinkedin/>} link="https://linkedin.com/in/renan-gimenez" />
        <Card name="Instagram" logo= {<BsInstagram/>} link="https://instagram.com/renan_gmnz" /> 
        <Card name="Twitter" logo= {<BsTwitter/>} link="https://twitter.com/RenanSGimenez" />
        <Card name="Currículo" logo= {<FaRegClipboard/>} link={Curriculo} />
        <Card name="Entre em contato" logo= {<MdOutlineEmail/>} link="mailto:renangiimenez@gmail.com" />
      </section>
    </div>
  );
}

export default App;
