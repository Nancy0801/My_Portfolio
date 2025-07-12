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
        title: "Organised Technovate (GDSC , UIET)",
        description:
            "Served as a core member of the organizing committee for a campus-wide Hackathon at GDSC UIET, contributing to planning, coordination, and smooth event execution.",
    },
    {
        title: "Organised Thinker Jugaad (Jugaad UIET)",
        description:
            "Served as a member of the organizing committee for Jugaad Technovate, a hardware-focused Hackathon, contributing to event planning, team coordination, and on-ground execution of prototype-based challenges.",
    },
    {
        title: "Participated in SIH 2024 ",
        description:
            "Have Been contributing to various open source projects actively from last 2 months, enhancing my skills and collaborating with developers worldwide",
    },
    {
        title: "Participated in FOSSHACK 2024",
        description:
            "Have been solving DSA problems consistently for the past 7-8 months, improving my problem-solving skills and algorithmic thinking.",
    },
];
