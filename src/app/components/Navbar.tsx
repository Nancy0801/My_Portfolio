"use client"
import React , {useState} from 'react'
import { motion } from "framer-motion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from 'next/link';   
import { div } from 'framer-motion/client';

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    
                    </MenuItem>
                </Link>
                <Link href={"/Experience"}>
                    <MenuItem setActive={setActive} active={active} item="Experience">
                    
                    </MenuItem>
                </Link>
                <Link href={"/Projects"}>
                    <MenuItem setActive={setActive} active={active} item="Projects">
                    
                    </MenuItem>
                </Link>
                {/* <MenuItem setActive={setActive}
                active={active} 
                item="Projects"  
                className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">All Courses </HoveredLink>
                    <HoveredLink href="/courses">Basic Music Theory </HoveredLink>
                    <HoveredLink href="/courses">Advanced Composition </HoveredLink>
                    <HoveredLink href="/courses">Songwriting </HoveredLink>
                    <HoveredLink href="/courses">Music Production </HoveredLink>
                </MenuItem> */}

                <Link href={"/skills"}>
                    <MenuItem setActive={setActive}
                    active={active} 
                    item="Skills"  
                    className="flex flex-col space-y-4 text-sm">
                       
                    </MenuItem>
                </Link>
                <Link href={"/Highlights"}>
                    <MenuItem setActive={setActive}
                    active={active} 
                    item="Highlights"  
                    className="flex flex-col space-y-4 text-sm">
                       
                    </MenuItem>
                </Link>
                <Link href={"/ContactMe"}>
                    <MenuItem setActive={setActive}
                    active={active} 
                    item="Contact Me"  
                    className="flex flex-col space-y-4 text-sm">
                       
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
