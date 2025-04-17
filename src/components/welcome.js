import React from 'react';
import logo from '../assets/logo.png';
import '../style/welcome.css';

class Welcome extends React.Component {
    render(){
        return (
            <header className="Welcome-header">
                <img src={logo} className="Welcome-logo" alt="logo" />
            </header>
        );
    }
}

export default Welcome;