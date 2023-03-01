import React from 'react'
import Link from 'next/link'
import Sc from '/Sc.json'
function SC() {
  return (
<div className="SC ">
<div >
<h2 className=' p-3 text-white text-center text-3xl font-bold rounded-lg rounded mb-5 uppercase'>summry courses</h2>
<p className='  text-white text-center text-sm font-bold rounded-lg rounded mb-5 uppercase'>I studied the courses and upload them here ( it's just my personal diligence ) </p>
{Sc.map((Summ)=>(
    <div className='summ mb-3 cursor-pointer hover:bg-[#2C74B3] text-white  p-2 m-auto rounded bg-[#205295]  text-center '>

    <div className='flex justify-between font-bold uppercase'>
    <h2 className='bg-[red] rounded-lg rounded p-1 '>{Summ.name}</h2>
    <p className=' bg-black rounded-lg rounded p-1'>{Summ.title}</p>
    </div>
    <p>{Summ.description}</p>
    <h2 className={Summ.available ==="available" ?"available m-3 p-2 rounded uppercase font-bold":"notavailable  p-2 rounded uppercase m-3 font-bold"}>
    <Link href="/" className=' text-white'> 
    {Summ.available}
    </Link>
    </h2>

    </div>
))}
</div>


      </div>
  )
}

export default SC