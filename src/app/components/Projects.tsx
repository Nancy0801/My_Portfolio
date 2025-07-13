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
          title="https://github.com/Nancy0801/Employee-Management-System"
          href="https://github.com/Nancy0801/Employee-Management-System"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Employee Management System
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Developed a GUI-based employee management system with full CRUD
                functionality, admin controls, and MySQL integration for data
                handling.
              </span>
              <div></div>
              <span>Tech Stack : Java, Swing, MySQL, GUI, OOPS</span>
            </div>
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
          title="https://github.com/Nancy0801/Chatify"
          href="https://github.com/Nancy0801/Chatify"
        >
          {/* ! sign marks important classname */}
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Chatty-Chat Application
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Built a real-time chat application with user authentication,
                image sharing, and typing indicators, offering a smooth and
                responsive messaging experience.
              </span>
              <div></div>
              <span>
                Tech Stack : React.js, Node.js, Express.js, MongoDB, Socket.io,
                Cloudinary
              </span>
            </div>
            <div className="border border-gray-300 rounded-lg mt-2">
              <img
                src="/chat-app.jpeg"
                alt="Chat Application"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="https://github.com/Nancy0801/React-QuoteGenerator"
          href="https://github.com/Nancy0801/React-QuoteGenerator"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Quote Generator
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                A React.js application that displays a new random quote each
                time a button is clicked, often styled with smooth transitions
                and share options.
              </span>
              <div></div>
              <span>Tech Stack: ReactJS , Firebase</span>
            </div>
            <div className="h-50 w-70 border border-gray-300 rounded-lg mt-2">
              <img
                src="/quote.jpeg"
                alt="React Quote-Generator"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </PinContainer>
      </div>
      <div className="mt-10 z-10 flex justify-center items-center">
        <Link href="/MinorProjects">
          <button className="mt-10 mb-5 px-6 py-3 bg-black text-white border-2 border-white rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 font-medium text-lg">
            View Minor Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
