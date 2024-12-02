// import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-black text-white">
      {/* Avatar Image */}
      <img
        src="https://preview.redd.it/73t9xcxsvkg41.jpg?auto=webp&s=237ce3fa54b3e74e5f68f41502c520d99fb2b9c5" // Replace with your image URL
        alt="Avatar"
        className="w-24 h-24 rounded-full mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Software Engineer, MERN , <br /> and JAVA.
      </h1>

      {/* Description */}
      <p className="text-sm md:text-lg max-w-2xl text-gray-400 mb-6">
        I’m Bazed Gul, a software Engineer and  based in Lahore.
        Recent Graduate in Software Engineering | University of Lahore
        Currently exploring: Java, Node.js, Angular, React, .NET, and more
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a
          href="https://twitter.com/bazedgul1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/bazedgul"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/bazedgul"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/bazedgul"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
