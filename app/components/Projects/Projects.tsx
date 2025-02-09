import React from 'react'
import ProjectCards from '../ProjectCards/ProjectCards';

const Projects = () => {
    const projects = [
        {
            title: 'Underwater Robot',
            description: "An underwater ROV's objectives, design, modules, challenges, and applications. It features Arduino controls, BLDC motors, and sensors for exploration and research, detailing problem analysis, assembly, testing, and real-time environmental monitoring",
            tech: 'Arduino UNO, BLDC, ESC, Li-ion Battery, Camera',
            source: {
              sourceLink: "https://drive.google.com/file/d/1R5-0Ce-D3mpUjZE_bRz1JjSkSC0m8mOy/view"
            },
            link: 'https://learnify-client-tau.vercel.app'
          },
    ];

    return (
        <section id='projects' className="flex overflow-hidden flex-col py-16 pb-20 mt-9 w-full bg-stone-900 max-md:max-w-full">
            <div className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
                <h2 className="self-start text-5xl leading-none text-zinc-300 max-md:text-4xl max-sm:text-2xl">
                    Things I&apos;ve built
                </h2>
                <div className="self-center mt-28 w-full max-w-6xl max-md:px-6 max-sm:px-1 max-md:mt-10 max-sm:mt-0 max-md:max-w-full">
                    <div className="grid grid-cols-3 gap-10 max-sm:gap-1 max-md:gap-5 max-sm:grid-cols-1 max-xl:grid-cols-2">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col max-md:ml-0 max-md:w-full hover:scale-105 duration-300">
                                <ProjectCards {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects