import React from "react";
import { createBrowserRouter,RouterProvider, Link } from 'react-router-dom'
import Navbar from "./navbar";
import App from "../App";
import Card from "./card";
const Projects = () =>{
    const kotak = 'lg:w-60 w-80 lg:h-72 m-4 border border-indigo-900 rounded-md shadow-xl p-4 hover:bg-indigo-900 cursor-pointer hover:text-indigo-950';
    const teks = 'text-white text-md font-sans ';
    return (
        <div id="projects" className="container-sm mb-10 min-w-full flex justify-center">
            <div className="bg-indigo-950 w-11/12   rounded-lg flex justify-center flex-col ">
            <h1 className="text-white lg:text-4xl text-2xl  min-w-full text-center">My <span className="text-indigo-500 lg:text-4xl text-2xl">Projects 💻</span></h1>

            <div className="flex justify-center flex-wrap">
                <div className={kotak}>
                    <img src="./project1.png" alt="project1" className="rounded shadow-lg"/>
                    <div className="flex items-center">
                        <p className={teks}>Project AI Studi Independen Orbit</p>
                        <button className="text-white text-md h-7 px-5 rounded bg-indigo-600 hover:bg-indigo-500">Lihat</button>
                    </div>
                </div>
                 <div className={kotak}>
                    <img src="./project2.png" alt="project1" className="rounded shadow-lg"/>
                    <div className="flex items-center">
                        <p className={teks}>Project AI Studi Independen Orbit</p>
                        <button className="text-white text-md h-7 px-5 rounded bg-indigo-600 hover:bg-indigo-500">Lihat</button>
                    </div>
                </div>
                <div className={kotak}>
                    <img src="./project3.png" alt="project1" className="rounded shadow-lg"/>
                    <div className="flex items-center">
                        <p className={teks}>Project AI Studi Independen Orbit</p>
                        <button className="text-white text-md h-7 px-5 rounded bg-indigo-600 hover:bg-indigo-500">Lihat</button>
                    </div>
                </div>
                <div className={kotak}>
                    <img src="./project4.png" alt="project1" className="rounded shadow-lg"/>
                    <div className="flex items-center">
                        <p className={teks}>Project AI Studi Independen Orbit</p>
                        <button className="text-white text-md h-7 px-5 rounded bg-indigo-600 hover:bg-indigo-500">Lihat</button>
                    </div>
                </div> 
            </div>
        </div>
        </div>
    );
};
export default Projects;