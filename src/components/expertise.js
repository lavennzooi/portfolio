import React from 'react';
import '../style/expertise.css';

class Expertise extends React.Component {
    render(){

        const s1 = {
            label: "Web Dev",
            detail: "Full-stack developer skilled in JavaScript, TypeScript, Angular, React, Node.js, HTML5 and PL/SQL — with a sharp eye for clean, maintainable code"
        }

        const s2= {
            label : "Dx Solution",
            detail : "3+ years in developing digital transformation solutions, mainly with Perl and PL/SQL, for improving efficiency and quality in semiconductor testing."
        }

        const s3= {
            label : "Design",
            detail : "Deeply passionate about design, UI/UX, and visual storytelling. Skilled in Photoshop, visual art and video making, I bridge creativity with technical execution."
        }


        return (
            <div id="expertise">
                <header id="expertise-header">{"// my toolset"}</header>
                <article className="toolBox">
                    <div className="toolTab">
                        <h1><div className="toolIcon1"/>{[s1.label]}</h1>
                        <div className="toolInfo">{[s1.detail]}</div>
                    </div>
                    <div className="toolTab">
                        <h1><div className="toolIcon2"/>{[s2.label]}</h1>
                        <div className="toolInfo">{[s2.detail]}</div>
                    </div>
                    <div className="toolTab">
                        <h1><div className="toolIcon3"/>{[s3.label]}</h1>
                        <div className="toolInfo">{[s3.detail]}</div>
                    </div>
                </article>
            </div>
        );
    }
}
 
export default Expertise;