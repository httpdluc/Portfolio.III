import React from 'react'
import BlogCard1 from './BlogCards/BlogCard1';
import BlogCard2 from './BlogCards/BlogCard2';
import BlogCard3 from './BlogCards/BlogCard3';

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className= "text-center text-2lx mb:text-3xl xl:text-4xl font-bold text-white">
            Minha
            <span className="text-cyan-300"> Jornada</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <BlogCard1 image="/images/java1.jpg" title="Focado em expandir minhas habilidades em back-end com Java, aplicando boas práticas e aprimorando o desenvolvimento de aplicações robustas."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <BlogCard2 image="/images/react2.jpg" title="Aprofundando meus conhecimentos em React, desenvolvendo interfaces modernas, responsivas e aplicações web dinâmicas e escaláveis."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <BlogCard3 image="/images/logica3.jpg" title="Aprimorando minhas habilidades em lógica de programação e algoritmos, aplicando técnicas de estruturação e otimização para resolver problemas com eficiência."/>
            </div>
        </div>
    </div>
  )
}

export default Blog