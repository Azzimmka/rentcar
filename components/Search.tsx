'use client'

import { SearchContext } from "@/context/search"
import { useContext } from "react"
import LocationSelection from "./LocationSelection"

export default function Search(){
    const { searchActive } = useContext(SearchContext)
    return(
        <div className={`${ searchActive
            ?'bg-white pt-4 rounded-none xl:h-[80px]'
            :'bg-white -mt-12 rounded-[20px] py-6 xl:pr-4 xl:h-[98px] '} pl-4 hidden xl:block w-full relative shadow-lg`}>
            <div className="xl:w-full flex items-center px-6 xl:px-0">
                <LocationSelection/>
            </div>
        </div>
    )
}