import Link from 'next/link';
import React from 'react';

interface Source {
  frontend?: string;
  backend?: string;
  sourceLink?: string;
}

type Props = {
  title: string;
  description: string;
  tech: string;
  source?: Source;
  link: string;
};

const ProjectCards: React.FC<Props> = (props) => {
  return (
    <article className="flex flex-col px-9 py-8 h-[29rem] max-sm:h-[29rem] max-md:h-[30rem] mx-auto w-full text-base leading-none text-white rounded-xl bg-neutral-800 max-md:px-5 max-md:mt-10">
      <h3 className="self-start text-2xl font-bold text-green-400">{props.title}</h3>
      <p className="self-start mt-3 leading-5 max-sm:text-sm">{props.description}</p>
      <div className="mt-auto">
        <div className="border-2 border-stone-700 border-solid mt-5">
          <span className="absolute -mt-3 text-zinc-200 px-1 ml-2 bg-neutral-800 text-sm">Hardware used</span>
          <div className="py-3 flex justify-center text-zinc-300 text-sm px-1.5 text-center max-sm:text-sm">
            {props.tech}
          </div>
        </div>
        <div className="flex gap-2.5 mt-5 max-sm:mt-1 max-md:mt-1 justify-center w-full whitespace-nowrap">
          {props.source?.sourceLink && (
            <div className="mt-5 w-full text-center">
              <Link target="_blank" href={props.source.sourceLink} rel="noopener noreferrer">
                <button
                  className="text-yellow-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-2 rounded-md w-[80%] hover:text-black hover:bg-yellow-500 hover:scale-110 duration-300"
                  aria-label="View Source"
                >
                  Source
                </button>
              </Link>
              {/* <span className="m-1.5"></span> */}
              {/* <Link target="_blank" href={props.link} rel="noopener noreferrer">
                <button
                  className="text-green-400 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-2 rounded-md w-[47%] hover:text-black hover:bg-green-400 hover:scale-110 duration-300"
                  aria-label="View Demo"
                >
                  Demo
                </button>
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCards;
