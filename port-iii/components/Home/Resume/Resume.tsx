import React from 'react';
import ResumeCardWork1 from './Work/ResumeCardWork1';
import ResumeCardWork2 from './Work/ResumeCardWork2';
import ResumeCardStudy1 from './Study/ResumeCardStudy1';

import { FaCodepen, FaGraduationCap, FaReact } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div> 
              <h1 className="text-center text-2lx mb:text-3xl xl:text-4xl font-bold text-white">
                Meus <span className="text-cyan-200">Trabalhos</span>
              </h1>
              <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <ResumeCardWork1 Icon={FaReact} role="Programador Front-End"/>
                <ResumeCardWork2 Icon={FaReact} role="Programador Front-End"/>
              </div>
            </div>
            <div>
              <h1 className="text-center text-2lx mb:text-3xl xl:text-4xl font-bold text-white">
                Meus <span className="text-cyan-200">Cursos</span>
              </h1>
              <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ResumeCardStudy1 Icon={FaGraduationCap} role="Análise de Desenvolvimento de Sistemas" date="Jul de 2021 - Dez de 2023"/>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Resume