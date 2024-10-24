"use client";
import Footer from '@/components/Footer';
import { FaLocationArrow } from 'react-icons/fa6';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import MagicButton from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/spotlight';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, title: "Bakevy: A Modern Website", description: "Bakevy is a responsive bakery website built with Next.js and custom CSS. It features an intuitive layout and engaging visuals, allowing users to explore a delightful range of baked goods seamlessly. ", link: "https://bakevy-website--pi.vercel.app/", image: "/p1.jpg" },
  { id: 2, title: "Furniro: A Modern Furniture E-Commerce Website", description: "Furniro is a sleek and responsive furniture e-commerce website developed using Next.js and Tailwind CSS. With a modern UI design, it offers a seamless shopping experience, allowing users to easily browse and explore a diverse range of furniture products.", link: "https://furniro-ruby.vercel.app/", image: "/p2.jpeg" },
  { id: 3, title: "Dynamic Resume Builder", description: "The Dynamic Resume Builder is an interactive web application created using HTML, CSS, and JavaScript. This tool allows users to effortlessly create and customize their resumes in real-time.", link: "https://dynamic-resume-builder-iqraali.vercel.app/index.html", image: "/r1.jpg" },
  { id: 4, title: "Portfolio Website", description: "This Portfolio Website is a visually appealing and responsive platform showcasing my skills and projects. Built with HTML, CSS, and JavaScript, it features a clean layout and modern design, making it easy for visitors to navigate and explore my work.", link: "https://portfolio-html-bay.vercel.app/", image: "/ppp.jpg" },
  { id: 5, title: "Countdown Timer", description: "The Countdown Timer is an interactive web application developed using HTML, CSS, and JavaScript. This tool allows users to set a timer for any duration, providing a simple and effective way to track time. With its intuitive interface and responsive design, users can easily start, pause, and reset the timer.", link: "https://count-down-timer-iqraali.vercel.app/", image: "/p5.jpg" },
  { id: 6, title: "Static Resume", description: "The Static Resume is a visually appealing web application built with HTML, CSS, and JavaScript. This project presents my professional background in a clean and organized format", link: "https://static-resume-iqraali.vercel.app/", image: "/p6.jpg" },
];

const Projects = () => {
  return (
    <div className="bg-black-100 min-h-screen py-12 px-6">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-50vw' fill='blue' />
      </div>
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl lg:text-5xl font-bold text-center"
        >
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Dynamic Web Magic With Next.js
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="About My Projects"
            />
            <p className="text-center text-white-100 md:tracking-wider mb-4 text-sm md:text-2xl">
              My projects showcase my creativity and technical skills in web development and UI/UX design. Each project represents a unique challenge that I tackled using modern frameworks like Next.js and React. They not only demonstrate my abilities but also reflect my commitment to creating user-friendly experiences. Click on each project to explore the details!
            </p>
            <div className="flex justify-center">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position='right'
              />
            </div>
          </div>
        </motion.h1>
      </div>

      <h1 className="text-4xl font-bold text-center text-white mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
