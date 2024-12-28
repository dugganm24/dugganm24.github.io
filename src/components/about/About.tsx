"use client";

import React from 'react';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc pl-4">
                <li className="pb-1">C</li>
                <li className="pb-1">Python</li>
                <li className="pb-1">TypeScript</li>
                <li className="pb-1">JavaScript</li>
                <li className="pb-1">SQL</li>
                <li className="pb-1">HTML/CSS</li>
            </ul>
        )
    },
    {
        title: "Tools",
        id: "tools",
        content: (
            <ul className="list-disc pl-4">
                <li className="pb-1">AWS</li>
                <li className="pb-1">Linux</li>
                <li className="pb-1">Git</li>
                <li className="pb-1">Database Structures</li>
                <li className="pb-1">Algorithms</li>
                <li className="pb-1">Figma</li>
            </ul>
        )
    },
    {
        title: "AI/ML",
        id: "ai_ml",
        content: (
            <ul className="list-disc pl-4">
                <li className="pb-1">Deep Learning</li>
                <li className="pb-1">Neural Networks</li>
                <li className="pb-1">Computer Vision</li>
                <li className="pb-1">Reinforcement Learning</li>
                <li className="pb-1">PyTorch</li>
                <li className="pb-1">GAN</li>
            </ul>
        )
    }
];

const About = () => {  
    const [tab, setTab] = useState('languages');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> {/* Increased gap */}
                {/* About Me section */}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <p className="text-base md:text-lg mb-4">
                            Hi, I’m <span className="text-[#00FFC8] font-semibold">Michael Duggan</span>, a senior at Worcester Polytechnic Institute (WPI) pursuing a B.S. in Electrical and Computer Engineering and a Master of Computer Science. With experience in embedded systems, full-stack development, and AI, I’m passionate about creating innovative solutions that deliver practical impact in collaborative team environments.
                        </p>
                        <p className="text-base md:text-lg mb-4">
                            My passion lies in solving meaningful problems and creating impactful experiences for end users. I thrive in collaborative environments where creativity and technical expertise come together to make complex ideas a reality.
                        </p>
                        <p className="text-base md:text-lg">
                            As an entry-level software engineer, I will bring a commitment to quality, adaptability, and continuous learning. I am excited to contribute my skills and passion to new opportunities and help create solutions that innovate and deliver value.
                        </p>
                    </div>
                </div>

                {/* Skills section */}
                <div className="mt-8 md:mt-0 text-left flex flex-col h-full md:ml-32"> 
                    <h2 className="text-4xl font-bold text-white">
                        Skills
                    </h2>
                    <div className="flex flex-row justify-start mt-4">
                        <TabButton selectTab={() => handleTabChange('languages')} active={tab === 'languages'}>
                            {" "}
                            Languages{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('tools')} active={tab === 'tools'}>
                            {" "}
                            Tools{" "}                        
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('ai_ml')} active={tab === 'ai_ml'}>
                            {" "}
                            AI/ML{" "}                       
                        </TabButton>
                    </div>
                    <div className="mt-4">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Experience
                </h2>
            </div>
            <div className="flex justify-center mt-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Education
                </h2>
            </div>
        </section>
    ) 
}

export default About;