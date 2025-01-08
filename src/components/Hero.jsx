import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import "../Css/Hero.css";

const Hero = () => {
  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* stars */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Hi👋, I'm <p className="text-blue-400">ALI HASSAN</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            Full-Stack WEB || Android Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >
            Hello! I'm Ali Hassan, a skilled Flutter and Full Stack Developer
            with over 3 years of experience in creating high-quality mobile
            apps. I specialize in converting Figma designs to responsive Flutter
            code and integrating APIs seamlessly. Proficient in both Flutter for
            front-end and ASP NET for back-end development, I ensure robust and
            scalable app architecture. With a keen eye for detail and a passion
            for intuitive user experiences, I transform your app ideas into
            reality. My services include converting Figma designs to Flutter
            code, integrating APIs, and full stack development.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] "
          >
            <a
              href="https://drive.google.com/file/u/1/d/10ubUditA1h5iO9qpPsK3INZj_wvf0IOv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </motion.button>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <FaFacebook className="hover:text-blue-400" />
            <FaInstagram className="hover:text-blue-400" />
            <FaLinkedin className="hover:text-blue-400" />
            <FaSquareXTwitter className="hover:text-blue-400" />
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt=""
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
