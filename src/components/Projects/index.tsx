import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <div id="projects-link" className="bg-[#E8E3DE] p-10  mx-40 mt-10">
      <h1 className="text-3xl uppercase text-center">Projects</h1>
      <div className="flex space-x-36 justify-center mt-10">
        {
         
        }
        <div className="bg-slate-500 py-36 px-24">
          <div className="w-40 h-52 bg-[#E8E3DE]">
            <div className="w-full h-full">
              <Image
                src="/assets/zabzul-supratman.JPG"
                alt="logo header"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-500 py-36 px-24">foto 1</div>
        <div className="bg-slate-500 py-36 px-24">foto 1</div>
      </div>
    </div>
  );
}
