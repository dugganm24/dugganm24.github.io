import React from 'react';
import Contact from '../../components/contact/Contact';

export default function AboutPage() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mx-auto px-12 py-4">
          <Contact />
        </div> 
      </main> 
    );
  }