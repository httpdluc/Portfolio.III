import React from 'react'
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className= "text-center text-2lx mb:text-3xl xl:text-4xl font-bold text-white">
            Meus pequenos
            <span className="text-cyan-300"> projetos</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 mg:grid-cols-2 gap-10 mt-16">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <Image src="/images/projeto1.png" alt="img" width={600} height={450} className="rounded-lg"/>
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Um e-commerce</h1>
                <h1 className="pt-2 font-medium text-white/80">Web - JavaScipt | React | Java | Spring Boot</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects