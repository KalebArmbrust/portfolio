import React from 'react';
import './About.scss';
import Kaleb from '../../assets/images/kaleb.jpeg';

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <img className="about-left__image" src={Kaleb} alt="Kaleb Armbrust"/>
            </div>
            <div className="about-right">
                <p className="about-right__text">
                    My name is Kaleb Armbrust. I am a new dad, a lover of the outdoors, and a Full Stack Web Developer.
                    Since graduating college, I have been searching for a career that was right for me, and then I found Web Development.<br/><br/>
                    I love problem solving because it just feels so good when you finally fix what needed fixing. I also love the idea of 
                    constantly being able to learn and grow. In just 12 weeks, I went from having no coding knowledge, to learning Html, Css,
                    Javascript, Sass, React, NodeJs, Npm, and Socket.io.<br/><br/> I know that this is just the surface for what there is to learn.
                    I hope to grow into a skillful and knowledgable developer, and be able to solve the problems that need solving.
                </p>
            </div>
        </div>
    )
}

export default About;