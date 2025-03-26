import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen  text-white flex flex-col justify-center items-center px-6 fahkwang">
      {/* Section Title */}
      <div className="flex items-center w-3/4 max-w-xl mb-8">
        <div className="flex-1 border-t border-gray-600"></div>
        <h2 className="px-4 text-lg md:text-2xl font-bold text-gray-300 uppercase tracking-wider">
          Contact Me
        </h2>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="space-y-4">
          <div className="flex flex-col items-center text-center justify-center">
            <div className="text-xl font-semibold text-gray-300 w-24">
              Email
            </div>
            <div className="text-lg text-gray-400">
              pateltara161@gmail.com
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <div className="text-xl font-semibold text-gray-300 w-24">
              Phone
            </div>
            <div className="text-lg text-gray-400">+91 94278 60134</div>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <div className="text-xl font-semibold text-gray-300 w-24">
              Address
            </div>
            <div className="text-lg text-gray-400">
              Dharampur, Valsad, Gujarat, India
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-6">
        <a
          href="https://www.instagram.com/taral_001?igsh=dGswMTN5cnp6dTBm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition duration-300 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/taralkumar-patel-a3687723b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="http://github.com/tunnu005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
