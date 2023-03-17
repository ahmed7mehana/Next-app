import React from 'react'
import { useTranslation } from 'react-i18next';


function Lang() {


    const { t, i18n } = useTranslation();
  return (
    <div className=' fixed top-[20%] bg-yellow-50 rounded  right-0 z-20 '>

    <div className='flex flex-col'>
    <button className='uppercase font-bold sm:text-base text-sm hover:bg-[#0A2647] hover:text-white duration-500 p-1 rounded' onClick={()=>{i18n.changeLanguage('ar')}}>AR</button>
    <button className='uppercase font-bold sm:text-base text-sm hover:bg-[#0A2647] hover:text-white duration-500 p-1 rounded' onClick={()=>{i18n.changeLanguage('en')}}>EN</button>
    
    </div>
    </div>
  )
}

export default Lang