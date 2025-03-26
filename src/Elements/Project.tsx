import React from "react";

const Projects = [
    {
        title: "Portfolio",
        description: "A personal portfolio website built using Next.js and Tailwind CSS. It showcases my skills, projects, and experiences in a sleek and modern UI.",
        url: "https://github.com/taral-patel/portfolio",
        techstack: ["Next.js", "Tailwind CSS", "ShadCN/UI"],
        image: "/images/image_1_2_1740813949.png",
    },
    {
        title: "Ekankotri",
        description: "An innovative platform that allows users to create digital invitation cards in the form of a website. Users can share invitations via a link or QR code for seamless distribution.",
        url: "https://github.com/taral-patel/glassmorphism-demo",
        techstack: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Redis", "Express.js", "Tailwind CSS", "GSAP & Locomotive Scroll"],
        image: "/images/image_1_1_1741808878.png",
    },
    {
        title: "Buzzy Media",
        description: "A feature-rich social media web application where users can post, chat, and interact with others. This project introduces a unique feed-filtering system, allowing users to focus on specific content. Additionally, it integrates a gaming feature that syncs with my e-commerce project, offering discounts based on earned points.",
        url: "https://github.com/taral-patel/glassmorphism-animation",
        techstack: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Redis", "Express.js", "Tailwind CSS"],
        image: "/images/image_1_2_1741189630.png",
    },
    {
        title: "E-Commerce Platform",
        description: "A customizable theme-based e-commerce platform that allows sellers to create personalized online stores. It also enables users to purchase exclusive local store items online, with limited availability or additional costs.",
        url: "https://github.com/taral-patel/e-commerce",
        techstack: ["Next.js", "Node.js", "MongoDB", "PostgreSQL", "Redis", "Express.js", "Tailwind CSS"],
        image: "/images/image_1_3_1741839345.png",
    },
    {
        title: "DoCSE Guide",
        description: "A chatbot-driven assistant and website designed to help Computer Science students access important departmental information. Features include professor schedules, room allocations, and general CSE department details. Built with React.js and FastAPI, leveraging Gemini AI and Pinecone vector databases.",
        url: "https://github.com/taral-patel/chat-app",
        techstack: ["React.js", "FastAPI", "Pinecone", "Gemini AI", "Node.js"],
        image: "/images/image_1_4_1741839390.png",
    }
];

const Project = () => {
    return (
        <div className="min-h-screen text-white flex flex-col justify-center items-center p-4 fahkwang">
            <div className="flex items-center w-3/4 max-w-xl mb-8">
                <div className="flex-1 border-t border-gray-400"></div>
                <h2 className="px-4 text-lg md:text-2xl font-bold text-gray-300 uppercase tracking-wider">
                    Projects
                </h2>
                <div className="flex-1 border-t border-gray-400"></div>
            </div>
            <div className="relative w-full max-w-5xl">
                {Projects.map((prj, idx) => (
                    <div key={idx} className={`flex items-center my-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-1/2 p-4 ${idx % 2 === 0 ? '' : 'text-right'}`}>
                            <h3 className="text-lg md:text-xl font-bold text-gray-300">{prj.title}</h3>
                            <p className="text-gray-400 my-2 text-xs md:text-base ">{prj.description}</p>
                            <div className={`flex flex-wrap  gap-2 ${idx % 2 === 0 ? '' : 'justify-end'}`}>
                                {prj.techstack.map((tech, i) => (
                                    <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={prj.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-cyan-300 hover:underline">
                                View Project →
                            </a>
                        </div>
                      
                    </div>
                ))}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-600 transform -translate-x-1/2"></div>
            </div>
        </div>
    );
};

export default Project;
