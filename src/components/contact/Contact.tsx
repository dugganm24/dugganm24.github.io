"use client";

import React from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    return (
        <section className="grid md:grid-cols-2 py-8 gap-4">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4 text-left">
                    Let's Connect
                </h2>
                <p className="text-[#BFBCBC] mb-4 max-w-md">
                    {" "}
                    As an upcoming new college grad, I’m currently looking for entry-level software engineering positions. My inbox is always open, don’t hesitate to reach out.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/dugganm24">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/mpduggan/">
                        <Image src={LinkedinIcon} alt="Github Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col">
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="text-white block mb-2 text-md font-semibold"
                        >
                            Your email
                        </label>
                    <input 
                            type="email" 
                            id="email" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="michael@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="subject" 
                            className="text-white block mb-2 text-md font-semibold"
                        >
                            Subject
                        </label>
                        <input 
                            type="text" 
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label  
                            htmlFor="message"
                            className="text-white block mb-2 text-md font-semibold"
                        >
                            Message
                        </label>
                        <textarea 
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#00FFC8] bg-opacity-80 hover:scale-105 text-white fond-medium py-2.5 px-5 rounded-lg w-full"
                    >
                            Send Message
                        </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
