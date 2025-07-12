// import React from 'react'
// import { Timeline } from "../components/ui/timeline";

// function Experience() {
//     const data = [
//         {
//             title: "2024",
//             content: (
//                 <div>
//                     <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-1.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-2.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-3.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/templates/startup-4.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Early 2023",
//             content: (
//                 <div>
//                     <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//                         I usually run out of copy, but when I see content this big, I try to
//                         integrate lorem ipsum.
//                     </p>
//                     <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//                         Lorem ipsum is for people who are too lazy to write copy. But we are
//                         not. Here are some more example of beautiful designs I built.
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <img
//                             src="https://assets.aceternity.com/pro/hero-sections.png"
//                             alt="hero template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/features-section.png"
//                             alt="feature template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/pro/bento-grids.png"
//                             alt="bento template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/cards.png"
//                             alt="cards template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Changelog",
//             content: (
//                 <div>
//                     <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//                         Deployed 5 new components on Aceternity today
//                     </p>
//                     <div className="mb-8">
//                         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//                             ✅ Card grid component
//                         </div>
//                         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//                             ✅ Startup template Aceternity
//                         </div>
//                         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//                             ✅ Random file upload lol
//                         </div>
//                         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//                             ✅ Himesh Reshammiya Music CD
//                         </div>
//                         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//                             ✅ Salman Bhai Fan Club registrations open
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                         <img
//                             src="https://assets.aceternity.com/pro/hero-sections.png"
//                             alt="hero template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/features-section.png"
//                             alt="feature template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/pro/bento-grids.png"
//                             alt="bento template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                         <img
//                             src="https://assets.aceternity.com/cards.png"
//                             alt="cards template"
//                             width={500}
//                             height={500}
//                             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//     ];


//     return (
//         <div>
//             <div className="w-full flex items-center justify-center my-12">
//                 <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
//                     Experience
//                 </h1>
//             </div>
//             <div className="relative w-full overflow-clip">
//                 <Timeline data={data} />
//             </div>
//         </div>
//     );
// }

// export default Experience


import React from 'react'
import { Timeline } from "../components/ui/timeline";
import { Code, Palette, Zap, TestTube, ExternalLink } from 'lucide-react';

function Experience() {
    const data = [
        {
            title: "Uniqus Edutech Solutions",
            role : "Web Developer",
            time : "Nov 2024 - Feb 2025",
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
                                    Wrote unit and integration test cases using Jest to ensure code quality and reliability
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
            time : " Feb 2024 - Nov 2024",
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
                                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Built a fully functional website using Next.js, integrating modern practices like server-side rendering and dynamic routing.
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
                                href="https://jugaadclubuiet.wixsite.com/jugaad"
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
