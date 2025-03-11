"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > lastScrollY) {
            setVisible(false); // Hide when scrolling down
          } else {
            setVisible(true); // Show when scrolling up
          }
          setLastScrollY(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollY]);

    return (
        <header className={`flex justify-between items-center px-5 py-2 h-[80px] bg-gray-900 text-white fixed top-0 left-0 w-full duration-200 ease-in ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="logo ">
                <Link href='/'><img className="h-15" src="/logo.webp" alt="" /></Link>
            </div>
            <nav className="flex justify-end items-center w-[70%]">
                <ul className={`flex justify-between w-full fixed top-[0] ${isOpen ? "left-[0%]":"left-[-100%]"} duration-100 ease-in lg:static lg:flex-row flex-col bg-purple-300 lg:bg-transparent lg:h-auto h-screen p-10 lg:p-0`} id="mobile-menu">
                    <li className="hover:text-purple-300"><Link href='/'>Home</Link></li>
                    <li className="hover:text-purple-300"><Link href='/'>About</Link></li>
                    <li className="hover:text-purple-300"><Link href='/'>Portfolio</Link></li>
                    <li className="hover:text-purple-300"><Link href='/'>Blog</Link></li>
                    <li className="hover:text-purple-300"><Link href='/'>Contact</Link></li>
                </ul>
            </nav>
            <button className="w-auto lg:hidden z-2" onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)}>
                    <div className="container flex flex-col justify-between">
                        <div className={`w-[30px] h-[2px] my-1 bg-white ${isOpen ?  "origin-top-left rotate-45 duration-300 ease-in":"duration-300 ease-in" }`}></div>
                        <div className={`w-[30px] h-[2px] my-1 bg-white ${isOpen ?  "opacity-0 duration-300 ease-in":"duration-100 ease-in" }`}></div>
                        <div className={`w-[30px] h-[2px] my-1 bg-white ${isOpen ?  "origin-bottom-left -rotate-45 duration-300 ease-in":"" }`}></div>
                    </div>
            </button>
            
        </header>
    );
}

export default Header;
