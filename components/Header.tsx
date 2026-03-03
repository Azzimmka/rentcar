'use client'

import { useContext, useEffect, useState } from "react"
import Image from "next/image"
// * react scroll
import { Link } from 'react-scroll'
// * components
import SearchMobile from "./SearchMobile"
// * media query hook
import { useMediaQuery } from 'react-responsive'
// * icons
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchContext } from "@/context/search"

export default function Header(){
    const {setsearchActive} = useContext(SearchContext)
    const [header, setHeader] = useState(false)
    const [nav, setNav] = useState(false)

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)'
    })
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 40){
                setHeader(true)
            }else{
                setHeader(false)
            }

            if(window.scrollY > 800){
                setsearchActive(true)
            } else{
                setsearchActive(false)
            }
        }

        // add evenListener 
        window.addEventListener('scroll', handleScroll)
        // remove event Listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }  
        
    }, [])
    
    return(
        <header className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 overflow-hidden`}>
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                {/* logo */}
                <div className="flex items-center justify-between px-4">
                    <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer">
                       <Image loading="eager" src={'/icons/logo.svg'} width={194} height={64} alt="logo" />
                    </Link>
                    {/* nav open menu */}
                    <div onClick={()=>{
                        setNav(!nav)
                        console.log(nav);
                    }} className="cursor-pointer xl:hidden">{nav 
                        ? 
                        (<BiX className="text-4xl" /> ) 
                        : 
                        <BiMenuAltRight className="text-4xl"/> }
                    </div>
                </div>
                {/* nav */}
                <nav className={`${nav 
                ?
                'max-h-max py-8 px-4 xl:py-0 xl:px-0 overflow-visible' 
                :
                'max-h-0 xl:max-h-max overflow-hidden'} 
                flex flex-col xl:flex-row xl:w-max xl:gap-x-8 w-full bg-white gap-y-6 xl:font-medium xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
                    <Link to="home" className="cursor-pointer" activeClass="active" smooth={desktopMode} spy={true} >
                       Home
                    </Link>
                    <Link to="cars" className="cursor-pointer" activeClass="active" smooth={desktopMode} spy={true} >
                       Cars
                    </Link>
                    <Link to="about" className="cursor-pointer" activeClass="active" smooth={desktopMode} spy={true} >
                       About
                    </Link>
                    <Link to="why" className="cursor-pointer" activeClass="active" smooth={desktopMode} spy={true} >
                       Why us
                    </Link>
                    <Link to="testimonials" className="cursor-pointer" activeClass="active" smooth={desktopMode} spy={true} >
                       Testimonials
                    </Link>
                    <Link to="contact" className="cursor-pointer" activeClass="active" smooth={desktopMode} spy={true} >
                       Contact
                    </Link>
                    <Link to="/" className="cursor-pointer xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto" activeClass="active" smooth={desktopMode} spy={true} >
                       See all cars
                    </Link>
                    <SearchMobile/>
                </nav>
            </div>
        </header>
    )
}