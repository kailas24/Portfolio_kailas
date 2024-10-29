import React from 'react'
import ProjectCards from '../ProjectCards/ProjectCards';

const Projects = () => {
    const projects = [
        {
            title: 'Learnify',
            description: 'Learnify is a dynamic Learning Management System that allows users to create, sell, and enroll in courses. With top-notch authentication for secure access and interactive features to enhance learning, it offers a seamless, engaging experience for both instructors and learners.',
            tech: 'Typescript, Nextjs, Nodejs, Express, MongoDB, Redis, Stripe, Sockei.io, Redux, Cloudinary, Tailwind, NodeMailer',
            source: {
              frontend: 'https://github.com/GayalMelappilly/LMS-Frontend.git',
              backend: 'https://github.com/GayalMelappilly/LMS-Backend.git'
            },
            link: 'https://learnify-client-tau.vercel.app'
          },
          {
            title: 'Connect',
            description: 'A real-time chat application built with the MERN stack, offering secure Gmail authentication, real-time messaging, friend requests, online status indicators, and customizable themes. It provides a seamless and responsive chatting experience across all devices.',
            tech: 'Reactjs, Nodejs, Express, MongoDB, Socket.io, Tailwind, NodeMailer',
            source: {
              frontend: 'https://github.com/GayalMelappilly/Connect-app-frontend.git',
              backend: 'https://github.com/GayalMelappilly/Connect-app-backend.git'
            },
            link: 'https://connect-app-ykav.onrender.com'
          },
          {
            title: 'Weather App',
            description: 'A Live Weather Forecast Web App delivers real-time global weather updates with geolocation, a 7-day forecast, and dynamic icons. It offers responsive design, light/dark modes, and detailed current weather data for an engaging user experience across devices.',
            tech: 'Reactjs, OpenWeather API, Geolocation, Chartjs, Tailwind',
            source: {
              sourceLink: 'https://github.com/GayalMelappilly/Weather-app-intern.git',
            },
            link: 'https://gayalmelappilly.github.io/Weather-app-intern/'
          },
          {
            title: 'OLX Clone',
            description: 'A cloned version of OLX enables seamless buying and selling of products with secure user authentication, utilizing Firebase as its database. This setup ensures efficient data management and real-time updates, providing a reliable platform for users to create and manage product listings.',
            tech: 'Reactjs, Firebase, CSS',
            source: {
              sourceLink: 'https://github.com/GayalMelappilly/OLX-Clone.git'
            },
            link: 'https://olx-clone-seven-tau.vercel.app'
          },
          {
            title: 'Netflix Clone',
            description: 'The Netflix Clone is a web application built with React.js that uses TheMovieDB API for content data, Axios for API requests, and CSS for styling, allowing users to browse and stream movies and TV shows seamlessly.',
            tech: 'Reactjs, TheMovieDB API, Axios, CSS',
            source: {
              sourceLink: 'https://github.com/GayalMelappilly/Netflix-Clone.git'
            },
            link: 'https://netflix-clone-seven-wine.vercel.app'
          },
          {
            title: 'E-Commerce Application',
            description: 'Simple full stacked based e-commerce application',
            tech: 'Nodejs, Handlebars, MongoDB, NodeMailer, Bcrypt, Boostrap, Ajax',
            source: {
              sourceLink: 'https://github.com/GayalMelappilly/eCommerce.git'
            },
            link: 'https://connect-app-ykav.onrender.com'
          },
          {
            title: 'IP Address Tracker',
            description: 'A responsive web app that tracks IP address locations using the IP Geolocation API by IPify. It features an interactive LeafletJS map displaying user and searched IP locations. The design adapts to all devices, supports domain lookups, and highlights hover states for an engaging user experience.',
            tech: 'Javascript, LeafletJS, OpenStreetMap API, IP Geolocation API, Ajax, Bootstrap',
            source: {
              sourceLink: 'https://github.com/GayalMelappilly/ip-address-tracker'
            },
            link: 'https://ip-address-tracker-six-kohl.vercel.app'
          },
          {
            title: 'Digital Diary',
            description: 'A online diary application for diary writers',
            tech: 'Nodejs, Express, Handlebars, Bootstrap',
            source: {
              sourceLink: 'https://github.com/GayalMelappilly/DIGITAL-DIARY.git'
            },
            link: 'https://connect-app-ykav.onrender.com'
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