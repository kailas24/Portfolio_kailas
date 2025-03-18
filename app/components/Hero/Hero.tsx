'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [lgScreen, setLgScreen] = useState<number>(1024)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLgScreen(window.innerWidth);
        }
    }, []);

    return (
        <section className="flex flex-col self-center w-full max-w-[75%] max-lg:max-w-full max-sm:px-3 max-md:px-10 max-lg:px-12">
            {lgScreen < 1024 && (
                <Link href={'/Resume.pdf'} download className="overflow-hidden right-5 top-5 absolute p-3 px-8 text-xl font-medium py-3.5 text-green-400 underline leading-3">
                    Download CV
                </Link>
            )}
            <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-2 font-light text-zinc-300 max-md:mt-10 max-md:max-w-full">
                            <h1 className={`font-Roboto_Slab text-2xl max-sm:text-lg`}>Hey! my name is</h1>
                            <p className={`text-7xl text-green-400 max-md:max-w-full max-sm:text-5xl font-Roboto`}>
                                KAILAS JAYAN.
                            </p>
                            <p className="mr-11 text-3xl max-md:mr-2.5 max-md:max-w-full">
                                <span className={`font-Roboto_Slab text-xl max-sm:text-lg`}>and I&apos;m a</span>{" "}
                                <span className="text-4xl max-sm:text-3xl">Robotic & Automation Engineer.</span>
                            </p>
                        </div>
                        <div className="flex flex-col mt-10  max-md:ml-0 max-md:w-full w-4/5">
                            <p className="text-xl leading-5 text-zinc-100 max-md:mt-10 max-sm:mt-4 max-md:max-w-full max-sm:text-sm max-sm:leading-4">
                            I&apos;m a Robotics and Automation Engineer focused on creating intelligent systems that optimize processes. With skills in robotics, AI, embedded systems, and control mechanisms, I develop innovative solutions for real-world challenges. My work spans from industrial automation to autonomous robotics, always driven by a passion for advancing technology. Let&apos;s innovate together!                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 w-2/6 max-md:ml-0 max-md:w-full">
                        <img src="/profile.jpg" className='rounded-full border-green-400 border-4' alt="" />
                    </div>
                </div>
            </div>
            <div className='flex gap-5'>
                <Link href={'#projects'} className="overflow-hidden gap-2 self-start p-3 px-8 text-xl font-medium py-3.5 mt-2.5 leading-none whitespace-nowrap rounded-lg bg-zinc-200 text-zinc-800 hover:scale-110 max-sm:hover:scale-75 duration-300 max-sm:scale-75 max-sm:self-start">
                    Projects
                </Link>
                {lgScreen >= 1024 && (
                    <Link href={'/Resume.pdf'} download className="overflow-hidden gap-2 self-start p-3 px-8 text-xl font-medium py-3.5 mt-2.5 leading-none whitespace-nowrap rounded-lg bg-green-400 text-zinc-800 hover:scale-110 max-sm:hover:scale-75 duration-300 max-sm:scale-75 max-sm:self-start">
                        Download CV
                    </Link>
                )}
            </div>
            <blockquote className="self-end mt-3.5 mr-16 w-[40%] text-2xl leading-9 text-white max-md:mr-2.5 max-md:max-w-full max-sm:self-end max-sm:leading-4 max-sm:text-end max-sm:w-[90%] max-lg:w-[60%]">
                <span className={`text-3xl font-Suez_One leading-8 text-green-400 max-sm:text-2xl`}>
                    <span className='text-white'>&quot;</span>The best way to predict the future is to invent it.<span className='text-white'>&quot;</span>
                </span>
                <br />
                <cite className="text-zinc-300 text-xl max-sm:text-sm">~ Alan Kay</cite>
            </blockquote>
        </section>
    )
}

export default Hero
