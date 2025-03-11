import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";

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
    <section className="h-screen py-60 px-20">
      <div className="text-white">
        <div>
        <h1 className="text-7xl bai-jamjuree">Let's create</h1>
        </div>
        <div className="h-20 flex items-center justify-center overflow-hidden">
      {texts.map((text, i) => (
        <h1
          key={i}
          className={`text-7xl bai-jamjuree absolute transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
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
    <section className="h-screen bg-gray-700"></section>
    </>  
  );
}
