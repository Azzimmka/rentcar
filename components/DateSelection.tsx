'use client'

import { useState } from "react"
// headless UI
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
// icons 
import { FaCalendarAlt } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

// react date
import { DateRange } from "react-date-range"
import {format, addDays} from "date-fns"

// react data range css
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'




export default function DateSelection(){
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection',
        }
    ])
    return(
        <Menu as='div' className='w-full h-full  flex xl:flex-row'>
            {({ open }) => (
                <div className="relative flex-1 ">
                    {/* btn */}
                    <MenuButton className='w-full h-full flex flex-col justify-center items-center outline-none xl:items-start xl:pl-8'>
                                <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                                    <FaCalendarAlt className="text-accent"/>
                                    <div className="uppercase text-[15px] font-bold">Select date</div>
                                    {/* стрелка меняется в зависимости от open */}
                                    {open
                                        ? <BiChevronUp className="text-secondary ml-1 hidden xl:block"/>
                                        : <BiChevronDown className="text-secondary ml-1 hidden xl:block"/>
                                    }
                                </div>
                                <div className="flex items-center gap-x-3 xl:ml-6 opacity-70">
                                    <div className="font-extralight">{format(date[0].startDate, 'dd/MM/yyy')}</div>
                                    <FaArrowRightLong className="text-accent text-[12px]"/>
                                    <div>
                                        {date[0].endDate ? (
                                            <div>{format(date[0].endDate, 'dd/MM,yyy')}</div>
                                        )
                                        : (
                                            <div>{format(date[0].startDate, 'dd/MM,yyy')}</div>
                                        )

                                        }
                                    </div>
                                </div>
                    </MenuButton>

                    {/* items */}
                    <MenuItems className='absolute mt-1 w-full xl:max-w-max bg-white shadow-lg rounded-xl z-100 p-2 outline-none'>
                        <DateRange
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            rangeColors={['#ed1d24']}
                            minDate={addDays(new Date(), 0)}
                            onChange={(item: any) => setDate([item.selection])}
                        />                                         
                    </MenuItems>
                </div>
            )}
        </Menu>
    )
}