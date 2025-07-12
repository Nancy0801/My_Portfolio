"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "../lib/utils";
// const words2 = `A passionate full-stack developer skilled in 𝗡𝗲𝘅𝘁.𝗷𝘀, MERN stack, C++. Strong in Data Structures and algorithms, with a keen interest in building scalable, user-friendly web applications. Quick to learn, problem-solver, and always ready to do Collaborations and take on new challenges.`;
const words2 = `Full-stack developer with experience in building scalable and intuitive web applications using Next.js, the MERN stack, and Java. Strong understanding of Data Structures and Algorithms, with a focus on writing clean, efficient code and solving real-world problems through thoughtful engineering.`;
function HomePage2() {
    const words = [
        {
            text: "NANCY ",
            className: "md:text-6xl text-3xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-500 mb-5 mt-2 ml-5 drop-shadow-lg",
        },
        {
            text: "GUPTA",
            className: "md:text-6xl text-3xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-500-5 mt-2 ml-5 drop-shadow-lg",
        },
    ]
    return (
        <div className="relative w-full bg-slate-900 flex flex-row items-center justify-between rounded-lg h-[32rem] mt-10">
            <div className="relative flex w-full bg-slate-900 items-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />

                {/* Left side - Text content */}
                <div className="flex flex-col w-3/5 z-30 p-8">
                    <TypewriterEffectSmooth words={words} />
                    <div className="max-w-2xl p-3 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ml-5">
                        <TextGenerateEffect
                            words={words2}
                            className="font-medium text-neutral-800 dark:text-neutral-200 text-lg"
                        />
                    </div>

                </div>

                {/* Right side - Image */}
                <div className="flex items-center justify-center w-2/5 z-30">
                    <img
                        src="/nancy2.png"
                        alt="Shubham Gupta"
                        className="rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-gray-500"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage2