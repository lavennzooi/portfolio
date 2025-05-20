import React from 'react';
import '../style/projects.css'

class Projects extends React.Component {

    render(){

        const project = [{
            image:"",
            company: "Personal Project",
            title: "Portfolio",
            description: "A personal portfolio built with React to showcase my journey in software development, featuring selected projects, skills, and growth as a developer.",
            built: ["React", "JavaScript", "HTML5", "CSS"]
        },{
            image:"",
            company: "Associated with Samsung Semiconductor",
            title: "New Product Introduction Web App",
            description: "The team was juggling between five spreadsheets and three standard operating procedures before NPI web app, a one-stop shop was introduced. As new members to the team, I collaborated with my teammate in turning our pain points to this digital transformation initiation, streamlining the NPI process control and documentation. It centralizes progress tracker, change point management and all NPI related information in one place, providing visibility of NPI data to a large scale audience in real-time. The web app was built with Angular for front-end and Node.js for backend. ",
            built: ["Angular", "Node.js", "JavaScript","TypeScript", "REST API", "HTML5", "CSS", "System Design"]
        },{
            image:"",
            company: "Associated with Samsung Semiconductor",
            title: "Maximizing Tester Employment (MTE)",
            description: `MTE is a revolutionary modular sampling solution that dynamically take advantage of low tool utilization to improve product quality, reduce cost of poor quality and secure customer confidence. As the owner of this project, I was responsible for the product design and automation development using PERL and PL/SQL; meanwhile, my teammate developed UI that allows leadership to implement changes easily. This innovative digital transformation project saved an estimated $330K a year from the elimination of over 3K man-hours in repetitive tasks of sampling increment. It encourages efficient resource allocation and reduce opportunity for human error.`,
            built: ["Perl", "PL/SQL", "Linux", "System Design"]
        },{
            image:"",
            company: "Associated with Samsung Semiconductor",
            title: "MEOW - Wafer Acceptance Test Setup Audit Solution",
            description: `Developed MEOW, an automated audit solution that strengthened quality defense lines by 85% while delivering $55K in annual savings. This PL/SQL and ASP.NET-based system detects critical misses across wafer-level testing production environments. The solution provides comprehensive coverage of key risk areas while maintaining seamless integration with existing workflows.`,
            built: ["Perl", "PL/SQL", "Linux", "System Design"]
        },{
            image:"",
            company: "Associated with Samsung Semiconductor",
            title: "Electrical Test Special Request Validation",
            description: ` Collaborated with cross-functional teams of developers and parametric test engineers to design a series of complex validation functions for an enterprise test request system—reducing high-risk errors that previously led to product scrap due to incorrect test requests. To align stakeholders, I leveraged visual presentations and dashboards to streamline communication. Additionally, I developed APIs in Node.Js to enable seamless integration with the enterprise system for critical validation checks`,
            built: ["Node.js", "API", "System Design"]
        }]


        return (
            <div id="projects">
                <header>{"// project"}</header>
                <section className="Tab-container">
                    {project.map((project, index) => (
                        <div className='Tab'>
                            <div className="content">
                                <h3 key={index}>{[project.title]}</h3>
                                <h5 key={index}>{[project.company]}</h5>
                                <div key={index} className="info">{[project.description]}</div>
                                <div className="skill">
                                    {project.built.map((built, index) => (
                                        <span key={index} className="pill">{[built]}</span>
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