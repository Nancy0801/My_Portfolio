import React from 'react'
import { Timeline } from "../components/ui/timeline";
import { Code, Palette, Zap, TestTube, ExternalLink } from 'lucide-react';

function Experience() {
    const data = [
        {
            title: "Uniqus Edutech Solutions",
            role : "Web Developer",
            time : "Nov 2024 - April 2025",
            content: (
                <div>
                    <div className="bg-black rounded-lg p-6 border border-gray-800">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Code className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Developed and maintained web applications using MERN stack
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Palette className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Optimized front-end UI/UX for better user experience
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Integrated APIs and improved website performance
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <TestTube className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Wrote unit test cases using Jest to ensure code quality and reliability
                                </p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <a
                                href="https://www.uniqusedutech.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-black hover:bg-neutral-900 text-white rounded-lg transition-colors duration-200 mt-10 border border-white ml-3"
                            >
                                <span>Link </span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "JUGAAD Club",
            role : "UI/UX Designer",
            time : " April 2024 - June 2024",
            content: (
                <div>
                    <div className="bg-black rounded-lg p-6 border border-gray-800">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Code className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Collaborated effectively in a team environment to plan, design, and develop a web application from scratch.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Palette className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Gained hands-on experience in frontend development, focusing on responsive UI and component-based architecture.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <TestTube className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Translated design mockups from Figma into pixel-perfect, interactive web interfaces
                                </p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <a
                                href="https://jugaadclub.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-black hover:bg-neutral-900 text-white rounded-lg transition-colors duration-200 mt-10 border border-white ml-3"
                            >
                                <span>Link </span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "GDSC Club",
            role : "Web Developer",
            time : "Feb 2024 - Oct 2024",
            content: (
                <div>
                    <div className="bg-black rounded-lg p-6 border border-gray-800">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Code className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Contributed to the end-to-end development of a web project, strengthening my understanding of frontend technologies and user experience design.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Palette className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Gained exposure to event planning and management, coordinating both technical and non-technical aspects effectively
                                </p>
                            </div>

                            <div className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Actively participated in organizing and managing tech events, balancing technical development with team coordination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];


    return (
        <div>
            <div className="w-full flex items-center justify-center my-12">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
                    Experience
                </h1>
            </div>
            <div className="relative w-full overflow-clip">
                <Timeline data={data} />
            </div>
        </div>
    );
}

export default Experience
