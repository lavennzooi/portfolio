import React from 'react';
import '../style/about.css';
import avatar from '../assets/images/avatar_fun.png'

class About extends React.Component {
    render(){
        
        const bio1 = "I'm a Software Engineer and a relentless user advocate, driven by scalable, human-centric code.  I build things that matter — with Angular, Node.Js, TypeScript, Javascript, PL/SQL, HTML and CSS — but I obsess just as much over who I'm building for as how.";

        const bio2 = "I've led digital transformation projects from ideation to launch, blending technical precision with thoughtful design because great software isn't just functional, it's intuitive. Agile isn't just a methodology for me; it's how I iterate smarter and keep users at the heart of every decision";

        const bio3 = "Off the clock, I channel the same problem-solving passion into board games, video games and longboarding, where strategy, creativity, and flow keep me inspired.";

        return (
            <div id="about">
                <header>{"// about me"}</header>
                <article>
                    <p>{[bio1]}</p>
                    <p>{[bio2]}</p>
                    <p>{[bio3]}</p>
                </article>
            </div>
        );
    }
}
 
export default About;