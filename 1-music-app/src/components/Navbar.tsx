'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"} className="text-black dark:text-white">
                    <MenuItem setActive={setActive} active={active} item="Home">Frontpage</MenuItem>
                </Link>

                <Link href={"/contact"} className="text-black dark:text-white">
                    <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                </Link>

                <MenuItem active={active} setActive={setActive} item="Courses">
                    <div className="flex flex-col space-y-2">
                        <HoveredLink href="/courses">Guitar</HoveredLink>
                        <HoveredLink href="/courses">Voilin</HoveredLink>
                        <HoveredLink href="/courses">Drums</HoveredLink>
                        <HoveredLink href="/courses">Flute</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>

        </div>
    )
}

export default Navbar