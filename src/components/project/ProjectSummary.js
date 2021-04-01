import React from 'react';

function ProjectSummary(props) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Title</span>
                <p>Posted by Ryan Chalmers</p>
                <p className={"grey-text"}>1st of April, 10:30am</p>
            </div>
        </div>
    );
}

export default ProjectSummary;