import React from 'react';
import { Collapsible } from './Collapsible';
import '../style/experience.css'

class Experience extends React.Component {

    render(){

        const work = [{
            year: "2022 - Present",
            company: "Samsung Semiconductor",
            role: "Software Engineer II",
            description: `Led development of digital transformation projects with cross-function teams, such as developers and process engineers. We delivered various type of customer-focused solutions, includes web application and production automation, replaced manual process with 99% of time saving, 55% stronger quality control  and over 1 million of cost saving annually.`,
            skills: ["Angular", "Node.js", "JavaScript","TypeScript", "HTML", "CSS", "Perl", "PL/SQL", "Linux", "Git", "Jira"]
        },{
            year: "2020 - 2022",
            company: "UNUM",
            role: "System Support",
            description: "Delivered comprehensive technical support for call center operations, resolving 95% of software and hardware issues within SLA and cutting resolution time through a knowledge sharing program, preventing long downtime and boosting customer satisfaction scores.",
            skills: ["ServiceNow", "Technical Support", "Customer Service"]
        },{
            year: "2016 - 2021",
            company: "Lavennz Ooi",
            role: "Creative Entrepreneur",
            description: "Greated a 83K+ social media following through digital artistry (Photoshop, Final Cut Pro) and e-commerce site (HTML/CSS).  Managed commissions using Agile workflows (Asana) and exhibited mixed-media art in U.S. galleries.",
            skills: ["Adobe Photoshop", "HTML", "CSS", "Final Cut Pro", "Digital Marketing"]
        },{
            year: "2011 - 2013",
            company: "Fairchild Semiconductor",
            role: "Device/Test Engineer",
            description: "Increased product yields by 20% ($720K/year savings) via data-driven test optimizations. Automated tool assignment system cut evaluation delays by 25%, overcoming production constraints.",
            skills: ["C++", "C", "Data Analysis", "Root Cause Analysis"]
        }]

        return (
            <div id="experience">
                <header>{"// experience"}</header>
                <section className="xp-container">
                    {work.map((work, index) => (
                        <Collapsible title={[work.year]}>
                            <h3 key={index}>{[work.company]}</h3>
                            <h4 key={index}>{[work.role]}</h4>
                            <div key={index}>{[work.description]}</div>
                            <div className="skill">
                                {work.skills.map((skills, index) => (
                                    <span key={index} className="pill">{[skills]}</span>
                                ))}
                            </div>
                        </Collapsible>
                    ))}
                </section>
            </div>
        ); 
    }
}
 
export default Experience;