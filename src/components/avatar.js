import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../style/avatar.css';
import avatar from '../assets/images/avatar_fun.png';


class Avatar extends React.Component {
    render(){
        return (
            <div id="avatar">
                <div className="avatar-outer">
                    <div className="avatar-box">
                        <img className="avatar" src={[avatar]} alt="avatar"/>
                    </div>
                </div>
                <footer>
                    <HashLink className="navTab" to="/portfolio/#about" smooth={true} duration={500}>
                        about
                    </HashLink>
                    <HashLink className="navTab" to="/portfolio/#expertise" smooth={true} duration={500}>
                        expertise
                    </HashLink>
                    <HashLink className="navTab" to="/portfolio/#experience" smooth={true} duration={500}>
                        experience
                    </HashLink>
                    <HashLink className="navTab" to="/portfolio/#projects" smooth={true} duration={500}>
                        projects
                    </HashLink>
                </footer>
                <div className="copyright">©2025 SinYee Ooi. All rights reserved.</div>
            </div>
        );
    }
}

export default Avatar;
