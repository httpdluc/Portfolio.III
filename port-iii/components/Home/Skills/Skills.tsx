"use client";
import React from 'react'
import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiSpringboot, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const skills =[
    {
        name:"javaScript",
        icon: <SiJavascript/>,
        percentage: 63,
    },
    {
        name:"React.js",
        icon: <SiReact/>,
        percentage: 57,
    },
    {
        name:"Next.js",
        icon: <SiNextdotjs/>,
        percentage: 49,
    },
    {
        name:"Node.js",
        icon: <SiNodedotjs/>,
        percentage: 52,
    },
    {
        name:"Tailwind CSS",
        icon: <SiTailwindcss/>,
        percentage: 25,
    },
    {
        name:"TypeScript",
        icon: <SiTypescript/>,
        percentage: 32,
    },
    {
        name:"Java",
        icon: <FaJava/>,
        percentage: 25,
    },
    {
        name:"SpringBoot",
        icon: <SiSpringboot/>,
        percentage: 23,
    },
    {
        name:"SQL",
        icon: <SiMysql/>,
        percentage: 45,
    },
]

const Skills = () => {
  return (
    <div className=" text-white pt-16 pb-16">
        <h1 className="text-center text-2lx mb:text-3xl xl:text-4xl font-bold text-white">
            Minhas <span className="text-cyan-300">Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map((skill,i) =>{
                return(
                    <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                        <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i*100} className="gb-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                            <div className="text-5xl mb-4 text-gray-300">
                                {skill.icon}
                            </div>
                            <p className="text-2xl font-semibold">{skill.percentage}%</p>
                            <p className="text-purple-400 mt-1">{skill.name}</p>
                        </div>
                    </Tilt>
                )
            })}
        </div>
    </div>
  )
}

export default Skills;