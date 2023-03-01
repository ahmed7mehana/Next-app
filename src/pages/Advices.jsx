import React from 'react'
import AD from 'AD.json'
function Advices() {
  return (
    <div className="SC w-full">
    <h2 className=' p-3 text-white text-center text-3xl font-bold rounded-lg rounded  uppercase'>advice</h2>
    <p className='  text-white text-center text-sm font-bold rounded-lg rounded mb-5 uppercase'>it's my thoughts so  it can be right sometimes, just think </p>
    <div >
    {AD.map((Summ)=>(
        <div className='summ mb-3 cursor-pointer hover:bg-[#2C74B3] text-white  p-2 m-auto rounded bg-[#205295]  text-center '>
        <h2 className=' available rounded-lg rounded p-2 font-bold uppercase '>{Summ.ad}</h2>

        <p className='p-4 font-bold'>{Summ.topic}</p>
        </div>
    ))}
    </div>
    
          </div>   
  )
}

export default Advices