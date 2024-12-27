"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const NavBar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setNavbarOpen(false); // Function to close the menu

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="text-xl md:text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navBarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    className={`${
                                        pathname === link.path
                                            ? "text-white underline decoration-[#00FFC8] underline-offset-8 decoration-4"
                                            : "text-[#BFBCBC]"
                                    } text-xl sm:text-2xl md:text-3xl hover:text-[#00FFC8]`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            {navBarOpen && (
                <MenuOverlay links={navLinks} closeMenu={closeMenu} />
            )}
        </nav>
    );
};

export default NavBar;