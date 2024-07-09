"use client"

import React, { useRef } from 'react'

import { useScroll, useTransform, motion } from "framer-motion";

const FramerScrollExample = () => {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [20, -20]);

    return (
        <div className="py-10 md:py-40 min-w-full min-h-full relative" ref={containerRef} style={{ perspective: "1000px" }}>
            <motion.div
                style={{
                    rotateX: rotate,
                }}
                className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
            >
                <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 text-white">
                    <h1 className='text-3xl'>
                        <span className='text-xl'>By &gt;</span> Muzammil Ali
                    </h1>
                </div>
            </motion.div>
        </div>
    )
}

export default FramerScrollExample
