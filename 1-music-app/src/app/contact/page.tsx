'use client'
import React from 'react'
import { Meteors } from '@/components/ui/meteors'

export function MeteorsDemo() {
    return (
        <div className="h-screen w-6xl flex justify-center">
            <div className=" w-full relative">
                <div className="flex flex-col justify-center items-center shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl ">

                    <h1 className='text-8xl font-semibold'>Contact us</h1>
                    <p className='text-gray-400 text-2xl my-8'>We are here to help you in your musical journey</p>
                    <input className='bg-gray-500 rounded-lg w-96 text-3xl'/>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}


export default MeteorsDemo