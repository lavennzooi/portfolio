import React from 'react';
import { Link } from 'react-router-dom';
import '../style/welcome.css';

class Welcome extends React.Component {
    render(){
        
        const tagline = " Software Developer & Designer"; 

        const description = "I'm ambitious about engineering simple solutions from complex problems — scaleable, intuitive and world-changing.";

        return ( 
            <div className="welcome">
                <Link to="/" reloadDocument className="intro">Hey, <br/> I'm Sinyee Ooi</Link>
                <div className="tagline">{[tagline]}</div>
                <div className="description">{[description]}</div>
            </div>
        );
    }
}


export default Welcome;