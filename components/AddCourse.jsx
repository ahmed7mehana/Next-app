import React, { useState } from 'react'
import Form from './Form'

function AddCourse() {
  const [showbtn,setShowbtn]=useState(true)
  const [showform,setForm]=useState(false)

  const handleForm=()=>{
    setForm(!showform)
  }
  return (
    <div>
    {showbtn?(
      <div>
<button onClick={handleForm} className=' bg-blue-500 fixed top-[90%] right-[60px] z-50 text-white w-[50px] h-[50px] rounded-full '>add</button>
{showform?(
<Form handleForm={handleForm}/>
):""}
      </div>
    ):""}
    </div>
  )
}

export default AddCourse