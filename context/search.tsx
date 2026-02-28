'use client'

import { createContext, useContext, useState } from "react"

//create context
export const SearchContext = createContext('')

//provider
export const SearchContextProvider = ({childern}: any) => {
    return(
    <SearchContext.Provider value="search context">
        {childern}
    </SearchContext.Provider>
    )   
}

export const useSearchContext = () => useContext(SearchContext)