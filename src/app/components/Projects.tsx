"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";


function Projects() {
    return (
        <div className="h-[40rem] w-full flex flex-col items-center justify-start ">
            <div className="w-full flex items-center justify-center my-12">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
                    Projects
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Attendance Tracking System
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Admins mark daily attendance; students track it live on their dashboards
                            </span>
                            <div></div>
                            <span>Tech Stack : MERN Stack , mongodb , Api Routing</span>
                        </div>
                        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                        <div className="border border-gray-300 rounded-lg mt-2">
                            <img
                                src="/attendance2.png"
                                alt="Attendance Tracking System"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </PinContainer>
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Chatting Application
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Built a Chatting Application where users can do Real-time Chats individually and in Groups
                            </span>
                            <div></div>
                            <span>Tech Stack : MERN Stack , mongodb , Socket.io</span>
                        </div>
                        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                        <div className="border border-gray-300 rounded-lg mt-2">
                            <img
                                src="/chatting3.png"
                                alt="Attendance Tracking System"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </PinContainer>
                {/* <div className="z-10 flex justify-center items-center">
                    <Link href="/MinorProjects">
                        <button className="mt-10 mb-5 px-6 py-3 bg-black text-white border-2 border-white rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 font-medium text-lg">
                            View Minor Projects
                        </button>
                    </Link>
                </div> */}
            </div>
            <div className="mt-10 z-10 flex justify-center items-center">
                    <Link href="/MinorProjects">
                        <button className="mt-10 mb-5 px-6 py-3 bg-black text-white border-2 border-white rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 font-medium text-lg">
                            View Minor Projects
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default Projects
