import React from "react"
import "../style/contact.css"
import {MdEmail} from "react-icons/md"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"
import ME_4 from "../assets/memoji/memoji_4.png"

function Contact() {
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container container__contact">
                <div className="lefthand__box">
                    <p>
                        If you want to know more about my project or just have a chat. Please don't hesitate to contact me via the following platforms.
                    </p>

                    <div className="contact__me-img">
                        <img src={ME_4} alt="Contact img" />
                    </div>

                    <div className="contact__info">
                        <a href="mailto:sh122@rice.edu" className="contact-icon"><MdEmail/></a>
                        <a href="https://www.linkedin.com/in/shu-chuan-hsu-8b76651a8/" target="_blank" rel="noreferrer"> <BsLinkedin /> </a>
                        <a href="https://github.com/leo880714" target="_blank" rel="noreferrer"> <BsGithub /> </a>
                        <a href="!#"> <RiWhatsappFill /> </a>
                    </div>
                </div>

                <div className="verticalLine"></div>

                <div className="righthandBox">
                    <h3>Get Know More about Me</h3>
                    <h4><a href="!#">Projects</a></h4>
                    <h4><a href="!#">Posts</a></h4>
                    <h4><a href="!#">Blog</a></h4>
                </div>
            </div>
        </section>
    )
}

export default Contact;