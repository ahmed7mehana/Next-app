import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";


function Main() {
  const { t, i18n } = useTranslation();
  return (
    <div className='flex items-center justify-center h-screen  '>
      {/* Overlay */}
      <video autoPlay muted loop src="/video/tony.mp4" className='  bg-fixed bg-center bg-cover  ' />
      <div className='absolute top-0 left-0 right-0 bottom-0  bg-black/70 z-[2]' />
      
      <div className='flex flex-col items-center p-2 text-center text-white z-[2]  absolute translate-x-[-50%]  translate-y-[-50%] left-[50%] top-[50%] '>
      <h2 className="text-lg font-bold">{t('Remember')} </h2>
      <p className="py-5 text-sm">
  {t('If you win, you live. If you lose, you die. If you don’t fight, you can’t win')}
        <br/> 
        <span className="uppercase">{t('Sum up')}: {t('tatakae tatakae')}</span>
      </p>


        </div>
    </div>
  );
}

export default Main;


