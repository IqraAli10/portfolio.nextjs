"use client";
import React from 'react';
import Footer from '@/components/Footer';
import { Spotlight } from '@/components/ui/spotlight';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="bg-black-100 min-h-screen flex flex-col justify-between  p-12 sm:p-32 md:p-36 ">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-50vw' fill='blue' />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start py-12 px-6 gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-6xl text-white mb-4">Let&apos;s Talk</h1>
          <p className="text-white mb-4">  I&apos;m here to discuss your next project! Reach out to me, and let&apos;s create something amazing together.</p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <Link href="https://github.com/IqraAli10" className="text-white">
              <FaGithub />
            </Link>
            <Link href="#" className="text-white">
              <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/iqra-ali-178531254/" className="text-white">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <form className="bg-gray-800 p-6 rounded">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 rounded"
              required
            />
            <textarea
              className="w-full p-2 mb-4 rounded"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
