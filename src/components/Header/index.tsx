import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between p-10 mt-24 items-center mx-40 space-x-20">
      <div className="w-1/2 h-96 relative">
        <div className="w-80 h-96 bg-[#E8E3DE] relative ml-24">
          <div className="absolute w-full h-full -top-5 -right-24">
            <Image
              src="/assets/zabzul-supratman.JPG"
              alt="logo header"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-96">
        <span className="text-3xl">HI!</span>
        <h1 className="text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  text-[#000000]">
          Saya Zabzul Supratman
        </h1>
        <p className="mt-8 text-justify text-[#000000] text-sm">
          Saya adalah seorang front-end developer yang juga tertarik dengan AI.
          Saya menguasai beberapa bahasa pemrograman dan framework, termasuk
          Next.js, React.js, dan Tailwind CSS. Selain itu, saya mahir dalam
          bahasa pemrograman seperti JavaScript dan Python. Keahlian saya dalam
          berbagai teknologi ini memungkinkan saya untuk mengembangkan aplikasi
          web yang modern, interaktif, dan efisien, serta memberi dasar yang
          kuat untuk eksplorasi dalam bidang AI.
        </p>
        <button className="px-4 py-1 border border-[#000000] rounded-3xl mt-5">
          Projects
        </button>
      </div>
    </header>
  );
}
