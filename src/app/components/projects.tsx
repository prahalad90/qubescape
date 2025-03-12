"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects(){
    const projectRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let scrollWidth = scrollRef.current.scrollWidth - window.innerWidth;

    gsap.to(scrollRef.current, {
      x: -scrollWidth, // Move content to the left
      ease: "none",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 10%",
        end: () => `+=${scrollWidth}`,
        scrub: 1.8,
        pin: true,
        anticipatePin: 1,
    
      },
    });
  }, []);

    return (
        <div className="overflow-scroll scrollbar-none" ref={projectRef} >
            <div ref={scrollRef} className="flex lg:w-[350vw] w-[600vw] gap-4 h-[88vh]">
                <div className="lg:w-[85vw] w-[150vw] block grid grid-flow-col grid-rows-2 gap-4" >
                    <div className="row-span-2 col-span-2  bg-blue-500 bg-blue-200 rounded-lg overflow-hidden">
                        <img className="h-full object-cover rounded-lg" src="./image.jpg" alt="" />
                    </div>
                    <div className="col-span-2 p-5 rounded-lg overflow-hidden bg-purple-200">
                        
                        <h2 className="text-5xl text-white "> <img className="inline-block h-10 mr-4" src="/sanchi_logo.png" alt="" />Sanchi Group</h2>
                        <hr className="my-5" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quaerat fugit incidunt, earum eveniet pariatur dolorum praesentium! Laboriosam quis distinctio dolore quos sed error quibusdam atque ipsa nemo temporibus?</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                </div>

                <div className="lg:w-[85vw] w-[150vw] block grid grid-flow-col grid-rows-2 gap-4" >
                    <div className="row-span-2 col-span-2  bg-blue-500 bg-blue-200 rounded-lg overflow-hidden">
                        <img className="h-full object-cover rounded-lg" src="./image.jpg" alt="" />
                    </div>
                    <div className="col-span-2 p-5 rounded-lg overflow-hidden bg-purple-200">
                        
                        <h2 className="text-5xl text-white "> <img className="inline-block h-10 mr-4" src="/sanchi_logo.png" alt="" />Sanchi Group</h2>
                        <hr className="my-5" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quaerat fugit incidunt, earum eveniet pariatur dolorum praesentium! Laboriosam quis distinctio dolore quos sed error quibusdam atque ipsa nemo temporibus?</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                </div>

                <div className="lg:w-[85vw] w-[150vw] block grid grid-flow-col grid-rows-2 gap-4" >
                    <div className="row-span-2 col-span-2  bg-blue-500 bg-blue-200 rounded-lg overflow-hidden">
                        <img className="h-full object-cover rounded-lg" src="./image.jpg" alt="" />
                    </div>
                    <div className="col-span-2 p-5 rounded-lg overflow-hidden bg-purple-200">
                        
                        <h2 className="text-5xl text-white "> <img className="inline-block h-10 mr-4" src="/sanchi_logo.png" alt="" />Sanchi Group</h2>
                        <hr className="my-5" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quaerat fugit incidunt, earum eveniet pariatur dolorum praesentium! Laboriosam quis distinctio dolore quos sed error quibusdam atque ipsa nemo temporibus?</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                </div>

                <div className="lg:w-[85vw] w-[150vw] block grid grid-flow-col grid-rows-2 gap-4" >
                    <div className="row-span-2 col-span-2  bg-blue-500 bg-blue-200 rounded-lg overflow-hidden">
                        <img className="h-full object-cover rounded-lg" src="./image.jpg" alt="" />
                    </div>
                    <div className="col-span-2 p-5 rounded-lg overflow-hidden bg-purple-200">
                        
                        <h2 className="text-5xl text-white "> <img className="inline-block h-10 mr-4" src="/sanchi_logo.png" alt="" />Sanchi Group</h2>
                        <hr className="my-5" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quaerat fugit incidunt, earum eveniet pariatur dolorum praesentium! Laboriosam quis distinctio dolore quos sed error quibusdam atque ipsa nemo temporibus?</p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="./image.jpg" alt="" />
                    </div>
                </div>


            
            </div>
        </div>
    )

}

export default Projects;