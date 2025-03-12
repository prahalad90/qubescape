'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Projects from "./components/projects";
import About from "./components/about";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { relative } from "path";

export default function Home() {
  const texts = ["better brands", "engaging content", "winning strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
  })

  

  return (
    <>
      <section className="lg:h-screen h-[80h] py-60 lg:px-20 px-5 sticky top-0">
        <div className="text-white">
          <div>
            <h1 className="lg:text-7xl text-5xl bai-jamjuree">Let's create</h1>
          </div>
          <div className="h-20 mt-2 flex items-center justify-left overflow-hidden">
            {texts.map((text, i) => (
              <h1
                key={i}
                className={`lg:text-7xl text-5xl bai-jamjuree absolute transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                {text}
              </h1>
            ))}
          </div>
        </div>
        <div className="hero">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10">
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <About/>

      <section>
        <h2 className="text-5xl h-[10vh] my-2 bai-jamjuree">Our Projects</h2>
          <Projects/>
      </section>
    </>
  );
}
