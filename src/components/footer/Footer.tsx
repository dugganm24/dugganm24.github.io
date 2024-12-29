import React from "react";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const Footer = () => {
    const currentYear: number = new Date().getFullYear(); // Get the current year

    return (
        <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container flex justify-center items-center mt-4">
                <p className="text-[#BFBCBC] text-lg">
                    &copy; {currentYear} Michael Duggan. All rights reserved.
                </p>
            </div>
            <div className="container flex justify-center items-center mb-4">
                <Link href="https://github.com/dugganm24">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/mpduggan/">
                    <Image src={LinkedinIcon} alt="Github Icon" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer;