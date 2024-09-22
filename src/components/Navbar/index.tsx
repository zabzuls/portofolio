import React from "react";
import Link from "next/link";

export default function Navbar() {
  const colorUL = "text-[#000000] font-bold";

  return (
    <nav className="flex justify-between px-36 pt-12 text-[20px] text-[#000000] uppercase">
      <ul>
        <li className="font-bold">Zull-Portofolio 🧑‍💻</li>
      </ul>
      <ul className="flex space-x-6">
        <Link href="#home-link" className={colorUL}>
          Home
        </Link>
        <Link href="#projects-link" className={colorUL}>
          Projects
        </Link>
        <Link href="#contact-link" className={colorUL}>
          Contact
        </Link>
        <Link href="#about-link" className={colorUL}>
          About
        </Link>
      </ul>
    </nav>
  );
}
