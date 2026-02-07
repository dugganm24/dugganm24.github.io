"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import SiliconLabsIcon from "../../../public/silabs-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    const [form, setForm] = useState({ email: "", subject: "", message: "" });
    const [status, setStatus] = useState(""); // Feedback message

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send(
                "service_5eatuy9", // Service ID
                "template_2b3b627", // Template ID
                {
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                "1k4I5tqEcGLPeHav9" // Public Key
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setForm({ email: "", subject: "", message: "" }); // Reset form
                },
                (error) => {
                    console.error("Failed to send message:", error);
                    setStatus("Failed to send message. Please try again.");
                }
            );
    };

    useEffect(() => {
        if (status) {
            const timeout = setTimeout(() => setStatus(""), 5000);
            return () => clearTimeout(timeout); // Cleanup timeout
        }
    }, [status]);

    return (
        <section className="grid md:grid-cols-2 py-4 gap-4">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4 text-left">
                    Let&#39;s Connect
                </h2>
                <p className="text-[#BFBCBC] mb-4 max-w-md">
                    I recently graduated and am currently working as a Software Engineer on the Matter team at Silicon Labs. I&#39;m always open to connecting and exploring new opportunities in software engineering or product management. Feel free to reach out anytime - my inbox is always open!
                </p>
                <div className="socials flex flex-row gap-2 items-center">
                   <Link href="https://github.com/dugganm24">
                        <Image className="hover:opacity-80" src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/mpduggan/">
                        <Image className="hover:opacity-80" src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link> 
                    <Link href="https://github.com/miduggan24/">
                        <Image className="hover:opacity-80" src={SiliconLabsIcon} alt="Silabs Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
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
                            value={form.email}
                            onChange={handleChange}
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
                            value={form.subject}
                            onChange={handleChange}
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
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#00FFC8] bg-opacity-80 hover:bg-opacity-60 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
                   
               {status && (
                <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mt-4 p-4 rounded-lg text-center ${
                            status === "Sending..."
                                ? "bg-gray-500 text-white"
                                : status === "Message sent successfully!"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                        }`}
                    >
                        <span>{status}</span>
                    </motion.div> 
                )}
            </div>
        </section>
    );
};

export default Contact;
