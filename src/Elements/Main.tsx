import React from 'react';

const Main = () => {
  const aboutMe = [
    "Hey, I'm Taral Patel from Valsad, Gujarat! 🚀",
    "Completed my Bachelor's in Computer Science & Engineering from SVNIT 🎓",
    "Passionate about Web Development, AI, and building cool tech stuff! 💻",
    "Currently working on projects in Next.js, Tailwind, and node.js",
    "Love photography 📸, video editing 🎥, and exploring new tech trends! ✨",
    "Big fan of aesthetics, Glassmorphism, and minimal design! 🎨",
    "On a journey to grow, learn, and build the future! 🌍🚀",
  ];

  return (
    <div className=" min-h-screen text-white flex justify-center items-center fahkwang relative  z-0">
      <div className="w-[90%] max-w-6xl flex flex-col md:flex-row md:justify-between justify-center items-center gap-12">
        

        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight animate-gradient">
            <span className="bg-gradient-to-r from-gray-400 via-blue-200 to-cyan-300 text-transparent bg-clip-text">
              You are entering...
            </span>
          </h1>
          <h2 className="text-2xl md:text-5xl font-extrabold leading-tight mt-2 animate-gradient">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-200 to-gray-400 text-transparent bg-clip-text">
              Into the Cool Zone Now!
            </span>
          </h2>
        </div>


        <div className="border border-gray-700 p-6 rounded-lg shadow-lg bg-gray-900/50 backdrop-blur-md max-w-xl">
          <h3 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-200 to-gray-400 text-transparent bg-clip-text">
            Who am I...?
          </h3>
          <ul className="mt-4 space-y-3 list-none">
            {aboutMe.map((info, index) => (
              <li key={index} className="text-gray-300 text-sm md:text-lg hover:text-cyan-300 transition-all duration-300">
                ➤ {info}
              </li>
            ))}
          </ul>
        </div>
      </div>

   
      <div className="absolute top-4 left-6 text-gray-500 text-sm">
        © 2025 Taral Dev
      </div>

     
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient span {
            background-size: 200% 200%;
            animation: gradientShift 3s infinite linear;
          }
        `}
      </style>
    </div>
  );
};

export default Main;
