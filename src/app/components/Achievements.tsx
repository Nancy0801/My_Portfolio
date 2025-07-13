"use Client"
import { HoverEffect } from "./ui/card-hover-effect";

export function Achievements() {
    return (
        <div>
            <div className="w-full flex items-start justify-center my-5">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
                    Key HighLights
                </h1>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}
export const projects = [
    {
        title: "Organizing Committee Member – Technovate (GDSC UIET)",
        description:
            "Contributed as a core member of the organizing committee for Technovate, a 24-hour inter-college hackathon, playing a key role in planning, coordination, and smooth on-site execution of the event.",
    },
    {
        title: "Organizing Committee Member – Tkinter(Mechamaze) (Jugaad UIET)",
        description:
            "Helped organize Tkinter Jugaad (Mechamaze), a robotics-based hardware event where participants built RC cars to navigate obstacle-based puzzle tracks, contributing to setup, coordination, and event execution.",
    },
    {
        title: "Participated in SIH 2024 ",
        description:
            "Participated in Smart India Hackathon 2024, organized by the Ministry of Education, where we developed innovative tech-driven solutions to address real-world problem statements at the national level.",
    },
    {
        title: "Participated in FOSSHACK 2025",
        description:
            "Took part in the FOSS United Hackathon, contributing to open-source projects by collaborating with fellow developers to build meaningful, community-focused solutions.",
    },
];
