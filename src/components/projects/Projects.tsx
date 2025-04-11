"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "AI-Powered 3D Facial Generator for Robotic Interface",
        description: "Developing a facial generator for a robotic interface using Audio2Face and Unreal Engine to create realistic, speech-synced animations, with real-time interaction enabled through the Audio2Face API.",
        image: "/images/MQP.jpg",
        tag: ["All", "AI"],
        gitUrl: "https://github.com/dugganm24/MQP",
    },
    {
        id: 2,
        title: "WPI Course Tracker",
        description: "Full-stack application for WPI students to track their courses and degree progress using AWS resources to develop a JavaScript backend, with a React frontend hosted on AWS allowing users to interact with the site through REST API calls.",
        image: "/images/course_tracker.jpeg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dugganm24/WPI-Course-Tracker",
    },
    {
        id: 3,
        title: "MSP430 Oscilloscope",
        description: "Designed and implemented a feature-rich oscilloscope on an MSP430 microcontroller, including PWM generation, ADC conversion, and real time signal display with scalable voltage and time divisions through the implementation of RTOS functionality.",
        image: "/images/oscilloscope.png",
        tag: ["All", "Embedded"],
        gitUrl: "https://github.com/dugganm24/MSP430-Oscilloscope",
    },
    {
        id: 4,
        title: "Syllablast",
        description: "Implemented a React syllablast game with three 4x4 configurations where users swap the locations of two syllables to reveal four completed words, maximizing the score by completing all words in the configuration.",
        image: "/images/syllablast.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dugganm24/Syllablast",
    },
    {
        id: 5,
        title: "MSP430 Guitar Hero",
        description: "Designed a Guitar Hero game on an MSP430 microcontroller using buttons as user inputs and a PWM buzzer to play a song, where user input was scored based on a timer and accuracy of button presses.",
        image: "/images/guitar_hero.png",
        tag: ["All", "Embedded"],
        gitUrl: "https://github.com/dugganm24/Guitar-Hero",
    },
    {
        id: 6,
        title: "Auction House",
        description: "Full-stack online auction house application using AWS resources to develop a JavaScript backend, with a React frontend hosted on AWS allowing users to interact with the site through REST API calls.",
        image: "/images/auction_house.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/apblanchard4/auction-house",
    },

]

const Projects = () => {
    const [tag, setTag] = useState("All");
    
    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-8">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-0.5 sm:gap-2 px-2 py-2 mb-6 md:mb-8">
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="All" 
                    isSelected={tag === "All"} 
                />  
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="AI" 
                    isSelected={tag === "AI"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="Embedded" 
                    isSelected={tag === "Embedded"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    tag="Web" 
                    isSelected={tag === "Web"} 
                /> 
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filteredProjects.map((project)=> (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description ={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        tag={project.tag}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects;