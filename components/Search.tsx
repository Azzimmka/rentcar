'use client'

import { SearchContext } from "@/context/search"
import { useContext } from "react"
import LocationSelection from "./LocationSelection"
import DateSelection from "./DateSelection"
import HoursSelection from "./HoursSelection"

export default function Search(){
    const { searchActive } = useContext(SearchContext)
    return(
        <div className={`${ searchActive
            ?'bg-white pt-4 rounded-none xl:h-[80px]'
            :'bg-white -mt-12 rounded-[20px] py-6 xl:pr-4 xl:h-[98px] '} pl-4 hidden xl:block w-full relative shadow-lg`}>
            <div className="xl:w-full flex  items-center justify-around px-6 xl:px-0">
                <LocationSelection/>
                <div className="h-[45px] w-[2px] bg-gray-300 "></div>
                <DateSelection/>
                 <div className="h-[45px] w-[2px] bg-gray-300 "></div>
                <HoursSelection/>
            </div>
        </div>
    )
}