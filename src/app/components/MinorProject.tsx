"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";


function Projects() {
    return (
        <div className="h-[40rem] w-full flex flex-col items-center justify-start ">
            <div className="w-full flex items-center justify-center my-12">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
                    Mini Projects
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <PinContainer
                    title="https://github.com/Nancy0801/Brick_Breaker_Game"
                    href="https://github.com/Nancy0801/Brick_Breaker_Game"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Brick Breaker
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                A classic arcade-style game built using Java where the player controls a paddle to bounce a ball and break bricks arranged at the top of the screen.
                            </span>
                            <div></div>
                            <span>Using Java , Java Swing , GUI</span>
                        </div>
                        <div className="border border-gray-300 rounded-lg mt-2 h-55 w-70">
                            <img
                                src="/bricks.png"
                                alt="java game"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </PinContainer>
                <PinContainer
                    title="https://github.com/Nancy0801/HangMan_Game"
                    href="https://github.com/Nancy0801/HangMan_Game"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Hangman Game
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                A word-guessing game built with JavaScript where players try to guess a hidden word one letter at a time before running out of chances.
                            </span>
                            <div></div>
                            <span>Using Javascript</span>
                        </div>
                        <div className="ml-3 border border-gray-300 rounded-lg mt-2 h-55 w-70">
                            <img
                                src="/hangman.png"
                                alt="js game"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </PinContainer>
            </div>
        </div>
    )
}

export default Projects
