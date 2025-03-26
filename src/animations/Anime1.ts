import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger)

const anime1 = () =>{
    gsap.from(".nav-items",{
        opacity:0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
       
    })
}

export const Animation1 = () =>{
    useGSAP(()=>{
        anime1()
    },[])
}

const anime2 = () =>{
    gsap.fromTo(".navbar", { 
        opacity: 0, // 🌑 Start invisible
    }, 
    { 
        opacity: 1, // 🔥 Fade in
        duration: 2, // 2s fade-in
        ease: "power3.out",
       
        yoyo: true, // ↕️ Reverse (fade-out after appearing)
        stagger: 1 // 🔥 If multiple elements, they will animate one after another
    })

    
}

export const Animation2 = () =>{
    useGSAP(()=>{
        anime2()
    },[])
}