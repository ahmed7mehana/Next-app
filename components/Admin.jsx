import React, { useState } from 'react'
import AddCourse from './AddCourse'
import Courses from './Courses'

function Admin() {
    const[pass ,setpass]=useState()
    const[show ,setshow]=useState(false)
    const[show2 ,setshow2]=useState(false)

    const handle=(e)=>{
        e.preventDefault()
        if(pass=="0102122000") {
            setshow(!show)
        } 
    }

  return (
    <div className=' flex flex-col '>
    <input type='password' value={pass} onChange={(e)=>{setpass(e.target.value)}} className=' rounded w-[100px]'/>
    <button onClick={handle}>ok</button>
{show?(
    <AddCourse/>
):""}

    </div>
  )
}

export default Admin