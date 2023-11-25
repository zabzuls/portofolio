import React from "react";
const About = () =>{
    return (
        <div className="flex justify-between container-md  mt-20 min-w-full">
            <div className="ml-60 mr-16">
                <img src="./LogoHeader.png" alt="Gambar" className="w-60"/>
            </div>

            <div className="my-auto ml-32 w-2/4 mr-10">
                <h3 className="text-white text-md mb-2">Tentang Saya</h3>
                <h1 className="text-white text-3xl">Zabzul<span className="text-indigo-600 text-3xl">Supratman</span></h1>
                <p className="text-white mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi iste voluptatem necessitatibus eius repudiandae excepturi saepe, dicta nobis accusamus porro eos inventore officia nisi perspiciatis debitis odio quod aut asperiores. 😊</p>
                <button className="text-white text-lg px-6 py-2 rounded mt-4 bg-indigo-600 hover:bg-indigo-500">Contact📞</button>
                </div>
        </div>
    );
};
export default About;