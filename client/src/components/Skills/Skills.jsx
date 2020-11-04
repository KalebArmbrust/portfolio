import React from 'react';
import './Skills.scss';
import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import Javascript from '../../assets/images/javascript.png';
import Sass from '../../assets/images/sass.png';
import ReactJs from '../../assets/images/react.png';
import NodeJs from '../../assets/images/nodejs.png';
import Npm from '../../assets/images/npm.png';
import Socketio from '../../assets/images/socketio.png';

function Skills() {
    return (
        <div className="skills">
            <div className="skills-top">
                <h2 className="skills-top__title">Skills/Languages</h2>
            </div>
            <div className="skills-bottom">
                <img className="skills-bottom__imagehtml" src={Html} alt="Html"/>
                <img className="skills-bottom__image" src={Css} alt="Css"/>
                <img className="skills-bottom__image" src={Javascript} alt="Javascript"/>
                <img className="skills-bottom__imagemid" src={Sass} alt="Sass"/>
                <img className="skills-bottom__imagemid" src={ReactJs} alt="React"/>
                <img className="skills-bottom__imagemid" src={NodeJs} alt="NodeJs"/>
                <img className="skills-bottom__imagesmall" src={Npm} alt="Npm"/>
                <img className="skills-bottom__imagesmall" src={Socketio} alt="Socket.io"/>
            </div>
        </div>
    )
}

export default Skills;