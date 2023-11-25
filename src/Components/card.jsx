const Card = () =>{
    return (
        <div className="flex justify-between container-sm  mt-20 lg:mt-32 mb-32 min-w-full box-content ">
            <div className="my-auto w-4/5">
            <h1 className="text-white lg:text-6xl lg:ml-16 text-3xl ml-6">I'm <br /> <span className="text-indigo-600 lg:text-6xl text-3xl">Full-Stack</span> <br />Developer</h1>
            <p className="text-white lg:ml-16 mt-2 font-mono ml-6">Saya Adalah Seoarang Developer yang suka belajar teknologi dan bahasa pemrograman baru 😊</p>
            <button className="text-white text-lg lg:px-6 lg:py-2 px-3 py-1 rounded lg:ml-16 ml-6 mt-4 bg-indigo-600 hover:bg-indigo-500">Projects ➡️</button>
            </div>
            <div className="mr-2">
                <img src="./LogoHeader.png" alt="Gambar" className="w-80 lg:mr-28" />
            </div>
        </div>
    );
};
export default Card;