import React, { useEffect, useState } from "react";
import { fetchProjects } from "../api/drupal";
import "./ProjectLists.css";

function ProjectLists() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <>
    <h1 className="projectHeadi">Projects</h1>
    <div className="projectContainer">
        
    <ul className="project-list">
      {projects.map((p) => (
        <li key={p.id} className="project-card">
          {/* Image */}
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="project-image"
            />
          )}

          {/* Title */}
          <h3>{p.title}</h3>

          {/* Body */}
          {p.body && (
            <p
              className="project-body"
              dangerouslySetInnerHTML={{ __html: p.body }}
            ></p>
          )}
        </li>
      ))}
    </ul>
    </div>
    </>
  );
}

export default ProjectLists;
