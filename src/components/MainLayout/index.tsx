import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Projects from "../Projects";
import Certificate from "../Certificate";
import Footer from "../Footer";

type MainLayoutProps = PropsWithChildren<{}>;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div id="home-link" className="h-screen w-screen bg-[#FAF9F8] -z-50">
        <Navbar />
        <Header />
        <Projects />
        <Certificate/>
        <Footer/>
      </div>
    </>
  );
}
