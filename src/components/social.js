import React from 'react';
import '../style/social.css';

class Social extends React.Component {
    render(){
        
        const linkedIn = {
            icon: "/assets/icons/social/linkedin.png",
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/sinyeeooi/"
        }

        const gitHub = {
            icon: "/assets/icons/social/github.png",
            label: "Git Hub",
            url: "https://github.com/lavennzooi"
        }

        const instagram = {
            icon: "/assets/icons/social/instagram.png",
            label: "Instagram",
            url: "https://www.instagram.com/lavennzooi/"
        }

        return ( 
            <div className="social">
                <a href={[linkedIn.url]} target={"_blank"} rel="noreferrer">
                    <img className="social-img" src={[linkedIn.icon]} alt={[linkedIn.label]}  />
                </a>
                <a href={[gitHub.url]}target={"_blank"} rel="noreferrer">
                    <img className="social-img" src={[gitHub.icon]} alt={[gitHub.label]}  />
                </a>
                <a href={[instagram.url]} target={"_blank"} rel="noreferrer">
                    <img className="social-img" src={[instagram.icon]} alt={[instagram.label]}  />
                </a>
            </div>
        );
    }
}


export default Social;