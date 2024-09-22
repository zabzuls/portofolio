import React from "react";
import projects from "./projects";

export default function Projects() {
  return (
    <div id="projects-link" className="bg-[#E8E3DE] p-10  mx-40 mt-10">
      <h1 className="text-3xl uppercase text-center mb-2">Projects</h1>
      <div className="h-96 flex justify-center space-x-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-1/2  bg-slate-100 rounded-lg text-center"
          >
            <p>{project.namaProject}</p>
            <p>{project.posisi}</p>
            <p>{project.keterangan}</p>
          </div>
        ))}
        <div className="card glass w-96">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
