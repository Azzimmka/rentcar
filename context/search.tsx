'use client'

import { createContext, useContext, useState } from "react"

// типы
type SearchContextType = {
  searchActive: boolean
  setsearchActive: (value: boolean) => void
}

// создаём контекст с правильным типом
export const SearchContext = createContext<SearchContextType>({
  searchActive: false,
  setsearchActive: () => {},
})

// провайдер
export const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchActive, setsearchActive] = useState(false)

  return (
    <SearchContext.Provider value={{ searchActive, setsearchActive }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)