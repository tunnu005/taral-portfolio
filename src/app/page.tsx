"use client"
import Loading from "@/Elements/loading";
import Main from "@/Elements/Main";
import Navbar from "@/Elements/Navbar";
import { useEffect, useState } from "react";
import "./styles.css"
import Skills from "@/Elements/skills";
import Project from "@/Elements/Project";
import Contact from "@/Elements/contact";
import LocomotiveScroll from 'locomotive-scroll';



export default function Home() {

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll?.destroy();
  };
  })


  const scroll = (id:string) =>{
    const locomotiveScroll = new LocomotiveScroll();
    const target = document.querySelector(`#${id}`)
    console.log("ohh yeah scroll",id,target)
    if(target){

    locomotiveScroll.scrollTo(target as HTMLElement)
    }
  }

  return (
    <div className={`bg-[#000000] min-h-screen`}>

      <div className="">
        <Navbar scroll={scroll}/>
        <div className="" >
          <Main />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Project />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
