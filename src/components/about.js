import React from 'react';
import '../style/about.css';

class About extends React.Component {
    render(){
        
        const bio1 = "I believe great software isn’t just functional, it’s intuitive. That’s why I build systems that scale while staying deeply human at the core.";

        const bio2 = "I’m a Software Engineer specializing in Angular, Node.js, TypeScript, JavaScript, PL/SQL, HTML, and CSS. I’ve led digital transformation projects from ideation to launch, turning complex requirements into clean, user-centered solutions. My work sits at the intersection of engineering and experience, where performance, usability, and clarity all matter.";

        const bio3 = "I’m known for advocating for users in technical decisions, collaborating across teams, and delivering features that don’t just work, but make sense. Agile isn’t just a process I follow, it’s how I continuously improve outcomes";
        
        const bio4="Outside of work, I recharge through reading, board games, video games, and longboarding, all of which sharpen my strategic thinking and creativity.";

        const bio5="I’m always interested in connecting with people building thoughtful, user-focused products. If that’s you, feel free to reach out or start a conversation.";

        return (
            <div id="about">
                <header>{"// about me"}</header>
                <article>
                    <p>{[bio1]}</p>
                    <p>{[bio2]}</p>
                    <p>{[bio3]}</p>
                    <p>{[bio4]}</p>
                    <p>{[bio5]}</p>
                </article>
            </div>
        );
    }
}
 
export default About;