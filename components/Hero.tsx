'use client'
import { useContext } from "react"

//context
import { SearchContext } from "@/context/search"
// component
import Search from "./Search"


export default function Hero(){
    const {searchActive} = useContext(SearchContext)
    return(
        <section className="h-screen bg-[#b2b7c2]/10" id="home">
            <div className="container mx-auto h-full xl:pt-10">hero container</div>
            {searchActive 
            ?
            <div className="fixed top-[80px] z-10 w-full max-w-[1920px]"><Search/></div>
            :
            // -mt-12
            <div className=" w-full max-w-[1300px] mx-auto"><Search/></div>}
        </section>
    )
}