'use client'

import Image from "next/image"

import { 
    MdOutlineMapsHomeWork,
    MdOutlineBuildCircle,
    MdOutlineDirectionsCar
} from 'react-icons/md'

import CountUp from 'react-countup'

import { useInView } from "react-intersection-observer"

import { motion } from 'framer-motion'
import {fadeIn} from '../variants'

export default function About(){

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <section className="section flex items-center" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    {/* images */}
                    <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    className="flex-1 mb-8 xl:mb-0">
                        <Image className="rounded-[20px]" src={'/images/about/car01.png'} width={600} height={448} alt="error"/>
                    </motion.div>
                    {/* text and stats */}
                    <div className="flex-1 flex items-center xl:justify-center">
                        <div className="max-w-[517px]">
                            <h2 className="h2">Car services simplified.</h2>
                            <p className="mb-[42px] max-w-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium possimus, at placeat numquam est eligendi error cupiditate quisquam vero commodi. Repudiandae dignissimos aperiam minima.
                            </p>
                            <div ref={ref} className="flex  items-center gap-x-8 mb-12">
                                <div className="flex flex-col w-[100px]">
                                    <MdOutlineDirectionsCar className="text-5xl text-accent" />
                                    <div className="text-3xl text-black mb-2">
                                        {inView ? (
                                            <CountUp start={0} end={50} duration={3} delay={1}/>
                                        ) : (
                                            null
                                        )} 
                                        +
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        car <br /> types
                                    </div>
                                </div>

                                <div className="flex flex-col w-[100px]">
                                    <MdOutlineMapsHomeWork className="text-5xl text-accent" />
                                    <div className="text-3xl text-black mb-2">
                                        {inView ? (
                                            <CountUp start={0} end={135} duration={3} delay={1}/>
                                        ) : (
                                            null
                                        )} 
                                        +
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        rental <br /> outlets
                                    </div>
                                </div>

                                <div className="flex flex-col w-[100px]">
                                    <MdOutlineBuildCircle className="text-5xl text-accent" />
                                    <div className="text-3xl text-black mb-2">
                                        {inView ? (
                                            <CountUp start={0} end={35} duration={3} delay={1}/>
                                        ) : (
                                            null
                                        )} 
                                        +
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        repair <br /> porints
                                    </div>
                                </div>
                            </div>
                            <button className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase text-white tracking-[2px] text-[13px] max-w-[184px]">See all cars</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}