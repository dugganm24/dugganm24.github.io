"use client";

import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    tag: string[];
}



const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, tag, gitUrl }) => {
    console.log(tag);
    
    return (
        <div>
            <div 
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ 
                    backgroundImage: `url(${imgUrl})`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat" 
                }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link 
                        href={gitUrl}
                        className="h-20 w-20 mr-2 border-2 relative rounded-full border-[#BFBCBC] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-14 w-14 text-[#BFBCBC] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE2]">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;