'use client'

import { useState } from "react"
// headless UI
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
// icons 
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'


// location data
const locations = [
    'Shify Academy road street',
    'IT Park street',
    'Mirzo Ulugbek street'
]

export default function LocationSelection(){
    const [location, setLocation] = useState('Select location')

    return(
        <Menu as='div' className='w-full h-full flex xl:flex-row'>
            {({ open }) => (
                <div className="relative flex-1">
                    {/* btn */}
                    <MenuButton className='w-full h-full flex flex-col justify-center items-center outline-none xl:items-start xl:pl-8'>
                        <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-black/10">
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                                    <FaMapMarkerAlt className="text-accent"/>
                                    <div className="uppercase text-[15px] font-bold">Select location</div>
                                    {/* стрелка меняется в зависимости от open */}
                                    {open
                                        ? <BiChevronUp className="text-secondary ml-1 hidden xl:block"/>
                                        : <BiChevronDown className="text-secondary ml-1 hidden xl:block"/>
                                    }
                                </div>
                                <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                                    {location}
                                </div>
                            </div>
                        </div>
                    </MenuButton>

                    {/* items */}
                    <MenuItems className='absolute xl:top-20 -top-[180px] left-0 mt-1 w-full bg-white shadow-lg rounded-xl z-50 py-2 outline-none'>
                        {locations.map((location, index) => (
                            <MenuItem key={index}>
                                <button
                                    onClick={() => setLocation(location)}
                                    className='w-full text-left px-4 py-3 text-sm text-primary hover:bg-gray-50 flex items-center gap-x-2 transition-colors duration-150'>
                                    <FaMapMarkerAlt className='text-accent shrink-0'/>
                                    {location}
                                </button>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </div>
            )}
        </Menu>
    )
}