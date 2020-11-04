import React from 'react';
import './Projects.scss';
import Chatto from '../../assets/images/chatto.png';

function Projects() {
    return (
        <div className="projects">
            <div className="projects-top">
                <h2 className="projects-top__title">Projects</h2>
            </div>
            <div className="projects-bottom">
                <h3 className="projects-bottom__title">Chatto</h3>
                <img className="projects-bottom__image" src={Chatto} alt="Chatto"/>
                <p className="projects-bottom__text">A chat application that pairs English and Japanese speakers together to practice each other's language.</p>
            </div>
        </div>
    )
}

export default Projects;