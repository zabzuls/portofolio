import React from "react";
import Certificates from "../../api/Certificate";
import modal from "./modal";
import ModalCertificate from "./modal";
export default function Projects() {
  return (
    <div id="Certificate-link" className="bg-[#E8E3DE] p-10  mx-40 mt-10 rounded-xl">
      <h1 className="text-3xl uppercase text-center mb-2">certificate</h1>
      <div className="h-96 flex justify-center space-x-4">
        {Certificates.map((Certificate, index) => (
          <div onClick={ ()=> ModalCertificate()}
            key={index}
            className="w-[320px] h-[250px] bg-slate-50 p-10 shadow-xl rounded-xl hover:pointer hover:scale-105 cursor-pointer"
          >
            <figure>
              <img
                src={Certificate.image}
              />
            </figure>
            <p className="text-center -top-10">{Certificate.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
