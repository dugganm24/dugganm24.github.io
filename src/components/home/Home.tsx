"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <section className="pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-5 place-self-center mb-4 lg:mb-0">
                <div className="rounded-full bg-[#00FFC8] w-[250px] h-[250px] lg:w-[325px] lg:h-[325px] relative"
                        style={{ border: '1vw solid #00FFC8' }}> 
                        <Image 
                            src="/images/michael.png"
                            alt="Michael Duggan"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            width={300}
                            height={300}
                        />
                    </div>                  
                </div> 
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-[#00FFC8]">Hello, I'm</span>
                        <br />
                        Michael Duggan
                    </h1>
                    <p className="text-[#BFBCBC] text-base sm:text-lg lg:text-xl mb-6">
                        As a skilled developer with full-stack, embedded, and AI development experience, I’m passionate about making a meaningful impact in a new college grad position. Explore my latest projects to see how my skills and dedication can contribute to your team’s success.
                    </p>
                    <div>
                        <Link href="https://drive.google.com/file/d/1gN9-zqSw2XzPstFIb0ASKmMwsedTZfFr/view?usp=sharing">
                            <button className="px-10 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#00FFC8] bg-opacity-80 hover:scale-105 transform transition-all duration-200">Resume</button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-10 py-3 w-full sm:w-fit rounded-full bg-transparent text-white border-4 border-[#00FFC8] mt-3 hover:scale-105 transform transition-all duration-200">Contact</button>
                        </Link>
                    </div>
                </div>               
            </div>           
        </section>
    );
}

export default Home;