import { Animation1 } from '@/animations/Anime1';
import React from 'react';

const Loading = () => {

    Animation1()
  return (
    <div className="relative text-white min-h-screen flex justify-center items-center fahkwang">
      {/* 🌟 Background Video */}
      {/* <video
       className="absolute top-0 left-0 w-full h-full object-cover z-10"
       src="/videos/1449846-hd_1906_1080_28fps.mp4"  // ✅ Correct Path
       autoPlay
       loop
       muted
       playsInline
        
      /> */}

      {/* 🌟 Content */}
      <div className="w-[90%] max-w-6xl flex flex-col justify-center items-center gap-10 z-10">

        <div className="text-2xl md:text-4xl font-extrabold text-white leading-tight Supercharge1 ">
          <span className="relative font-bold text-transparent bg-gradient-to-r from-gray-400 via-blue-200 to-cyan-300 bg-clip-text element1">
            You are entering...
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-200 to-gray-400 text-transparent bg-clip-text element1">
            into the cool zone now!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
