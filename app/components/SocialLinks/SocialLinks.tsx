'use client'

import React, { useEffect, useState } from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const SocialLinks = () => {
  const [iconSize, setIconSize] = useState(50); 

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 640 ? 20 : 50);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="flex gap-8 max-sm:gap-0.5 items-start mt-16 self-start ml-32 max-md:mt-10 max-md:ml-10">
      <Link href={'https://github.com/GayalMelappilly'} target="_blank">
        <IoLogoGithub size={iconSize} className="object-contain shrink-0 aspect-[0.85] w-[39px] text-zinc-100 opacity-60 hover:opacity-100" />
      </Link>
      <Link href={'https://www.linkedin.com/in/gayal-melappilly'} target="_blank">
        <FaLinkedinIn size={iconSize} className="object-contain shrink-0 aspect-[0.85] w-[39px] text-zinc-100 opacity-60 hover:opacity-100" />
      </Link>
      <Link href={'https://x.com/GayalMelappilly'} target="_blank">
        <FaXTwitter size={iconSize} className="object-contain shrink-0 aspect-[0.85] w-[39px] text-zinc-100 opacity-60 hover:opacity-100" />
      </Link>
    </nav>
  )
}

export default SocialLinks