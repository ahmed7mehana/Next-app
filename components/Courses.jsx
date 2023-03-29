import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from '/Data.json'

import { useTranslation } from "react-i18next";

function Courses() {
  const { t, i18n } = useTranslation();
  // <video controls className="w-fit h-[300px]  rounded ">
  // <source className="w-full" src="/video/4_5919388820008076285.mp4" type="video/mp4" />
  // </video>
  return (
    <div id='Courses'>
 <h2 className='text-center uppercase font-bold m-5 text-4xl text-white'>{t('Battlefield')}</h2>
 
    <div className='flex flex-wrap'>


    <div className='flex flex-col justify-center items-center mb-7 mt-7 w-full'>
    <p className="uppercase font-bold  rounded bg-white p-1 px-2 mb-3 w-full text-center text-lg  ">{t('its time to be a superior version of yourself')}</p>
    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap '>
<<<<<<< HEAD
=======

>>>>>>> 9ac1ce19815f83bb36a3f202d3c35ca74b26f507
    </div>
    </div>
    {Data.map((item)=>(
      <Card style={{ width: '11rem' ,margin:"auto" ,background:"#144272" }} className="  mt-3 text-slate-600 mb-3   " key={item.id}>
      <div className=''>
      <Card.Img  style={{ width: '100%' ,height:"130px" }}src={item.img} />
      <Card.Body className='flex flex-col items-center '>
        <Card.Title className='text-white text-center text-sm sm:text-[16px] '>{t(`${item.title}`)}</Card.Title>
        <Card.Title className=' text-amber-600 italic text-center text-sm'>{t(`${item.dec}`)}</Card.Title>
        <Link href={item.url}  className=' hover:bg-[#2C74B3] text-[#0A2647]  !p-1 hover:font-bold   rounded bg-[#205295]   focus:bg-teal-400 w-[100px] text-center' >Start  </Link>
      </Card.Body>
      </div>
      </Card>


    ))}

    </div>

 

    </div>
  )
}

export default Courses
