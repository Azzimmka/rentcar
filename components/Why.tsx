'use client'

import Image from "next/image"

import { motion } from 'framer-motion'

import { fadeIn } from "@/variants"

import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'
 

export default function Why(){
    return (
        <div className="section flex items-center " id="why">
            <div className="container mx-auto">
                <h2 className="h2 text-center">Lorem ipsum dolor sit amet.</h2>
                <p className="mx-w-[680px] text-center mx-auto mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci maiores voluptates excepturi vel ea provident fugiat, veniam voluptate illo commodi quo error veritatis ullam?</p>
                {/* car image */}
                <div className="hidden md:flex justify-center mb-6 xl:mb-2">
                    <Image src={'/images/why/car.svg'} alt="sorry" width={1060} height={420} />
                </div>
            </div>
        </div>
    )
}