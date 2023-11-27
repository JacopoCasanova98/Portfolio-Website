import React from "react";
import "./resume.css"
import Info from "./info";

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Resume</h2>

            <div className="resume__container grid">

                <div className="info__container grid">
                {Info.map((elem) => {
                    const{ id, image, title, category, link} = elem;
                    return (
                        
                        <div className="info__card" key={id}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <div className="info__thumbnail">
                                    <img src={image} alt="" className="info__img" />
                                    <div className="info__mask"></div>
                                </div>
                                <span className="info__category">{category}</span>
                                <h3 className="info__title">{title}</h3>
                            </a>
                            <a href={link} className="info__button" target="_blank" rel="noopener noreferrer">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default Resume