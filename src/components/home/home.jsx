import React from "react";
import './home.css'
import Me from "../../assets/Me.png"
import HeaderSocials from "./headerSocials";
import ScrollDown from "./scrollDown";


const Home = () => {
    return (
        <section className="home-container" id="home">

  
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Jacopo Casanova</h1>
                <span className="home__education"><span className="introduction">I'm a</span> <br /><span className="job-title">Junior Full Stack Developer</span></span>


            <HeaderSocials />

            <a href="#contact" className="btn">Contact Me</a>

        
            <ScrollDown />

            </div>

        </section>

    ) 
}

export default Home