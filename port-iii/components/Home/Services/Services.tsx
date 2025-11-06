import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-2lx mb:text-3xl xl:text-4xl font-bold text-white">
            Desenvolvendo soluções completas, <br/> colaborando com equipes de tecnologia <br/> para gerar resultados eficientes e impactantes.
        </h1>
        <div className="w-[50%] sm:w-[-50%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-20 items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard icon="/images/front.png" name="Front-end" description="Aprendendo a desenvolver aplicações web e mobile que unem design, performance e usabilidade, criando soluções completas e escaláveis que geram valor para usuários e empresas."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServiceCard icon="/images/back.png" name="Back-End" description="Aprendendo a desenvolver soluções backend eficientes e escaláveis, focadas em desempenho e funcionalidade para gerar valor real aos sistemas e usuários."/>
            </div>
        </div>
    </div>
  )
}

export default Services