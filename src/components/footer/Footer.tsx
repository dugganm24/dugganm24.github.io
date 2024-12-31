import React from "react";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const Footer = () => {
    const currentYear: number = new Date().getFullYear(); // Get the current year

    return (
        <footer className="footer border-t border-t-[#33353F] text-white py-4">
            {/* First Row */}
            <div className="flex justify-center items-center">
                <p className="text-[#BFBCBC] text-lg">
                    &copy; {currentYear} Michael Duggan. All rights reserved.
                </p>
            </div>

            {/* Second Row */}
            <div className="flex justify-center items-center gap-2 mt-2">
                <Link href="https://github.com/dugganm24" aria-label="GitHub Profile">
                    <Image 
                        src={GithubIcon} 
                        alt="GitHub Icon" 
                        className="hover:opacity-80 transition-opacity"
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/mpduggan/" aria-label="LinkedIn Profile">
                    <Image 
                        src={LinkedinIcon} 
                        alt="LinkedIn Icon" 
                        className="hover:opacity-80 transition-opacity"
                    />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;