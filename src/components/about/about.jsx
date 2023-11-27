import React from "react";
import './about.css'
import PC from "../../assets/pc.png"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import JS from "../../assets/js.png"
import Rct from "../../assets/rct.png"
import NJS from "../../assets/nodejs.png"
import PHP from "../../assets/php.png"
import MySQL from "../../assets/mysql.png"

const About = () => {
    return (
        <section className="about__container section" id="about">
            <h2 className="section__title">About Me</h2>
        
            <div className="about__container grid">
                <img src={PC} alt="" className="about__img" />


            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">Passionate about programming and oriented towards problem-solving. <br />
                    I began my educational journey with the family restaurant as a starting point for work. After obtaining my diploma 
                    and gaining some work experience in that field, I matured the realization that I didn't want to continue down that 
                    path and decided to build a professional career that reflects my passions. Programming and music are undoubtedly 
                    the two most significant ones. The former is the one I would like to pursue as a career path.</p>
                
                    <a href="https://drive.google.com/file/d/1NB1BQ8Bknf3MZ2iHk448C-U5vOQspOod/view" target="_blank" className="btn btn__cv">My Curriculum</a>
                </div>

                <div className="skills__grid grid">

                    <img src={HTML} alt="" className="logo__p-language" />
                    <img src={CSS} alt="" className="logo__p-language" />
                    <img src={JS} alt="" className="logo__p-language logo-js" />
                    <img src={Rct} alt="" className="logo__p-language" />
                    <img src={NJS} alt="" className="logo__p-language" />
                    <img src={PHP} alt="" className="logo__p-language" />
                    <img src={MySQL} alt="" className="logo__p-language" />

                </div>
            </div>
            </div>
        </section>
    ) 
}

export default About