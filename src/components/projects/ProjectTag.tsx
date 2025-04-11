import React from 'react';

interface ProjectTagProps {
    onClick: (newTag: string) => void;
    isSelected: boolean;
    tag: string;
}


const ProjectTag: React.FC<ProjectTagProps> = ({ tag, onClick, isSelected }) => {
    const buttonStyles = isSelected
    ? "text-white border-[#00FFC8] hover:scale-105"
    : "text-[#BFBCBC] border-slate-600 hover:scale-105 hover:text-white";
    return (
        <button className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-xl cursor-pointer`}
                onClick={() => onClick(tag)}
        >
            {tag}
        </button>
    )
}

export default ProjectTag;