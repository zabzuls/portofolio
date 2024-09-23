import React from "react";
import projects from "../../api/projects";

export default function Projects() {
  return (
    <div id="projects-link" className="bg-[#E8E3DE] p-10  mx-40 mt-10 rounded-xl">
      <h1 className="text-3xl uppercase text-center mb-2">Projects</h1>
      <div className="h-96 flex justify-center space-x-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                src={project.image}
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>Role : {project.role}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Lihat</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
