import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../style/nav.css';

class Nav extends React.Component {

    render(){

        return (
            <nav>
                <HashLink className="navTab" to="/portfolio/#about" smooth={true} duration={500}>
                    ABOUT
                </HashLink>
                <HashLink className="navTab" to="/portfolio/#expertise" smooth={true} duration={500}>
                    EXPERTISE
                </HashLink>
                <HashLink className="navTab" to="/portfolio/#experience" smooth={true} duration={500}>
                    EXPERIENCES
                </HashLink>
                <HashLink className="navTab" to="/portfolio/#projects" smooth={true} duration={500}>
                    PROJECTS
                </HashLink>
                <Link className="navTab" to='#' 
                    onClick = {() => window.location = "mailto:sinyee_ooi@yahoo.com" }
                >
                        CONTACT
                </Link>
            </nav>
        );
    }
}
 
export default Nav;