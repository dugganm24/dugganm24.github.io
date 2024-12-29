import React from 'react';
import Projects from '../../components/projects/Projects';

export default function AboutPage() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mx-auto px-12 py-4">
          <Projects />
        </div> 
      </main> 
    );
  }
  