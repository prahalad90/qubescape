'use client';

import { useState, useEffect, useRef } from "react";
import Projects from "./components/projects";
import About from "./components/about";
import Tech from "./components/Technology";
import Testimonial from "./components/Testimonial";
import gsap from "gsap";

const useGsap = (ref, ref1) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref1.current,
        start: "top 20px",
        end:"bottom 100%",
        onEnter: () => ref.current.classList.remove("sticky"),
        onEnterBack: () => ref.current.classList.add("sticky"),
      },
    });
  }, [ref]);
};


export default function Home() {
  const texts = ["better brands", "engaging content", "winning strategy"];
  const [index, setIndex] = useState(0);
  const bannerRef = useRef(null);
  const ref1 = useRef(null);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
  });

  useGsap(bannerRef, ref1);
    
  return (
    <>
      <section ref={bannerRef} className="lg:h-screen pt-[40vh] h-[80h] lg:px-20 px-5 sticky top-0">
        <div className="text-white ">
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
          <video autoPlay playsInline loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-1">
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div ref={ref1}>
      <About/>
      </div>

      <section className="p-2">
        <h2 className="text-5xl h-[10vh] bai-jamjuree sticky top-0">Our Projects</h2>
          <Projects/>
      </section>

      <section>
        <Tech/>
      </section>
      
      <section>
      <Testimonial/>
      </section>

    </>
  );
}
