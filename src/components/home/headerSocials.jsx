import React from "react";
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"

const HeaderSocials = () => {
    return (
        
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/jacopo-casanova-9a5b54265/" className="home__social-link" target="_blank">
                <img src={Linkedin} alt="" className="icon-social-linkedin" />
            </a>

            <a href="https://github.com/JacopoCasanova98?tab=repositories" className="home__social-link" target="_blank">
            <img src={Github} alt="" className="icon-social-github" />
            </a>

        </div>
    )
}

export default HeaderSocials