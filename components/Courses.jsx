import Link from 'next/link';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Data from '/Data.json'
function Courses() {
console.log(Data.length)
  return (
    <div id='Courses'>
 <h2 className='text-center uppercase font-bold m-5 text-3xl text-white'>Battlefield</h2>
 
    <div className='flex flex-wrap'>
    {Data.map((item)=>(
      <Card style={{ width: '17rem' ,margin:"auto" ,background:"#144272" }} className="  mt-3 text-slate-600 mb-3   " key={item.id}>
      <div className=' relative  left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
      <Card.Img  style={{ width: '100%' ,height:"200px" }}src={item.img} />
      <Card.Body className='flex flex-col items-center'>
        <Card.Title className='text-white'>{item.title}</Card.Title>
        <Link href={item.url}  className=' hover:bg-[#2C74B3] text-[#0A2647]  !p-2 hover:font-bold   rounded bg-[#205295]   focus:bg-teal-400 w-[100px] text-center' >Start  </Link>
      </Card.Body>
      </div>
      </Card>


    ))}
    </div>
    
    </div>
  )
}

export default Courses