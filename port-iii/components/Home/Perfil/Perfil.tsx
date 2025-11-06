"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';
import ParticlesPerfil from './ParticleBackground';

export const Perfil = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesPerfil/>

        <div className="relative z-10 flex flex-col items-center">
            <Image src="/images/01.jpg" alt="perfilimage" width={225} height={225} className="rounded-full border-8 border-[#0c0c48aa]" data-aos="fade-up"/>
            <h1 data-aos="fade-up" data-aos-delay="200"className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl mt-6 text-center font-bold tracking-wide">
              Criando produtos web,<br /> experiências
              <span className="text-cyan-200"> e mais!</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
              Olá! Eu sou Lucas - Apaixonado por&nbsp;
              <span className="text-cyan-200 font-bold">
                <Typewriter options={{
                  strings:[
                    "Front-end.",
                    "Back-end.",
                    "aprender."
                  ],
                  autoStart:true,
                  loop:true,
                  delay:75,
                  deleteSpeed:50,
                  wrapperClassName:"pl-2",
                }}/>
              </span>
            </h2>
            <button data-aos="fade-up" data-aos-delay="600" className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
              <span>Veja meu trabalho!</span>
              <BsArrowRight className="w-5 h-5 ml-2 inline-block"/>
            </button>
        </div>
    </div>
  )
}

export default Perfil;
