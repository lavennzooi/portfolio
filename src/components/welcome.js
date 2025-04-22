import React from 'react';
import logo from '../assets/logo.png';
import '../style/welcome.css';

class Welcome extends React.Component {
    render(){
        return ( 
            <header className="Welcome-header">
                <div class="logo-container">
                    <img src={logo} className="Welcome-logo" alt="logo" />
                </div>
                <div id="intro">hey, i'm <span class="name">sinyee</span>!</div>
                <div id="tagline"> SOFTWARE ENGINEER </div>
                <div id="description">I'm dedicated to create impactful and innovative solutions that drive meaningful change in the world.</div>
            </header>
        );
    }
}

export default Welcome;