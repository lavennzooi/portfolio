import React from 'react';
import '../style/experience.css'

class Experience extends React.Component {

    render(){

        const work = [{
            year: "2024 - Present",
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
            description: "I challenged societal norms through evocative mixed-media art, fusing classical oil painting with traditional Chinese gongbi techniques to reveal beauty in the everyday. My work gained recognition in galleries and private collections, while my webcomic and social media presence (83K+ followers) expanded my reach as a thought leader in functional creativity.",
            skills: ["Adobe Photoshop", "HTML", "CSS", "Final Cut Pro", "Digital Marketing"]
        },{
            year: "2011 - 2013",
            company: "Fairchild Semiconductor",
            role: "Device/Test Engineer",
            description: "I improved critical product yields by 20% through data-driven root cause analysis and test program enhancements, delivering $60K/month in cost savings. Additionally, I spearheaded cross-functional implementation of Dynamic Part Average Testing (DPAT), elevating product quality and strengthening customer confidence",
            skills: ["C++", "C", "Data Analysis", "Root Cause Analysis"]
        }]


        return (
            <div id="experience">
                <header>{"// experience"}</header>
                <section className="xp-container">
                    {work.map((work, index) => (
                        <div className='xpTab'>
                            <div className="xpTab-top">
                                <div key={index} className="header">{[work.year]}</div>
                                <div className="content">
                                    <h3 key={index}>{[work.company]}</h3>
                                    <h4 key={index}>{[work.role]}</h4>
                                    <div key={index} className="info">{[work.description]}</div>
                                    <div className="xpTab-foot">
                                        {work.skills.map((skills, index) => (
                                            <span key={index} className="skill-pill">{[skills]}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        ); 
    }
}
 
export default Experience;