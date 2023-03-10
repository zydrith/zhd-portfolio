import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from "next/legacy/image";
import avatarme from "/public/avatarme.png";
import code from "/public/Logo.png";
import contactme from "/public/contactme.png";
import web1 from "/public/bobot.png";
import web2 from "/public/chatgpt.png";
import web3 from "/public/dalle.png";
import web4 from "/public/lyriks.png";
import web5 from "/public/shareme.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Zhiyad Harith Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons uppercase dark:text-white">developedbyzhd</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://drive.google.com/file/d/1RrCmzsqYkkiigvpqOlKcFuO10KLmPtod/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Zhiyad Harith</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">React Frontend Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">Hello! This is my portfolio to showcase the projects I have worked on to potential employers. Thank you for taking your time!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/zydrith" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className="hover:scale-105 transition-all ease-in-out duration-250" />
            </a>
            <a href="https://www.linkedin.com/in/zhiyadharith/" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="hover:scale-105 transition-all ease-in-out duration-250"/>
            </a>
            <a href="https://github.com/zydrith" target="_blank" rel="noreferrer">
              <AiFillGithub className="hover:scale-105 transition-all ease-in-out duration-250"/>
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={avatarme} alt="avatar" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">A little bit about myself</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">As a self-taught software enthusiast with a background in Quantity Surveying, I have been dedicated to expanding my knowledge and skills in the field of web development. Over the past three months, I have immersed myself in the study of JavaScript, React.js, HTML, and CSS, and have built several projects based on YouTube tutorials, which have allowed me to apply my newfound understanding of the fundamental components of React.js and its role in creating responsive web designs.

My passion for software engineering was sparked after working for three years as a Quantity Surveyor, and I now aspire to become a highly skilled software developer, focusing either on frontend development or full-stack expertise. I believe that continuous growth and improvement are essential in this field, and I am committed to honing my skills and expanding my knowledge to the best of my ability.

I am eager to apply my skills and expertise to real-world projects, and I am confident that my background and dedication will make me a valuable asset to any team. I look forward to the opportunity to bring my passion and experience to the table, and to make a positive impact in the field of software development.</p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} className="rounded-full" alt="code-logo"/>
              <h3 className="py-4 text-teal-600">
                Languages and frameworks I use
              </h3>
              <p className="text-gray-800 py-1 ">JavaScript</p>
              <p className="text-gray-800 py-1 ">HTML & CSS</p>
              <p className="text-gray-800 py-1 ">React JS</p>
              <p className="text-gray-800 py-1 ">Tailwind CSS</p>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={contactme} width={100} height={100} alt="contact-me"/>
              <h3 className="py-4 text-teal-600">
                Contact Me
              </h3>
              <p className="text-gray-800 py-1 ">zeeharith@gmail.com</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects I Built</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <a href="https://bobot-navy.vercel.app/" target="_blank" rel="noreferrer" > 
                <Image src={web1} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive" alt="bobot"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <a href="https://gpt3-zh.netlify.app/" target="_blank" rel="noreferrer">
                <Image src={web2} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive" alt="gpt3" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
             <a href="https://dall-e-zhd.vercel.app/" target="_blank" rel="noreferrer">
                <Image src={web3} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive" alt="dall-e"/>
             </a>
            </div>
            <div className="basis-1/3 flex-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <a href="https://lyriks-zhd.netlify.app/" target="_blank" rel="noreferrer">
                <Image src={web4} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive" alt="lyriks"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
             <a href="https://sharemezhd.netlify.app/login" target="_blank" rel="noreferrer">
                <Image src={web5} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout="responsive" alt="shareme" />
              </a> 
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

