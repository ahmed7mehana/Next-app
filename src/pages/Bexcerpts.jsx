import React from 'react'
import BE from '/BE.json'
function Bexcerpts() {
  return (
    <div className="SC ">
    <h2 className=' p-3 text-white text-center text-3xl font-bold rounded-lg rounded mb-5 uppercase'>Books quotes</h2>
    <div >
    {BE.map((Summ)=>(
        <div className='summ mb-3 cursor-pointer hover:bg-[#2C74B3] text-white  p-2 m-auto rounded bg-[#205295]  text-center '>
        <h2 className=' available rounded-lg rounded p-2 font-bold uppercase '>{Summ.nameB}</h2>

        <p className='p-4 font-bold'>{Summ.Topic}</p>
        </div>
    ))}
    </div>
    
          </div>    
  )
}

export default Bexcerpts