"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import MagicButton from '@/components/ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="bg-black-100 min-h-screen">
      {/* Hero Section */}
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
                    Dynamic Web Magic With Next.js</h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Iqra Ali - Web Developer & UI/UX Designer"
          />
          <p className="text-center text-white-100 md:tracking-wider mb-4 text-sm md:text-2xl">
                       I&apos;m a passionate web developer and UI/UX designer with a focus on creating user-centered experiences, utilizing technologies like Next.js and React. They blend front-end design with back-end functionality to create dynamic, user-friendly experiences. Proficient in HTML, CSS, and JavaScript, they ensure websites are responsive and perform optimally. By staying updated with industry trends, they enhance user engagement and streamline digital interactions, making them essential in the tech landscape.
                    </p>
          <div className="flex justify-center"> {/* Centering div for Magic Button */}
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position='right'
            />
            </div>
          </div>
        </motion.h1>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between py-8 px-6 lg:px-24 mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 space-y-6 mt-8"
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="text-lg text-white">
            I&apos;m a passionate web developer with a focus on creating intuitive and engaging user experiences. With expertise in JavaScript, TypeScript, and modern frameworks like Next.js, I strive to make the web a better place.
          </p>
          <p className="text-lg text-white">
            When I&apos;m not coding, I love exploring new places and enhancing my design skills to bring unique solutions to life.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/3 mt-8 lg:mt-0"
        >
          <Image
            src="/dp.jpg"
            alt="Iqra Ali"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="bg-black-100 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">My Skills</h2>
        </div>
        <div className="flex justify-center space-x-8">
          {['JavaScript', 'Next.js', 'UI/UX Design'].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center p-4 shadow-md rounded-lg"
            >
              <p className="text-2xl text-white font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="py-12 px-6 bg-black-100">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          My Interests
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="bg-black-200  p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Travel
            </h3>
            <p className="text-white font-semibold">
              I love exploring new cultures and places. Traveling gives me fresh perspectives that I bring into my designs.
            </p>
          </div>
          <div className="bg-black-200 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Design
            </h3>
            <p className="text-white font-semibold">
              I constantly enhance my design skills and love experimenting with new ideas in UI/UX.
            </p>
          </div>
          <div className="bg-black-200 p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Coding
            </h3>
            <p className="text-white font-semibold">
              Coding is not just my profession, it &apos;s my passion. Creating something from scratch is what I enjoy the most.
            </p>
          </div>
        </motion.div>
      </div>
<Footer/>
    </div>
  );
};

export default About;
