'use client'

import { useState } from "react"
// headless UI
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
// icons 
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

// react date
import { DateRange } from "react-date-range"
import {format, addDays} from "date-fns"

// react data range css
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const hours: string[] = ['10:00 AM', '12:00 AM', '14:00 AM', '16:00 AM']

export default function HoursSelection(){
    const [hour, setHour] = useState<string>('10:00 AM')
    return(
        <Menu as='div' className='w-full h-full  flex xl:flex-row'>
            {({ open }) => (
                <div className="relative flex-1 ">
                    {/* btn */}
                    <MenuButton className='w-full h-full flex flex-col justify-center items-center outline-none xl:items-start xl:pl-8'>
                                <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                                    <FaClock className="text-accent"/>
                                    <div className="uppercase text-[15px] font-bold">Select Hours</div>
                                    {/* стрелка меняется в зависимости от open */}
                                    {open
                                        ? <BiChevronUp className="text-secondary ml-1 hidden xl:block"/>
                                        : <BiChevronDown className="text-secondary ml-1 hidden xl:block"/>
                                    }
                                </div>
                                <div className="flex items-center justify-center gap-x-3">
                                    <div className="xl:ml-6 opacity-70">
                                        {hour}
                                    </div>
                                    <FaArrowRightLong className="text-accent text-[12px]" />
                                    <div className=" opacity-70">
                                        {hour}
                                    </div>
                                </div>
                    </MenuButton>

                    {/* items */}
                    <MenuItems className='absolute -top-[170px] xl:-top-[230px] flex  flex-col xl:text-center xl:gap-y-3    w-full bg-white shadow-lg rounded-xl z-100 py-2 outline-none'>
                        {hours.map((hour, index)=>{
                            return <div key={index} onClick={()=>setHour(hour)} className="active:bg-gray-100 hover:bg-gray-100 py-2 cursor-pointer duration-150">
                                {hour}
                            </div>
                        })}
                    </MenuItems>
                </div>
            )}
        </Menu>
    )
}