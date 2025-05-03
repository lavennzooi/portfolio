import React from 'react';
import linkedIn_icon from '../assets/icon/linkedin.png'
import gitHub_icon from '../assets/icon/github.png'
import instagram_icon from '../assets/icon/instagram.png'
import '../style/social.css';

class Social extends React.Component {
    render(){
        
        const social = [{
            icon: linkedIn_icon,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/sinyeeooi/"
        },{
            icon: gitHub_icon,
            label: "Git Hub",
            url: "https://github.com/lavennzooi"
        },{
            icon: instagram_icon,
            label: "Instagram",
            url: "https://www.instagram.com/lavennzooi/"
        }]

        return ( 
            <div className="social">
                {social.map((account, index) => (
                    <a href={[account.url]} target={"_blank"} rel="noreferrer">
                        <img className="social-img" src={[account.icon]} alt={[account.label]}  />
                    </a>
                ))}
            </div>
        );
    }
}


export default Social;