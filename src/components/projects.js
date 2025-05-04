import React from 'react';
import '../style/projects.css'

class Projects extends React.Component {

    render(){

        const project = [{
            image:"",
            company: "Samsung Semiconductor",
            title: "New Product Introduction Web App",
            description: "The team was juggling between five spreadsheets and three standard operating procedures before NPI web app, a one-stop shop was introduced. As new members to the team, I collaborated with my teammate in turning our pain points to this digital transformation initiation, streamlining the NPI process control and documentation. It centralizes progress tracker, change point management and all NPI related information in one place, providing visibility of NPI data to a large scale audience in real-time. The web app was built with Angular for front-end and Node.js for backend. ",
            skills: ["Angular", "Node.js", "JavaScript","TypeScript", "HTML", "CSS"]
        },{
            image:"",
            company: "Samsung Semiconductor",
            title: "Maximizing Tester Employment (MTE)",
            description: `MTE is a revolutionary modular sampling solution that dynamically take advantage of low tool utilization to improve product quality, reduce cost of poor quality and secure customer confidence. As the owner of this project, I was responsible for the product design and automation development using PERL and PL/SQL; meanwhile, my teammate developed UI that allows leadership to implement changes easily. This innovative digital transformation project saved an estimated $330K a year from the elimination of over 3K man-hours in repetitive tasks of sampling increment. It encourages efficient resource allocation and reduce opportunity for human error.`,
            skills: ["Perl", "PL/SQL", "Linux"]
        }]


        return (
            <div id="projects">
                <header>{"// project"}</header>
                <section className="Tab-container">
                    {project.map((project, index) => (
                        <div className='Tab'>
                            <div className="content">
                                <h3 key={index}>{[project.title]}</h3>
                                <h5 key={index}>Associated with {[project.company]}</h5>
                                <div key={index} className="info">{[project.description]}</div>
                                <div className="skill">
                                    {project.skills.map((skills, index) => (
                                        <span key={index} className="pill">{[skills]}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        ); 
    }
}
 
export default Projects;