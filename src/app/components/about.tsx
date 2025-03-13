"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About(){
    const textRef = useRef(null);
    useEffect(() => {
        const chars = textRef.current.querySelectorAll("span");
    
        gsap.from(chars, {
          color: "gray",
          opacity:0.3,
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: window.innerWidth < 768 ? "top 75%" : "top 80%",
            end: "bottom 85%",
            scrub: true,
            markers:true,
          },
        });
      }, []);

    const text = "At Qubescape, we craft marketing campaigns, digital experiences, and innovative solutions that drive growth. From branding to web & app development, we focus on results that make an impact. We don’t just create—we strategize and execute to help you stand out.";

    return (
        <div className="w-full h-screen bg-neutral-800 flex justify-between items-center z-10 relative">
            <h1 ref={textRef} className="text-3xl lg:text-5xl text-white bai-jamjuree lg:px-[150px] leading-[1.5] px-5">{text.split("").map((char, i) => (
          <span key={i} style={{ color: "white" }}>{char}</span>
        ))}</h1>
        </div>
    )
}
export default About;