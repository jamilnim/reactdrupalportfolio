import React, { useEffect, useState } from "react";
import "./ProjectLists.css";
import Aproject from "./Aproject"; // Detail component
import { fetchProjects } from "../../api/drupal";

function ProjectLists() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  if (selectedProject) {
    return (
      <Aproject project={selectedProject} onBack={() => setSelectedProject(null)} />
    );
  }

  return (
    
    <div>
      <h1 className="projectHeading" id="project">Projects</h1>
      <div className="projectContainer">
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.id} className="project-card">
              {p.image && (
                <img src={p.image} alt={p.title} className="project-image" />
              )}

              <h3>{p.title}</h3>

              {p.summary && (
                <p
                  className="project-summary"
                  dangerouslySetInnerHTML={{ __html: p.summary }}
                />
              )}

              <div className="project-links">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => {
                      // defensive: ensure href is string
                      if (typeof p.github !== "string") {
                        e.preventDefault();
                        console.error("Invalid github href:", p.github);
                      }
                    }}
                  >
                    View Code
                  </a>
                ) : null}

                {p.deploy ? (
                  <a
                    href={p.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => {
                      if (typeof p.deploy !== "string") {
                        e.preventDefault();
                        console.error("Invalid deploy href:", p.deploy);
                      }
                    }}
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>

              <button
                className="project-button"
                onClick={() => setSelectedProject(p)}
              >
                Show More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  
  );
}

export default ProjectLists;
