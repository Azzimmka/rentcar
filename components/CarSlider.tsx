'use client'

import 'swiper/css'
import Image from 'next/image'
import { FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { Swiper, SwiperSlide } from 'swiper/react'


const cars = [
    {
        type: 'Hatchback',
        name: 'Ford Focus',
        price: 29,
        stars: 3.5,
        image: 'images/carSlider/car01.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '160 HP'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'front'
            },
        ]
    },
    {
        type: 'Sedan',
        name: 'Toyta corolla',
        price: 34,
        stars: 5,
        image: 'images/carSlider/car02.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '160 HP'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'front'
            },
        ]
    },
    {
        type: 'Suv',
        name: 'HONDA CR-V',
        price: 12,
        stars: 4.7,
        image: 'images/carSlider/car03.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '160 HP'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'front'
            },
        ]
    },
    {
        type: 'Convertible',
        name: 'Mazda Focus',
        price: 29,
        stars: 3.5,
        image: 'images/carSlider/car02.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '160 HP'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'front'
            },
        ]
    }
]

export default function CarSlider(){
    return(
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className='container mx-auto'>
            <Swiper breakpoints={{
                320: { slidesPerView: 1, spaceBetween:15 },
                640: { slidesPerView: 2, spaceBetween:32 },
                1260: { slidesPerView: 3, spaceBetween:32 },
            }}>
                {cars.map((car, index)=>{
                    return <SwiperSlide key={index}>
                        <div className='max-w-96 mx-auto sm:mx-0  '>
                            <Image src={car.image} alt='' width={380} height={284}/>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='text-[13px] text-secondary uppercase'>{car.type}</div>
                                    <h3 className='text-lg uppercase'>{car.name}</h3>
                                    <h3 className='mb-10 text-accent uppercase'>{car.price}/day</h3>
                                </div>
                                <div className='flex gap-x-2 text-accent'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                                {car.info.map((item, index)=>{
                                    return <div key={index} className='flex flex-col items-center'>
                                        <div className='bg-primary w-12 h-12 mb-2 rounded-full flex justify-center items-center'>
                                            <Image src={item.icon} width={24} height={24} alt='' />
                                        </div>
                                        <div className='text-[12px] uppercase'>{item.text}</div>
                                    </div>
                                })}
                            </div>
                                <button className='btn btn-accent btn-lg'>See details</button>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </motion.div>
    )
}