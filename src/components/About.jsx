import React from "react"
import CTA from "./CTA"
import "../style/about.css"
import ME_1 from "../assets/meee.png"
import {FaUniversity, FaUser, FaHotjar} from "react-icons/fa"

function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={ME_1} alt="About img" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaUniversity className="about__icon"/>
                            <h5> Education</h5>
                            <div> 
                                <small>Master of Computer Science @ Rice University </small> 
                                <small>Bachelor of Mechanical Engineering @ Nation Taiwan University </small> 
                            </div>
                        </article>

                        <article className="about__card">
                            <FaUser className="about__icon"/>
                            <h5>Location</h5>
                            <div>
                                <small>Based in Taiwan</small>
                                <small>Currently in Houston, Tx</small>
                            </div>
                        </article>

                        <article className="about__card">
                            <FaHotjar className="about__icon"/>
                            <h5>Interests</h5>
                            <div><small>Computer Science, Photography, Traveling...</small></div>
                        </article>
                    </div>

                    <p>
                        Hi friends, I am Shu Chuan Hsu. You could also call me Leo. I am now studying my master degree in 
                        computer science. Based from Taiwan and now move in Houston, I enjoy embracing the customs from different 
                        cultures and learning to make fun of. Traveling around is always my favorite.
                    </p>

                    <p>
                        As a student majoring in CS, I am equipped with solid knowledge of computer scince and experience regarding 
                        software engineering. If you like to cooperate with me or do cool projects,  please don't hesitate to contact me.
                    </p>
                    <CTA />
                    {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
                </div>
            </div>
        </section>
    )
}

export default About;