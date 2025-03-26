import React from 'react';

const Skills = () => {


    const skills = [
        { name: "React.js", description: "Experienced in React.js, having worked on multiple projects, building scalable and dynamic UIs." },
        { name: "Kotlin Multiplatform", description: "Currently exploring Kotlin Multiplatform, working on a small project to gain hands-on experience." },
        { name: "Tailwind CSS", description: "Proficient in Tailwind CSS, implementing it in all projects to create responsive and modern designs." },
        { name: "GSAP & Animations", description: "Skilled in GSAP and Locomotive Scroll, creating smooth animations and immersive scrolling effects." },
        { name: "Next.js", description: "Learning Next.js to enhance future projects with server-side rendering and better performance optimizations." },
        { name: "Node.js & Databases", description: "Well-versed in Node.js, with experience using MongoDB and PostgreSQL for scalable backend solutions." },
        { name: "AI/ML & LLMs", description: "Hands-on experience with Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), building predictive and classification models using neural networks." },
        { name: "Photography & Video Editing", description: "Experienced in photography and video editing, creating marketing materials, logos, and promotional content." }
    ];
    
    return (
        <div className="min-h-screen text-white flex flex-col justify-center items-center fahkwang my-10">

            {/* Title with Borders */}
            <div className="flex items-center w-3/4 max-w-xl">
                <div className="flex-1 border-t border-gray-400"></div>
                <h2 className="px-4 text-lg md:text-2xl font-bold text-gray-300 uppercase tracking-wider">
                    Skills
                </h2>
                <div className="flex-1 border-t border-gray-400"></div>
            </div>

            {/* Skills List (Example, can be extended) */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {
                    skills.map((sk)=>(
                        <div key={sk.name} className="md:p-4 p-2 border border-gray-200 bg-gray-950 rounded-lg shadow-md">
                            <h3 className="text-base text-center md:text-xl font-bold md:h-40 h-28 flex justify-center items-center bg-black rounded-md">{sk.name}</h3>
                            <p className="mt-4 text-[12px] md:text-base text-gray-600">{sk.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;
