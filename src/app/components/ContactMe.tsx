import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconHome,
    IconBrandDiscord,
    IconBrandGmail
} from "@tabler/icons-react";

export function ContactMe() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Gmail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "nancyg8029@gmail.com",
        },

        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Nancy0801",
        },

        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/nancy-gupta-784b5025a/",
        },

        {
            title: "Discord",
            icon: (
                <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://discord.com/invite/nancy_63892",
        },

    ];
    return (
        <div>
            <div className="w-full flex items-start justify-center my-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center drop-shadow-2xl">
                    Contact Me
                </h1>
            </div>
            <div className="flex items-center justify-center h-auto w-full my-10 z-100">
                <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                />
            </div>
        </div>
    );
}
