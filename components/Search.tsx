'use client'

import { SearchContext } from "@/context/search"
import { useContext } from "react"
import dynamic from "next/dynamic"

const LocationSelection = dynamic(() => import("./LocationSelection"), { ssr: false })
const DateSelection = dynamic(() => import("./DateSelection"), { ssr: false })
const HoursSelection = dynamic(() => import("./HoursSelection"), { ssr: false })


export default function Search(){
    const { searchActive } = useContext(SearchContext)
    return(
        <div className={`${ searchActive
            ?'bg-white pt-4 rounded-none xl:h-[80px]'
            :'bg-white -mt-12 rounded-[20px] py-6 xl:pr-4 xl:h-[98px] '} pl-4 hidden xl:block w-full relative shadow-lg`}>
            <div className={`h-full flex ${searchActive && 'container mx-auto'}`}>
                <LocationSelection/>
                <div className="h-[45px] w-[2px] bg-gray-300 "></div>
                <DateSelection/>
                 <div className="h-[45px] w-[2px] bg-gray-300 "></div>
                <HoursSelection/>
                <div>
                    <button className={`${ searchActive ? '' : '' } btn btn-sm btn-accent w-[164px]`}>Search</button>
                </div>
            </div>
        </div>
    )
}