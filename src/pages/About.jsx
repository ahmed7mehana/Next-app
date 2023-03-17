import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";


function About() {
  const { t, i18n } = useTranslation();
  return (
    <div className='flex items-center justify-center h-screen  '>
      {/* Overlay */}
      <video autoPlay muted loop src="/video/tony.mp4" className='  bg-fixed bg-center bg-cover  ' />
      <div className='absolute top-0 left-0 right-0 bottom-0  bg-black/70 z-[2]' />

      <div className="flex flex-col  items-center justify-center  p-2 text-center w-full  text-white z-[2] absolute translate-x-[-50%]  translate-y-[-50%] left-[50%] top-[50%]">

<h2 className=" text-xl font-bold"> {t('Hi, my name is Ahmed Mehana')}</h2>
<p className="py-2 text-sm sm:text-lg mb-3 ">
{t('22years old, I am studying at the College of Agriculture, I learned programming by myself, and I made this site to help anyone who does not find good resources to develop themselves in most fields. I hope you find what you are looking for here. I have collected many courses from popular website groups such as Facebook and even YouTube channels, contact me if you want to add any resources, welcome to my website')}
  
</p>

<Link className="uppercase font-bold text-black bg-white rounded p-2 " href="https://t.me/Ahmed_mehanaa">telegram</Link>

      </div>
    </div>
  );
}

export default About;
